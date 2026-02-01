'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SplashParticlesProps {
  x: number;
  y: number;
  width?: number; // Button width
  height?: number; // Button height
  onComplete?: () => void;
}

export const SplashParticles = ({ x, y, width = 0, height = 0, onComplete }: SplashParticlesProps) => {
  const particleCount = 20; // Number of droplets
  const particles = Array.from({ length: particleCount });

  useEffect(() => {
    // Total animation time should match delay in LinkButton
    const timer = setTimeout(() => {
      onComplete?.();
    }, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      {particles.map((_, i) => {
        // Distribute particles around the button ellipse
        const angle = (i / particleCount) * 360; // Evenly distributed angle
        const rad = (angle * Math.PI) / 180;
        
        // Start from the edge of the button (ellipse approximation)
        // Add some randomness to starting position
        const rx = (width / 2) * 0.8 + (Math.random() * 20); 
        const ry = (height / 2) * 0.8 + (Math.random() * 20);

        const startX = Math.cos(rad) * rx;
        const startY = Math.sin(rad) * ry;

        // Explode OUTWARDS from that point
        const velocity = 20 + Math.random() * 30;
        const tx = Math.cos(rad) * velocity;
        const ty = Math.sin(rad) * velocity;
        
        // Randomize size
        const size = Math.random() * 6 + 10;

        return (
          <motion.div
            key={i}
            initial={{ x: x + startX, y: y + startY, scale: 0, opacity: 1 }}
            animate={{
              x: x + startX + tx,
              y: y + startY + ty + 30, // Gravity
              scale: [0, 1.2, 0], 
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.3,
              ease: 'easeOut',
            }}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: size * 3, 
              height: size * 3,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          >
            <img 
              src="/splash.png" 
              alt="splash" 
              className="w-full h-full object-contain opacity-80"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          </motion.div>
        );
      })}
    </>
  );
};
