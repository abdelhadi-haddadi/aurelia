import React, { useEffect, useRef } from 'react';

// Zero-GSAP cursor. Uses CSS individual transform properties (translate, scale)
// so each axis can transition independently without overwriting the other.
export const CursorTrail = () => {
    const cursorRef   = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const ringRef     = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor   = cursorRef.current;
        const follower = followerRef.current;
        const ring     = ringRef.current;
        if (!cursor || !follower || !ring) return;

        const moveCursor = (e: MouseEvent) => {
            const t = `${e.clientX}px ${e.clientY}px`;
            cursor.style.translate   = t;
            follower.style.translate = t;
            ring.style.translate     = t;
        };

        // Scale/opacity changes via direct style — CSS transitions handle smoothing
        const handleMouseDown  = () => { cursor.style.scale = '0.8'; follower.style.scale = '0.8'; ring.style.scale = '1.5'; };
        const handleMouseUp    = () => { cursor.style.scale = '1';   follower.style.scale = '1';   ring.style.scale = '1';   };
        const handleMouseLeave = () => { cursor.style.opacity = '0'; follower.style.opacity = '0'; ring.style.opacity = '0'; };
        const handleMouseEnter = () => { cursor.style.opacity = '1'; follower.style.opacity = '1'; ring.style.opacity = '1'; };

        window.addEventListener('mousemove',    moveCursor,       { passive: true });
        window.addEventListener('mousedown',    handleMouseDown,  { passive: true });
        window.addEventListener('mouseup',      handleMouseUp,    { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

        return () => {
            window.removeEventListener('mousemove',    moveCursor);
            window.removeEventListener('mousedown',    handleMouseDown);
            window.removeEventListener('mouseup',      handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Dot — instant translate, smooth scale/opacity */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -ml-[0.1875rem] -mt-[0.1875rem] mix-blend-difference"
                style={{ willChange: 'translate, scale, opacity', transition: 'scale 0.2s ease, opacity 0.3s ease' }}
            />
            {/* Follower — CSS-transition lag on translate, GPU composited */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-4 h-4 border border-white/30 rounded-full -ml-2 -mt-2 mix-blend-difference"
                style={{ willChange: 'translate, scale, opacity', transition: 'translate 0.5s cubic-bezier(0.16, 1, 0.3, 1), scale 0.2s ease, opacity 0.3s ease' }}
            />
            {/* Ring aura — more lag */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-12 h-12 bg-primary/5 blur-xl rounded-full -ml-6 -mt-6 pointer-events-none"
                style={{ willChange: 'translate, scale, opacity', transition: 'translate 0.8s cubic-bezier(0.16, 1, 0.3, 1), scale 0.3s ease, opacity 0.3s ease' }}
            />
        </div>
    );
};
