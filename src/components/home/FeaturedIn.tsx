"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { featuredInData } from '@/lib/featured-in-data';

export default function FeaturedIn() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-medium text-muted-foreground">Featured In</h2>
          <div className="mx-auto mb-8 h-1 w-16 rounded bg-primary-500"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {featuredInData.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-40"
            >
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <OptimizedImage 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-full w-full object-contain"
                  width={160}
                  height={64}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
