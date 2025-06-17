import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motorcycle Gear Reviews | MotoBlog',
  description: 'Expert reviews of motorcycle helmets, jackets, gloves, boots, and accessories to help you choose the best gear for your riding style.',
  openGraph: {
    title: 'Motorcycle Gear Reviews | MotoBlog',
    description: 'Expert reviews of motorcycle helmets, jackets, gloves, boots, and accessories to help you choose the best gear for your riding style.',
    type: 'website',
    url: '/gear-reviews',
  },
};

export default function GearReviewsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 py-20 text-white">
          <div className="absolute inset-0 bg-[url('/images/gear-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Motorcycle Gear Reviews
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Honest, in-depth reviews of motorcycle gear to keep you safe, comfortable, and looking good on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">Why Quality Gear Matters</h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Good motorcycle gear isn't just about looking cool—it's about protection, comfort, and enhancing your riding experience.
            Our reviews help you invest wisely in gear that fits your riding style, budget, and safety needs.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Safety</h3>
              <p className="text-muted-foreground">The right gear can be the difference between a minor fall and a hospital visit. We prioritize safety in all our reviews.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Durability</h3>
              <p className="text-muted-foreground">Quality gear is an investment that lasts for years. Our long-term testing helps identify products that stand the test of time.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Value</h3>
              <p className="text-muted-foreground">We evaluate gear at all price points to help you find the best value for your specific needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-center font-display text-3xl font-bold">Featured Gear Reviews</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
          Our hands-on testing process ensures you get honest, unbiased reviews of the latest motorcycle gear.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => (
            <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${review.image})` }}></div>
                <div className="absolute right-3 top-3 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white">
                  {review.rating}/10
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent px-2.5 py-0.5">{review.category}</span>
                  <span className="mx-2">•</span>
                  <span>{review.date}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold group-hover:text-primary-500">{review.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{review.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 h-7 w-7 overflow-hidden rounded-full bg-muted">
                      <img src={review.authorImage} alt={review.author} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm font-medium">{review.author}</span>
                  </div>
                  <p className="flex items-center text-sm font-medium text-primary">
                    Read Review
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-md bg-primary px-5 py-2.5 font-medium text-white shadow-sm hover:bg-primary-600">
            View All Gear Reviews
          </button>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-2xl bg-accent p-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-display text-3xl font-bold">Gear Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {gearCategories.map((category, index) => (
                <div key={index} className="rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30">
                    <div dangerouslySetInnerHTML={{ __html: category.icon }} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">{category.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <p className="inline-flex items-center text-sm font-medium text-primary">
                    Browse {category.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-display text-3xl font-bold">Our Review Process</h2>
          <p className="mb-10 text-center text-lg text-muted-foreground">
            We're committed to fair, thorough, and honest reviews. Here's how we test motorcycle gear:
          </p>
          <div className="relative space-y-12">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border"></div>
            {reviewProcess.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className={`absolute left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white md:relative md:left-auto md:translate-x-0 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                    {index + 1}
                  </div>
                </div>
                <div className={`mt-8 rounded-lg border border-border bg-card p-6 shadow-sm md:mt-0 md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-first'}`}>
                  <h3 className="mb-2 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-primary-500/90 to-primary-600 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Got Gear Questions?</h2>
          <p className="mb-6 text-lg text-white/90">
            Not sure what gear is right for you? Have specific questions about a product? Our gear experts are here to help.
          </p>
          <button className="rounded-md bg-white px-5 py-2.5 font-medium text-primary-600 shadow-sm hover:bg-white/90">
            Ask Our Experts
          </button>
        </div>
      </section>
    </main>
  );
}

// Sample data for featured reviews
const featuredReviews = [
  {
    title: 'Shoei RF-1400 Helmet Review',
    description: 'An in-depth look at Shoei\'s latest premium helmet that combines safety, comfort, and aerodynamics in a sleek package.',
    image: '/images/helmet-review.jpg',
    rating: 9.2,
    category: 'Helmets',
    date: 'Oct 15, 2023',
    author: 'Mike Johnson',
    authorImage: '/images/authors/mike.jpg',
  },
  {
    title: 'Dainese Avro 4 Leather Jacket',
    description: 'This premium sport riding jacket offers excellent protection, comfort, and Italian style for serious motorcyclists.',
    image: '/images/jacket-review.jpg',
    rating: 8.8,
    category: 'Jackets',
    date: 'Sep 28, 2023',
    author: 'Sarah Chen',
    authorImage: '/images/authors/sarah.jpg',
  },
  {
    title: 'Alpinestars SMX-6 v2 Boots',
    description: 'These mid-range sport boots provide excellent ankle protection and all-day comfort for street and track riding.',
    image: '/images/boots-review.jpg',
    rating: 8.5,
    category: 'Footwear',
    date: 'Oct 2, 2023',
    author: 'James Wilson',
    authorImage: '/images/authors/james.jpg',
  },
  {
    title: 'REV\'IT! Dominator GTX Gloves',
    description: 'Premium adventure touring gloves with GORE-TEX waterproofing and excellent protection for all-season riding.',
    image: '/images/gloves-review.jpg',
    rating: 9.0,
    category: 'Gloves',
    date: 'Sep 10, 2023',
    author: 'Emma Roberts',
    authorImage: '/images/authors/emma.jpg',
  },
  {
    title: 'Cardo Packtalk Edge Communicator',
    description: 'The latest premium mesh communicator from Cardo offers excellent sound quality and improved battery life.',
    image: '/images/comm-review.jpg',
    rating: 8.7,
    category: 'Electronics',
    date: 'Oct 7, 2023',
    author: 'David Kim',
    authorImage: '/images/authors/david.jpg',
  },
  {
    title: 'Kriega R30 Backpack',
    description: 'A premium motorcycle-specific backpack with excellent weight distribution and waterproofing for daily commuting or touring.',
    image: '/images/backpack-review.jpg',
    rating: 9.3,
    category: 'Luggage',
    date: 'Sep 22, 2023',
    author: 'Lisa Tran',
    authorImage: '/images/authors/lisa.jpg',
  },
];

// Sample data for gear categories
const gearCategories = [
  {
    name: 'Helmets',
    description: 'From full-face to modular, find the perfect helmet for your riding style and head shape.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
  },
  {
    name: 'Jackets',
    description: 'Leather, textile, and mesh jackets for protection in all seasons and riding conditions.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>',
  },
  {
    name: 'Gloves',
    description: 'Protect your hands with options for summer, winter, or all-season riding.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>',
  },
  {
    name: 'Footwear',
    description: 'Motorcycle-specific boots and shoes that combine protection with all-day comfort.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',
  },
];

// Sample data for review process
const reviewProcess = [
  {
    title: 'Real-World Testing',
    description: 'We test gear in real riding conditions, putting each product through its paces on daily commutes, weekend rides, and long tours.',
  },
  {
    title: 'Long-Term Evaluation',
    description: 'Unlike many reviews, we don\'t just test for a day. Our reviews include feedback after weeks or months of use to assess durability.',
  },
  {
    title: 'Multiple Testers',
    description: 'When possible, we have multiple riders with different body types and riding styles test the same gear for more comprehensive feedback.',
  },
  {
    title: 'Transparent Scoring',
    description: 'Our 10-point rating system evaluates protection, comfort, features, build quality, and value to help you make informed decisions.',
  },
];
