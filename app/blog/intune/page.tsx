import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'Microsoft Intune Articles',
  description: 'Technical guides on Microsoft Intune endpoint management, device compliance, app deployment, and modern workplace management by Ahmed Noor Alam.',
};

export default function IntuneBlogPage() {
  const allPosts = getAllPosts();
  const posts = allPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().includes('intune')) ||
    p.category.toLowerCase().includes('intune')
  );
  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Microsoft Intune"
            title="Intune Articles"
            description="Practical guides on Microsoft Intune endpoint management, device enrollment, compliance policies, app deployment, and modern workplace solutions."
          />
        </ScrollReveal>

        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
