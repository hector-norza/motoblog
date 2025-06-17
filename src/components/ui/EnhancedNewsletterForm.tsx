"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaCheck, FaTimes, FaNewspaper, FaUser } from 'react-icons/fa';

export default function EnhancedNewsletterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('weekly');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simple validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, you would send this to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setEmail('');
      setName('');
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card rounded-xl p-6 text-center shadow-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <FaCheck className="h-3.5 w-3.5" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-300">
                  Welcome to MotoBlog!
                </h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Your subscription has been confirmed. Get ready for exciting motorcycle content!
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaUser className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input/50 bg-white/50 pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground shadow-sm transition-all focus:border-primary-500/50 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/50 dark:focus:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                    <FaEnvelope className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-input/50 bg-white/50 pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground shadow-sm transition-all focus:border-primary-500/50 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-primary-500/20 dark:bg-slate-900/50 dark:focus:bg-slate-900"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subscription Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSubscriptionType('weekly')}
                    className={`flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:border-primary-500/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 ${
                      subscriptionType === 'weekly'
                        ? 'border-primary-500 bg-primary-50 text-primary-600 dark:border-primary-500 dark:bg-primary-900/20 dark:text-primary-400'
                        : 'border-input/50 text-muted-foreground'
                    }`}
                  >
                    Weekly Digest
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubscriptionType('daily')}
                    className={`flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-all hover:border-primary-500/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 ${
                      subscriptionType === 'daily'
                        ? 'border-primary-500 bg-primary-50 text-primary-600 dark:border-primary-500 dark:bg-primary-900/20 dark:text-primary-400'
                        : 'border-input/50 text-muted-foreground'
                    }`}
                  >
                    Daily Updates
                  </button>
                </div>
              </div>

              {error && (
                <div className="rounded-xl bg-red-50 p-3 dark:bg-red-900/20">
                  <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
                    <FaTimes className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:from-primary-600 hover:to-primary-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
