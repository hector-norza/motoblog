"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    if (!headings.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: 1.0,
      }
    );

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings, pathname]);

  if (!headings.length) return null;

  return (
    <div className="rounded-xl border border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 shadow-sm">
      <h4 className="mb-4 text-lg font-semibold flex items-center">
        <span className="mr-2 h-5 w-0.5 rounded-full bg-primary-500"></span>
        Table of Contents
      </h4>
      <nav>
        <ul className="space-y-3 text-sm">
          {headings.map((heading) => (
            <motion.li
              key={heading.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ 
                marginLeft: `${(heading.level - 2) * 16}px` 
              }}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block border-l-2 pl-3 py-1 transition-all hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-r-md",
                  activeId === heading.id 
                    ? "border-primary-500 text-primary-500 font-medium bg-primary-50/50 dark:bg-primary-900/10" 
                    : "border-transparent text-muted-foreground hover:border-primary-300 dark:hover:border-primary-700"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {heading.text}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
