import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../ui/SEO';

const COLLECTIONS = [
  {
    id: 'high-jewelry',
    name: 'High Jewelry',
    description: 'The pinnacle of craftsmanship where rare stones meet extraordinary design.',
    image: 'https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=1200&auto=format&fit=crop',
    count: 24
  },
  {
    id: 'bespoke',
    name: 'Bespoke Creations',
    description: 'A personal journey to create a unique masterpiece tailored to your vision.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop',
    count: 'Unique'
  },
  {
    id: 'rings',
    name: 'The Ring Collection',
    description: 'Symbolic of eternity, crafted in gold, platinum, and rare diamonds.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    count: 42
  },
  {
    id: 'timepieces',
    name: 'Watchmaking',
    description: 'Precision engineering meeting artistic elegance for the wrist.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    count: 12
  }
];

export const CollectionsPage = () => {
  return (
    <>
      <SEO 
        title="Signature Collections"
        description="Discover the core collections of AURELIA. From the timeless Ring Collection to our extraordinary Watchmaking."
      />
      <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block mb-6"
        >
          Signature
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-heading tracking-tight"
        >
          The Collections
        </motion.h1>
      </div>

      <div className="flex flex-col gap-32">
        {COLLECTIONS.map((collection, i) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
          >
            <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-square overflow-hidden group cursor-all-scroll">
              <img
                src={collection.image}
                alt={collection.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{collection.count} Pieces</span>
              <h2 className="text-4xl md:text-5xl font-heading tracking-tight">{collection.name}</h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-lg">
                {collection.description}
              </p>
              <Link to="/catalog" className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group mt-4">
                Explore Collection
                <div className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all" />
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};
