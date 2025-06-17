"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import BlogPostCard from './BlogPostCard';

// Define the BlogPost type
interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  excerpt: string;
  image: string;
  readingTime: string;
}

interface InfinitePostListProps {
  initialPosts: BlogPost[];
  fetchMorePosts: (page: number) => Promise<BlogPost[]>;
}

export default function InfinitePostList({ initialPosts, fetchMorePosts }: InfinitePostListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const loadMorePosts = async () => {
      if (inView && hasMore && !isLoading) {
        setIsLoading(true);
        const nextPage = page + 1;
        
        try {
          const newPosts = await fetchMorePosts(nextPage);
          
          if (newPosts.length === 0) {
            setHasMore(false);
          } else {
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage(nextPage);
          }
        } catch (error) {
          console.error('Error loading more posts:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    loadMorePosts();
  }, [inView, hasMore, isLoading, page, fetchMorePosts]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogPostCard post={post} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div ref={ref} className="mt-8 flex justify-center p-4">
        {isLoading && (
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-500 border-t-transparent"></div>
            <span className="text-muted-foreground">Loading more posts...</span>
          </div>
        )}
        
        {!hasMore && posts.length > initialPosts.length && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground"
          >
            You've reached the end of the posts
          </motion.p>
        )}
      </div>
    </>
  );
}