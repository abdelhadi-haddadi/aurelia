import React from 'react';
import { motion } from 'motion/react';
import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

export const CheckoutPage = () => {
  const { cart } = useStore();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Complimentary
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Checkout Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl font-heading tracking-tight mb-8">Secure Checkout</h1>
              <p className="text-sm text-muted-foreground font-light">Complete your acquisition by providing your shipping and payment details.</p>
            </div>

            {/* Shipping Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                 <Truck size={18} strokeWidth={1} />
                 <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold">01 Shipping Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-[9px] uppercase tracking-widest opacity-60">First Name</Label>
                  <Input id="first-name" autoComplete="given-name" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-[9px] uppercase tracking-widest opacity-60">Last Name</Label>
                  <Input id="last-name" autoComplete="family-name" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[9px] uppercase tracking-widest opacity-60">Address</Label>
                <Input id="address" autoComplete="street-address" className="rounded-none h-12 bg-muted/20 border-border" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-[9px] uppercase tracking-widest opacity-60">City</Label>
                  <Input id="city" autoComplete="address-level2" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code" className="text-[9px] uppercase tracking-widest opacity-60">Postal Code</Label>
                  <Input id="postal-code" autoComplete="postal-code" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-[9px] uppercase tracking-widest opacity-60">Country</Label>
                  <Input id="country" autoComplete="country-name" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
              </div>
            </div>

            <Separator className="opacity-30" />

            {/* Payment Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                 <CreditCard size={18} strokeWidth={1} />
                 <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold">02 Payment Method</h2>
              </div>
              <div className="p-6 border border-primary/20 bg-primary/5 mb-6">
                <p className="text-xs text-primary font-medium tracking-wide flex items-center gap-2">
                  <ShieldCheck size={14} /> Encrypted via Stripe Securities
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number" className="text-[9px] uppercase tracking-widest opacity-60">Card Number</Label>
                <Input id="card-number" autoComplete="cc-number" placeholder="•••• •••• •••• ••••" className="rounded-none h-12 bg-muted/20 border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-[9px] uppercase tracking-widest opacity-60">Expiry Date</Label>
                  <Input id="expiry" autoComplete="cc-exp" placeholder="MM / YY" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc" className="text-[9px] uppercase tracking-widest opacity-60">CVC</Label>
                  <Input id="cvc" autoComplete="cc-csc" placeholder="•••" className="rounded-none h-12 bg-muted/20 border-border" />
                </div>
              </div>
            </div>

            <Button className="w-full h-16 bg-primary text-primary-foreground rounded-none uppercase tracking-[0.2em] text-xs font-bold">
              Purchase Creation — ${total.toLocaleString()}
            </Button>
          </motion.div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="sticky top-32 bg-muted/30 p-12 border border-border"
           >
              <h3 className="text-xl font-heading mb-8">Summary</h3>
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} className="w-16 h-20 object-cover bg-muted" alt={item.name} referrerPolicy="no-referrer" />
                    <div className="flex flex-col justify-center flex-grow">
                      <p className="text-xs font-bold uppercase tracking-widest leading-tight mb-1">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs tracking-widest flex items-center">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-border">
                <div className="flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                  <span>Shipping (Insured)</span>
                  <span className="text-emerald-500 font-bold">COMPLIMENTARY</span>
                </div>
                <Separator className="my-4 opacity-50" />
                <div className="flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Total Amount</span>
                  <span className="text-2xl font-heading">${total.toLocaleString()}</span>
                </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};
