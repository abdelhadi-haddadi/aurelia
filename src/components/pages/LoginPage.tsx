import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../ui/SEO';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useStore(state => state.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock login - if email contains admin, make them admin
      const isAdmin = email.includes('admin');
      login(email, isAdmin);
      navigate(isAdmin ? '/admin' : '/dashboard');
    }
  };

  return (
    <>
    <SEO title="Maison Access" description="Sign in to your private AURELIA account or access the administration terminal." />
    <div className="min-h-screen flex">
      {/* Visual Side */}
      <div className="hidden lg:block w-1/2 relative bg-black">
        <img
          src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60 grayscale"
          alt="AURELIA Paris atelier — private access"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center p-24">
          <div className="text-center">
             <h2 className="text-6xl font-heading text-white tracking-widest mb-4">AURELIA</h2>
             <p className="text-sm text-white/40 tracking-[0.4em] uppercase">Private Access Only</p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-background">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-heading tracking-tight mb-4">Maison Access</h1>
            <p className="text-sm text-muted-foreground font-light">Enter your credentials to access your private account or administration terminal.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</Label>
              <Input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@maison.com"
                className="h-14 rounded-none border-border bg-muted/20"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="login-password" className="text-[10px] uppercase tracking-widest text-muted-foreground">Password</Label>
                <button type="button" className="text-[9px] uppercase tracking-widest underline underline-offset-4 opacity-60 hover:opacity-100">Forgot Password?</button>
              </div>
              <Input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-14 rounded-none border-border bg-muted/20"
                required
              />
            </div>

            <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground rounded-none uppercase tracking-widest text-xs">
              Sign In
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-border text-center">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">New to the Maison?</p>
            <button className="text-sm font-heading underline underline-offset-8">Create an Account</button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};
