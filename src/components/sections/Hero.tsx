
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TITLE = "Unveiling Perfection";

// Pre-compute per-word start indices so we can derive a global char index in render.
const TITLE_WORDS = TITLE.split(" ").reduce<{ word: string; start: number }[]>(
  (acc, word) => {
    const start = acc.length === 0 ? 0 : acc[acc.length - 1].start + acc[acc.length - 1].word.length;
    acc.push({ word, start });
    return acc;
  },
  []
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef        = useRef<HTMLDivElement>(null);
  const subtitleRef  = useRef<HTMLDivElement>(null);
  const buttonsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;

      // Background parallax + scale (replaces motion useTransform)
      if (bgRef.current) {
        const yVal     = (sy / 500) * 200;
        const scaleVal = 1 + (sy / 500) * 0.1;
        bgRef.current.style.transform = `translate3d(0,${yVal}px,0) scale(${scaleVal})`;
      }

      // Subtitle scrub (replaces GSAP ScrollTrigger)
      if (subtitleRef.current) {
        const h        = containerRef.current?.offsetHeight ?? 800;
        const progress = Math.min(1, sy / h);
        subtitleRef.current.style.transform = `translate3d(0,${progress * 100}px,0)`;
        subtitleRef.current.style.opacity   = String(Math.max(0, 1 - progress));
      }

      // Buttons fade on scroll
      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = String(Math.max(0, 1 - sy / 400));
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background — parallax driven by scroll, not motion spring */}
      <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1515562141207-7a88fb7ce33e?q=80&w=1920&auto=format&fit=crop"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-diamonds-glittering-in-the-light-1925-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        {/* Subtitle — CSS fade-in, scrub handled by scroll listener above */}
        <div
          ref={subtitleRef}
          className="mb-8 hero-subtitle"
          style={{ animation: 'heroFadeIn 1s ease both', willChange: 'transform, opacity' }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-4 block">
            ESTABLISHED 1924 • HAUTE JOAILLERIE
          </span>
        </div>

        {/* Title — each char revealed by CSS @keyframes charReveal with staggered delay */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white tracking-tight leading-none mb-12 overflow-hidden flex flex-wrap justify-center">
          {TITLE_WORDS.map(({ word, start }, i) => (
            <span key={i} className="mr-4 whitespace-nowrap flex">
              {word.split("").map((char, j) => (
                <span
                  key={j}
                  className="char inline-block"
                  style={{
                    animation: 'charReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) both',
                    animationDelay: `${0.5 + (start + j) * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Body text */}
        <p
          className="text-lg md:text-xl text-white/40 max-w-2xl font-light tracking-wide mb-12"
          style={{
            animation: 'heroFadeInUp 1s ease both',
            animationDelay: '1.5s',
          }}
        >
          Discover the intersection of timeless artistry and modern elegance. Breathtaking creations crafted for the extraordinary.
        </p>

        {/* CTA buttons — opacity also driven by scroll listener */}
        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row gap-4"
          style={{
            animation: 'heroScaleIn 1s ease both',
            animationDelay: '2s',
            willChange: 'opacity',
          }}
        >
          <Button
            variant="aurora"
            className="h-14 px-10 rounded-none text-xs uppercase tracking-widest group"
          >
            Explore Collection
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="h-14 px-10 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm rounded-none text-xs uppercase tracking-widest"
          >
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Scroll indicator — CSS infinite bounce, no JS */}
      <div
        className="absolute bottom-12 left-1/2 flex flex-col items-center gap-4 text-white/30"
        style={{ animation: 'scrollBounce 2s ease infinite' }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};
