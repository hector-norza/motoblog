'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <div className="mb-6 flex justify-center">
          <FaExclamationTriangle className="h-16 w-16 text-yellow-500" aria-hidden="true" />
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold">Something Went Wrong</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          We apologize for the inconvenience. An unexpected error has occurred.
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-2 rounded-md bg-red-50 dark:bg-red-900/10 p-4 text-sm text-red-600 dark:text-red-400">
              <pre className="overflow-x-auto">{error.message}</pre>
            </div>
          )}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center space-x-2 rounded-md bg-primary px-5 py-2.5 font-medium text-white shadow-sm hover:bg-primary-600 transition-colors"
            aria-label="Try again"
          >
            <FaRedo className="h-4 w-4" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 rounded-md border border-border bg-background px-5 py-2.5 font-medium shadow-sm hover:bg-accent transition-colors"
          >
            <FaHome className="h-4 w-4" aria-hidden="true" />
            <span>Go to Homepage</span>
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="mb-4 text-xl font-semibold">You can also visit:</h3>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <li>
              <Link href="/learn-to-ride" className="text-primary hover:underline transition-colors">
                Learn to Ride
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary hover:underline transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/maintenance" className="text-primary hover:underline transition-colors">
                Maintenance & DIY
              </Link>
            </li>
            <li>
              <Link href="/gear-reviews" className="text-primary hover:underline transition-colors">
                Gear Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
