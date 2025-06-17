"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define the blog post type
type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  excerpt: string;
  image: string;
  readingTime: string;
};

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerView = 3;

  const totalPages = Math.ceil(posts.length / postsPerView);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerView,
    currentPage * postsPerView
  );

  const handlePostClick = (slug: string) => {
    startTransition(() => {
      router.push(`/blog/${slug}`);
    });
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="relative py-6">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Related Articles</h2>
      
      <div className="relative">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <button
              key={post.slug}
              onClick={() => handlePostClick(post.slug)}
              className={`group glass-card hover-lift flex flex-col overflow-hidden text-left animate-scale-in ${
                isPending ? 'opacity-70 pointer-events-none' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden smooth-corners">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center rounded-full bg-primary-50/80 backdrop-blur-sm px-2.5 py-1 text-primary-600 transition-colors dark:bg-primary-900/20 dark:text-primary-400">
                    {post.category}
                  </span>
                  <time className="text-muted-foreground">{post.date}</time>
                </div>
                <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight transition-colors group-hover:text-primary-500">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground/90 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm border-t border-border/5 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <svg className="h-3.5 w-3.5 text-primary-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readingTime}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {posts.length > postsPerView && (
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={goToPrevious}
              disabled={isPending}
              className={`hover-scale glass-effect rounded-full p-2 text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 ${
                isPending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous related articles"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              disabled={isPending}
              className={`hover-scale glass-effect rounded-full p-2 text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 ${
                isPending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next related articles"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
