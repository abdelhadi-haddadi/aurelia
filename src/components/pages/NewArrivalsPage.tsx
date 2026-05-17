import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { ProductCard } from '../ui/ProductCard';
import { useStore } from '@/src/store/useStore';

const BADGE = 'New · 2026';

export const NewArrivalsPage = () => {
  const products = useStore((s) => s.products);

  const newArrivals = products.length
    ? products.slice().reverse()
    : [
        { id: '8', name: 'Deep Sea Sapphire Ring', price: 32000, category: 'Rings', stock: 3, image: 'https://images.unsplash.com/photo-1516934942738-999333306161?q=80&w=800&auto=format&fit=crop' },
        { id: '7', name: 'Ruby Flare Tiara', price: 120000, category: 'High Jewelry', stock: 1, image: 'https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=800&auto=format&fit=crop' },
        { id: '6', name: 'Onyx Eclipse Cufflinks', price: 1800, category: 'Accessories', stock: 60, image: 'https://images.unsplash.com/photo-1611085507264-d7ca19fa606d?q=80&w=800&auto=format&fit=crop' },
        { id: '5', name: 'Golden Solstice Studs', price: 5400, category: 'Earrings', stock: 15, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' },
      ];

  return (
    <>
      <SEO
        title="New Arrivals"
        description="Discover the latest additions to the AURELIA universe — rare stones and masterful new designs for 2026."
      />
      <div className="min-h-screen pt-40 pb-24">
        {/* Hero */}
        <div className="text-center px-6 mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground block mb-6"
          >
            {BADGE}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading tracking-tight"
          >
            New Arrivals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm font-light text-muted-foreground max-w-md mx-auto leading-relaxed"
          >
            The newest chapter of the Aurelia story — pieces that redefine what is possible in Haute Joaillerie.
          </motion.p>
        </div>

        {/* Accent line */}
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center gap-6">
          <div className="flex-1 h-[1px] bg-border" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
            {newArrivals.length} New Pieces
          </span>
          <div className="flex-1 h-[1px] bg-border" />
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Editorial footer strip */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 py-20 border-y border-border text-center px-6"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block mb-4">
            Private Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Join the Inner Circle
          </h2>
          <p className="text-sm font-light text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Members receive access to unreleased pieces and exclusive atelier events before they reach the wider world.
          </p>
        </motion.section>
      </div>
    </>
  );
};
