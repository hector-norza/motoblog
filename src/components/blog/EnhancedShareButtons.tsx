"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaLink, FaShare, FaEnvelope } from 'react-icons/fa';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function EnhancedShareButtons({ title, slug }: ShareButtonsProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Base URL for sharing
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/blog/${slug}`
    : `/blog/${slug}`;

  // Share links
  const shareLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="h-5 w-5" />,
      color: 'bg-[#1877F2] hover:bg-[#0d65d9]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}`,
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="h-5 w-5" />,
      color: 'bg-[#1DA1F2] hover:bg-[#0c85d0]',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(baseUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="h-5 w-5" />,
      color: 'bg-[#0077B5] hover:bg-[#005e8f]',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl)}`,
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="h-5 w-5" />,
      color: 'bg-[#D44638] hover:bg-[#b33c2e]',
      url: `mailto:?subject=${encodeURIComponent(`Check out this article: ${title}`)}&body=${encodeURIComponent(`I thought you might be interested in this article: ${title}\n\n${baseUrl}`)}`,
    },
  ];

  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(baseUrl);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Share This Article</h3>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex items-center rounded-full bg-primary-500 p-2.5 text-white shadow-md hover:bg-primary-600 md:hidden"
          aria-label="Share"
        >
          <FaShare className="h-5 w-5" />
        </motion.button>
        
        {/* Desktop Share Buttons */}
        <motion.div 
          className="hidden space-x-2 md:flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {shareLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-full p-2.5 text-white ${link.color}`}
              aria-label={`Share on ${link.name}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
          
          <motion.button
            onClick={copyToClipboard}
            className="relative flex items-center justify-center rounded-full bg-slate-700 p-2.5 text-white hover:bg-slate-800"
            aria-label="Copy link"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLink className="h-5 w-5" />
            
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-white"
                >
                  Link copied!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Mobile Share Buttons Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg dark:bg-slate-800 md:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Share This Article</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full text-white ${link.color}`}>
                    {link.icon}
                  </div>
                  <span className="text-xs">{link.name}</span>
                </a>
              ))}
              
              <button
                onClick={copyToClipboard}
                className="relative flex flex-col items-center"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-800">
                  <FaLink className="h-5 w-5" />
                </div>
                <span className="text-xs">Copy Link</span>
                
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-12 rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-white"
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
