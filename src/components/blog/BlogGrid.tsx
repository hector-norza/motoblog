"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import BlogPostCard from '@/components/blog/BlogPostCard';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  image: string;
  author?: string;
  [key: string]: any;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogPostCard 
          key={post.slug} 
          post={post}
          index={index}
        />
      ))}
    </div>
  );
}
