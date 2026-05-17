import React from 'react';
import { Hero } from '../sections/Hero';
import { BestSellers } from '../sections/BestSellers';
import { Collections } from '../sections/Collections';
import { BrandStory } from '../sections/BrandStory';
import { Craftsmanship } from '../sections/Craftsmanship';
import { InstagramFeed } from '../sections/InstagramFeed';
import { Newsletter } from '../sections/Newsletter';
import { SEO } from '../ui/SEO';

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="AURELIA | High Jewelry & Bespoke Masterpieces"
        description="Experience the pinnacle of high jewelry. AURELIA creates masterfully crafted jewelry for those whom excellence is a standard."
      />
      <Hero />
      <BestSellers />
      <Collections />
      <BrandStory />
      <Craftsmanship />
      <InstagramFeed />
      <Newsletter />
    </>
  );
};
