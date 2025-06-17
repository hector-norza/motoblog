"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaClock } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface BlogPostCardProps {
  post: {
    title: string;
    slug: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    readingTime?: string;
    author?: string;
  };
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    }),
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      custom={index}
      className="group glass-card hover-lift flex flex-col overflow-hidden"
    >
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden smooth-corners">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center space-x-3 text-xs">
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="hover-scale flex items-center rounded-full bg-primary-50/80 backdrop-blur-sm px-2.5 py-1 text-primary-600 transition-colors hover:bg-primary-100/80 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/30"
          >
            <FaTag className="mr-1.5 h-3.5 w-3.5" />
            {post.category}
          </Link>
          <span className="flex items-center text-muted-foreground">
            <FaCalendarAlt className="mr-1.5 h-3.5 w-3.5" />
            {post.date}
          </span>
          {post.readingTime && (
            <span className="flex items-center text-muted-foreground">
              <FaClock className="mr-1.5 h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          )}
        </div>
        <Link href={`/blog/${post.slug}`} className="mb-3 block">
          <h3 className="line-clamp-2 text-xl font-bold leading-tight transition-colors group-hover:text-primary-500">
            {post.title}
          </h3>
        </Link>
        <p className="mb-5 flex-1 text-sm text-muted-foreground/90 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <Link
            href={`/blog/${post.slug}`}
            className="hover-scale shimmer inline-flex items-center rounded-full bg-primary-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary-100/80 hover:pr-5 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/30"
          >
            Read more
            <svg 
              className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
