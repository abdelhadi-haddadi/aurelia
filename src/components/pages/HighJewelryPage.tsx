import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/src/store/useStore';

const EDITORIAL_PIECES = [
  {
    name: 'La Constellation',
    subtitle: 'Diamond & Platinum Suite',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=1200&auto=format&fit=crop',
    stones: '87 D-FL diamonds · 18.4 carats total',
  },
  {
    name: 'L\'Éternité',
    subtitle: 'Burmese Ruby Necklace',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1599643477877-51de4ffbc303?q=80&w=1200&auto=format&fit=crop',
    stones: 'Unheated Burmese ruby · 24.7 carats',
  },
  {
    name: 'Le Solstice',
    subtitle: 'Imperial Topaz Parure',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    stones: 'Brazilian imperial topaz · 38 carats',
  },
];

export const HighJewelryPage = () => {
  const products = useStore((s) => s.products);
  const highJewelry = products.filter((p) => p.category === 'High Jewelry');

  return (
    <>
      <SEO
        title="High Jewelry"
        description="AURELIA Haute Joaillerie — rare stones of incomparable beauty, set by hands that have dedicated lifetimes to their craft."
        ogImage="https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=1200&auto=format&fit=crop"
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Immersive Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=1600&auto=format&fit=crop"
            alt="AURELIA Haute Joaillerie — rare diamond necklace"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
          <div className="relative z-10 text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[1em] text-muted-foreground block mb-8"
            >
              Haute Joaillerie
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="text-7xl md:text-[10rem] font-heading tracking-widest leading-none"
            >
              HIGH
              <br />
              JEWELRY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm font-light text-muted-foreground max-w-md mx-auto leading-relaxed"
            >
              Each piece is a singular event — never to be repeated. Created for those who understand that true luxury is rarity itself.
            </motion.p>
          </div>
        </section>

        {/* Philosophy quote */}
        <section className="py-28 px-6 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-light leading-relaxed"
          >
            "There are perhaps fifty stones in the world worthy of Aurelia's atelier. We search a lifetime to find each one."
          </motion.p>
          <div className="w-12 h-[1px] bg-border mx-auto mt-10" />
          <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground">
            — Directeur Artistique, AURELIA
          </p>
        </section>

        {/* Editorial showcase */}
        <section className="py-16 px-6 max-w-7xl mx-auto space-y-32">
          <div className="text-center mb-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              The 2026 High Jewelry Collection
            </span>
          </div>

          {EDITORIAL_PIECES.map((piece, i) => (
            <motion.div
              key={piece.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden group relative">
                <img
                  src={piece.image}
                  alt={piece.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[9px] uppercase tracking-[0.5em] text-muted-foreground">
                  {piece.stones}
                </span>
                <h2 className="text-5xl md:text-6xl font-heading">{piece.name}</h2>
                <p className="text-sm font-light text-muted-foreground">{piece.subtitle}</p>
                <div className="w-12 h-[1px] bg-border" />
                <p className="text-xs uppercase tracking-[0.4em]">{piece.price}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group mt-4"
                >
                  Enquire
                  <div className="w-8 h-[1px] bg-primary group-hover:w-16 transition-all" />
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Catalog link if there are high-jewelry products in store */}
        {highJewelry.length > 0 && (
          <section className="py-20 px-6 max-w-7xl mx-auto border-t border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading">Available Pieces</h3>
              <Link to="/catalog" className="text-[10px] uppercase tracking-widest flex items-center gap-2 hover:opacity-60 transition-opacity">
                Full Catalog <ArrowRight size={12} />
              </Link>
            </div>
          </section>
        )}

        {/* Private viewing CTA */}
        <section className="py-32 px-6 border-t border-border text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block">
              By Appointment Only
            </span>
            <h2 className="text-4xl font-heading">Request a Private Viewing</h2>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              High Jewelry pieces are never displayed publicly. A dedicated member of our team will arrange an exclusive unveiling at our Paris salon or your preferred location.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border border-border px-10 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Request Appointment
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};
