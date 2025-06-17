"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaFilter, FaSortAlphaDown, FaHistory } from 'react-icons/fa';
import SearchAutocomplete from './SearchAutocomplete';

interface EnhancedAdvancedSearchProps {
  initialQuery?: string;
  initialCategory?: string;
  initialTag?: string;
  initialSort?: 'date' | 'popular' | 'title';
  categories: string[];
  tags: string[];
}

export default function EnhancedAdvancedSearch({
  initialQuery = '',
  initialCategory = '',
  initialTag = '',
  initialSort = 'date',
  categories,
  tags,
}: EnhancedAdvancedSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [isOpen, setIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularTags, setPopularTags] = useState<{tag: string, count: number}[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches).slice(0, 5));
      } catch (e) {
        console.error('Error parsing recent searches:', e);
      }
    }

    // Calculate popular tags (in a real app, this would come from the backend)
    const tagCounts = tags.map(tag => ({
      tag,
      count: Math.floor(Math.random() * 20) + 1 // Mock count for demo
    })).sort((a, b) => b.count - a.count).slice(0, 5);
    
    setPopularTags(tagCounts);
  }, [tags]);

  // Apply filters and update URL
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (query) {
      params.set('q', query);
      // Save to recent searches
      const newSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(newSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newSearches));
    } else {
      params.delete('q');
    }
    
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
          <SearchAutocomplete />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 rounded-lg border border-border px-4 py-2 transition-colors hover:bg-accent ${
            showFilters ? 'bg-accent' : ''
          }`}
        >
          <FaFilter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 rounded-lg border border-border bg-background p-6 shadow-lg"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Filter Options</h3>
                <div className="space-y-4">
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
                      <option value="title">Title (A-Z)</option>
                      <option value="popular">Most Popular</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Filters</h3>
                
                {/* Popular Tags */}
                <div className="mb-6">
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(({tag, count}) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(tag.toLowerCase());
                          applyFilters();
                        }}
                        className="flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs hover:bg-primary-100 hover:text-primary-700 dark:bg-slate-800 dark:hover:bg-primary-900 dark:hover:text-primary-300"
                      >
                        {tag} <span className="ml-1 text-muted-foreground">({count})</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-muted-foreground">Recent Searches</h4>
                    <div className="space-y-1">
                      {recentSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => {
                            setQuery(search);
                            applyFilters();
                          }}
                          className="flex w-full items-center rounded-lg px-2 py-1 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <FaHistory className="mr-2 h-3 w-3 text-muted-foreground" />
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-2">
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
                Reset All
              </button>
              <button
                onClick={applyFilters}
                className="rounded-md bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-600"
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