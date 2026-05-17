import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CursorTrail = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        const ring = ringRef.current;

        if (!cursor || !follower || !ring) return;

        // Direct style.transform instead of GSAP — zero JS cost per frame on main thread
        // CSS transitions on follower/ring handle the smooth lag entirely in the compositor
        const moveCursor = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate(${x}px, ${y}px)`;
            follower.style.transform = `translate(${x}px, ${y}px)`;
            ring.style.transform = `translate(${x}px, ${y}px)`;
        };

        // GSAP only for infrequent click/enter/leave events — not per frame
        const handleMouseDown = () => {
            gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
            gsap.to(ring, { scale: 1.5, duration: 0.3 });
        };
        const handleMouseUp = () => {
            gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
            gsap.to(ring, { scale: 1, duration: 0.3 });
        };
        const handleMouseLeave = () => {
            gsap.to([cursor, follower, ring], { opacity: 0, duration: 0.3 });
        };
        const handleMouseEnter = () => {
            gsap.to([cursor, follower, ring], { opacity: 1, duration: 0.3 });
        };

        // passive: true lets browser scroll/paint without waiting for these handlers
        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mousedown', handleMouseDown, { passive: true });
        window.addEventListener('mouseup', handleMouseUp, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Dot — instant, no transition */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -ml-[0.1875rem] -mt-[0.1875rem] mix-blend-difference"
                style={{ willChange: 'transform' }}
            />
            {/* Follower — lag via CSS transition, compositor-only, zero JS */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-4 h-4 border border-white/30 rounded-full -ml-2 -mt-2 mix-blend-difference"
                style={{ willChange: 'transform', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
            {/* Ring aura — more lag via CSS transition */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-12 h-12 bg-primary/5 blur-xl rounded-full -ml-6 -mt-6 pointer-events-none"
                style={{ willChange: 'transform', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
        </div>
    );
};
