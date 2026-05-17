
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const CartDrawer = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useStore();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border z-[110] flex flex-col"
          >
            <div className="p-8 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} strokeWidth={1} />
                <h2 className="text-xl font-heading tracking-tight">Shopping Bag ({cart.length})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center opacity-20">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading mb-2">Your bag is empty</h3>
                    <p className="text-sm text-muted-foreground font-light">Explore our collection to find your next masterpiece.</p>
                  </div>
                  <Button 
                    onClick={() => setIsCartOpen(false)}
                    variant="outline" 
                    className="rounded-none uppercase tracking-widest text-[10px]"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item, idx) => (
                    <div key={`${item.id}-${item.variant || idx}`} className="flex gap-6">
                      <div className="w-24 h-32 bg-muted overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-grow">
                        <div>
                          <h4 className="font-heading tracking-tight text-sm">{item.name}</h4>
                          {item.variant && (
                            <p className="text-[10px] text-primary/60 font-medium uppercase tracking-tighter mt-0.5">{item.variant}</p>
                          )}
                          <p className="text-[10px] text-muted-foreground font-light mt-1 uppercase tracking-tighter">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm tracking-wide font-light">${(item.price * item.quantity).toLocaleString()}</p>
                          <button 
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} strokeWidth={1} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-border bg-muted/30">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Subtotal</span>
                  <span className="text-sm tracking-widest">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Shipping</span>
                  <span className="text-sm tracking-widest">Calculated at checkout</span>
                </div>
                <Separator className="mb-6 opacity-30" />
                <Button className="w-full h-14 bg-primary text-primary-foreground rounded-none uppercase tracking-widest text-xs group">
                  Proceed to Checkout
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
