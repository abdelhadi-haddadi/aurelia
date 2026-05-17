
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-heading tracking-widest mb-8">AURELIA</h2>
            <p className="text-sm text-muted-foreground font-light max-w-xs leading-relaxed mb-8">
              Experience the pinnacle of luxury jewelry design. Join our exclusive world and receive updates on new collections and private exhibitions.
            </p>
            <div className="flex gap-6">
              <a href="#" aria-label="Follow AURELIA on Instagram" className="hover:opacity-60 transition-opacity"><Instagram size={20} strokeWidth={1} aria-hidden="true" /></a>
              <a href="#" aria-label="Follow AURELIA on Twitter" className="hover:opacity-60 transition-opacity"><Twitter size={20} strokeWidth={1} aria-hidden="true" /></a>
              <a href="#" aria-label="Follow AURELIA on Facebook" className="hover:opacity-60 transition-opacity"><Facebook size={20} strokeWidth={1} aria-hidden="true" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-zinc-500">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><Link to="/collections" className="hover:opacity-60 flex items-center gap-2 transition-opacity">Collections <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/brand" className="hover:opacity-60 flex items-center gap-2 transition-opacity">The Maison <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/catalog" className="hover:opacity-60 flex items-center gap-2 transition-opacity">High Jewelry <ArrowUpRight size={12} /></Link></li>
              <li><Link to="/journal" className="hover:opacity-60 flex items-center gap-2 transition-opacity">Journal <ArrowUpRight size={12} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-zinc-500">Concierge</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact Us</Link></li>
              <li><Link to="/brand" className="hover:opacity-60 transition-opacity">Bespoke Services</Link></li>
              <li><Link to="/shipping" className="hover:opacity-60 transition-opacity">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:opacity-60 transition-opacity">Care Guide</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-12 opacity-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <p>© 2026 AURELIA JOAILLERIE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
