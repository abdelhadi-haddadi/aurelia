import React from 'react';
import { MessageCircle } from 'lucide-react';

const AURORA = 'linear-gradient(90deg, #ff0080, #7928ca, #4facfe, #00f2fe, #ff0080)';

export const WhatsAppFloat = () => (
  <div
    className="fixed bottom-10 right-10 z-[90] group"
    style={{ animation: 'heroFadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both', animationDelay: '1s' }}
  >
    {/* Glow halo */}
    <div
      className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"
      style={{ background: AURORA }}
    />

    <button
      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
      aria-label="Chat with AURELIA concierge on WhatsApp"
      className="relative w-16 h-16 rounded-full p-[2px] shadow-2xl overflow-hidden cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-200"
      style={{ background: AURORA }}
    >
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center transition-colors group-hover:bg-black/80">
        <MessageCircle size={28} strokeWidth={1.5} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">Chat with us</span>
      </div>
    </button>
  </div>
);
