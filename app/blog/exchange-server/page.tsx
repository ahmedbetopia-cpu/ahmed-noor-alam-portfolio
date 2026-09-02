import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'Exchange Server Articles',
  description: 'Technical guides and deep dives on Microsoft Exchange Server administration, hybrid mail flow, and email infrastructure by Ahmed Noor Alam.',
};

export default function ExchangeServerBlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().includes('exchange')) ||
    p.category.toLowerCase().includes('exchange')
  );
  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Exchange Server"
            title="Exchange Server Articles"
            description="In-depth guides on Microsoft Exchange Server administration, hybrid mail flow, DAG configuration, and email infrastructure management."
          />
        </ScrollReveal>

        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
