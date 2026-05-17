import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';

export const CookiePolicyPage = () => {
  return (
    <>
      <SEO title="Cookie Settings & Policy" description="How AURELIA uses cookies to enhance your experience." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Digital Experience</span>
            <h1 className="text-5xl md:text-6xl font-heading tracking-tight">Cookie Policy</h1>
          </header>

          <section className="prose prose-invert max-w-none space-y-8 text-zinc-400 font-light leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-white font-heading text-2xl tracking-wide uppercase">About Our Cookies</h2>
              <p>We use cookies and similar technologies to understand how you interact with our Maison digitally, ensuring a seamless and personalized experience.</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border border-white/10 bg-white/5 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-heading text-lg">Essential Cookies</h3>
                  <span className="text-[9px] uppercase tracking-widest px-2 py-1 bg-primary/20 text-primary rounded">Always Active</span>
                </div>
                <p className="text-sm">Necessary for the website to function, such as maintaining your boutique cart and secure login states.</p>
              </div>

              <div className="p-6 border border-white/10 bg-white/5 rounded-lg space-y-4 opacity-70">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-heading text-lg">Analytics Cookies</h3>
                  <button className="text-[9px] uppercase tracking-widest px-4 py-2 border border-white/20 hover:border-white transition-colors">Enabled</button>
                </div>
                <p className="text-sm">Help us understand which collections resonate most with our clients, allowing us to refine our presentation.</p>
              </div>

              <div className="p-6 border border-white/10 bg-white/5 rounded-lg space-y-4 opacity-70">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-heading text-lg">Personalization Cookies</h3>
                  <button className="text-[9px] uppercase tracking-widest px-4 py-2 border border-white/20 hover:border-white transition-colors">Enabled</button>
                </div>
                <p className="text-sm">Allow us to remember your preferences, such as language and region, for your next visit.</p>
              </div>
            </div>

            <div className="space-y-4 pt-12 text-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold">Save Settings</button>
              <p className="text-xs italic pt-4">Your choices will be preserved for 365 days.</p>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};
