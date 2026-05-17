
import React from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '@/src/components/ui/ProductCard';
import { ProductDetail } from '@/src/components/ui/ProductDetail';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const COLLECTIONS_DATA: Product[] = [
  {
    id: '1',
    name: "Celestial Black Diamond Ring",
    price: 12500,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '2',
    name: "Royal Emerald Pendulum",
    price: 45000,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-51de4ffbc303?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '3',
    name: "Moonlight Pearl Cascade",
    price: 8900,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: '4',
    name: "Starlight Silver Bangle",
    price: 3200,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
  }
];

export const Collections = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading tracking-tight"
            >
              Featured Masterpieces
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4 border-b border-border pb-2"
          >
            {['All', 'Diamonds', 'Emeralds', 'Gold', 'Silver'].map((tab) => (
              <button key={tab} className="text-[10px] uppercase tracking-widest hover:opacity-60 transition-opacity px-4">
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {COLLECTIONS_DATA.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
