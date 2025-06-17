"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

interface BlogSearchProps {
  initialQuery?: string;
}

export default function BlogSearch({ initialQuery }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery || searchParams?.get('q') || '');

  // Update query state when initialQuery changes
  useEffect(() => {
    if (initialQuery !== undefined) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Preserve other query parameters
      const params = new URLSearchParams(searchParams?.toString());
      params.set('q', query);
      // Reset to page 1 when searching
      params.set('page', '1');
      router.push(`/blog?${params.toString()}`);
    } else {
      // Remove query parameter if search is cleared
      const params = new URLSearchParams(searchParams?.toString());
      params.delete('q');
      router.push(`/blog?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, guides, and more..."
          className="w-full rounded-md border border-input bg-background py-3 pl-10 pr-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        />
      </div>
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md bg-primary-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
}
