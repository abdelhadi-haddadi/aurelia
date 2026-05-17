import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WATCHES = [
  {
    name: 'Aurelia Tempus I',
    ref: 'AU-T1-001',
    movement: 'In-house manual · 72h power reserve',
    complication: 'Tourbillon · Moon phase',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    price: 'On Request',
  },
  {
    name: 'Solstice Perpetuelle',
    ref: 'AU-SP-002',
    movement: 'In-house automatic · 60h power reserve',
    complication: 'Perpetual calendar · GMT',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop',
    price: 'On Request',
  },
  {
    name: 'Lumière Dame',
    ref: 'AU-LD-003',
    movement: 'Quartz · Haute précision',
    complication: 'Diamond-set bezel · 38mm',
    image: 'https://images.unsplash.com/photo-1611085507264-d7ca19fa606d?q=80&w=800&auto=format&fit=crop',
    price: 'On Request',
  },
];

const PILLARS = [
  { num: '100+', label: 'Unique components per movement' },
  { num: '2,000+', label: 'Hours per tourbillon' },
  { num: '5', label: 'Master watchmakers in our atelier' },
  { num: '∞', label: 'Lifetime servicing guarantee' },
];

export const WatchmakingPage = () => {
  return (
    <>
      <SEO
        title="Watchmaking"
        description="AURELIA Horlogerie — where the precision of time meets the artistry of the goldsmith. Discover our in-house timepieces."
        ogImage="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative h-[85vh] flex items-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
            alt="AURELIA Tempus I tourbillon timepiece"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground block mb-4"
            >
              Horlogerie
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-8xl font-heading tracking-tight"
            >
              The Art <br />of Time
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-heading font-light leading-relaxed"
          >
            In 1986, AURELIA established its watchmaking division — not to compete with time, but to dignify it. Every movement is conceived, assembled, and cased entirely within our Geneva manufacture.
          </motion.p>
        </section>

        {/* Numbers */}
        <section className="py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <span className="text-5xl font-heading">{p.num}</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Watch showcase */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4">
              2026 Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-heading">The Manufacture Pieces</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {WATCHES.map((w, i) => (
              <motion.div
                key={w.ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="aspect-square overflow-hidden relative mb-6">
                  <img
                    src={w.image}
                    alt={w.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[8px] uppercase tracking-widest bg-background/80 backdrop-blur-sm px-2 py-1 text-foreground">
                      {w.ref}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-heading">{w.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{w.movement}</p>
                  <p className="text-[10px] text-muted-foreground">{w.complication}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-[10px] uppercase tracking-widest">{w.price}</span>
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 text-[9px] uppercase tracking-widest hover:opacity-60 transition-opacity"
                    >
                      Enquire <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Atelier section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Geneva Manufacture
              </span>
              <h2 className="text-4xl md:text-5xl font-heading">Where Every Second is Earned</h2>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Nestled in Plan-les-Ouates, our manufacture spans three floors — one dedicated entirely to movement development, one to gem-setting, and one to quality control. No timepiece leaves without 72 hours of movement testing.
              </p>
              <Link
                to="/brand"
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group"
              >
                Discover the Maison
                <div className="w-10 h-[1px] bg-primary group-hover:w-20 transition-all" />
                <ArrowRight size={12} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1611085507264-d7ca19fa606d?q=80&w=1200&auto=format&fit=crop"
                alt="AURELIA Geneva manufacture atelier — watchmaking workshop"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-border text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block">
              Horlogerie Privée
            </span>
            <h2 className="text-4xl font-heading">Commission Your Timepiece</h2>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              We accept a maximum of twelve bespoke watch commissions per year. Each client works directly with our Directeur Horloger to shape every element — from dial design to movement complications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border border-border px-10 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Begin the Conversation
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};
