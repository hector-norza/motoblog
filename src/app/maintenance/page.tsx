import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motorcycle Maintenance & DIY | MotoBlog',
  description: 'Learn essential motorcycle maintenance skills and DIY projects to keep your bike running at its best. Step-by-step guides for all skill levels.',
  openGraph: {
    title: 'Motorcycle Maintenance & DIY | MotoBlog',
    description: 'Learn essential motorcycle maintenance skills and DIY projects to keep your bike running at its best. Step-by-step guides for all skill levels.',
    type: 'website',
    url: '/maintenance',
  },
};

export default function MaintenancePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
          <div className="absolute inset-0 bg-[url('/images/maintenance-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Motorcycle Maintenance & DIY
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Master the essential skills to maintain your motorcycle and save money with our comprehensive DIY guides.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center font-display text-3xl font-bold">Why Maintenance Matters</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Regular maintenance is crucial for keeping your motorcycle safe, reliable, and performing at its best.
            Learning basic maintenance skills not only saves you money but also deepens your connection with your machine
            and builds confidence for handling unexpected situations on the road.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-display text-xl font-semibold">Safety First</h3>
              <p>Properly maintained motorcycles are safer to ride, reducing the risk of mechanical failures that could lead to accidents.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-display text-xl font-semibold">Performance Boost</h3>
              <p>Regular maintenance ensures optimal engine performance, better fuel efficiency, and a smoother riding experience.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-display text-xl font-semibold">Cost Savings</h3>
              <p>DIY maintenance can save significant money on labor costs and prevent expensive repairs caused by neglect.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-10 text-center font-display text-3xl font-bold">Essential Maintenance Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceGuides.map((guide, index) => (
            <div key={index} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${guide.image})` }}></div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-display text-xl font-semibold">{guide.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{guide.description}</p>
                <p className="flex items-center text-sm font-medium text-primary">
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="rounded-2xl bg-accent p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-3xl font-bold">Maintenance Schedule</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Keep your motorcycle in peak condition by following these maintenance intervals.
              Adjust based on your specific motorcycle model and riding conditions.
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full border-collapse bg-card text-left">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="p-4 font-medium">Maintenance Task</th>
                    <th className="p-4 font-medium">Frequency</th>
                    <th className="p-4 font-medium">Skill Level</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceTasks.map((task, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4">{task.name}</td>
                      <td className="p-4">{task.frequency}</td>
                      <td className="p-4">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium 
                          ${task.skill === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                          task.skill === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                          {task.skill}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">DIY Workshop Setup</h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Create your own motorcycle maintenance workspace with these essential tools and equipment.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <h3 className="mb-4 font-display text-xl font-semibold">Essential Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quality socket set with various sizes</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Wrench set (both metric and standard)</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Screwdriver set with various tips</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Torque wrench for precise tightening</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multimeter for electrical diagnostics</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <h3 className="mb-4 font-display text-xl font-semibold">Workshop Equipment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Motorcycle lift or center stand</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Good lighting setup (LED work lights)</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Oil drain pan and funnel</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Parts cleaning tank or supplies</span>
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-1 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fire extinguisher (safety first!)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-primary-500/90 to-primary-600 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Have a Maintenance Question?</h2>
          <p className="mb-6 text-lg text-white/90">
            Our community of motorcycle enthusiasts and mechanics are here to help with your specific maintenance questions.
          </p>
          <button className="rounded-md bg-white px-5 py-2.5 font-medium text-primary-600 shadow-sm hover:bg-white/90">
            Join Our Forum
          </button>
        </div>
      </section>
    </main>
  );
}

// Sample data for maintenance guides
const maintenanceGuides = [
  {
    title: 'Oil Change Guide',
    description: 'Step-by-step instructions for changing your motorcycle\'s oil and filter for optimal engine performance.',
    image: '/images/oil-change.jpg',
  },
  {
    title: 'Chain Maintenance',
    description: 'Learn how to properly clean, lubricate, and adjust your motorcycle\'s chain for safety and longevity.',
    image: '/images/chain-maintenance.jpg',
  },
  {
    title: 'Brake Pad Replacement',
    description: 'Follow our guide to inspect and replace your motorcycle\'s brake pads for optimal stopping power.',
    image: '/images/brake-pads.jpg',
  },
  {
    title: 'Tire Care & Replacement',
    description: 'Everything you need to know about motorcycle tire maintenance, pressure checking, and replacement.',
    image: '/images/tire-care.jpg',
  },
  {
    title: 'Battery Maintenance',
    description: 'Keep your motorcycle\'s battery in top condition with these testing and maintenance procedures.',
    image: '/images/battery-maintenance.jpg',
  },
  {
    title: 'Valve Adjustment',
    description: 'Advanced guide for checking and adjusting your motorcycle\'s valve clearance for better performance.',
    image: '/images/valve-adjustment.jpg',
  },
];

// Sample data for maintenance tasks
const maintenanceTasks = [
  { name: 'Oil & Filter Change', frequency: 'Every 3,000-6,000 miles', skill: 'Beginner' },
  { name: 'Chain Cleaning & Lubrication', frequency: 'Every 500-1,000 miles', skill: 'Beginner' },
  { name: 'Tire Pressure Check', frequency: 'Weekly', skill: 'Beginner' },
  { name: 'Brake Pad Inspection', frequency: 'Monthly', skill: 'Beginner' },
  { name: 'Air Filter Cleaning/Replacement', frequency: 'Every 5,000-10,000 miles', skill: 'Intermediate' },
  { name: 'Valve Clearance Check', frequency: 'Every 15,000-20,000 miles', skill: 'Advanced' },
];
