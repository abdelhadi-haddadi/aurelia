import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../ui/SEO';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <>
      <SEO title="Concierge & Contact" description="Connect with the AURELIA concierge team for acquisitions and bespoke inquiries." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="grid grid-cols-1 lg:grid-cols-2 gap-24"
        >
          <div className="space-y-12">
            <header>
              <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Direct Access</span>
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight text-white font-light">Concierge</h1>
              <p className="mt-8 text-zinc-400 font-light leading-relaxed max-w-md">
                Our advisors are available to assist you with worldwide acquisitions, private viewings, and bespoke commissions.
              </p>
            </header>

            <div className="space-y-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Global Private Line</h4>
                  <p className="text-white font-light">+33 (0) 1 84 25 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Digital Inquiries</h4>
                  <p className="text-white font-light">concierge@aurelia-jewelry.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Flagship Maison</h4>
                  <p className="text-white font-light italic">Place Vendôme, Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <form className="relative space-y-8 p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label htmlFor="contact-first-name" className="text-[10px] uppercase tracking-widest text-zinc-500">First Name</label>
                      <input id="contact-first-name" type="text" autoComplete="given-name" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-primary outline-none transition-colors text-white font-light" />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="contact-last-name" className="text-[10px] uppercase tracking-widest text-zinc-500">Last Name</label>
                      <input id="contact-last-name" type="text" autoComplete="family-name" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-primary outline-none transition-colors text-white font-light" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
                   <input id="contact-email" type="email" autoComplete="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-primary outline-none transition-colors text-white font-light" />
                </div>
                <div className="space-y-2">
                   <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-zinc-500">Message</label>
                   <textarea id="contact-message" rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-primary outline-none transition-colors text-white font-light resize-none" />
                </div>
              </div>
              <button className="w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-primary transition-colors hover:text-white">
                Send Inquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
