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

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            
            // Immediate cursor
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            // Delayed smooth follower
            gsap.to(follower, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: 'power3.out'
            });

            // Larger outer ring with more lag
            gsap.to(ring, {
                x: clientX,
                y: clientY,
                duration: 0.8,
                ease: 'expo.out'
            });
        };

        const handleMouseDown = () => {
             gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
             gsap.to(ring, { scale: 1.5, duration: 0.3 });
        };

        const handleMouseUp = () => {
             gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
             gsap.to(ring, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Hide cursor when it leaves the window
        document.addEventListener('mouseleave', () => {
            gsap.to([cursor, follower, ring], { opacity: 0, duration: 0.3 });
        });
        document.addEventListener('mouseenter', () => {
            gsap.to([cursor, follower, ring], { opacity: 1, duration: 0.3 });
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Real Cursor dot */}
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -ml-[0.1875rem] -mt-[0.1875rem] mix-blend-difference"
            />
            {/* Smooth Follower dot */}
            <div 
                ref={followerRef}
                className="fixed top-0 left-0 w-4 h-4 border border-white/30 rounded-full -ml-2 -mt-2 mix-blend-difference"
            />
            {/* Delayed Ring / Aura */}
            <div 
                ref={ringRef}
                className="fixed top-0 left-0 w-12 h-12 bg-primary/5 blur-xl rounded-full -ml-6 -mt-6 pointer-events-none"
            />
        </div>
    );
};
