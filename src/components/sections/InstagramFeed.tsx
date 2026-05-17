
import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const INSTA_IMAGES = [
  { src: "https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=600&auto=format&fit=crop", alt: "AURELIA high jewelry diamond necklace" },
  { src: "https://images.unsplash.com/photo-1516934942738-999333306161?q=80&w=600&auto=format&fit=crop", alt: "AURELIA sapphire ring close-up" },
  { src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop", alt: "AURELIA pearl earring detail" },
  { src: "https://images.unsplash.com/photo-1599643478123-53d7107777ca?q=80&w=600&auto=format&fit=crop", alt: "AURELIA gold bangle on wrist" },
  { src: "https://images.unsplash.com/photo-1611085382025-a49e6f366627?q=80&w=600&auto=format&fit=crop", alt: "AURELIA diamond bracelet lifestyle" },
  { src: "https://images.unsplash.com/photo-1611085507264-d7ca19fa606d?q=80&w=600&auto=format&fit=crop", alt: "AURELIA luxury watch detail" },
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4"
          >
            The #AURELIA World
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading tracking-tight"
          >
            Share Your Journey
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {INSTA_IMAGES.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              aria-label={`View on Instagram: ${item.alt}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img src={item.src} alt={item.alt} width={600} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div aria-hidden="true" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} strokeWidth={1} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
