import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';

export const TheBrandPage = () => {
  return (
    <>
      <SEO 
        title="Our Maison Heritage" 
        description="Discover the history, philosophy, and ethical craftsmanship of AURELIA. Maison de Haute Joaillerie since 1924." 
      />
      <div className="min-h-screen bg-black text-white">
      {/* Immersive Brand Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-woman-wearing-a-diamond-necklace-4414-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        
        <div className="relative text-center z-10 px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[1em] opacity-60 mb-6 block"
          >
            Since 1924
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'expo.out' }}
            className="text-7xl md:text-9xl font-heading tracking-widest"
          >
            AURELIA
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-heading leading-tight tracking-tight mb-16"
        >
          "We do not merely create jewelry; we capture the transient beauty of light and crystallize it for eternity."
        </motion.p>
        <div className="w-16 h-[1px] bg-white/20 mx-auto" />
      </section>

      {/* Origins */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 block mb-8">Heritage</span>
            <h2 className="text-5xl font-heading mb-12">The Parisian <br />Foundations</h2>
            <p className="text-lg font-light text-white/50 leading-relaxed max-h-lg">
              Born in the heart of the Place Vendôme, Aurelia began as a small atelier dedicated to the preservation of classical gem-setting techniques. Our founder, Marcelle de Aurelia, believed that every diamond possessed a soul waiting to be revealed through the precise dance of shadow and brilliance.
            </p>
          </div>
          <div className="aspect-square bg-muted relative overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale"
               alt="Parisian Atelier"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: 'The Source', desc: 'We directly control our supply chain, ensuring ethical sourcing of the rarest conflict-free diamonds globally.' },
            { title: 'The Cut', desc: 'Our master lapidaries spend years perfecting the signature Aurelia-Cut, maximizing internal fire.' },
            { title: 'The Setting', desc: 'Utilizing micro-pave and invisible setting techniques that make the metal disappear beneath the stones.' }
          ].map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.2 }}
               className="text-center"
            >
              <h3 className="text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">{item.title}</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};
