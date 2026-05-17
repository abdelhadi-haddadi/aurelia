import React from 'react';
import { motion } from 'motion/react';
import { useStore } from '@/src/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Users, Package, ShoppingCart, Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AdminDashboard = () => {
  const { user, products } = useStore();

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 text-center px-6">
        <h1 className="text-4xl font-heading mb-4">Access Restricted</h1>
        <p className="text-muted-foreground font-light max-w-md">This area is reserved for the Maison administrators. If you believe this is an error, please contact the technology department.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4">Administration Terminal</span>
          <h1 className="text-5xl font-heading tracking-tight">The Maison Control</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-none uppercase tracking-widest text-[9px] h-12 px-8">Export Data</Button>
          <Button className="rounded-none uppercase tracking-widest text-[9px] h-12 px-8 flex items-center gap-2">
            <Plus size={14} /> New Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Monthly Revenue', value: '$284,500', change: '+12.5%', icon: BarChart },
          { label: 'Active Customers', value: '1,482', change: '+5.2%', icon: Users },
          { label: 'Total Orders', value: '428', change: '+18.4%', icon: ShoppingCart },
          { label: 'Inventory Units', value: products.reduce((acc, p) => acc + (p.stock || 0), 0).toLocaleString(), change: '-2.1%', icon: Package },
        ].map((stat, i) => (
          <Card key={i} className="rounded-none border-border bg-muted/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              <stat.icon size={16} className="text-muted-foreground" strokeWidth={1} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-heading mb-1">{stat.value}</div>
              <p className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.change} <span className="text-muted-foreground font-light ml-1 uppercase tracking-tighter">vs last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="bg-transparent border-b border-border w-full justify-start rounded-none h-14 p-0 gap-8">
          <TabsTrigger value="products" className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 h-14 text-[10px] uppercase tracking-widest font-bold">Inventory</TabsTrigger>
          <TabsTrigger value="orders" className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 h-14 text-[10px] uppercase tracking-widest font-bold">Orders</TabsTrigger>
          <TabsTrigger value="customers" className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 h-14 text-[10px] uppercase tracking-widest font-bold">Customers</TabsTrigger>
          <TabsTrigger value="analytics" className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 h-14 text-[10px] uppercase tracking-widest font-bold">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="pt-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} strokeWidth={1} />
              <Input placeholder="Search Catalog..." className="pl-12 h-12 rounded-none border-border bg-muted/20 text-xs tracking-widest" />
            </div>
            <Button variant="outline" className="h-12 rounded-none gap-2 text-[10px] uppercase tracking-widest">
              <Filter size={14} /> Filters
            </Button>
          </div>

          <div className="border border-border">
            <table className="w-full text-left">
              <thead className="bg-muted/30 border-b border-border">
                <tr className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {products.map((item, idx) => (
                  <tr key={idx} className="text-sm font-light hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-6 font-heading tracking-tight">{item.name}</td>
                    <td className="px-6 py-6 text-xs text-muted-foreground uppercase tracking-widest">{item.category}</td>
                    <td className="px-6 py-6 tracking-widest">${item.price.toLocaleString()}</td>
                    <td className="px-6 py-6 text-xs">{item.stock || 0} Units</td>
                    <td className="px-6 py-6 text-right">
                      <button className="text-[10px] uppercase tracking-widest underline underline-offset-4 hover:opacity-60">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="pt-8">
            <div className="h-[400px] w-full bg-muted/20 flex items-center justify-center border border-border dashed">
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest">Advanced Sales Visualizations Loading...</p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
