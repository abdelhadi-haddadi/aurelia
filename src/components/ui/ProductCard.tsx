
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { useStore } from '@/src/store/useStore';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard: React.FC<{ product: Product, onQuickView?: () => void }> = ({ product, onQuickView }) => {
  const addToCart = useStore((state) => state.addToCart);
  const setQuickViewProduct = useStore((state) => state.setQuickViewProduct);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ ...product, quantity: 1 });
            }}
            className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full shadow-xl"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              if (onQuickView) onQuickView();
              else setQuickViewProduct(product as any);
            }}
            className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full shadow-xl"
          >
            <Eye size={18} strokeWidth={1.5} />
          </motion.button>
        </div>

        <button className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <Heart size={20} strokeWidth={1} />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-lg group-hover:opacity-60 transition-opacity tracking-tight hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
        </Link>
        <p className="text-sm font-light tracking-wide">${product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};
