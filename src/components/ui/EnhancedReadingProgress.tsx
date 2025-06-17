"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface EnhancedReadingProgressProps {
  showPercentage?: boolean;
  color?: string;
  height?: number;
}

export default function EnhancedReadingProgress({ 
  showPercentage = true,
  color = "primary",
  height = 4
}: EnhancedReadingProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scrollYProgress to percentage
  const displayPercentage = useTransform(scrollYProgress, (value) => {
    return Math.round(value * 100);
  });

  // Update percentage state when displayPercentage changes
  useEffect(() => {
    return displayPercentage.onChange(v => {
      setPercentage(v);
    });
  }, [displayPercentage]);

  // Only show progress bar after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const colorClasses = {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    accent: "bg-accent",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 origin-left ${selectedColor}`}
        style={{ 
          scaleX,
          height: `${height}px`
        }}
      />
      
      {showPercentage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-primary-500 shadow-lg backdrop-blur-sm dark:bg-slate-800/80"
        >
          {percentage}%
        </motion.div>
      )}
    </>
  );
}