import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../ui/SEO';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    id: 'the-spirit-of-vendome',
    title: 'The Spirit of Vendôme',
    excerpt: 'Exploring the architectural heritage that inspires our high jewelry silhouettes.',
    date: 'April 24, 2026',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1200&auto=format&fit=crop',
    category: 'Heritage'
  },
  {
    id: 'sourcing-the-uncommon',
    title: 'Sourcing the Uncommon',
    excerpt: 'A journey into the rare earth mines where we discover our singular stones.',
    date: 'March 12, 2026',
    image: 'https://images.unsplash.com/photo-1512446733611-9099a7561895?q=80&w=1200&auto=format&fit=crop',
    category: 'Craft'
  },
  {
    id: 'art-of-the-bespoke',
    title: 'Art of the Bespoke',
    excerpt: 'How our creative director translates personal legacy into wearable masterpieces.',
    date: 'February 08, 2026',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    category: 'Bespoke'
  }
];

export const JournalPage = () => {
  return (
    <>
      <SEO title="The Journal" description="Chronicles of luxury, heritage, and high jewelry craftsmanship from AURELIA." />
      <div className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 block mb-4 italic font-medium">Maison Chronicles</span>
          <h1 className="text-5xl md:text-7xl font-heading tracking-tighter text-white font-light">The Journal</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {ARTICLES.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/journal/${article.id}`} className="block space-y-8">
                <div className="aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-primary/80 font-bold">
                    <span>{article.category}</span>
                    <span className="opacity-40">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-heading tracking-wide text-white group-hover:text-primary transition-colors flex items-center justify-between">
                    {article.title}
                    <ArrowUpRight size={20} strokeWidth={1} className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
                  </h3>
                  <p className="text-sm font-light text-zinc-500 leading-relaxed font-sans">{article.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
};
