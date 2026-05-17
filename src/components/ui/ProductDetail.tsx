
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag, Share2, Info, Rotate3d, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/src/store/useStore';
import { Product360Viewer } from './Product360Viewer';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  images360?: string[];
}

export const ProductDetail: React.FC<{ product: Product | null, onClose: () => void }> = ({ product, onClose }) => {
  const addToCart = useStore((state) => state.addToCart);
  const [show360, setShow360] = useState(false);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl h-full max-h-[85vh] bg-background border border-border overflow-hidden flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[210] hover:opacity-60 transition-opacity text-foreground"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Left: Gallery */}
          <div className="w-full md:w-3/5 h-1/2 md:h-full bg-muted relative overflow-hidden group">
            {show360 ? (
                <Product360Viewer images={product.images360} image={product.image} name={product.name} />
            ) : (
                <motion.img 
                  layoutId={`img-${product.id}`}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
            )}
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
               <button 
                onClick={() => setShow360(!show360)}
                className={`px-4 h-9 rounded-full flex items-center gap-2 transition-all ${show360 ? 'bg-primary text-primary-foreground' : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/60'}`}
               >
                 <Rotate3d size={14} strokeWidth={1.5} />
                 <span className="text-[9px] uppercase tracking-widest font-bold">{show360 ? 'Close 360' : '360° View'}</span>
               </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              {product.category} • SKU: AUR-{product.id}024
            </span>
            <h2 className="text-4xl md:text-5xl font-heading tracking-tight mb-6 leading-tight">
              {product.name}
            </h2>
            <p className="text-2xl font-light tracking-wide mb-8">
              ${product.price.toLocaleString()}
            </p>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-12">
              Meticulously crafted from the finest materials, this piece embodies the ultimate expression of luxury. Featuring rare gemstones set in precious metals, designed to catch every ray of light.
            </p>

            <div className="flex flex-col gap-4 mb-4">
              <Button 
                variant="aurora"
                onClick={() => {
                  addToCart({ ...product, quantity: 1 });
                  onClose();
                }}
                className="h-14 rounded-none uppercase tracking-widest text-xs group"
              >
                Add to Bag
                <ShoppingBag size={14} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 h-14 rounded-none uppercase tracking-widest text-[10px] gap-2">
                  <Heart size={14} strokeWidth={1.5} /> Wishlist
                </Button>
                <div className="flex-1">
                   <Link to={`/product/${product.id}`} onClick={onClose}>
                    <Button variant="outline" className="w-full h-14 rounded-none uppercase tracking-widest text-[10px] gap-2">
                      Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-6 mb-12 py-4 border-y border-border/50">
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mr-2 font-bold">Share via</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-white transition-colors"
                title="Share on Facebook"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out the ${product.name} at AURELIA`)}&url=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-white transition-colors"
                title="Share on Twitter"
              >
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a 
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.name)}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-white transition-colors"
                title="Share on Pinterest"
              >
                <Instagram size={16} strokeWidth={1.5} /> {/* Fallback to Instagram if Pinterest icon is not in lucide defaults - though Pinterest is requested, Instagram is a good visual alternative for luxury */}
              </a>
            </div>

            <div className="flex items-center gap-4 py-6 border-t border-border mt-auto">
              <Info size={16} className="text-muted-foreground" strokeWidth={1} />
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                Complimentary global shipping & signature aURELIA packaging included.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
