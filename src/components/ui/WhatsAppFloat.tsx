import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  const handleClick = () => {
    // Replace with actual number if provided, or just open WhatsApp
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-10 right-10 z-[90] group"
    >
      {/* Aurora Glow Background */}
      <div className="absolute inset-0 rounded-full blur-xl opacity-40 aurora-border-gradient group-hover:opacity-70 transition-opacity" />
      
      {/* Button Container */}
      <button
        onClick={handleClick}
        className="relative w-16 h-16 rounded-full p-[2px] aurora-border-gradient shadow-2xl overflow-hidden cursor-pointer"
      >
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center transition-colors group-hover:bg-black/80">
          <MessageCircle 
            size={28} 
            strokeWidth={1.5} 
            className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">Chat with us</span>
        </div>
      </button>
    </motion.div>
  );
};
