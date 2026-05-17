import React from 'react';
import { HorizontalScroll } from '@/src/components/ui/HorizontalScroll';
import { motion } from 'framer-motion';

export const Craftsmanship = () => {
  return (
    <HorizontalScroll title="The Process">
      <div className="h-screen w-screen flex flex-col items-center justify-center px-12 bg-black">
        <h2 className="text-8xl md:text-[15rem] font-heading text-white/5 uppercase tracking-tighter absolute">Artistry</h2>
        <div className="relative z-10 text-center max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 block">Step 01</span>
          <h3 className="text-5xl font-heading text-white mb-6">Ethical Selection</h3>
          <p className="text-white/40 font-light leading-relaxed">We travel to the furthest corners of the earth to source only the most exceptional, conflict-free gemstones that meet our stringent standards of clarity and fire.</p>
        </div>
      </div>

      <div className="h-screen w-screen flex items-center justify-center px-12 bg-zinc-950">
        <h2 className="text-8xl md:text-[15rem] font-heading text-white/5 uppercase tracking-tighter absolute">Vision</h2>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-square bg-muted/10 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="AURELIA design sketch and gemstone selection process" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 block">Step 02</span>
            <h3 className="text-5xl font-heading text-white mb-6">The Aurelia Cut</h3>
            <p className="text-white/40 font-light leading-relaxed">Our designers work in tandem with master lapidaries to define cuts that go beyond brilliance—favoring unique geometric ratios that define the Maison's modern aesthetic.</p>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen flex flex-col items-center justify-center px-12 bg-black">
         <h2 className="text-8xl md:text-[15rem] font-heading text-white/5 uppercase tracking-tighter absolute">Creation</h2>
         <div className="relative z-10 text-center max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8 block">Step 03</span>
          <h3 className="text-5xl font-heading text-white mb-6">Invisible Setting</h3>
          <p className="text-white/40 font-light leading-relaxed">Utilizing centuries-old secrets and aerospace-grade precision, stones are set with zero visible metal, creating a sea of pure, uninterrupted light.</p>
        </div>
      </div>

      <div className="h-screen w-screen flex items-center justify-center px-12 bg-zinc-900">
         <div className="text-center">
            <h3 className="text-8xl font-heading text-white mb-12">The Zenith</h3>
            <button className="text-[10px] uppercase tracking-[0.5em] text-white border border-white/20 px-12 py-6 hover:bg-white hover:text-black transition-all">Request a Private Presentation</button>
         </div>
      </div>
    </HorizontalScroll>
  );
};
