import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { allBlogPosts } from '@/lib/blog-data';
import { motorcycles } from '@/lib/motorcycle-data';
import DynamicMotorcycleShowcase from '@/components/buying-guides/DynamicMotorcycleShowcase';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Motorcycle Buying Guides | MotoBlog',
  description: 'Expert advice on choosing the perfect motorcycle for your needs, budget, and riding style.',
};

export default function BuyingGuidesPage() {
  // Filter posts related to "Buying Guides" category
  const buyingGuidesPosts = allBlogPosts.filter(
    (post) => post.category === 'Buying Guides'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollToTop />
      {/* Page Header */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="relative h-80">
          <Image
            src="/images/buying-guides-header.jpg"
            alt="Choosing a motorcycle at a dealership"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-3xl px-6 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Motorcycle Buying Guides</h1>
            <p className="text-lg md:text-xl">
              Expert advice on choosing the perfect motorcycle for your needs, budget, and riding style.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold">Finding Your Perfect Ride</h2>
        <p className="mb-4 text-lg text-muted-foreground">
          Purchasing a motorcycle is a significant investment, both financially and emotionally. Whether you're 
          buying your first bike or upgrading to something new, our comprehensive buying guides will help you 
          make informed decisions.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          We cover everything from understanding different motorcycle types to negotiating at dealerships, 
          with unbiased recommendations based on real-world testing and expert analysis.
        </p>
        
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="#motorcycle-types"
            className="flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Motorcycle Types
          </Link>
          <Link
            href="#buying-process"
            className="flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Buying Process
          </Link>
        </div>
      </div>

      {/* Motorcycle Showcase */}
      <section className="my-16">
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">Explore Motorcycle Models</h2>
          <p className="text-lg text-muted-foreground">
            Browse and filter through popular motorcycle models to find the perfect match for your riding style and experience level.
          </p>
        </div>
        
        <DynamicMotorcycleShowcase initialMotorcycles={motorcycles} />
      </section>

      {/* Content Sections */}
      <div className="mx-auto max-w-4xl">
        {/* Motorcycle Types Section */}
        <section id="motorcycle-types" className="mb-16 scroll-mt-24">
          <h2 className="mb-8 text-2xl font-bold">Understanding Motorcycle Types</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/sportbike.jpg"
                  alt="Sport motorcycle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Sport & Supersport</h3>
                <p className="mb-4 text-muted-foreground">
                  Built for speed and agility, featuring aerodynamic fairings, powerful engines, and forward-leaning riding positions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Excellent performance and handling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Cutting-edge technology</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Less comfortable for long rides</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Higher insurance costs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/cruiser.jpg"
                  alt="Cruiser motorcycle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Cruiser</h3>
                <p className="mb-4 text-muted-foreground">
                  Designed for relaxed riding with low seat heights, forward foot controls, and emphasis on style and comfort.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Comfortable for long distances</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Lower seat heights good for beginners</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Limited cornering ability</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Heavier than other bike types</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/adventure.jpg"
                  alt="Adventure motorcycle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Adventure</h3>
                <p className="mb-4 text-muted-foreground">
                  Versatile bikes designed for both on and off-road riding, with long-travel suspension and upright position.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Extremely versatile for various terrains</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Comfortable for long-distance touring</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Tall seat height challenging for shorter riders</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Heavier than dedicated dirt bikes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/naked.jpg"
                  alt="Naked/Standard motorcycle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Naked/Standard</h3>
                <p className="mb-4 text-muted-foreground">
                  Versatile motorcycles with minimal fairings, upright riding position, and balanced performance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Balanced performance and comfort</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-green-500"><FaCheck /></span>
                    <span>Great for commuting and weekend rides</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Limited wind protection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-red-500"><FaTimes /></span>
                    <span>Less specialized than other types</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Process Section */}
        <section id="buying-process" className="mb-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">The Motorcycle Buying Process</h2>
          <div className="space-y-8">
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-4 text-xl font-bold">Research Phase</h3>
              <ol className="ml-6 list-decimal space-y-3">
                <li>
                  <strong>Define your needs:</strong> Consider your experience level, primary use (commuting, touring, off-road), and physical fit.
                </li>
                <li>
                  <strong>Set your budget:</strong> Include costs for the motorcycle, gear, insurance, maintenance, and potential modifications.
                </li>
                <li>
                  <strong>Research models:</strong> Read professional reviews, owner experiences, and reliability reports for models you're interested in.
                </li>
                <li>
                  <strong>Compare specifications:</strong> Look at engine size, weight, seat height, maintenance requirements, and fuel efficiency.
                </li>
              </ol>
            </div>
            
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-4 text-xl font-bold">Shopping Phase</h3>
              <ol className="ml-6 list-decimal space-y-3">
                <li>
                  <strong>Test rides:</strong> Whenever possible, test ride the motorcycles on your shortlist to assess comfort and handling.
                </li>
                <li>
                  <strong>Inspect used bikes:</strong> If buying used, check for signs of crashes, leaks, tire wear, chain condition, and maintenance history.
                </li>
                <li>
                  <strong>Compare dealers:</strong> Research dealer reputations, after-sale service, and price flexibility.
                </li>
                <li>
                  <strong>Evaluate financing:</strong> Compare dealer financing with credit unions and banks to find the best terms.
                </li>
              </ol>
            </div>
            
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-4 text-xl font-bold">Negotiation & Purchase</h3>
              <ol className="ml-6 list-decimal space-y-3">
                <li>
                  <strong>Negotiate price:</strong> Research fair market values and be prepared to walk away if the deal isn't right.
                </li>
                <li>
                  <strong>Check for incentives:</strong> Manufacturers often offer rebates, low-interest financing, or free accessories.
                </li>
                <li>
                  <strong>Review paperwork:</strong> Carefully read all documents before signing, especially warranty terms and financing agreements.
                </li>
                <li>
                  <strong>Plan for delivery:</strong> Arrange transportation if you're not riding the bike home, and ensure you have proper insurance coverage.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      {/* Related Articles */}
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold">Buying Guide Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buyingGuidesPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold group-hover:text-primary-500">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs font-medium text-primary-500">{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
