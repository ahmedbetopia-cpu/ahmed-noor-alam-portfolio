'use client';

import { useState, useMemo } from 'react';
import { Search, X, Sparkles, SlidersHorizontal, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/mdx';
import { skillKeywords } from '@/data/keywords';
import BlogCard from './BlogCard';

interface BlogListWithFilterProps {
  posts: BlogPost[];
  allTags?: string[];
}

export default function BlogListWithFilter({ posts }: BlogListWithFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract all unique tags present in current posts
  const postTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      p.tags?.forEach((t) => set.add(t));
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [posts]);

  // Combine curated skills from CV with post tags (deduplicated)
  const allKeywordPills = useMemo(() => {
    const combined = Array.from(new Set([...skillKeywords, ...postTags]));
    return combined;
  }, [postTags]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.trim().toLowerCase();
      const tag = selectedTag.toLowerCase();

      // Check Tag matching
      let matchesTag = selectedTag === 'All';
      if (!matchesTag) {
        const titleMatch = post.title.toLowerCase().includes(tag);
        const excerptMatch = post.excerpt.toLowerCase().includes(tag);
        const contentMatch = post.content.toLowerCase().includes(tag);
        const categoryMatch = post.category.toLowerCase().includes(tag);
        const tagsMatch = post.tags.some(
          (t) => t.toLowerCase() === tag || t.toLowerCase().includes(tag) || tag.includes(t.toLowerCase())
        );

        matchesTag = titleMatch || excerptMatch || contentMatch || categoryMatch || tagsMatch;
      }

      // Check Search Query matching
      let matchesSearch = q === '';
      if (!matchesSearch) {
        const titleMatch = post.title.toLowerCase().includes(q);
        const excerptMatch = post.excerpt.toLowerCase().includes(q);
        const contentMatch = post.content.toLowerCase().includes(q);
        const tagsMatch = post.tags.some((t) => t.toLowerCase().includes(q));
        const categoryMatch = post.category.toLowerCase().includes(q);

        matchesSearch = titleMatch || excerptMatch || contentMatch || tagsMatch || categoryMatch;
      }

      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Comprehensive Keyword Filter Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 shadow-md backdrop-blur-sm space-y-6">
        {/* Search Input Bar (Matching Image Design) */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400 dark:text-warm-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts by title, topic, or technology..."
            className="w-full pl-12 pr-11 py-3.5 rounded-2xl bg-warm-50/90 dark:bg-olive-950/80 border border-warm-200 dark:border-olive-800/90 text-sm sm:text-base text-warm-900 dark:text-warm-100 placeholder-warm-400 dark:placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 dark:focus:ring-gold-500/40 focus:border-emerald-500 dark:focus:border-gold-500 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-warm-400 hover:text-warm-700 dark:hover:text-warm-200 hover:bg-warm-200/50 dark:hover:bg-olive-800 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Multi-Row Keyword Cloud (Matching Image Layout) */}
        <div className="pt-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* 'All' Button */}
            <button
              onClick={() => setSelectedTag('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm ${
                selectedTag === 'All'
                  ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-warm-950 font-bold scale-105 shadow-md'
                  : 'bg-warm-100 dark:bg-olive-950/80 text-warm-700 dark:text-warm-300 border border-warm-200 dark:border-olive-800/80 hover:border-emerald-500/40 hover:bg-warm-200/60 dark:hover:bg-olive-900 hover:text-warm-950 dark:hover:text-warm-100'
              }`}
            >
              All
            </button>

            {/* Individual Skill & Technology Keyword Pills */}
            {allKeywordPills.map((keyword) => {
              const isSelected = selectedTag.toLowerCase() === keyword.toLowerCase();
              return (
                <button
                  key={keyword}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedTag('All');
                    } else {
                      setSelectedTag(keyword);
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 ${
                    isSelected
                      ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-warm-950 font-bold scale-105 shadow-md'
                      : 'bg-warm-100/90 dark:bg-olive-950/70 text-warm-700 dark:text-warm-300 border border-warm-200/80 dark:border-olive-800/70 hover:border-emerald-500/50 hover:bg-warm-200/50 dark:hover:bg-olive-900 hover:text-warm-950 dark:hover:text-warm-100'
                  }`}
                >
                  {keyword}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Status / Result Count Indicator */}
        {(selectedTag !== 'All' || searchQuery !== '') && (
          <div className="flex items-center justify-between pt-3 border-t border-warm-200/70 dark:border-olive-800/60 text-xs font-mono text-warm-500 dark:text-warm-400">
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-500 dark:text-gold-500" />
              Showing <strong className="text-warm-900 dark:text-warm-100">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'post' : 'posts'} for &quot;{searchQuery || selectedTag}&quot;
            </span>
            <button
              onClick={() => {
                setSelectedTag('All');
                setSearchQuery('');
              }}
              className="text-emerald-600 dark:text-gold-400 font-semibold hover:underline flex items-center gap-1"
            >
              Reset filters <X className="w-3 h-3" />
            </button>
          </div>
        )}
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
            We couldn&apos;t find any articles matching &quot;{searchQuery || selectedTag}&quot;. Try selecting another keyword from the list.
          </p>
          <button
            onClick={() => {
              setSelectedTag('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-gold-500 text-warm-950 hover:bg-gold-400 transition-colors shadow-sm"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
