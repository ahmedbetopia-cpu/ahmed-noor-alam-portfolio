import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, Sparkles, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyCard from '@/components/CaseStudyCard';
import { getAllCaseStudies } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Case Studies — Real projects, measured results',
  description: 'In-depth enterprise infrastructure case studies, hybrid identity, Microsoft 365 migrations, and endpoint management solutions by Ahmed Noor Alam.',
};


export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <PageTransition>
      <div className="container-main pt-10 sm:pt-14 pb-24 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* HEADER (Matching Sulaiman's Blueprint: "Real projects, measured results.") */}
        {/* ========================================================================= */}
        <section className="pt-2">
          <ScrollReveal direction="up">
            <div className="space-y-3.5 max-w-3xl">
              {/* Category Tag */}
              <p className="text-xs font-mono font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
                CASE STUDIES
              </p>

              {/* Title with Editorial Serif and Italic */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 leading-[1.12]">
                Real projects, <span className="italic font-normal text-emerald-700 dark:text-emerald-400">measured results.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-warm-600 dark:text-warm-300 leading-relaxed max-w-2xl">
                Production work with the numbers to back it up: what the client needed, what was built, and exactly what changed. Screenshots, architecture diagrams, and the technical decisions behind each build.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================================= */}
        {/* OVERVIEW STATS & NARRATIVE CARD (Matching Screenshot 4) */}
        {/* ========================================================================= */}
        <section>
          <ScrollReveal direction="up">
            <div className="rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 shadow-md space-y-8">
              
              {/* Narrative Paragraph */}
              <p className="text-sm sm:text-base text-warm-700 dark:text-warm-300 leading-relaxed">
                Production builds across the modern Power Platform &amp; data stack, moving from business operational requirements through relational Dataverse modeling to self-serve analytics and applied AI. These are real production systems delivered for enterprise organizations, pairing a clear before and after with the architecture, the tradeoffs, and the measured results. Common threads run through them all: Power Apps canvas interfaces, fault-tolerant Power Automate state machines, optimized Fabric lakehouses validated to the cent, and AI used as a practical tool rather than a headline.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-warm-200/70 dark:border-olive-800/60">
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                    5
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-warm-900 dark:text-warm-100">
                    End-to-end builds
                  </h4>
                  <p className="text-[11px] text-warm-500 dark:text-warm-400">
                    applications, automation, and AI
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                    99.9%
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-warm-900 dark:text-warm-100">
                    SLA compliance
                  </h4>
                  <p className="text-[11px] text-warm-500 dark:text-warm-400">
                    on multi-layer approval workflows
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                    100%
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-warm-900 dark:text-warm-100">
                    Enterprise delegation
                  </h4>
                  <p className="text-[11px] text-warm-500 dark:text-warm-400">
                    zero 2,000-record caps in Dataverse
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 dark:text-emerald-400">
                    to the cent
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-warm-900 dark:text-warm-100">
                    Legacy parity
                  </h4>
                  <p className="text-[11px] text-warm-500 dark:text-warm-400">
                    proven on every migration
                  </p>
                </div>
              </div>

              {/* Skill Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Microsoft Fabric',
                  'Power Apps',
                  'Power Automate',
                  'Dataverse',
                  'Power BI',
                  'Copilot Studio',
                  'Adaptive Cards',
                  'SharePoint',
                  'Agentic AI',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-warm-100 dark:bg-olive-950 text-warm-700 dark:text-warm-300 border border-warm-200 dark:border-olive-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================================= */}
        {/* CASE STUDIES GRID */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="grid gap-8 md:grid-cols-2">
            {studies.map((study, idx) => (
              <ScrollReveal key={study.slug} direction="up" delay={idx * 0.15}>
                <CaseStudyCard study={study} />
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
