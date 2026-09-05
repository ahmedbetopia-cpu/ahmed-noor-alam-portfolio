'use client';

import { useState, useMemo } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/mdx';
import BlogCard from './BlogCard';

interface BlogListWithFilterProps {
  posts: BlogPost[];
  allTags?: string[];
}

export default function BlogListWithFilter({ posts }: BlogListWithFilterProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.trim().toLowerCase();
      if (q === '') return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [posts, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-warm-200/90 shadow-sm">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts by title, topic, or technology..."
            className="w-full pl-12 pr-11 py-3.5 rounded-xl bg-warm-50 border border-warm-200 text-sm text-warm-900 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-200/50 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Post Grid with Framer Motion Stagger */}
      {filteredPosts.length > 0 ? (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-white dark:bg-olive-900/40 border border-dashed border-warm-300 dark:border-olive-800">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-warm-900 dark:text-warm-100 mb-1">
            No articles found
          </h3>
          <p className="text-sm text-warm-500 dark:text-warm-400 max-w-sm mx-auto mb-4">
            We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try another search term.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gold-500 text-warm-950 hover:bg-gold-400 transition-colors shadow-sm"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
