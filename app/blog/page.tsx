import type { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/mdx';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';

export const metadata: Metadata = {
  title: 'All Technical Articles & Guides',
  description: 'Practical guides and deep dives on Windows Server, Entra ID hybrid identity, MECM, Intune, and Microsoft 365 by Ahmed Noor Alam.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <PageTransition>
      <div className="container-main pt-12 sm:pt-16 pb-24">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Articles Archive"
            title="Technical Articles & Guides"
            description="Deep dives into enterprise IT infrastructure, Windows Server administration, Entra ID hybrid identity, and modern workplace engineering."
          />
        </ScrollReveal>


        <BlogListWithFilter posts={posts} allTags={allTags} />
      </div>
    </PageTransition>
  );
}
