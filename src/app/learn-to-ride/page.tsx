import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { allBlogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Learn to Ride | MotoBlog',
  description: 'Beginner guides and resources to help you start your motorcycle journey safely and confidently.',
};

export default function LearnToRidePage() {
  // Filter posts related to "Learn to Ride" category
  const learnToRidePosts = allBlogPosts.filter(
    (post) => post.category === 'Learn to Ride'
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="relative h-80">
          <Image
            src="/images/learn-to-ride-header.jpg"
            alt="Learning to ride a motorcycle"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-3xl px-6 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Learn to Ride</h1>
            <p className="text-lg md:text-xl">
              Your comprehensive guide to starting your motorcycle journey safely and confidently.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-3xl font-bold">Getting Started with Motorcycling</h2>
        <p className="mb-4 text-lg text-muted-foreground">
          Learning to ride a motorcycle is an exciting journey that opens up a world of freedom and adventure. 
          Whether you're drawn to the efficiency, the community, or the pure joy of riding, we're here to help 
          you start safely and build your skills confidently.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          This comprehensive guide covers everything from choosing your first bike to mastering essential 
          techniques, with safety always as our top priority.
        </p>
        
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="#licensing"
            className="flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Licensing & Training
          </Link>
          <Link
            href="#first-bike"
            className="flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Choosing Your First Bike
          </Link>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-4xl">
        {/* Licensing Section */}
        <section id="licensing" className="mb-16 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Licensing & Training</h2>
              <p className="mb-4">
                Before hitting the road, you'll need the proper license and training. The requirements 
                vary by location, but most places require a motorcycle endorsement or separate license.
              </p>
              <h3 className="mb-2 text-xl font-semibold">Basic Steps:</h3>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Check your local DMV requirements</li>
                <li>Take a motorcycle safety foundation (MSF) course</li>
                <li>Practice in safe, controlled environments</li>
                <li>Get your permit and/or license</li>
              </ol>
              <p className="mt-4">
                We strongly recommend taking a professional riding course, even if it's not required 
                in your area. These courses teach essential skills and safety practices that can save your life.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/images/motorcycle-training.jpg"
                alt="Motorcycle training course"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* First Bike Section */}
        <section id="first-bike" className="mb-16 scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/images/beginner-motorcycle.jpg"
                alt="Beginner motorcycle"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-4 text-2xl font-bold">Choosing Your First Bike</h2>
              <p className="mb-4">
                Your first motorcycle should match your size, skill level, and intended use. Starting with 
                a smaller, lighter bike allows you to build confidence and skills safely.
              </p>
              <h3 className="mb-2 text-xl font-semibold">Key Considerations:</h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Engine size: 300-500cc is ideal for most beginners</li>
                <li>Weight: Choose a bike you can confidently handle</li>
                <li>Riding position: Upright is most comfortable for learning</li>
                <li>Height: You should be able to place both feet firmly on the ground</li>
                <li>New vs. used: Consider a used bike for your learning period</li>
              </ul>
              <p className="mt-4">
                Remember, your first bike probably won't be your forever bike. Focus on learning safely, 
                then upgrade as your skills and preferences develop.
              </p>
            </div>
          </div>
        </section>

        {/* Essential Gear Section */}
        <section id="gear" className="mb-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold">Essential Gear for New Riders</h2>
          <p className="mb-6">
            Proper gear isn't just about comfort—it's about safety. Always wear full protective gear, 
            regardless of the weather or distance.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Helmet</h3>
              <p>
                The most critical piece of gear. Choose a full-face helmet with DOT, ECE, or Snell certification. 
                Ensure proper fit—it should be snug but comfortable.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Jacket</h3>
              <p>
                Look for abrasion-resistant materials with armor at the shoulders, elbows, and back. 
                Consider weather appropriate options (mesh for summer, waterproof for rain).
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Gloves</h3>
              <p>
                Protect your hands with full-finger motorcycle gloves featuring knuckle protection and palm reinforcement. 
                They should fit snugly without restricting movement.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Pants</h3>
              <p>
                Motorcycle-specific pants or jeans with kevlar reinforcement and knee/hip armor. 
                Regular jeans offer almost no protection in a slide.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Boots</h3>
              <p>
                Choose boots that cover your ankles with reinforced areas for shifting and sturdy soles. 
                They should offer good grip and ankle support.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="mb-3 text-xl font-semibold">Eye Protection</h3>
              <p>
                If not using a full-face helmet, quality riding glasses or a face shield is essential. 
                Consider anti-fog and UV protection features.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Articles */}
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold">Learn to Ride Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnToRidePosts.map((post) => (
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
