import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import EnhancedNewsletterForm from '@/components/ui/EnhancedNewsletterForm';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedIn from '@/components/home/FeaturedIn';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative aspect-[21/9] min-h-[600px] max-h-[800px] overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-motorcycle.jpg"
            alt="A motorcycle journey through scenic mountains"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" 
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Journey Begins
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                With Every Ride
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-gray-200 sm:text-xl">
              From beginner guides to expert tips, discover everything you need to 
              know about motorcycling. Join our community of passionate riders.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/learn-to-ride"
                className="group inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Start Your Journey
                <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Explore Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Optional decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
      </section>

      {/* Featured Articles Section */}
      <section className="bg-white py-16 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
            >
              View all articles <FaArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
          <FeaturedArticles />
        </div>
      </section>

      {/* Featured In Section */}
      <FeaturedIn />

      {/* Categories Grid */}
      <section className="bg-slate-50 py-16 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">Explore By Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] h-48 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay in the Loop</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Get the latest motorcycle guides, gear reviews, and riding tips delivered straight to your inbox.
          </p>
          <div className="mx-auto max-w-md">
            <EnhancedNewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

// Category data for the grid
const categories = [
  {
    title: 'Learn to Ride',
    slug: 'learn-to-ride',
    description: 'Beginner guides to get you started on two wheels.',
    image: '/images/learn-to-ride.jpg',
  },
  {
    title: 'Buying Guides',
    slug: 'buying-guides',
    description: 'Find your perfect motorcycle with expert advice.',
    image: '/images/buying-guides.jpg',
  },
  {
    title: 'Maintenance & DIY',
    slug: 'maintenance',
    description: 'Keep your bike in top condition with these DIY tips.',
    image: '/images/maintenance.jpg',
  },
  {
    title: 'Gear Reviews',
    slug: 'gear-reviews',
    description: 'Helmets, jackets, gloves, and more - reviewed by riders.',
    image: '/images/gear.jpg',
  },
  {
    title: 'Road Life Stories',
    slug: 'road-life',
    description: 'Tales from the open road and motorcycle adventures.',
    image: '/images/road-life.jpg',
  },
  {
    title: 'Blog',
    slug: 'blog',
    description: 'The latest articles, news, and updates from MotoBlog.',
    image: '/images/blog.jpg',
  },
];
