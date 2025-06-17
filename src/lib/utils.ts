// Common utility functions for the application

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility for constructing className strings conditionally
 * Combines clsx with tailwind-merge to handle conflicting tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a more readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Extract excerpt from content
 */
export function extractExcerpt(content: string, maxLength: number = 160): string {
  if (content.length <= maxLength) return content;
  
  // Try to find a sentence end or paragraph end
  const sentenceEnd = content.substring(0, maxLength).lastIndexOf('.');
  const paragraphEnd = content.substring(0, maxLength).lastIndexOf('\n');
  
  // Use the closest one or just cut at maxLength if none found
  const cutoff = Math.max(
    sentenceEnd > 0 ? sentenceEnd + 1 : -1,
    paragraphEnd > 0 ? paragraphEnd : -1,
    0
  );
  
  return cutoff > 0 
    ? content.substring(0, cutoff).trim() 
    : content.substring(0, maxLength).trim() + '...';
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * Shuffle array (useful for related posts)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
