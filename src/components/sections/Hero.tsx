
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll('.char');
        gsap.from(chars, {
          y: 100,
          opacity: 0,
          stagger: 0.05,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.5
        });
      }

      gsap.to(".hero-subtitle", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 100,
        opacity: 0
      });
    });

    return () => ctx.revert();
  }, []);

  const title = "Unveiling Perfection";

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Cinematic Video */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-diamonds-glittering-in-the-light-1925-large.mp4" type="video/mp4" />
          <img 
            ref={imageRef}
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce33e?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Jewelry"
            className="w-full h-full object-cover opacity-80"
          />
        </video>
      </motion.div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 hero-subtitle"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-4 block">
            ESTABLISHED 1924 • HAUTE JOAILLERIE
          </span>
        </motion.div>

        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-heading text-white tracking-tight leading-none mb-12 overflow-hidden flex flex-wrap justify-center"
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="mr-4 whitespace-nowrap flex">
              {word.split("").map((char, j) => (
                <span key={j} className="char inline-block">{char}</span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-lg md:text-xl text-white/40 max-w-2xl font-light tracking-wide mb-12"
        >
          Discover the intersection of timeless artistry and modern elegance. Breathtaking creations crafted for the extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ opacity }}
          className="flex flex-col md:flex-row gap-4"
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
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -distance-x-1/2 flex flex-col items-center gap-4 text-white/30"
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
