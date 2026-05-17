import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';

export const PrivacyPage = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="AURELIA's commitment to your privacy and data security." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Compliance & Security</span>
            <h1 className="text-5xl md:text-6xl font-heading tracking-tight">Privacy Policy</h1>
          </header>

          <section className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-light leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">1. Commitment to Privacy</h2>
              <p>At AURELIA, we hold the privacy of our clients in the highest regard. This policy outlines how we collect, use, and protect your personal information when you engage with our Maison.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">2. Information Collection</h2>
              <p>We collect information necessary to provide an exceptional luxury experience, including contact details provided during acquisition, preferences for bespoke creations, and browsing behavior on our platform.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">3. Data Usage</h2>
              <p>Your data is used exclusively to fulfill orders, provide personalized styling services, and communicate Maison news of interest. We never sell or share your data with third parties for marketing purposes.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">4. Security Measures</h2>
              <p>We employ enterprise-grade encryption and security protocols to ensure your sensitive information remains confidential and protected from unauthorized access.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">5. Your Rights</h2>
              <p>Clients retain the right to access, rectify, or request the deletion of their personal information at any time through our digital concierge.</p>
            </div>
            
            <p className="pt-12 text-[10px] uppercase tracking-widest italic">Last Updated: May 2026</p>
          </section>
        </motion.div>
      </div>
    </>
  );
};
