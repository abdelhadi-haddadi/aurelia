import React from 'react';
import { motion } from 'motion/react';

export const AuroraFrame = () => {
  return (
    <>
      {/* Top Border */}
      <div className="fixed top-0 left-0 right-0 h-[1px] z-[100] overflow-hidden pointer-events-none">
        <div className="aurora-border-gradient w-full h-full opacity-30 shadow-[0_0_15px_rgba(79,172,254,0.5)]" />
      </div>
      
      {/* Bottom Border */}
      <div className="fixed bottom-0 left-0 right-0 h-[1px] z-[100] overflow-hidden pointer-events-none">
        <div className="aurora-border-gradient w-full h-full opacity-30 shadow-[0_0_15px_rgba(255,0,128,0.5)]" />
      </div>

      {/* Left Border */}
      <div className="fixed top-0 bottom-0 left-0 w-[1px] z-[100] overflow-hidden pointer-events-none">
        <div className="aurora-border-gradient w-full h-full opacity-30 shadow-[0_0_15px_rgba(121,40,202,0.5)]" />
      </div>

      {/* Right Border */}
      <div className="fixed top-0 bottom-0 right-0 w-[1px] z-[100] overflow-hidden pointer-events-none">
        <div className="aurora-border-gradient w-full h-full opacity-30 shadow-[0_0_15px_rgba(0,242,254,0.5)]" />
      </div>

      {/* Subtle corner flares */}
      <div className="fixed top-0 left-0 w-32 h-32 bg-primary/20 blur-[100px] pointer-events-none z-[99]" />
      <div className="fixed bottom-0 right-0 w-32 h-32 bg-accent/20 blur-[100px] pointer-events-none z-[99]" />
    </>
  );
};
