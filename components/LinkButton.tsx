'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SplashParticles } from './SplashParticles';

interface LinkButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function LinkButton({ href, label, icon, className }: LinkButtonProps) {
  const router = useRouter();
  const [splash, setSplash] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    
    // Capture click coordinates
    const x = e.clientX;
    const y = e.clientY;
    setSplash({ x, y });

    // Delay navigation to let animation play
    setTimeout(() => {
        // Handle external or internal links
        if (href.startsWith('http') || href.startsWith('mailto:')) {
            window.location.href = href;
        } else {
            router.push(href);
        }
    }, 700); // 700ms delay matches animation roughly
  };

  return (
    <>
      {splash && (
        <SplashParticles
          x={splash.x}
          y={splash.y}
          onComplete={() => setSplash(null)}
        />
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={twMerge(
          "relative w-full max-w-md py-5 px-8 rounded-full font-bold text-lg shadow-xl transition-all border-2 border-white/20 select-none",
          "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-2xl",
          "flex items-center justify-center gap-3",
          className
        )}
      >
        {icon}
        {label}
      </motion.button>
    </>
  );
}
