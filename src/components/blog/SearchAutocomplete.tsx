"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaHistory, FaTimes } from 'react-icons/fa';

interface SearchResult {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory).slice(0, 5));
      } catch (e) {
        console.error('Error parsing search history:', e);
      }
    }
  }, []);

  // Handle clicks outside the search component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality with debounce
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchPosts = async () => {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      // For now, we'll simulate a search with a timeout
      setTimeout(() => {
        // Mock results based on query
        const mockResults = [
          {
            title: `Best ${query} Motorcycles for Beginners`,
            slug: `best-${query.toLowerCase()}-motorcycles`,
            excerpt: `A comprehensive guide to the best ${query} motorcycles for new riders.`,
            category: 'Buying Guides'
          },
          {
            title: `How to Maintain Your ${query} Motorcycle`,
            slug: `${query.toLowerCase()}-maintenance`,
            excerpt: `Learn essential maintenance tips for your ${query} motorcycle.`,
            category: 'Maintenance & DIY'
          },
          {
            title: `${query} Riding Techniques for Advanced Riders`,
            slug: `advanced-${query.toLowerCase()}-techniques`,
            excerpt: `Master these ${query} riding techniques to take your skills to the next level.`,
            category: 'Learn to Ride'
          },
        ];
        
        setResults(mockResults);
        setIsLoading(false);
      }, 300);
    };

    const debounceTimer = setTimeout(() => {
      searchPosts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    // Save to search history
    const newHistory = [searchQuery, ...searchHistory.filter(item => item !== searchQuery)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    
    // Navigate to search results page
    router.push(`/blog?q=${encodeURIComponent(searchQuery)}`);
    setShowResults(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search articles..."
          className="w-full rounded-xl border border-input/50 bg-white/50 pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground shadow-sm transition-all focus:border-primary-500/50 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/50 dark:focus:bg-slate-900"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
          <FaSearch className="h-4 w-4" />
        </div>
      </form>

      <AnimatePresence>
        {showResults && (query.length >= 2 || searchHistory.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 mt-2 w-full rounded-xl border border-border bg-white/90 backdrop-blur-sm shadow-lg dark:bg-slate-900/90"
          >
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-500 border-t-transparent"></div>
                <span className="ml-2 text-sm text-muted-foreground">Searching...</span>
              </div>
            )}

            {!isLoading && query.length >= 2 && results.length > 0 && (
              <div className="p-2">
                <h3 className="px-3 py-2 text-xs font-semibold uppercase text-muted-foreground">Search Results</h3>
                <ul className="space-y-1">
                  {results.map((result) => (
                    <li key={result.slug}>
                      <button
                        onClick={() => router.push(`/blog/${result.slug}`)}
                        className="w-full rounded-lg px-3 py-2 text-left hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{result.title}</span>
                          <span className="text-xs text-primary-500">{result.category}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{result.excerpt}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!isLoading && query.length >= 2 && results.length === 0 && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found for "{query}"
              </div>
            )}

            {searchHistory.length > 0 && (
              <div className="border-t border-border p-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground">Recent Searches</h3>
                  <button
                    onClick={clearHistory}
                    className="text-xs text-primary-500 hover:text-primary-600"
                  >
                    Clear
                  </button>
                </div>
                <ul className="space-y-1">
                  {searchHistory.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleSearch(item)}
                        className="flex w-full items-center rounded-lg px-3 py-2 text-left hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      >
                        <FaHistory className="mr-2 h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{item}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}