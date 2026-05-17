import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Rotate3d, Maximize2, MousePointer2, Loader2 } from 'lucide-react';

interface Product360ViewerProps {
    images?: string[]; // Array of frames for true 360
    image: string;     // Primary image / Fallback
    name: string;
}

export const Product360Viewer: React.FC<Product360ViewerProps> = ({ images = [], image, name }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const frames = images.length > 0 ? images : [image];
    const frameCount = frames.length;
    const isMultiFrame = frameCount > 1;

    // For single image tilt interaction
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), { stiffness: 100, damping: 30 });
    const shineX = useTransform(x, [-0.5, 0.5], ['-100%', '100%']);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const total = frames.length;
        
        if (total === 1) {
            setLoaded(true);
            return;
        }

        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                setLoadProgress((loadedCount / total) * 100);
                if (loadedCount === total) setLoaded(true);
            };
        });
    }, [frames]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        
        if (isMultiFrame && isDragging) {
            const deltaX = e.clientX - rect.left;
            const percentage = deltaX / rect.width;
            const frameIndex = Math.floor(percentage * frameCount) % frameCount;
            const normalizedIndex = frameIndex < 0 ? frameIndex + frameCount : frameIndex;
            setCurrentFrame(normalizedIndex);
        } else if (!isMultiFrame) {
            const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
            x.set(mouseX);
            y.set(mouseY);
        }
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (!isMultiFrame) {
            x.set(0);
            y.set(0);
        }
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing group select-none"
            style={{ perspective: 1000 }}
        >
            <AnimatePresence>
                {!loaded && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center gap-4"
                    >
                        <Loader2 className="animate-spin text-primary" size={32} strokeWidth={1} />
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Preparing Gallery</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-50" />

            {/* Hint Overlay */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                    <Rotate3d size={12} className="text-white/60 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest text-white/60">{isMultiFrame ? 'True 360°' : 'Portrait View'}</span>
                </div>
            </div>

            {/* Center Visuals */}
            <motion.div
                style={{
                    rotateX: !isMultiFrame ? rotateX : 0,
                    rotateY: !isMultiFrame ? rotateY : 0,
                    transformStyle: 'preserve-3d'
                }}
                className="relative w-[85%] h-[85%] flex items-center justify-center"
            >
                {/* 360 Frame display */}
                {isMultiFrame ? (
                    <img
                        src={frames[currentFrame]}
                        alt={`${name} rotation frame ${currentFrame}`}
                        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_60px_rgba(255,255,255,0.08)]"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <motion.img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                        referrerPolicy="no-referrer"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                    />
                )}

                {/* Simulated Glossy Reflection (Tilt only) */}
                {!isMultiFrame && (
                    <motion.div 
                        style={{ 
                            x: shineX,
                            opacity: useTransform(x, [-0.5, 0, 0.5], [0.3, 0, 0.3])
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none blur-xl" 
                    />
                )}
                
                {/* Shadow underneath */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-white/5 rounded-[100%] blur-xl pointer-events-none translate-z-[-50px]" />
            </motion.div>

            {/* Interaction Guide */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-center gap-2">
                    <MousePointer2 size={14} className="text-white" />
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white whitespace-nowrap">
                        {isMultiFrame ? 'Drag horizontally to rotate' : 'Move cursor to inspect'}
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex gap-2">
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
                    <Maximize2 size={16} strokeWidth={1} />
                </button>
            </div>

            {/* Progress Bar (Current frame index highlight) */}
            {isMultiFrame && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
                    <motion.div 
                        className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                        style={{ width: `${((currentFrame + 1) / frameCount) * 100}%` }}
                    />
                </div>
            )}
        </div>
    );
};
