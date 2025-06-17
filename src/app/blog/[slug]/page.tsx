import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaUser, FaTag } from 'react-icons/fa';
import { Metadata, ResolvingMetadata } from 'next';
import { allBlogPosts } from '@/lib/blog-data';
import { getRelatedPosts } from '@/lib/blog-utils';
import { getImagePath } from '@/lib/image-utils';
import EnhancedShareButtons from '@/components/blog/EnhancedShareButtons';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ScrollToTop from '@/components/ui/ScrollToTop';
import OptimizedImage from '@/components/ui/OptimizedImage';
import TableOfContents from '@/components/blog/TableOfContents';
import EnhancedReadingProgress from '@/components/ui/EnhancedReadingProgress';

// Type for the page props
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the blog post
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Get the parent metadata (to inherit any default values)
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: post.author,
    },
    other: {
      'article:published_time': post.date,
      'article:author': post.author,
      'article:tags': post.tags.join(','),
    },
  };
}

// The main page component
export default async function BlogPost({ params }: Props) {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  // Handle 404
  if (!post) {
    notFound();
  }

  // Get related posts based on tags and category
  const relatedPosts = getRelatedPosts(post, allBlogPosts, 3);

  // Mock headings for table of contents
  const mockHeadings = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'key-points', text: `Key Points About ${post.title.split(':')[0]}`, level: 2 },
    { id: 'important-considerations', text: 'Important Considerations', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollToTop />
      <EnhancedReadingProgress showPercentage={true} color="primary" height={4} />
      <article className="mx-auto max-w-4xl">
        {/* Post Header */}
        <header className="mb-10">
          <Link 
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="mb-4 inline-block text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            {post.category}
          </Link>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <FaUser className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-10 overflow-hidden rounded-lg">
          <OptimizedImage
            src={getImagePath(post.image)}
            alt={post.title}
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            animateIn={true}
            showLoadingEffect={true}
          />
        </div>

        {/* Article layout with table of contents */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {/* Table of Contents - Visible on large screens */}
          <div className="sticky top-24 hidden h-fit lg:block">
            <TableOfContents headings={mockHeadings} />
          </div>

          {/* Post Content */}
          <div className="prose prose-lg mx-auto dark:prose-invert lg:col-span-3">
            {/* This would normally be rendered MDX content */}
            <p id="introduction" className="lead">
              {post.excerpt}
            </p>
            
            <p>
              This is a placeholder for the actual blog post content. In a real application, 
              this would be MDX content rendered from the file. For this demo, we're just displaying 
              some placeholder text.
            </p>
            
            <h2 id="key-points">Key Points About {post.title.split(':')[0]}</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              velit vel bibendum bibendum, velit nisl bibendum nisl, vel bibendum nisl 
              velit vel bibendum. Sed euismod, velit vel bibendum bibendum, velit nisl 
              bibendum nisl, vel bibendum nisl velit vel bibendum.
            </p>
            
            <h3 id="important-considerations">Important Considerations</h3>
            
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
              cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper 
              sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur 
              aliquet quam id dui posuere blandit.
            </p>
            
            <ul>
              <li>First important point about motorcycles</li>
              <li>Second crucial consideration for riders</li>
              <li>Third element that every enthusiast should know</li>
              <li>Fourth factor that impacts your riding experience</li>
            </ul>
            
            <p>
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere 
              blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non 
              nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            
            <h2 id="conclusion">Conclusion</h2>
            
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus 
              magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur 
              non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor 
              lectus nibh.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">Tags:</span>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium hover:bg-primary-100 hover:text-primary-700 dark:bg-slate-800 dark:hover:bg-primary-900 dark:hover:text-primary-300"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="mt-10 border-t border-border pt-10">
          <EnhancedShareButtons title={post.title} slug={post.slug} />
        </div>
        
        {/* Author Bio */}
        <div className="mt-10 border-t border-border pt-10">
          <AuthorBio name={post.author} />
        </div>
      </article>

      {/* Related Posts */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}
