'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/lib/mdx';

export default function BlogListClient({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-accent-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {filtered.map((post) => (
            <div key={post.slug} className="h-full flex flex-col">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center py-20">
          No posts in this category yet. Check back soon!
        </p>
      )}
    </>
  );
}
