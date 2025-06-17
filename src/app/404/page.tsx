import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8 text-9xl font-bold text-primary-500">404</div>
      <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
        >
          <FaHome className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-medium transition-all hover:bg-accent"
        >
          <FaSearch className="mr-2 h-4 w-4" />
          Browse Articles
        </Link>
      </div>
    </div>
  );
}