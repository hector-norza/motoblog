"use client";

import Link from 'next/link';
import { FaMotorcycle, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import NewsletterForm from '../ui/NewsletterForm';

// Footer links organized by categories
const footerLinks = {
  about: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
  ],
  explore: [
    { href: '/learn-to-ride', label: 'Learn to Ride' },
    { href: '/buying-guides', label: 'Buying Guides' },
    { href: '/maintenance', label: 'Maintenance & DIY' },
    { href: '/gear-reviews', label: 'Gear Reviews' },
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/road-life', label: 'Road Life Stories' },
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/faqs', label: 'FAQs' },
  ],
};

// Social media links
const socialLinks = [
  { href: 'https://twitter.com/motoblog', label: 'Twitter', icon: FaTwitter },
  { href: 'https://facebook.com/motoblog', label: 'Facebook', icon: FaFacebook },
  { href: 'https://instagram.com/motoblog', label: 'Instagram', icon: FaInstagram },
  { href: 'https://youtube.com/motoblog', label: 'YouTube', icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand and Newsletter */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <FaMotorcycle className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">MotoBlog</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your go-to resource for motorcycle enthusiasts - from beginners to seasoned riders.
            </p>
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold">Join Our Newsletter</h3>
              <NewsletterForm />
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider after:mt-2 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-primary-500">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-500 inline-flex items-center"
                  >
                    <span className="inline-block h-0.5 w-0 bg-primary-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider after:mt-2 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-primary-500">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-500 inline-flex items-center"
                  >
                    <span className="inline-block h-0.5 w-0 bg-primary-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider after:mt-2 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-primary-500">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary-500 inline-flex items-center"
                  >
                    <span className="inline-block h-0.5 w-0 bg-primary-500 mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider after:mt-2 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-primary-500">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors hover:bg-primary-500 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-primary-600 dark:hover:text-white"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MotoBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
