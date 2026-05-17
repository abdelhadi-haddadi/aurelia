
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6 block">Exclusive Access</span>
          <h2 className="text-4xl md:text-5xl font-heading tracking-tight mb-8">
            Enter the Maison <br />
            <span className="italic italic-font">Inner Circle</span>
          </h2>
          <p className="text-sm font-light text-muted-foreground tracking-wide mb-12 max-w-lg mx-auto">
            Subscribe to receive private invitations to our exhibitions, early access to collections, and insights from our master jewelers.
          </p>

          <form className="w-full max-w-md flex flex-col md:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Email Address" 
              className="h-14 bg-background border-border rounded-none text-xs uppercase tracking-widest px-6"
            />
            <Button className="h-14 px-10 bg-primary text-primary-foreground rounded-none text-[10px] uppercase tracking-widest">
              Subscribe
            </Button>
          </form>
          
          <p className="text-[9px] text-muted-foreground/60 uppercase tracking-widest mt-8">
            By subscribing, you agree to our privacy policy and terms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
