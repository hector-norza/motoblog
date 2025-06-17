import './globals.css';
import { Inter, Montserrat, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

// Get the base URL for GitHub Pages or default to production URL
const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH 
  ? `https://${process.env.VERCEL_URL || 'yourusername.github.io'}${process.env.NEXT_PUBLIC_BASE_PATH}`
  : 'https://motoblog.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'MotoBlog - Your Ultimate Motorcycle Resource',
    template: '%s | MotoBlog',
  },
  description: 'Discover expert motorcycle guides, honest gear reviews, maintenance tips, and inspiring road stories for riders of all levels.',
  keywords: [
    'motorcycle guides',
    'gear reviews',
    'motorcycle maintenance',
    'beginner riders',
    'motorcycle tips',
    'bike reviews',
    'riding skills',
    'motorcycle community'
  ],
  authors: [{ name: 'MotoBlog Team' }],
  creator: 'MotoBlog',
  publisher: 'MotoBlog',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://motoblog.com',
    siteName: 'MotoBlog',
    title: 'MotoBlog - Your Ultimate Motorcycle Resource',
    description: 'Discover expert motorcycle guides, honest gear reviews, maintenance tips, and inspiring road stories for riders of all levels.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'MotoBlog - Expert Motorcycle Guides and Reviews',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MotoBlog - Your Ultimate Motorcycle Resource',
    description: 'Expert motorcycle guides, gear reviews, and road stories',
    images: [{
      url: '/images/og-image.jpg',
      alt: 'MotoBlog - Expert Motorcycle Guides and Reviews',
      type: 'image/jpeg',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
