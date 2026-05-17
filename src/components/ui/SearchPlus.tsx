import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, History, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useStore } from '@/src/store/useStore';

interface SearchPlusProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPlus: React.FC<SearchPlusProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { products } = useStore();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => new Fuse(products, {
    keys: ['name', 'category'],
    threshold: 0.3,
  }), [products]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      
      if (results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
        }
        if (e.key === 'Enter' && selectedIndex >= 0) {
          handleSelect(results[selectedIndex].id);
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, results, selectedIndex]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(-1);
    if (query.trim()) {
      const searchResults = fuse.search(query).map(r => r.item);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  const handleSelect = (id: string) => {
    navigate(`/product/${id}`);
    onClose();
  };

  const recentSearches = ["Royal Emerald", "Diamond Ring", "Necklaces"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="search-portal" className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6 md:px-0">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl search-overlay"
          />

          {/* Search Container */}
          <motion.div 
            ref={modalRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden relative z-10 shadow-[0_0_100px_rgba(255,255,255,0.05)] search-content-inner"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center gap-4">
              <Search className="text-muted-foreground" size={24} strokeWidth={1.5} />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for masterpieces..."
                className="flex-1 bg-transparent border-none outline-none text-xl font-light tracking-widest text-white placeholder:text-neutral-600"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-muted-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {query.trim() === '' ? (
                <div className="p-4 space-y-8">
                  <section>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-bold flex items-center gap-2">
                       <Sparkles size={12} className="text-primary" /> Curated Suggestions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products.slice(0, 2).map(product => (
                        <button 
                          key={product.id}
                          onClick={() => handleSelect(product.id)}
                          className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group search-item"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium tracking-wide">{product.name}</p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{product.category}</p>
                          </div>
                          <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-bold flex items-center gap-2">
                       <History size={12} /> Recent Explorations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map(term => (
                        <button 
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-xs tracking-widest search-item"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2 p-2">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 px-2 font-bold">
                    Discoveries ({results.length})
                  </h3>
                  {results.map((product, idx) => (
                    <button 
                      key={product.id}
                      onClick={() => handleSelect(product.id)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group search-item ${selectedIndex === idx ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm tracking-wide font-medium">{product.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">${product.price.toLocaleString()}</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-20 text-center animate-pulse">
                  <p className="text-muted-foreground text-sm tracking-widest uppercase italic">No masterpieces matched your request</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-black/40 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
               <span>ESC TO CLOSE</span>
               <div className="flex gap-4">
                  <span>ENTER TO SELECT</span>
                  <span>ARROWS TO NAVIGATE</span>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
