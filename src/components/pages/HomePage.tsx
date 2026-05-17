import React, { lazy, Suspense } from 'react';
import { Hero } from '../sections/Hero';
import { SEO } from '../ui/SEO';

// Only Hero is in the critical bundle. Everything below-fold is lazy-loaded
// so the main thread is free to paint the LCP element as fast as possible.
const BestSellers   = lazy(() => import('../sections/BestSellers').then(m => ({ default: m.BestSellers })));
const Collections   = lazy(() => import('../sections/Collections').then(m => ({ default: m.Collections })));
const BrandStory    = lazy(() => import('../sections/BrandStory').then(m => ({ default: m.BrandStory })));
const Craftsmanship = lazy(() => import('../sections/Craftsmanship').then(m => ({ default: m.Craftsmanship })));
const InstagramFeed = lazy(() => import('../sections/InstagramFeed').then(m => ({ default: m.InstagramFeed })));
const Newsletter    = lazy(() => import('../sections/Newsletter').then(m => ({ default: m.Newsletter })));

const SectionSkeleton = () => (
  <div className="w-full py-24 bg-background" aria-hidden="true" />
);

export const HomePage = () => {
  return (
    <>
      <SEO
        title="AURELIA | High Jewelry & Bespoke Masterpieces"
        description="Experience the pinnacle of high jewelry. AURELIA creates masterfully crafted jewelry for those whom excellence is a standard."
      />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <BestSellers />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Collections />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BrandStory />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Craftsmanship />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <InstagramFeed />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Newsletter />
      </Suspense>
    </>
  );
};
