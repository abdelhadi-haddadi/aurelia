import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Magnetic: React.FC<{ children: React.ReactElement, strength?: number }> = ({ children, strength = 40 }) => {
    const magneticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        // Cache rect on mouseenter — eliminates forced layout recalc on every mousemove
        let rect: DOMRect | null = null;

        const onEnter = () => {
            rect = magneticRef.current?.getBoundingClientRect() ?? null;
        };

        const mouseMove = (e: MouseEvent) => {
            if (!rect) return;
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            xTo(x * (strength / 100));
            yTo(y * (strength / 100));
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const element = magneticRef.current;
        element?.addEventListener('mouseenter', onEnter, { passive: true });
        element?.addEventListener('mousemove', mouseMove, { passive: true });
        element?.addEventListener('mouseleave', mouseLeave, { passive: true });

        // Keep rect fresh on resize
        const ro = new ResizeObserver(() => {
            if (element) rect = element.getBoundingClientRect();
        });
        if (element) ro.observe(element);

        return () => {
            element?.removeEventListener('mouseenter', onEnter);
            element?.removeEventListener('mousemove', mouseMove);
            element?.removeEventListener('mouseleave', mouseLeave);
            ro.disconnect();
        };
    }, [strength]);

    return React.cloneElement(children, { ref: magneticRef });
};
