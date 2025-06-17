"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { getImagePath, getBlurDataUrl } from '@/lib/image-utils';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
  showLoadingEffect?: boolean;
  animateIn?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/images/placeholder.jpg',
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)",
  showLoadingEffect = true,
  animateIn = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(getImagePath(src as string, fallbackSrc));
  const [isVisible, setIsVisible] = useState(!animateIn);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    setImageSrc(getImagePath(src as string, fallbackSrc));
  }, [src, fallbackSrc]);

  // Animate in after a short delay if animateIn is true
  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animateIn]);

  const imageComponent = (
    <div className={cn("relative overflow-hidden bg-slate-100 dark:bg-slate-800", className)}>
      {isLoading && showLoadingEffect && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-primary-500/20">
            <svg
              className="h-8 w-8 animate-spin text-primary-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      <Image
        src={error ? getImagePath(fallbackSrc) : imageSrc}
        alt={alt}
        loading="lazy"
        quality={quality}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={getBlurDataUrl()}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
          setImageSrc(getImagePath(fallbackSrc));
        }}
        {...props}
      />
    </div>
  );

  // If animation is enabled, wrap in motion component
  if (animateIn) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {imageComponent}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return imageComponent;
}
