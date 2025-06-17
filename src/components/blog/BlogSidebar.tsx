"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaTag, FaFolder, FaClock } from 'react-icons/fa';
import { allBlogPosts } from '@/lib/blog-data';

interface BlogSidebarProps {
  currentCategory?: string;
  currentTag?: string;
  categories: string[];
  tags: string[];
  categoryCounts: Record<string, number>;
  tagCounts: Record<string, number>;
}

export default function BlogSidebar({
  currentCategory,
  currentTag,
  categories,
  tags,
  categoryCounts,
  tagCounts,
}: BlogSidebarProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  
  // Get recent posts (most recent 5)
  const recentPosts = [...allBlogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <section>
        <h2 className="mb-4 font-display text-xl font-bold">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group flex items-start space-x-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="64px"
                />
              </div>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium hover:text-primary"
                >
                  {post.title}
                </Link>
                <p className="mt-1 flex items-center space-x-2 text-xs text-muted-foreground">
                  <FaClock className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Filter by Categories */}
      <section>
        <h2 className="mb-4 font-display text-xl font-bold">Filter by Category</h2>
        <ul className="space-y-2">
          {categories
            .map(category => ({
              name: category,
              count: categoryCounts[category] || 0,
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, showAllCategories ? undefined : 6)
            .map((category) => (
              <li key={category.name}>
                <Link
                  href={`/blog?category=${encodeURIComponent(category.name.toLowerCase())}`}
                  className={`flex items-center justify-between rounded-md py-1 transition-colors hover:text-primary ${
                    currentCategory === category.name.toLowerCase()
                      ? 'text-primary'
                      : ''
                  }`}
                >
                  <span className="flex items-center">
                    <FaFolder className="mr-2 h-4 w-4" />
                    {category.name}
                  </span>
                  <span className="text-sm text-muted-foreground">({category.count})</span>
                </Link>
              </li>
            ))}
          {categories.length > 6 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="mt-2 flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              {showAllCategories ? (
                <>
                  Show Less <FaCaretUp className="ml-1" />
                </>
              ) : (
                <>
                  Show All ({categories.length}) <FaCaretDown className="ml-1" />
                </>
              )}
            </button>
          )}
        </ul>
      </section>

      {/* Popular Tags */}
      <section>
        <h2 className="mb-4 font-display text-xl font-bold">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags
            .map(tag => ({
              name: tag,
              count: tagCounts[tag] || 0,
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, showAllTags ? undefined : 12)
            .map((tag) => (
              <Link
                key={tag.name}
                href={`/blog?tag=${encodeURIComponent(tag.name.toLowerCase())}`}
                className={`inline-flex items-center rounded-full border border-border px-3 py-1 text-sm transition-colors hover:border-primary hover:text-primary ${
                  currentTag === tag.name.toLowerCase()
                    ? 'border-primary text-primary'
                    : ''
                }`}
              >
                <FaTag className="mr-1 h-3 w-3" />
                {tag.name}
                <span className="ml-1 text-muted-foreground">({tag.count})</span>
              </Link>
            ))}
        </div>
        {tags.length > 12 && (
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className="mt-4 flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            {showAllTags ? (
              <>
                Show Less <FaCaretUp className="ml-1" />
              </>
            ) : (
              <>
                Show All Tags ({tags.length}) <FaCaretDown className="ml-1" />
              </>
            )}
          </button>
        )}
      </section>
    </aside>
  );
}
