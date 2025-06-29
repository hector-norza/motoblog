import { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import EnhancedAdvancedSearch from '@/components/blog/EnhancedAdvancedSearch';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { allBlogPosts } from '@/lib/blog-data';
import InfiniteBlogPage from './InfiniteBlogPage';

export const metadata: Metadata = {
  title: 'Motorcycle Blog | Tips, Reviews & Stories | MotoBlog',
  description: 'Explore our comprehensive collection of motorcycle articles, buying guides, maintenance tips, gear reviews, and riding stories.',
  openGraph: {
    title: 'Motorcycle Blog | Tips, Reviews & Stories | MotoBlog',
    description: 'Explore our comprehensive collection of motorcycle articles, buying guides, maintenance tips, gear reviews, and riding stories.',
    type: 'website',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
    tag?: string;
    q?: string;
    sort?: 'date' | 'popular' | 'title';
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // Parse search params with defaults
  const currentPage = Math.max(1, Number(searchParams.page) || 1);
  const category = searchParams.category?.toLowerCase();
  const tag = searchParams.tag?.toLowerCase();
  const searchQuery = searchParams.q?.toLowerCase();
  const sort = searchParams.sort || 'date';
  
  const POSTS_PER_PAGE = 9;
  
  // Get all posts and sort them
  let filteredPosts = [...allBlogPosts];
  
  // Apply sorting
  switch (sort) {
    case 'date':
      filteredPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
      break;
    case 'popular':
      // Since we don't track views, fall back to title sort
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
  
  // Get initial posts for the first page
  const initialPosts = filteredPosts.slice(0, POSTS_PER_PAGE);

  // Generate categories and tags metadata
  const categories = Array.from(new Set(allBlogPosts.map(post => post.category)));
  const tags = Array.from(new Set(allBlogPosts.flatMap(post => post.tags || [])));
  
  // Generate category and tag counts
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = allBlogPosts.filter(post => post.category === cat).length;
    return acc;
  }, {} as Record<string, number>);
  
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = allBlogPosts.filter(post => post.tags?.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);

  // Use the client component for infinite scrolling
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Import the client component for infinite scrolling */}
      <div className="mb-8">
        <h1 className="mb-4 font-display text-4xl font-bold">Blog</h1>
        <EnhancedAdvancedSearch 
          initialQuery={searchQuery}
          initialCategory={category}
          initialTag={tag}
          initialSort={sort}
          categories={categories}
          tags={tags}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="mb-6 lg:col-span-3">
          {initialPosts.length > 0 ? (
            <div className="animate-fade-in">
              {/* @ts-expect-error Server Component */}
              <InfiniteBlogPage
                initialPosts={initialPosts}
                categories={categories}
                tags={tags}
                categoryCounts={categoryCounts}
                tagCounts={tagCounts}
              />
            </div>
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
