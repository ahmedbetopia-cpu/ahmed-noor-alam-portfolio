'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 overflow-hidden hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-glow-olive hover:-translate-y-1 transition-all duration-300"
    >
      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative w-full h-48 bg-warm-100 dark:bg-olive-950 overflow-hidden border-b border-warm-200/70 dark:border-olive-800/50">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* High-contrast crisp tags over image */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/65 text-emerald-300 border border-emerald-400/40 backdrop-blur-md shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {!post.coverImage && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Date and Reading Time */}
        <div className="flex items-center gap-3 text-xs text-warm-500 dark:text-warm-400 mb-3 font-mono">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {formatDate(post.date)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {post.readingTime}
          </span>
        </div>

        {/* Title with matching font-serif */}
        <h3 className="text-lg sm:text-xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2 leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-300 leading-relaxed line-clamp-3 mb-6 flex-1">
          {post.excerpt}
        </p>

        {/* Read More link */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
