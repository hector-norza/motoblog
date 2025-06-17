import Link from 'next/link';
import { Metadata } from 'next';

// Add metadata for the 404 page
export const metadata: Metadata = {
  title: 'Page Not Found | MotoBlog',
  description: 'The page you\'re looking for doesn\'t exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <h1 className="mb-6 font-display text-6xl font-bold">404</h1>
        <h2 className="mb-4 font-display text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on the road.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/"
            className="rounded-md bg-primary px-5 py-2.5 font-medium text-white shadow-sm hover:bg-primary-600 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-border bg-background px-5 py-2.5 font-medium shadow-sm hover:bg-accent transition-colors"
          >
            Explore Blog
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="mb-4 text-xl font-semibold">Popular Pages</h3>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <li>
              <Link href="/learn-to-ride" className="text-primary hover:underline">
                Learn to Ride
              </Link>
            </li>
            <li>
              <Link href="/buying-guides" className="text-primary hover:underline">
                Buying Guides
              </Link>
            </li>
            <li>
              <Link href="/maintenance" className="text-primary hover:underline">
                Maintenance & DIY
              </Link>
            </li>
            <li>
              <Link href="/gear-reviews" className="text-primary hover:underline">
                Gear Reviews
              </Link>
            </li>
            <li>
              <Link href="/road-life" className="text-primary hover:underline">
                Road Life
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
