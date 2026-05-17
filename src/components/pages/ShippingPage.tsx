import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Truck, ShieldCheck, RefreshCcw, Globe } from 'lucide-react';

export const ShippingPage = () => {
  return (
    <>
      <SEO title="Shipping & Returns" description="White-glove delivery and secure return policies at AURELIA." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-20"
        >
          <header className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Logistics of Excellence</span>
            <h1 className="text-5xl md:text-6xl font-heading tracking-tight text-white font-light">Shipping & Returns</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
              <Truck className="text-primary mb-4" size={32} strokeWidth={1} />
              <h2 className="text-xl font-heading tracking-wide uppercase text-white">White-Glove Delivery</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Every AURELIA masterpiece is delivered via our dedicated secure courier network. We provide complimentary insured shipping worldwide, ensuring your acquisition reaches you in pristine condition.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
              <ShieldCheck className="text-primary mb-4" size={32} strokeWidth={1} />
              <h2 className="text-xl font-heading tracking-wide uppercase text-white">Full Insurance</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                From the moment a piece leaves our atelier until it is signed for by you, it is fully insured for its total value. We handle all customs and import documentation for international clients.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
              <RefreshCcw className="text-primary mb-4" size={32} strokeWidth={1} />
              <h2 className="text-xl font-heading tracking-wide uppercase text-white">Returns & Exchanges</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Collection pieces may be returned within 14 days of receipt in their original, unworn condition with all security tags intact. Please note that bespoke commissions are final and ineligible for return.
              </p>
            </div>

            <div className="space-y-6 p-8 border border-white/5 bg-white/[0.02] rounded-2xl">
              <Globe className="text-primary mb-4" size={32} strokeWidth={1} />
              <h2 className="text-xl font-heading tracking-wide uppercase text-white">International Reach</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Our concierge team coordinates deliveries to over 120 countries, working with local authorities to ensure a seamless transit of high-value goods.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
