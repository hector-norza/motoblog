"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon, FaBars, FaTimes, FaMotorcycle } from 'react-icons/fa';

// Navigation links for the header
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/learn-to-ride', label: 'Learn to Ride', activePattern: '^/learn-to-ride' },
  { href: '/buying-guides', label: 'Buying Guides', activePattern: '^/buying-guides' },
  { href: '/maintenance', label: 'Maintenance & DIY', activePattern: '^/maintenance' },
  { href: '/gear-reviews', label: 'Gear Reviews', activePattern: '^/gear-reviews' },
  { href: '/road-life', label: 'Road Life', activePattern: '^/road-life' },
  { href: '/blog', label: 'Blog', activePattern: '^/blog(/.*)?$' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string, activePattern?: string) => {
    // Exact match for home page
    if (href === '/') {
      return pathname === href;
    }
    // Use regex pattern if provided
    if (activePattern) {
      return new RegExp(activePattern).test(pathname);
    }
    // Default to startsWith for other routes
    return pathname.startsWith(href);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      if (mobileMenuOpen && menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full animate-fade-in glass-effect border-b border-border/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group hover-scale">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
              <FaMotorcycle className="h-4 w-4" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">MotoBlog</span>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover-scale flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href, link.activePattern)
                      ? 'bg-primary-50/80 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-foreground/80 hover:bg-primary-50/80 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hover-scale glass-effect flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-primary-100/80 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <FaSun className="h-3.5 w-3.5" />
            ) : (
              <FaMoon className="h-3.5 w-3.5" />
            )}
          </button>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="hover-scale md:hidden glass-effect flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-primary-100/80 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-3.5 w-3.5" />
            ) : (
              <FaBars className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible on mobile when open */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 z-50 transform transition-transform duration-300 ease-in-out bg-background/95 backdrop-blur-sm ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="border-t border-border/10 py-2">
          <ul className="space-y-1 px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href, link.activePattern)
                      ? 'bg-primary-50/80 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-foreground/80 hover:bg-primary-50/80 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
