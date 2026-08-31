'use client';

import Link from 'next/link';
import { ArrowRight, Building, CheckCircle2, Sparkles } from 'lucide-react';
import { CaseStudyPost } from '@/lib/mdx';
import Badge from './Badge';

export default function CaseStudyCard({ study }: { study: CaseStudyPost }) {
  return (
    <div className="group relative flex flex-col rounded-3xl bg-white dark:bg-olive-900/70 border border-warm-200/90 dark:border-olive-800/80 p-6 sm:p-8 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-glow-olive hover:-translate-y-1 transition-all duration-300">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-warm-500 dark:text-warm-400">
          <Building className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="font-semibold text-warm-700 dark:text-warm-300">{study.client}</span>
          <span>•</span>
          <span>{study.year}</span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-bold">
          Featured Study
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
        <Link href={`/case-study/${study.slug}`}>
          {study.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-300 leading-relaxed mb-6">
        {study.description}
      </p>

      {/* Highlights / Key Deliverables */}
      {study.highlights && study.highlights.length > 0 && (
        <div className="mb-6 space-y-2.5 bg-[#f4f7f2]/80 dark:bg-olive-950/70 p-4 sm:p-5 rounded-2xl border border-warm-200/70 dark:border-olive-800/60">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Key Deliverables
          </p>
          <ul className="space-y-1.5 text-xs text-warm-700 dark:text-warm-300">
            {study.highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools Used & CTA Link */}
      <div className="mt-auto pt-4 border-t border-warm-200/70 dark:border-olive-800/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {study.toolsUsed.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-warm-100 dark:bg-olive-950 text-warm-700 dark:text-warm-300 border border-warm-200 dark:border-olive-800"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={`/case-study/${study.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 group-hover:translate-x-1 transition-all"
        >
          <span>View Deep-Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
