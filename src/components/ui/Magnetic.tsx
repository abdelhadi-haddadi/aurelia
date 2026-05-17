import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export const Magnetic: React.FC<{ children: React.ReactElement, strength?: number }> = ({ children, strength = 40 }) => {
    const magneticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticRef.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * (strength / 100));
            yTo(y * (strength / 100));
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const element = magneticRef.current;
        element?.addEventListener("mousemove", mouseMove);
        element?.addEventListener("mouseleave", mouseLeave);

        return () => {
            element?.removeEventListener("mousemove", mouseMove);
            element?.removeEventListener("mouseleave", mouseLeave);
        };
    }, [strength]);

    return React.cloneElement(children, { ref: magneticRef });
};
