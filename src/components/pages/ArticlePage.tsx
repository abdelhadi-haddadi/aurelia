import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../ui/SEO';
import { ChevronLeft } from 'lucide-react';

export const ArticlePage = () => {
  const { id } = useParams();
  
  // In a real app, fetch based on ID. For now, we simulate a single high-quality layout.
  return (
    <>
      <SEO title="Journal Entry" description="Exploring the depths of AURELIA craftsmanship." />
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/journal" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 hover:text-white transition-colors mb-20 group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
          </Link>

          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-16"
          >
            <header className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-primary">Heritage</span>
              <h1 className="text-5xl md:text-7xl font-heading tracking-tight text-white leading-tight">The Heritage of Vendôme: A Silhouette Restored</h1>
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">Author</span>
                  <span className="text-xs text-white font-medium">Marc-Antoine de Rossi</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500">Reading Time</span>
                  <span className="text-xs text-white font-medium">8 Minutes</span>
                </div>
              </div>
            </header>

            <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2000&auto=format&fit=crop" 
                alt="Vendôme Paris" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-lg font-light leading-relaxed text-zinc-400">
              <p className="first-letter:text-7xl first-letter:font-heading first-letter:text-white first-letter:mr-3 first-letter:float-left">
                The architecture of the Place Vendôme has for centuries served as the heartbeat of French high jewelry. Its octagonal symmetry, originally designed by Jules Hardouin-Mansart, offers a geometric perfection that AURELIA has translated into our signature "Vendôme Cut" diamonds.
              </p>
              <p>
                In our latest collection, we revisit the shadow lines cast by the central column during the golden hour in Paris. These long, angular symmetries are mirrored in the structured platinum settings of our necklaces, where light is captured not just by the stones, but by the negative space between them.
              </p>
              <blockquote className="py-12 border-y border-white/5 text-3xl font-heading italic text-white text-center leading-snug">
                "We don't just set stones; we architecture the light within them."
              </blockquote>
              <p>
                As the Maison moves towards its centenary, our commitment to this historical silhouette remains as firm as the stones themselves. Heritage is not a static memory, but a constant dialogue between the pencil of the designer and the hammer of the craftsman.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
};
