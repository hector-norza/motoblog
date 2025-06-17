"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaFilter, FaSortAlphaDown } from 'react-icons/fa';
import { allBlogPosts } from '@/lib/blog-data';

interface AdvancedSearchProps {
  initialQuery?: string;
  initialCategory?: string;
  initialTag?: string;
  initialSort?: 'date' | 'popular' | 'title';
  categories: string[];
  tags: string[];
}

export default function AdvancedSearch({
  initialQuery = '',
  initialCategory = '',
  initialTag = '',
  initialSort = 'date',
  categories,
  tags,
}: AdvancedSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [isOpen, setIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Apply filters and update URL
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (query) params.set('q', query);
    else params.delete('q');
    
    if (selectedCategory) params.set('category', selectedCategory);
    else params.delete('category');
    
    if (selectedTag) params.set('tag', selectedTag);
    else params.delete('tag');
    
    if (selectedSort !== 'date') params.set('sort', selectedSort);
    else params.delete('sort');
    
    // Reset to page 1 when filters change
    params.delete('page');
    
    router.push(`${pathname}?${params.toString()}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        inputRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full rounded-lg border border-border bg-background px-4 py-2 pr-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  applyFilters();
                }
              }}
            />
            <button
              onClick={() => {
                setQuery('');
                applyFilters();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {query ? <FaTimes /> : <FaSearch />}
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 rounded-lg border border-border px-4 py-2 transition-colors hover:bg-accent ${
            showFilters ? 'bg-accent' : ''
          }`}
        >
          <FaFilter />
          <span>Filters</span>
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 grid gap-4 rounded-lg border border-border bg-background p-4 shadow-lg"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block text-sm font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium">Tag</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                >
                  <option value="">All Tags</option>
                  {tags.map((tag) => (
                    <option key={tag} value={tag.toLowerCase()}>{tag}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium">Sort By</label>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value as any)}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                >
                  <option value="date">Latest First</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedTag('');
                  setSelectedSort('date');
                  setQuery('');
                  applyFilters();
                }}
                className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent"
              >
                Reset
              </button>
              <button
                onClick={applyFilters}
                className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary-600"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
