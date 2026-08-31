import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import MDXContent from '@/components/MDXComponents';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { siteConfig } from '@/data/siteConfig';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="container-main pt-10 sm:pt-14 pb-24 max-w-4xl space-y-8">
        
        {/* Back Link */}
        <ScrollReveal direction="up">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all articles</span>
          </Link>
        </ScrollReveal>

        {/* Post Header */}
        <ScrollReveal direction="up">
          <div className="space-y-4 border-b border-warm-200/80 dark:border-olive-800/60 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-warm-100 dark:bg-olive-950 text-warm-600 dark:text-warm-400 border border-warm-200 dark:border-olive-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-warm-950 dark:text-warm-50 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-warm-500 dark:text-warm-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {post.readingTime}
              </span>
              <span>•</span>
              <span className="text-warm-700 dark:text-warm-300 font-semibold">
                By {siteConfig.name}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* MDX Post Body */}
        <ScrollReveal direction="up">
          <div className="prose prose-warm dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-emerald-600 dark:prose-a:text-emerald-400">
            <MDXContent source={post.content} />
          </div>
        </ScrollReveal>

      </article>
    </PageTransition>
  );
}
