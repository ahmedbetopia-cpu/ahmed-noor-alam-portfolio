import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';
import { getAllPosts, getAllTags } from '@/lib/mdx';

export default function HomePage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <PageTransition>
      <div className="container-main pt-10 sm:pt-14 pb-20 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* BLOG HEADER (Clean Layout without Status Pill) */}
        {/* ========================================================================= */}
        <section className="pt-2">
          <ScrollReveal direction="up">
            <div className="space-y-3.5 max-w-3xl">
              {/* Page Title */}
              <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 leading-tight">
                Articles &amp; <span className="italic font-normal text-emerald-700 dark:text-emerald-400">Field Notes</span> <span className="text-2xl sm:text-3xl font-normal text-warm-500 dark:text-warm-400 font-sans">by Ahmed</span>
              </h1>

              {/* Subtitle with IT Infrastructure Focus */}
              <p className="text-base sm:text-lg text-warm-600 dark:text-warm-300 leading-relaxed">
                Deep dives into enterprise Windows Server infrastructure, Microsoft Entra ID hybrid identity, MECM &amp; Intune endpoint management, and modern Microsoft 365 ecosystems.
              </p>
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* ARTICLES LIST & FILTER SECTION */}
        {/* ========================================================================= */}
        <section id="articles" className="scroll-mt-20">
          <BlogListWithFilter posts={posts} allTags={allTags} />
        </section>

      </div>
    </PageTransition>
  );
}
