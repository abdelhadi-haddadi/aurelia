
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BrandStory = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div style={{ scale, opacity }} className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none" />
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-6">Our Heritage</span>
              <h2 className="text-5xl md:text-6xl font-heading tracking-tight leading-[1.1] mb-8">
                A Legacy Crafted <br />
                <span className="italic">In Brilliance</span>
              </h2>
              <p className="text-lg font-light text-white/60 leading-relaxed max-w-lg mb-8">
                Since 1924, Aurelia has stood at the pinnacle of high jewelry. Each piece is a testament to our unwavering commitment to precision, sourcing only the rarest gemstones from across the globe.
              </p>
              <p className="text-lg font-light text-white/60 leading-relaxed max-w-lg">
                Our masters spend hundreds of hours on a single creation, ensuring that every facet tells a story of elegance that transcends time.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <h4 className="text-3xl font-heading mb-2">10k+</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Exquisite Designs</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading mb-2">15</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Global Maisons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
