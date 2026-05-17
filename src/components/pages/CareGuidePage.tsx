import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Sparkles, Shield, Heart, Zap } from 'lucide-react';

export const CareGuidePage = () => {
  return (
    <>
      <SEO title="Jewelry Care Guide" description="Preserving the brilliance of your AURELIA masterpieces for generations." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-20"
        >
          <header className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Timeless Brilliance</span>
            <h1 className="text-5xl md:text-6xl font-heading tracking-tight text-white font-light">Care Guide</h1>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="md:col-span-2 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading tracking-wide uppercase text-white">Daily Preservation</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Jewelry should be the last thing you put on and the first thing you take off. Avoid contact with perfumes, hairsprays, and cosmetics which can dull the surface of stones and precious metals.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading tracking-wide uppercase text-white">Storage & Protection</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Store your AURELIA pieces in their original silk-lined boxes. Diamonds can scratch other stones and even metal, so ensure pieces do not touch one another. For travel, use our dedicated suede pouches.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-heading tracking-wide uppercase text-white">Professional Servicing</h2>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    We recommend an annual "Health Check" for your high jewelry. Our master jewelers will inspect the prongs, settings, and clasps, and provide a professional sonic cleaning to restore original luminescence.
                  </p>
                </div>
             </div>

             <div className="space-y-8">
                <div className="p-6 border border-primary/20 bg-primary/5 rounded-xl text-center">
                  <Sparkles className="mx-auto mb-4 text-primary" size={24} />
                  <h3 className="text-sm font-heading tracking-widest uppercase mb-2">Complimentary Cleaning</h3>
                  <p className="text-xs text-zinc-500 font-light lowercase">Available at all AURELIA flagships globally.</p>
                </div>
                <div className="p-6 border border-white/10 bg-white/5 rounded-xl text-center">
                  <Shield className="mx-auto mb-4 text-primary" size={24} />
                  <h3 className="text-sm font-heading tracking-widest uppercase mb-2">Lifetime Warranty</h3>
                  <p className="text-xs text-zinc-500 font-light lowercase">Against manufacturing defects in craftsmanship.</p>
                </div>
             </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
