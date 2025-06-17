"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { compareDesc } from 'date-fns';
import EnhancedAdvancedSearch from '@/components/blog/EnhancedAdvancedSearch';
import SimpleInfiniteScroll from '@/components/blog/SimpleInfiniteScroll';
import BlogSidebar from '@/components/blog/BlogSidebar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { allBlogPosts } from '@/lib/blog-data';

interface InfiniteBlogPageProps {
  initialPosts: typeof allBlogPosts;
  categories: string[];
  tags: string[];
  categoryCounts: Record<string, number>;
  tagCounts: Record<string, number>;
}

export default function InfiniteBlogPage({
  initialPosts,
  categories,
  tags,
  categoryCounts,
  tagCounts
}: InfiniteBlogPageProps) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category')?.toLowerCase() || '';
  const tag = searchParams.get('tag')?.toLowerCase() || '';
  const searchQuery = searchParams.get('q')?.toLowerCase() || '';
  const sort = searchParams.get('sort') || 'date';
  
  const POSTS_PER_PAGE = 9;
  
  // Filter and sort posts based on search params
  const filterPosts = (page: number) => {
    let filteredPosts = [...allBlogPosts];
    
    // Apply sorting
    switch (sort) {
      case 'date':
        filteredPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
        break;
      case 'popular':
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title':
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    // Apply filters
    if (category) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === category
      );
    }
    
    if (tag) {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(t => t.toLowerCase() === tag)
      );
    }
    
    if (searchQuery) {
      filteredPosts = filteredPosts.filter(post => {
        const searchFields = [
          post.title,
          post.excerpt,
          post.category,
          ...(post.tags || []),
        ].map(field => field?.toLowerCase());
        
        return searchFields.some(field => field?.includes(searchQuery));
      });
    }
    
    // Paginate results
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  };

  // Function to fetch more posts for infinite scrolling
  const fetchMorePosts = async (page: number) => {
    // In a real app, this would be an API call
    // For demo purposes, we're using the same data and simulating a delay
    return new Promise<typeof allBlogPosts>((resolve) => {
      setTimeout(() => {
        resolve(filterPosts(page));
      }, 800);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 font-display text-4xl font-bold">Blog</h1>
        <EnhancedAdvancedSearch 
          initialQuery={searchQuery}
          initialCategory={category}
          initialTag={tag}
          initialSort={sort as any}
          categories={categories}
          tags={tags}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="mb-6 lg:col-span-3">
          {initialPosts.length > 0 ? (
            <SimpleInfiniteScroll 
              initialPosts={initialPosts} 
              fetchMorePosts={fetchMorePosts} 
            />
          ) : (
            <div className="rounded-lg border border-border p-8 text-center">
              <h2 className="mb-2 text-xl font-semibold">No Posts Found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse our categories.
              </p>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <BlogSidebar
            currentCategory={category}
            currentTag={tag}
            categories={categories}
            tags={tags}
            categoryCounts={categoryCounts}
            tagCounts={tagCounts}
          />
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}