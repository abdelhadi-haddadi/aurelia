import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';

export const TermsPage = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Terms and conditions for AURELIA Maison de Haute Joaillerie." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Agreement</span>
            <h1 className="text-5xl md:text-6xl font-heading tracking-tight">Terms of Service</h1>
          </header>

          <section className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-light leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">1. General Provisions</h2>
              <p>Access to and use of the AURELIA website and services are subject to these terms. By engaging with our Maison, you agree to comply with all stated conditions.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">2. Intellectual Property</h2>
              <p>All designs, imagery, and text on this platform are the exclusive intellectual property of AURELIA. Unauthorized reproduction or use is strictly prohibited.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">3. Bespoke Orders</h2>
              <p>Custom and bespoke creations are subject to specific commissions. Due to their unique nature, these items are final sale and cannot be returned or exchanged.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">4. Ethical Sourcing</h2>
              <p>AURELIA guarantees that all stones are ethically sourced in compliance with international standards. Certificates of authenticity are provided with each masterpiece.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">5. Liability</h2>
              <p>AURELIA's liability for any product sold is strictly limited to the purchase price of said product.</p>
            </div>
            
            <p className="pt-12 text-[10px] uppercase tracking-widest italic">Effective Date: May 2026</p>
          </section>
        </motion.div>
      </div>
    </>
  );
};
