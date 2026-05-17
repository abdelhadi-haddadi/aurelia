/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { AppProvider } from './providers/AppProvider';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { ScrollIndicator } from './components/ui/ScrollIndicator';
import { AuroraFrame } from './components/ui/AuroraFrame';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { CursorTrail } from './components/ui/CursorTrail';
const ProductDetail = lazy(() => import('./components/ui/ProductDetail').then(m => ({ default: m.ProductDetail })));
const SearchPlus = lazy(() => import('./components/ui/SearchPlus').then(m => ({ default: m.SearchPlus })));
import { useStore } from './store/useStore';

// Lazy load pages for performance
const HomePage = lazy(() => import('./components/pages/HomePage').then(m => ({ default: m.HomePage })));
const CatalogPage = lazy(() => import('./components/pages/CatalogPage').then(m => ({ default: m.CatalogPage })));
const CollectionsPage = lazy(() => import('./components/pages/CollectionsPage').then(m => ({ default: m.CollectionsPage })));
const TheBrandPage = lazy(() => import('./components/pages/TheBrandPage').then(m => ({ default: m.TheBrandPage })));
const ProductPage = lazy(() => import('./components/pages/ProductPage').then(m => ({ default: m.ProductPage })));
const LoginPage = lazy(() => import('./components/pages/LoginPage').then(m => ({ default: m.LoginPage })));
const CustomerDashboard = lazy(() => import('./components/dashboard/CustomerDashboard').then(m => ({ default: m.CustomerDashboard })));
const AdminDashboard = lazy(() => import('./components/dashboard/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const CheckoutPage = lazy(() => import('./components/pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const PrivacyPage = lazy(() => import('./components/pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./components/pages/TermsPage').then(m => ({ default: m.TermsPage })));
const CookiePolicyPage = lazy(() => import('./components/pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const ShippingPage = lazy(() => import('./components/pages/ShippingPage').then(m => ({ default: m.ShippingPage })));
const CareGuidePage = lazy(() => import('./components/pages/CareGuidePage').then(m => ({ default: m.CareGuidePage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const JournalPage = lazy(() => import('./components/pages/JournalPage').then(m => ({ default: m.JournalPage })));
const ArticlePage = lazy(() => import('./components/pages/ArticlePage').then(m => ({ default: m.ArticlePage })));
const NewArrivalsPage = lazy(() => import('./components/pages/NewArrivalsPage').then(m => ({ default: m.NewArrivalsPage })));
const BespokeServicesPage = lazy(() => import('./components/pages/BespokeServicesPage').then(m => ({ default: m.BespokeServicesPage })));
const HighJewelryPage = lazy(() => import('./components/pages/HighJewelryPage').then(m => ({ default: m.HighJewelryPage })));
const WatchmakingPage = lazy(() => import('./components/pages/WatchmakingPage').then(m => ({ default: m.WatchmakingPage })));

// Loading component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
    <div className="w-12 h-[1px] bg-primary animate-pulse" />
  </div>
);

export default function App() {
  const { quickViewProduct, setQuickViewProduct, isSearchOpen, setIsSearchOpen, fetchProducts } = useStore();

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <HelmetProvider>
      <AppProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={null}>
            <SearchPlus
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
            />
          </Suspense>
          <div className="min-h-screen bg-background font-sans transition-colors duration-1000 relative">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest">Skip to main content</a>
            <AuroraBackground />
            <AuroraFrame />
            <CursorTrail />
            <WhatsAppFloat />
            <ScrollIndicator />
            <Navbar />
            <main id="main-content">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/catalog" element={<CatalogPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/collections" element={<CollectionsPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/brand" element={<TheBrandPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/dashboard" element={<CustomerDashboard />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiePolicyPage />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                  <Route path="/care" element={<CareGuidePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  <Route path="/journal/:id" element={<ArticlePage />} />
                  <Route path="/new-arrivals" element={<NewArrivalsPage />} />
                  <Route path="/bespoke" element={<BespokeServicesPage />} />
                  <Route path="/high-jewelry" element={<HighJewelryPage />} />
                  <Route path="/watchmaking" element={<WatchmakingPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <CartDrawer />
            <Suspense fallback={null}>
              <ProductDetail
                product={quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
              />
            </Suspense>
          </div>
        </Router>
      </AppProvider>
    </HelmetProvider>
  );
}
