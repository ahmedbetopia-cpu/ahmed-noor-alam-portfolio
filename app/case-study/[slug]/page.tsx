import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Building, Calendar, CheckCircle2, Wrench } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import MDXContent from '@/components/MDXComponents';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { siteConfig } from '@/data/siteConfig';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} — Case Study`,
    description: study.description,
    openGraph: {
      title: `${study.title} | ${siteConfig.name}`,
      description: study.description,
      type: 'article',
    },
  };
}

export default function CaseStudySlugPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="container-main pt-10 sm:pt-14 pb-24 max-w-4xl space-y-8">
        
        {/* Back Link */}
        <ScrollReveal direction="up">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all case studies</span>
          </Link>
        </ScrollReveal>

        {/* Case Study Header */}
        <ScrollReveal direction="up">
          <div className="space-y-4 border-b border-warm-200/80 dark:border-olive-800/60 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                CASE STUDY
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-warm-100 dark:bg-olive-950 text-warm-700 dark:text-warm-300 border border-warm-200 dark:border-olive-800">
                <Building className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                {study.client}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-warm-100 dark:bg-olive-950 text-warm-700 dark:text-warm-300 border border-warm-200 dark:border-olive-800">
                <Calendar className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                {study.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-warm-950 dark:text-warm-50 leading-tight">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-warm-600 dark:text-warm-300 leading-relaxed">
              {study.description}
            </p>

            {/* Tools Used */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-warm-500 dark:text-warm-400 uppercase mr-1">
                Tech Stack:
              </span>
              {study.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-warm-100 dark:bg-olive-950 text-warm-800 dark:text-warm-200 border border-warm-200 dark:border-olive-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* MDX Body */}
        <ScrollReveal direction="up">
          <div className="prose prose-warm dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-emerald-600 dark:prose-a:text-emerald-400">
            <MDXContent source={study.content} />
          </div>
        </ScrollReveal>

      </article>
    </PageTransition>
  );
}
