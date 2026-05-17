import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useStore } from '@/src/store/useStore';

// QueryClient is cheap and safe to keep in the critical path.
const queryClient = new QueryClient();

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const setTheme      = useStore((state) => state.setTheme);
  const currentTheme  = useStore((state) => state.theme);

  useEffect(() => {
    setTheme(currentTheme);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    let cleanup: (() => void) | undefined;

    // Defer GSAP + Lenis completely out of the critical bundle via dynamic imports.
    // By the time any below-fold section with ScrollTrigger mounts, this will have resolved.
    const setup = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (isTouchDevice) return; // Lenis degrades performance on touch devices

      const { default: Lenis } = await import('lenis');
      const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
      });

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });

      cleanup = () => { lenis.destroy(); };
    };

    setup();
    return () => { cleanup?.(); };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
