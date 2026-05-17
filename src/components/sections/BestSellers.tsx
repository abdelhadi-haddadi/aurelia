import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProductCard } from '../ui/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/src/store/useStore';

export const BestSellers = () => {
  const { products } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Take the first 5 products or products marked as best sellers (if we add that field later)
  const bestSellers = products.slice(0, 5);

  return (
    <section className="py-24 bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
        <div>
           <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4 italic">Highly Coveted</span>
           <h2 className="text-4xl font-heading tracking-tight">The Best Sellers</h2>
        </div>
        <Link to="/catalog" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
           See All Catalog <ArrowRight size={14} />
        </Link>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-[calc((100vw-min(1280px,100vw-3rem))/2)] pb-12 no-scrollbar snap-x snap-mandatory"
      >
        {bestSellers.map((product) => (
          <motion.div 
            key={product.id} 
            className="w-[300px] md:w-[400px] shrink-0 snap-center"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
        {/* Placeholder for "View All" card at the end */}
        <div className="w-[300px] md:w-[400px] shrink-0 snap-center flex items-center justify-center border border-border/50 bg-muted/5">
           <Link to="/catalog" className="flex flex-col items-center gap-6 group">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                 <ArrowRight size={24} strokeWidth={1} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
           </Link>
        </div>
      </div>
    </section>
  );
};
