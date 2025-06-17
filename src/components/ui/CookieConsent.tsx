"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setShowBanner(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'accepted');
    }
    setShowBanner(false);
  };

  const declineCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'declined');
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg dark:bg-slate-900 md:p-6"
        >
          <div className="container mx-auto flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <Link href="/privacy-policy" className="text-primary-500 hover:underline">
                  Privacy Policy
                </Link>{' '}
                to learn more.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={declineCookies}
                className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
