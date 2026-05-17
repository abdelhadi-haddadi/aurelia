import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Gem, Pencil, Eye, Award } from 'lucide-react';

const STEPS = [
  {
    icon: Eye,
    step: '01',
    title: 'The Vision',
    desc: 'We begin with a private consultation — in our Paris atelier or via a dedicated video session — to understand your aspirations, occasion, and aesthetic sensibility.',
  },
  {
    icon: Pencil,
    step: '02',
    title: 'The Design',
    desc: 'Our master craftsmen translate your story into hand-drawn renderings and 3D renderings, iterating until every proportion and detail resonates.',
  },
  {
    icon: Gem,
    step: '03',
    title: 'The Stones',
    desc: 'We travel the world to source the perfect raw gemstones — presented to you with full provenance and GIA certification before a single cut is made.',
  },
  {
    icon: Award,
    step: '04',
    title: 'The Creation',
    desc: 'The piece is hand-set by our atelier over weeks or months, and delivered in an engraved AURELIA case with a lifetime warranty and care passport.',
  },
];

export const BespokeServicesPage = () => {
  return (
    <>
      <SEO
        title="Bespoke Services"
        description="Commission a one-of-a-kind AURELIA masterpiece. Our bespoke service transforms your vision into a timeless jewel."
        ogImage="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop"
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative h-[75vh] flex items-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1600&auto=format&fit=crop"
            alt="AURELIA master craftsman working in the Paris bespoke atelier"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground block mb-4"
            >
              Commission
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-heading tracking-tight"
            >
              Bespoke <br />Services
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-heading font-light leading-relaxed"
          >
            "A bespoke jewel is not bought — it is born. Every line, every stone, every gram of metal is an expression of the person who wears it."
          </motion.p>
          <div className="w-12 h-[1px] bg-border mx-auto mt-10" />
        </section>

        {/* Process Steps */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading">From Concept to Creation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.step}</span>
                  <div className="flex-1 h-[1px] bg-border" />
                  <s.icon size={18} strokeWidth={1} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading">{s.title}</h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-border text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground block">
              Begin Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-heading">Request a Private Consultation</h2>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Our Bespoke team is available by appointment. We work with a limited number of commissions each season to ensure absolute dedication to each client.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border border-border px-10 py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Contact the Atelier
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
};
