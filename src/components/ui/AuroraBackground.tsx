import React from 'react';
import { motion } from 'motion/react';

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-30">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[50%] right-[20%] w-[35%] h-[35%] bg-accent rounded-full blur-[100px] opacity-30 mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[40%] w-[45%] h-[45%] bg-blue-500/20 rounded-full blur-[150px] opacity-20 mix-blend-screen" />
        <div className="absolute top-[40%] right-[40%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[80px] opacity-20 mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
    </div>
  );
};
