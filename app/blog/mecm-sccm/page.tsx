import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'MECM / SCCM Articles',
  description: 'Technical guides, operating system deployment (OSD), software distribution, patch management, and endpoint administration with Microsoft Endpoint Configuration Manager (MECM / SCCM) by Ahmed Noor Alam.',
};

export default function MecmSccmBlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) => {
    const text = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
    return text.includes('mecm') || text.includes('sccm') || text.includes('configuration manager');
  });
  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="MECM / SCCM"
            title="MECM / SCCM Articles"
            description="Deep dives and best practices for Microsoft Endpoint Configuration Manager (MECM/SCCM), including OSD task sequences, client troubleshooting, software updates, and co-management."
          />
        </ScrollReveal>

        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
