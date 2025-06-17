import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Road Life Stories | MotoBlog',
  description: 'Inspiring motorcycle travel stories, rider profiles, and adventures from around the world. Discover the freedom and joy of life on two wheels.',
  openGraph: {
    title: 'Road Life Stories | MotoBlog',
    description: 'Inspiring motorcycle travel stories, rider profiles, and adventures from around the world. Discover the freedom and joy of life on two wheels.',
    type: 'website',
    url: '/road-life',
  },
};

export default function RoadLifePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-orange-700 py-20 text-white">
          <div className="absolute inset-0 bg-[url('/images/road-life-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Road Life Stories
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Extraordinary tales of adventure, freedom, and connection from motorcyclists around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-display text-3xl font-bold">The Motorcyclist's Journey</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Road Life is about more than just riding—it's about the experiences, connections, and personal growth that come from a life on two wheels.
            Through stories of epic adventures, everyday rides, and the motorcyclists who live for the journey, we celebrate the unique lifestyle and
            community that motorcycling creates.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether you're a weekend warrior, a daily commuter, or a round-the-world adventurer, these stories remind us why we ride and inspire us
            to create our own unforgettable moments on the road.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-10 text-center font-display text-3xl font-bold">Featured Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredStories.slice(0, 2).map((story, index) => (
            <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${story.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="mb-2 font-display text-2xl font-bold">{story.title}</h3>
                  <p className="mb-3 text-white/90">{story.description}</p>
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                      <img src={story.authorImage} alt={story.author} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">{story.author}</p>
                      <p className="text-sm text-white/80">{story.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredStories.slice(2).map((story, index) => (
            <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-[3/2] w-full overflow-hidden">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${story.image})` }}></div>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent px-2.5 py-0.5">{story.category}</span>
                  <span className="mx-2">•</span>
                  <span>{story.date}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold group-hover:text-primary-500">{story.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{story.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 h-7 w-7 overflow-hidden rounded-full bg-muted">
                      <img src={story.authorImage} alt={story.author} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm font-medium">{story.author}</span>
                  </div>
                  <p className="flex items-center text-sm font-medium text-primary">
                    Read Story
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
            View All Stories
          </button>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold">Epic Routes & Destinations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {epicRoutes.map((route, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${route.image})` }}></div>
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <div className="mb-1 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{route.location}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold">{route.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {route.features.map((feature, i) => (
                      <span key={i} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{route.description}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-muted-foreground">{route.duration}</span>
                      </div>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-muted-foreground">{route.distance}</span>
                      </div>
                    </div>
                    <p className="flex items-center text-sm font-medium text-primary">
                      View Route
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-2xl bg-accent p-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center font-display text-3xl font-bold">Rider Profiles</h2>
            <p className="mb-10 text-center text-lg text-muted-foreground">
              Meet the passionate motorcyclists whose stories inspire and showcase the diversity of the riding community.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {riderProfiles.map((profile, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm md:flex-row">
                  <div className="aspect-square w-full overflow-hidden md:w-2/5">
                    <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="mb-1 font-display text-xl font-semibold">{profile.name}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{profile.title}</p>
                      <p className="mb-4 text-sm">{profile.bio}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {profile.bikes.map((bike, i) => (
                          <span key={i} className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                            {bike}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="flex items-center text-sm font-medium text-primary">
                      Read Full Profile
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">Motorcycling Philosophy</h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Reflections on the deeper meaning of motorcycling and how it transforms our perspective on life.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {philosophyPosts.map((post, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="mb-4 font-display text-xl font-semibold">{post.title}</h3>
                <p className="mb-6 text-muted-foreground">{post.content}</p>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                    <img src={post.authorImage} alt={post.author} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-primary-500/90 to-primary-600 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Share Your Road Life Story</h2>
          <p className="mb-6 text-lg text-white/90">
            Every motorcyclist has a story worth telling. We want to hear about your most memorable rides, the lessons you've learned,
            and the connections you've made through motorcycling.
          </p>
          <button className="rounded-md bg-white px-5 py-2.5 font-medium text-primary-600 shadow-sm hover:bg-white/90">
            Submit Your Story
          </button>
        </div>
      </section>
    </main>
  );
}

// Sample data for featured stories
const featuredStories = [
  {
    title: 'Across the Americas: 20,000 Miles Solo',
    description: 'One woman\'s journey from Alaska to Argentina on a Triumph Tiger 800, facing challenges and discovering the kindness of strangers.',
    image: '/images/stories/americas.jpg',
    author: 'Elena Rodriguez',
    authorImage: '/images/authors/elena.jpg',
    date: 'Oct 12, 2023',
    category: 'Adventure',
  },
  {
    title: 'Finding Peace on Two Wheels',
    description: 'How motorcycling became therapy for a veteran struggling with PTSD and helped him reconnect with himself and the world.',
    image: '/images/stories/veteran.jpg',
    author: 'Marcus Williams',
    authorImage: '/images/authors/marcus.jpg',
    date: 'Sep 30, 2023',
    category: 'Personal Journey',
  },
  {
    title: 'The Himalayan Highway',
    description: 'Navigating the treacherous roads of the Indian Himalayas on Royal Enfields, where danger and beauty exist in equal measure.',
    image: '/images/stories/himalaya.jpg',
    author: 'Raj Patel',
    authorImage: '/images/authors/raj.jpg',
    date: 'Oct 5, 2023',
    category: 'Adventure',
  },
  {
    title: 'Café Racer Culture in London',
    description: 'Inside the thriving urban motorcycle scene where vintage bikes, leather jackets, and community spirit come together.',
    image: '/images/stories/cafe-racer.jpg',
    author: 'Oliver Bennett',
    authorImage: '/images/authors/oliver.jpg',
    date: 'Sep 25, 2023',
    category: 'Culture',
  },
  {
    title: 'From Novice to Iron Butt',
    description: 'How a casual weekend rider trained and prepared to complete the grueling 1,000-mile-in-24-hours Iron Butt challenge.',
    image: '/images/stories/iron-butt.jpg',
    author: 'Samantha Lee',
    authorImage: '/images/authors/samantha.jpg',
    date: 'Oct 8, 2023',
    category: 'Endurance',
  },
];

// Sample data for epic routes
const epicRoutes = [
  {
    name: 'Pacific Coast Highway',
    location: 'California, USA',
    image: '/images/routes/pch.jpg',
    description: 'Experience 650 miles of stunning coastal views as you ride from San Francisco to San Diego on one of America\'s most iconic roads.',
    features: ['Coastal Views', 'Twisty Roads', 'Iconic Bridges'],
    duration: '3-5 days',
    distance: '650 miles',
  },
  {
    name: 'The Great Ocean Road',
    location: 'Victoria, Australia',
    image: '/images/routes/great-ocean.jpg',
    description: 'Wind along Australia\'s southern coast past limestone cliffs, rainforests, and the famous Twelve Apostles rock formations.',
    features: ['Ocean Views', 'Wildlife', 'Natural Wonders'],
    duration: '2-3 days',
    distance: '243 miles',
  },
  {
    name: 'Transfăgărășan Highway',
    location: 'Romania',
    image: '/images/routes/transfagarasan.jpg',
    description: 'Climb the twisting roads of the Carpathian Mountains on what Top Gear called "the best road in the world."',
    features: ['Mountain Passes', 'Hairpin Turns', 'Alpine Lakes'],
    duration: '1-2 days',
    distance: '56 miles',
  },
  {
    name: 'Route 66',
    location: 'USA',
    image: '/images/routes/route66.jpg',
    description: 'Experience the ultimate American road trip along the historic Mother Road from Chicago to Santa Monica.',
    features: ['Historic Sites', 'Small Towns', 'Desert Landscapes'],
    duration: '2-3 weeks',
    distance: '2,448 miles',
  },
  {
    name: 'The North Coast 500',
    location: 'Scotland, UK',
    image: '/images/routes/nc500.jpg',
    description: 'Circle the northernmost coastline of Scotland through rugged landscapes, ancient castles, and charming villages.',
    features: ['Coastal Roads', 'Historical Sites', 'Highland Scenery'],
    duration: '5-7 days',
    distance: '516 miles',
  },
  {
    name: 'Amalfi Coast Road',
    location: 'Italy',
    image: '/images/routes/amalfi.jpg',
    description: 'Hug the cliffside roads of Italy\'s most beautiful coastline, passing through picturesque villages and Mediterranean vistas.',
    features: ['Coastal Views', 'Cultural Sites', 'Italian Cuisine'],
    duration: '1-2 days',
    distance: '43 miles',
  },
];

// Sample data for rider profiles
const riderProfiles = [
  {
    name: 'Maria Santiago',
    title: 'Round-the-World Adventurer',
    image: '/images/riders/maria.jpg',
    bio: 'Former software engineer who quit her job to circumnavigate the globe on her motorcycle. Three years and 60,000 miles later, she\'s still on the road.',
    bikes: ['BMW R 1250 GS Adventure', 'Ducati Scrambler'],
  },
  {
    name: 'Robert Chen',
    title: 'Vintage Motorcycle Restorer',
    image: '/images/riders/robert.jpg',
    bio: 'Mechanical engineer by day, vintage motorcycle restorer by night. Specializes in bringing Japanese classics from the 1970s back to life.',
    bikes: ['Honda CB750 (1975)', 'Kawasaki Z1 (1973)', 'Triumph Bonneville T120 (1968)'],
  },
  {
    name: 'Aisha Washington',
    title: 'Motorcycle Safety Instructor',
    image: '/images/riders/aisha.jpg',
    bio: 'Professional racer turned MSF instructor who has taught over 2,000 new riders. Passionate about bringing more diversity to motorcycling.',
    bikes: ['Yamaha MT-09', 'Kawasaki Ninja ZX-6R', 'Honda Rebel 500'],
  },
  {
    name: 'Carlos Mendez',
    title: 'Moto-Vlogger & Journalist',
    image: '/images/riders/carlos.jpg',
    bio: 'Creator of the popular YouTube channel "Two Wheels One Life" with over 500,000 subscribers. Known for in-depth bike reviews and travel documentaries.',
    bikes: ['KTM 790 Adventure', 'Harley-Davidson Street Glide', 'Husqvarna Svartpilen 401'],
  },
];

// Sample data for philosophy posts
const philosophyPosts = [
  {
    title: 'The Zen of Motorcycle Maintenance',
    content: 'The meditative quality of working on your own motorcycle creates a direct connection between rider and machine that transcends mere transportation. When you understand how each part works together, you develop a deeper appreciation for the engineering marvel beneath you.',
    author: 'Dr. Jonathan Reid',
    role: 'Philosophy Professor & Lifelong Rider',
    authorImage: '/images/authors/jonathan.jpg',
  },
  {
    title: 'Why We Take the Risk',
    content: 'Non-riders often ask why we accept the dangers of motorcycling. The answer lies not in recklessness but in the heightened state of awareness and presence that riding demands. On a motorcycle, you don\'t just travel through the world—you experience it with all your senses.',
    author: 'Michelle Chang',
    role: 'Author & Adventure Rider',
    authorImage: '/images/authors/michelle.jpg',
  },
  {
    title: 'The Freedom of the Open Road',
    content: 'There\'s a unique freedom that comes with motorcycling—the ability to change direction on a whim, to take the unmarked road, to stop whenever something catches your eye. This spontaneity reconnects us with the joy of discovery that adult life often diminishes.',
    author: 'Thomas Walker',
    role: 'Travel Photographer',
    authorImage: '/images/authors/thomas.jpg',
  },
  {
    title: 'The Motorcycle as a Social Equalizer',
    content: 'When riders gather, the usual social barriers dissolve. Executives and blue-collar workers, young and old, people of all backgrounds find common ground in their shared passion. Few other pursuits create such instant camaraderie among strangers.',
    author: 'Lisa Johnson',
    role: 'Sociologist & Motorcycle Club Organizer',
    authorImage: '/images/authors/lisa.jpg',
  },
];
