'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SplashParticlesProps {
  x: number;
  y: number;
  onComplete?: () => void;
}

export const SplashParticles = ({ x, y, onComplete }: SplashParticlesProps) => {
  const particleCount = 16; // Number of droplets
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
        // Randomize direction and distance
        const angle = Math.random() * 360;
        const velocity = Math.random() * 80 + 40; // Spread distance
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * velocity;
        const ty = Math.sin(rad) * velocity;
        
        // Randomize size
        const size = Math.random() * 6 + 4;

        return (
          <motion.div
            key={i}
            initial={{ x, y, scale: 0, opacity: 1 }}
            animate={{
              x: x + tx,
              y: y + ty + 50, // Add Gravity effect (y increases)
              scale: [0, 1.2, 0], 
              opacity: [1, 0.8, 0],
            }}
            transition={{
              duration: 0.6 + Math.random() * 0.2,
              ease: 'easeOut',
            }}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: size * 4, // Make images larger than the dots were
              height: size * 4,
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
