import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '@/src/components/ui/ProductCard';
import { ProductDetail } from '@/src/components/ui/ProductDetail';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SEO } from '../ui/SEO';
import { useStore } from '@/src/store/useStore';

export const CatalogPage = () => {
  const { products } = useStore();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <>
      <SEO 
        title="Boutique Catalog"
        description="Browse the complete AURELIA catalog. From high jewelry rings to masterfully crafted pendants."
      />
      <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block mb-6"
        >
          Exploration
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-heading tracking-tight"
        >
          The Catalog
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center justify-between border-b border-border pb-8">
        <div className="flex gap-8 overflow-x-auto w-full lg:w-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all whitespace-nowrap ${activeCategory === cat ? 'font-bold underline underline-offset-8 text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-4 w-full lg:w-auto">
          <div className="relative flex-grow lg:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} strokeWidth={1} />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..." 
              className="pl-12 h-12 rounded-none border-border bg-muted/20 text-[10px] uppercase tracking-[0.1em]" 
            />
          </div>
          <button className="flex items-center gap-2 px-6 border border-border text-[10px] uppercase tracking-widest hover:bg-muted transition-colors">
            <SlidersHorizontal size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} onQuickView={() => setSelectedProduct(product)} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-muted-foreground font-light italic">No creations found matching your search.</p>
        </div>
      )}

      <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
    </>
  );
};
