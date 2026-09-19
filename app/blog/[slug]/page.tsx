import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
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

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);

  // allPosts is ordered newest to oldest:
  // - nextPost (newer in chronological series / next step) is at currentIndex - 1
  // - prevPost (older in chronological series) is at currentIndex + 1
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

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

        {/* Post Navigation: Previous & Next Article */}
        {(prevPost || nextPost) && (
          <ScrollReveal direction="up">
            <div className="pt-8 mt-12 border-t border-warm-200/80 dark:border-olive-800/60">
              {!prevPost && nextPost ? (
                /* Prominent Next Article Banner when starting series */
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30">
                  <div className="space-y-1.5 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                      <span>Next Article in Series</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-warm-950 dark:text-warm-50 leading-snug">
                      {nextPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-300 line-clamp-2">
                      {nextPost.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex-shrink-0 group"
                  >
                    <span>Next Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ) : (
                /* Standard Two-Column Previous / Next Navigation */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-olive-900/40 border border-warm-200/90 dark:border-olive-800/80 hover:border-emerald-500/50 hover:shadow-md transition-all text-left"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-warm-500 dark:text-warm-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                        <span>Previous Article</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-warm-900 dark:text-warm-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {prevPost.title}
                      </h4>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-olive-900/40 border border-warm-200/90 dark:border-olive-800/80 hover:border-emerald-500/50 hover:shadow-md transition-all text-right sm:col-start-2"
                    >
                      <div className="flex items-center justify-end gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                        <span>Next Article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                      <h4 className="text-base font-serif font-bold text-warm-900 dark:text-warm-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {nextPost.title}
                      </h4>
                    </Link>
                  ) : null}
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

      </article>
    </PageTransition>
  );
}
