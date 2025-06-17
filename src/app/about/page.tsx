import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'About MotoBlog | Motorcycle Enthusiast Community',
  description: 'Learn about MotoBlog, our team of motorcycle enthusiasts, and our mission to provide high-quality content for riders of all experience levels.',
  openGraph: {
    title: 'About MotoBlog | Motorcycle Enthusiast Community',
    description: 'Learn about MotoBlog, our team of motorcycle enthusiasts, and our mission to provide high-quality content for riders of all experience levels.',
    type: 'website',
    url: '/about',
  },
};

export default function AboutPage() {
  // Find the about page content
  const aboutPage = allPages.find((page) => page.slug === '/about');
  
  if (!aboutPage) {
    notFound();
  }

  return (
    <main className="container relative mx-auto px-4 py-12 mb-16">
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl relative z-10">
        <div 
          className="relative mb-10 h-80 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary-700 to-primary-900 shadow-lg"
          style={{
            backgroundImage: aboutPage.image ? `url(${aboutPage.image})` : `url('/images/placeholder.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="mb-3 rounded-full bg-primary-500/80 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">Est. 2020</span>
            <h1 className="text-center font-display text-4xl font-bold text-white drop-shadow-md md:text-5xl lg:text-6xl">
              {aboutPage.title}
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary-500"></div>
          </div>
        </div>
        
        <div className="mdx-content relative rounded-xl bg-white/50 dark:bg-slate-900/50 p-8 shadow-sm backdrop-blur-sm border border-slate-200 dark:border-slate-800">
          {/* @ts-ignore */}
          {aboutPage.body ? <aboutPage.body.code /> : (
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold mb-4">About MotoBlog</h2>
              <p className="mb-4">
                Welcome to MotoBlog, your ultimate destination for all things motorcycle-related. Founded in 2020, we are passionate about providing high-quality content for motorcycle enthusiasts of all levels.
              </p>
              <p className="mb-4">
                Our team of experienced riders and experts covers everything from beginner tips to advanced riding techniques, motorcycle reviews, maintenance guides, and the latest industry news.
              </p>
              <p>
                Whether you're looking to purchase your first bike, upgrade your current ride, or simply immerse yourself in motorcycle culture, MotoBlog is your trusted companion on the journey.
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-16 border-t border-border pt-8">
          <h2 className="mb-8 text-center font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">Connect With Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Email Us</h3>
              <p className="mb-4 text-muted-foreground">Have questions or suggestions? We'd love to hear from you!</p>
              <a href="mailto:info@motoblog.com" className="inline-flex items-center rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600">
                info@motoblog.com
              </a>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Get Support</h3>
              <p className="mb-4 text-muted-foreground">Need help with the site or have technical issues?</p>
              <a href="/contact" className="inline-flex items-center rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600">
                Visit Support Center
              </a>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">Follow Us</h3>
              <p className="mb-4 text-muted-foreground">Stay updated with our latest articles and news.</p>
              <div className="flex justify-center space-x-3">
                <a href="https://twitter.com/motoblog" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-transform hover:scale-110" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/motoblog" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-transform hover:scale-110" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com/motoblog" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-transform hover:scale-110" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Decorative wave */}
      <div className="absolute -bottom-24 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500/10">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="currentColor"/>
        </svg>
      </div>
    </main>
  );
}
