import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import BlogListWithFilter from '@/components/BlogListWithFilter';
import CaseStudyCard from '@/components/CaseStudyCard';
import { getAllPosts, getAllTags, getAllCaseStudies } from '@/lib/mdx';

export default function HomePage() {
  const posts = getAllPosts();
  const allTags = getAllTags();
  const caseStudies = getAllCaseStudies().slice(0, 2);

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

        {/* ========================================================================= */}
        {/* FEATURED CASE STUDIES SECTION */}
        {/* ========================================================================= */}
        {caseStudies.length > 0 && (
          <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
            <ScrollReveal direction="up">
              <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50">
                    Featured <span className="italic font-normal text-emerald-700 dark:text-emerald-400">Case Studies</span>
                  </h2>
                  <p className="mt-2 text-sm text-warm-600 dark:text-warm-300 leading-relaxed">
                    Real-world enterprise systems engineered for high throughput, compliance, and instant executive visibility.
                  </p>
                </div>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex-shrink-0"
                >
                  <span>Explore all case studies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study, idx) => (
                <ScrollReveal key={study.slug} direction="up" delay={idx * 0.15}>
                  <CaseStudyCard study={study} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

      </div>
    </PageTransition>
  );
}
