"use client";

import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  // Construct the full URL
  const fullUrl = `https://motoblog.com/blog/${slug}`;
  
  // Encoded values for sharing
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(fullUrl);
  
  // Social share links
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Share this article</h3>
      <div className="flex space-x-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="h-3.5 w-3.5" />
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="h-3.5 w-3.5" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="h-3.5 w-3.5" />
        </a>
        <a
          href={emailUrl}
          className="hover-scale flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-colors"
          aria-label="Share via Email"
        >
          <FaEnvelope className="h-3.5 w-3.5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="hover-scale flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
          aria-label="Copy link"
        >
          <FaLink className="h-3.5 w-3.5" />
        </button>
      </div>
      {copied && (
        <span className="mt-2 inline-block text-sm text-green-600 dark:text-green-400">
          Link copied to clipboard!
        </span>
      )}
    </div>
  );
}
