// Utility functions for blog data

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  excerpt: string;
  image: string;
  readingTime: string;
};

type Category = {
  name: string;
  count: number;
};

// Function to get all unique categories with post counts
export function getAllCategories(posts: BlogPost[]): Category[] {
  const categoryCounts: Record<string, number> = {};
  
  posts.forEach((post) => {
    const category = post.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  });
  
  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Function to get all unique tags
export function getAllTags(posts: BlogPost[]): string[] {
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}

// Function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Function to get related posts based on tags and category
export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  // Filter out the current post
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);
  
  // Calculate relevance score based on matching tags and category
  const postsWithRelevance = otherPosts.map((post) => {
    let relevanceScore = 0;
    
    // Add points for matching category
    if (post.category === currentPost.category) {
      relevanceScore += 2;
    }
    
    // Add a point for each matching tag
    relevanceScore += post.tags.filter((tag) => currentPost.tags.includes(tag)).length;
    
    return { post, relevanceScore };
  });
  
  // Sort by relevance score (highest first)
  postsWithRelevance.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  // Return top N most relevant posts
  return postsWithRelevance
    .slice(0, limit)
    .map(({ post }) => post);
}
