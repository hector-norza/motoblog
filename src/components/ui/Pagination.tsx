"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  queryParams?: {
    [key: string]: string | undefined;
  };
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  queryParams = {}
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Create a new URLSearchParams instance to modify
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Update or remove page parameter
    if (pageNumber === 1) {
      params.delete('page');
    } else {
      params.set('page', pageNumber.toString());
    }
    
    // Keep all other query parameters
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    
    const query = params.toString();
    return `${baseUrl}${query ? `?${query}` : ''}`;
  };
  
  // Generate page numbers array with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Always show first page
    pages.push(1);
    
    if (currentPage > 3) {
      pages.push('...');
    }
    
    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }
    
    // Always show last page
    pages.push(totalPages);
    
    return pages;
  };
  
  if (totalPages <= 1) return null;
  
  return (
    <nav className="mt-10 flex items-center justify-center" role="navigation" aria-label="Pagination">
      <ul className="flex items-center space-x-1">
        {/* Previous page button */}
        <li>
          <Link
            href={currentPage > 1 ? createPageURL(currentPage - 1) : '#'}
            className={`flex h-10 w-10 items-center justify-center rounded-md ${
              currentPage === 1
                ? 'pointer-events-none text-muted-foreground'
                : 'hover:bg-accent'
            }`}
            aria-disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <FaChevronLeft className="h-4 w-4" />
          </Link>
        </li>
        
        {/* Page number links */}
        {getPageNumbers().map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <li key={`ellipsis-${index}`} className="px-2">
                <span className="text-muted-foreground">...</span>
              </li>
            );
          }
          
          const isCurrentPage = pageNumber === currentPage;
          
          return (
            <li key={pageNumber}>
              <Link
                href={createPageURL(pageNumber as number)}
                className={`flex h-10 w-10 items-center justify-center rounded-md ${
                  isCurrentPage
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                }`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}
        
        {/* Next page button */}
        <li>
          <Link
            href={currentPage < totalPages ? createPageURL(currentPage + 1) : '#'}
            className={`flex h-10 w-10 items-center justify-center rounded-md ${
              currentPage === totalPages
                ? 'pointer-events-none text-muted-foreground'
                : 'hover:bg-accent'
            }`}
            aria-disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <FaChevronRight className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
