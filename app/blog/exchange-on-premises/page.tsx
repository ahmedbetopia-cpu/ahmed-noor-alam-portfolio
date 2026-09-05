import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'Exchange On-Premises Articles',
  description: 'Technical guides, cumulative update management, DAG clustering, certificates, and administration for on-premises Microsoft Exchange Server.',
};

export default function ExchangeOnPremisesBlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) => {
    const text = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
    return text.includes('on-premises') || text.includes('on-prem') || text.includes('exchange server') || text.includes('dag') || (text.includes('exchange') && !text.includes('online'));
  });
  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Exchange On-Premises"
            title="Exchange On-Premises Articles"
            description="Deep dives into on-premises Microsoft Exchange Server deployment, Database Availability Groups (DAG), security hardening, patching, and disaster recovery."
          />
        </ScrollReveal>

        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
