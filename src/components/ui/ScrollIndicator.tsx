import React, { useRef, useEffect } from 'react';

// Direct scroll listener — replaces useScroll+useSpring to keep motion/react out of critical path.
export const ScrollIndicator = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100]"
      style={{ transform: 'scaleX(0)', willChange: 'transform' }}
    />
  );
};
