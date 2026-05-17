import React, { useRef, useEffect } from 'react';

// CSS-transition-based magnetic effect — zero GSAP dependency, GPU composited.
export const Magnetic: React.FC<{ children: React.ReactElement, strength?: number }> = ({ children, strength = 40 }) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;

    // One-time style setup — composited transform + spring-like cubic-bezier
    element.style.willChange  = 'transform';
    element.style.transition  = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

    let rect: DOMRect | null = null;

    const onEnter = () => { rect = element.getBoundingClientRect(); };

    const mouseMove = (e: MouseEvent) => {
      if (!rect) return;
      const x = (e.clientX - (rect.left + rect.width  / 2)) * (strength / 100);
      const y = (e.clientY - (rect.top  + rect.height / 2)) * (strength / 100);
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    const mouseLeave = () => { element.style.transform = 'translate(0, 0)'; };

    element.addEventListener('mouseenter', onEnter,    { passive: true });
    element.addEventListener('mousemove',  mouseMove,  { passive: true });
    element.addEventListener('mouseleave', mouseLeave, { passive: true });

    const ro = new ResizeObserver(() => { rect = element.getBoundingClientRect(); });
    ro.observe(element);

    return () => {
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mousemove',  mouseMove);
      element.removeEventListener('mouseleave', mouseLeave);
      ro.disconnect();
    };
  }, [strength]);

  return React.cloneElement(children, { ref: magneticRef });
};
