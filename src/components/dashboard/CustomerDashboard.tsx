import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useStore } from '@/src/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package, MapPin, Bell, LogOut, Settings } from 'lucide-react';

export const CustomerDashboard = () => {
  const { user, logout, orders, products } = useStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p className="text-muted-foreground font-heading">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4"
          >
            Welcome Back
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading tracking-tight"
          >
            {user.name}
          </motion.h1>
        </div>
        <button 
          onClick={logout}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-destructive transition-colors"
        >
          <LogOut size={14} /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-3">
          <div className="flex flex-col gap-2">
            {[
              { icon: Package, label: 'Orders', active: true },
              { icon: ShoppingBag, label: 'Wishlist' },
              { icon: MapPin, label: 'Addresses' },
              { icon: Bell, label: 'Notifications' },
              { icon: Settings, label: 'Account Settings' },
            ].map((item) => (
              <button 
                key={item.label}
                className={`flex items-center gap-4 p-4 text-[10px] uppercase tracking-[0.2em] transition-colors rounded-none border border-transparent ${item.active ? 'bg-muted border-border font-bold' : 'hover:bg-muted/50'}`}
              >
                <item.icon size={16} strokeWidth={1} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-heading tracking-tight">Recent Orders</h2>
            {orders.length > 0 ? (
              orders.map((order) => (
                <Card key={order.id} className="rounded-none border-border bg-muted/20">
                  <CardHeader className="flex flex-row items-center justify-between border-b border-border/30 pb-4">
                    <div className="space-y-1">
                      <CardTitle className="text-sm font-heading tracking-widest">ORDER NO. {order.id}</CardTitle>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{order.date}</p>
                    </div>
                    <Badge variant="outline" className="rounded-none px-4 py-1 text-[9px] uppercase tracking-widest bg-background">
                      {order.status}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-16 bg-muted shrink-0" />
                          <div>
                            <p className="text-sm font-heading tracking-tight">{item.name}</p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-sm tracking-widest">${item.price.toLocaleString()}</p>
                      </div>
                    ))}
                    <div className="mt-6 pt-6 border-t border-border/30 flex justify-between items-end">
                      <button className="text-[10px] uppercase tracking-widest underline underline-offset-4">Download Invoice</button>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Total Amount</p>
                        <p className="text-xl font-heading">${order.total.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="p-12 border border-dashed border-border flex flex-col items-center justify-center text-center">
                <Package className="text-muted-foreground mb-4 opacity-20" size={48} />
                <p className="text-sm font-light tracking-widest uppercase text-muted-foreground mb-6">No previous orders found</p>
                <Link to="/catalog">
                  <Button variant="outline" className="rounded-none uppercase tracking-widest text-[9px] h-10 px-6">Explore Catalog</Button>
                </Link>
              </div>
            )}

            <div className="mt-12 space-y-8">
               <h2 className="text-2xl font-heading tracking-tight">Curated for You</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.slice(0, 2).map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="group flex gap-4 p-4 border border-border/50 hover:border-primary transition-colors">
                      <div className="w-16 h-24 bg-muted overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[8px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</span>
                        <h3 className="text-xs font-heading tracking-tight mb-2">{product.name}</h3>
                        <p className="text-[10px] tracking-widest font-bold">${product.price.toLocaleString()}</p>
                      </div>
                    </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
