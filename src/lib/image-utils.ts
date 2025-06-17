/**
 * Utility functions for handling images
 */

/**
 * Gets a consistent image path, handling different formats and providing fallbacks
 * 
 * @param path - The original image path
 * @param fallback - Optional fallback image path if the original is invalid
 * @returns A properly formatted image path
 */
export const getImagePath = (path: string | undefined, fallback = '/images/placeholder.jpg') => {
  // Return fallback if path is undefined or empty
  if (!path) return fallback;
  
  // Check if path starts with http(s) for external images
  if (path.startsWith('http')) return path;
  
  // Add proper prefix for local images if needed
  return path.startsWith('/') ? path : `/images/${path}`;
};

/**
 * Generates a blurred placeholder for images
 * In a real app, this would generate actual blur data
 * 
 * @returns A placeholder blur data URL
 */
export const getBlurDataUrl = () => {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJDgZdOAwAAAABJRU5ErkJggg==';
};

/**
 * Checks if an image exists in the public directory
 * Note: This is a client-side function and should be used with caution
 * 
 * @param path - The image path to check
 * @returns A promise that resolves to a boolean indicating if the image exists
 */
export const imageExists = async (path: string): Promise<boolean> => {
  if (path.startsWith('http')) {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
    } catch (e) {
      return false;
    }
  }
  
  // For local images, we can't check directly in the browser
  // In a real app, you might want to implement a server-side check
  return true;
};