
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/src/components/ui/Magnetic';
import { LUXURY_THEMES, ThemeType } from '@/src/lib/themes';

export const Navbar = () => {
  const { cart, setIsCartOpen, theme, setTheme, user, logout, setIsSearchOpen } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-md pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] aurora-border-gradient opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex items-center gap-4 md:gap-8 overflow-hidden"
        >
          <Magnetic>
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open navigation menu" className="text-foreground hover:opacity-70 transition-opacity shrink-0">
              <Menu size={20} strokeWidth={1} aria-hidden="true" />
            </button>
          </Magnetic>
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-foreground/60 whitespace-nowrap">
            <Magnetic><Link to="/catalog" className="hover:text-foreground transition-colors">Catalog</Link></Magnetic>
            <Magnetic><Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link></Magnetic>
            <Magnetic><Link to="/brand" className="hover:text-foreground transition-colors">The Brand</Link></Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-shrink-0"
        >
          <Magnetic strength={20}>
            <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-heading tracking-[0.1em] text-foreground">
              AURELIA
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex items-center justify-end gap-3 md:gap-6"
        >
          <Magnetic>
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              <Search size={20} strokeWidth={1} aria-hidden="true" />
            </button>
          </Magnetic>
          
          <div className="group relative">
            <Magnetic>
              <button
                onClick={() => navigate(user ? (user.isAdmin ? '/admin' : '/dashboard') : '/login')}
                aria-label={user ? `Account: ${user.name}` : 'Sign in to your account'}
                className="text-foreground hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                <User size={20} strokeWidth={1} aria-hidden="true" />
                {user && <span className="text-[9px] uppercase tracking-tighter hidden md:block">{user.name}</span>}
              </button>
            </Magnetic>
            {user && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-[60]">
                 <Link to={user.isAdmin ? '/admin' : '/dashboard'} className="block p-3 text-[10px] uppercase tracking-widest hover:bg-muted">Dashboard</Link>
                 <button onClick={logout} className="w-full text-left p-3 text-[10px] uppercase tracking-widest hover:bg-destructive/10 text-destructive flex items-center gap-2">
                   <LogOut size={12} /> Sign Out
                 </button>
              </div>
            )}
          </div>

          <Magnetic>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping bag${cartCount > 0 ? `, ${cartCount} items` : ', empty'}`}
              className="relative text-foreground hover:opacity-70 transition-opacity"
            >
              <ShoppingBag size={20} strokeWidth={1} aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-background border-r border-border z-[70] p-12 flex flex-col"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="self-end hover:opacity-70 mb-12"
              >
                <X size={24} strokeWidth={1} aria-hidden="true" />
              </button>

              <div className="flex flex-col gap-8 flex-grow">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'The Catalog', path: '/catalog' },
                  { label: 'New Arrivals', path: '/new-arrivals' },
                  { label: 'Bespoke Services', path: '/bespoke' },
                  { label: 'High Jewelry', path: '/high-jewelry' },
                  { label: 'Watchmaking', path: '/watchmaking' }
                ].map((item) => (
                  <motion.div key={item.label} whileHover={{ x: 10 }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-heading tracking-wide hover:opacity-60 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto border-t border-border pt-8">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Maison Aesthetic</p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(LUXURY_THEMES) as ThemeType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`text-[9px] uppercase tracking-tighter p-2 border border-border rounded-sm hover:bg-muted transition-colors ${theme === t ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      {LUXURY_THEMES[t].name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
