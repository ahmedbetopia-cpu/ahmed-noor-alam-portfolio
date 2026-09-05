import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'Exchange Online Articles',
  description: 'Technical guides, mail flow troubleshooting, compliance, and administration best practices for Microsoft Exchange Online and Microsoft 365.',
};

export default function ExchangeOnlineBlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) => {
    const text = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
    return text.includes('exchange online') || (text.includes('exchange') && (text.includes('cloud') || text.includes('m365') || text.includes('office 365') || text.includes('online')));
  });
  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Exchange Online"
            title="Exchange Online Articles"
            description="Practical guides on Exchange Online protection, hybrid mail flow configuration, tenant-to-tenant migrations, and cloud messaging administration."
          />
        </ScrollReveal>

        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
