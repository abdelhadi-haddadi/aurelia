import React, { useLayoutEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Heart, Share2, ArrowLeft, ChevronRight, Rotate3d, Facebook, Twitter, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import { useStore } from '@/src/store/useStore';
import { Button } from '@/components/ui/button';
import { Product360Viewer } from '../ui/Product360Viewer';
import { SEO } from '../ui/SEO';

export const ProductPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useStore();
  const [show360, setShow360] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const product = products.find(p => p.id === id) || products[0];
  const [selectedMetal, setSelectedMetal] = React.useState('18K Gold');
  const [selectedSize, setSelectedSize] = React.useState(52);

  if (!product) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="w-12 h-[1px] bg-primary animate-pulse" />
      </div>
    );
  }

  useLayoutEffect(() => {
    if (!product) return;
    
    const ctx = gsap.context(() => {
      // 1. Hero Gallery Reveal & Parallax
      gsap.from(".product-gallery", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Sticky Gallery logic for Desktop
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: ".gallery-column",
          start: "top 120px",
          end: "bottom bottom",
          pin: ".sticky-gallery",
          pinSpacing: false
        });
      });

      // Subtle Image Parallax on Scroll
      gsap.to(".parallax-img", {
        yPercent: 10,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".product-gallery",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // 2. Text Content Reveal
      const revealTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 }
      });

      revealTl
        .from(".reveal-title", { y: 80, opacity: 0, delay: 0.3 })
        .from(".reveal-subtitle", { y: 20, opacity: 0 }, "-=0.8")
        .from(".reveal-price", { scaleX: 0, transformOrigin: "left", opacity: 0 }, "-=0.8")
        .from(".reveal-options > *", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.6")
        .from(".reveal-cta", { y: 30, opacity: 0 }, "-=0.4");

      // 3. Vision Section Scroll Reveal
      gsap.from(".vision-content > *", {
        scrollTrigger: {
          trigger: ".vision-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      });

      // 4. Detail Images Staggered Reveal
      gsap.from(".detail-img", {
        scrollTrigger: {
          trigger: ".detail-img-grid",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)"
      });

      // 5. Magnetic CTA Button Logic
      const ctaBtn = document.querySelector(".magnetic-cta");
      if (ctaBtn) {
        ctaBtn.addEventListener("mousemove", (e: any) => {
          const rect = ctaBtn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(ctaBtn, {
            x: x * 0.3,
            y: y * 0.4,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        ctaBtn.addEventListener("mouseleave", () => {
          gsap.to(ctaBtn, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  const metals = [
    { name: '18K Gold', color: 'bg-[#D4AF37]' },
    { name: 'Platinum', color: 'bg-[#E5E4E2]' },
    { name: 'Rose Gold', color: 'bg-[#B76E79]' }
  ];

  return (
    <>
      <SEO 
        title={product.name}
        description={`Exquisite ${product.name} from AURELIA. Masterfully crafted with the finest materials and artistic vision.`}
        ogImage={product.image}
        ogType="product"
      />
      <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground mb-12 overflow-hidden">
        <Link to="/catalog" className="hover:text-primary transition-colors">Catalog</Link>
        <ChevronRight size={10} />
        <span className="text-primary font-bold">{product.name}</span>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative gallery-column">
        {/* Gallery */}
        <div className="space-y-6 product-gallery sticky-gallery">
           <motion.div 
             className="aspect-[4/5] bg-muted overflow-hidden relative group"
           >
              {show360 ? (
                <Product360Viewer images={product.images360} image={product.image} name={product.name} />
              ) : (
                <motion.img 
                  key={selectedMetal}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={product.image} 
                  className={`w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 parallax-img ${selectedMetal === 'Rose Gold' ? 'sepia-[0.3]' : selectedMetal === 'Platinum' ? 'grayscale-[0.3]' : ''}`} 
                  alt={product.name} 
                  referrerPolicy="no-referrer"
                />
              )}
              
              <div className="absolute bottom-6 right-6 flex gap-2 z-30">
                 <button 
                  onClick={() => setShow360(!show360)}
                  className={`px-4 h-10 rounded-full flex items-center justify-center gap-2 transition-all ${show360 ? 'bg-primary text-primary-foreground' : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/30 border border-white/10'}`}
                 >
                   <Rotate3d size={16} strokeWidth={1} />
                   <span className="text-[10px] uppercase tracking-widest font-bold">{show360 ? 'Exit 360' : '360° Interaction'}</span>
                 </button>
                 {!show360 && (
                   <button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                     <Share2 size={16} strokeWidth={1} />
                   </button>
                 )}
              </div>
           </motion.div>
           <div className="grid grid-cols-4 gap-4 detail-img-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer detail-img">
                  <img src={product.image} className={`w-full h-full object-cover ${selectedMetal === 'Rose Gold' ? 'sepia-[0.3]' : selectedMetal === 'Platinum' ? 'grayscale-[0.3]' : ''}`} alt="Detail" />
                </div>
              ))}
           </div>
        </div>

        {/* Content */}
        <div className="flex flex-col product-info">
           <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-4 italic reveal-subtitle">The Signature Selection</span>
              <div className="overflow-hidden mb-6">
                <h1 className="text-5xl md:text-7xl font-heading tracking-tight leading-tight reveal-title">{product.name}</h1>
              </div>
              <p className="text-3xl font-light tracking-widest reveal-price border-l-2 border-primary pl-6">${(product.price + (selectedMetal === 'Platinum' ? 2500 : 0)).toLocaleString()}</p>
           </div>

           <div className="space-y-12 mb-12 reveal-options">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] uppercase tracking-widest font-bold">Metal Selection: <span className="text-primary font-bold ml-2 underline decoration-primary/30 underline-offset-4">{selectedMetal}</span></p>
                </div>
                <div className="flex gap-4">
                   {metals.map(metal => (
                     <button 
                        key={metal.name} 
                        onClick={() => setSelectedMetal(metal.name)}
                        className={`group relative p-1 rounded-full border-2 transition-all ${selectedMetal === metal.name ? 'border-primary' : 'border-transparent hover:border-border'}`}
                      >
                        <div className={`w-10 h-10 rounded-full ${metal.color} shadow-inner`} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{metal.name}</span>
                     </button>
                   ))}
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex justify-between items-end">
                  <p className="text-[10px] uppercase tracking-widest font-bold">Bespoke Size: <span className="text-primary font-bold ml-2 underline decoration-primary/30 underline-offset-4">{selectedSize}</span></p>
                  <button className="text-[9px] uppercase tracking-widest underline underline-offset-4 text-muted-foreground hover:text-foreground">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                   {[48, 50, 52, 54, 56, 58, 60].map(s => (
                     <button 
                        key={s} 
                        onClick={() => setSelectedSize(s)}
                        className={`w-14 h-14 flex items-center justify-center border text-[10px] transition-all font-medium ${selectedSize === s ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-black'}`}
                      >
                        {s}
                     </button>
                   ))}
                </div>
              </div>
           </div>

           <div className="flex flex-col gap-4 mb-8 reveal-cta">
              <div className="magnetic-cta-container p-4">
                <Button 
                  onClick={() => addToCart({ ...product, quantity: 1, variant: `${selectedMetal}, Size ${selectedSize}` })}
                  className="magnetic-cta w-full h-20 bg-primary text-primary-foreground rounded-none uppercase tracking-[0.3em] text-xs font-bold group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Acquire Masterpiece
                    <ShoppingBag size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </div>
              <Button variant="outline" className="w-full h-16 rounded-none uppercase tracking-[0.2em] text-[10px] flex gap-2 border-border/50 hover:border-foreground">
                 <Heart size={14} strokeWidth={1} /> Exclusive Wishlist
              </Button>
           </div>

           {/* Social Sharing */}
           <div className="flex items-center gap-6 mb-16 py-6 border-y border-border/50">
             <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mr-2 font-bold italic">Share Masterpiece</span>
             <div className="flex items-center gap-6">
               <a 
                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook size={16} strokeWidth={1.2} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`A masterpiece from AURELIA: ${product.name}`)}&url=${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={16} strokeWidth={1.2} />
                </a>
                <a 
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(`Discover ${product.name} at AURELIA.`)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.2} />
                </a>
             </div>
           </div>

           <div className="border-t border-border pt-12 space-y-8 vision-section">
              <div>
                 <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">The Artistic Vision</h4>
                 <p className="text-sm font-light text-muted-foreground leading-relaxed">
                   A testament to the \"Aurelia-Cut\" method, this creation focuses on the internal fire of the diamond. The setting is designed to be nearly invisible, giving the illusion that the gemstones are floating against the skin.
                 </p>
              </div>
              <div className="flex items-center gap-12">
                 <div>
                    <p className="text-xs font-bold uppercase mb-1">Carat Weight</p>
                    <p className="text-[10px] text-muted-foreground uppercase">2.45 CT</p>
                 </div>
                 <div>
                    <p className="text-xs font-bold uppercase mb-1">Metal</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{selectedMetal}</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
    </>
  );
};
