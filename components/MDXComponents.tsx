import React from 'react';
import Link from 'next/link';
import { ExternalLink, Info, AlertTriangle, CheckCircle, Flame } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  let borderClass = 'border-gold-500/40 bg-gold-500/5 text-gold-900 dark:text-gold-200';
  let Icon = Info;

  if (type === 'warning') {
    borderClass = 'border-amber-500/40 bg-amber-500/5 text-amber-900 dark:text-amber-200';
    Icon = AlertTriangle;
  } else if (type === 'success') {
    borderClass = 'border-olive-500/40 bg-olive-500/5 text-olive-900 dark:text-olive-200';
    Icon = CheckCircle;
  } else if (type === 'tip') {
    borderClass = 'border-gold-400/40 bg-gold-400/5 text-gold-900 dark:text-gold-100';
    Icon = Flame;
  }

  return (
    <div className={`my-6 rounded-2xl border p-5 ${borderClass}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-sm leading-relaxed">
          {title && <h5 className="font-bold mb-1">{title}</h5>}
          {children}
        </div>
      </div>
    </div>
  );
}

export const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-10 mb-4 text-warm-900 dark:text-warm-100" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-10 mb-4 text-warm-900 dark:text-warm-100 pb-2 border-b border-warm-200 dark:border-olive-800/80" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3 text-warm-900 dark:text-warm-100" {...props} />
  ),
  p: (props: any) => (
    <p className="text-base sm:text-lg leading-relaxed text-warm-700 dark:text-warm-300 my-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 my-4 text-warm-700 dark:text-warm-300" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 my-4 text-warm-700 dark:text-warm-300" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link href={href} className="text-gold-600 dark:text-gold-400 font-medium underline underline-offset-4 hover:text-gold-500 transition-colors" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 text-gold-600 dark:text-gold-400 font-medium underline underline-offset-4 hover:text-gold-500 transition-colors"
        {...props}
      >
        {children}
        <ExternalLink className="w-3.5 h-3.5 ml-0.5 inline" />
      </a>
    );
  },
  table: (props: any) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-warm-200 dark:border-olive-800/80 bg-white dark:bg-olive-950/40 shadow-sm">
      <table className="w-full text-left text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-warm-50/80 dark:bg-olive-900/50 border-b border-warm-200 dark:border-olive-800" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-warm-100 dark:divide-olive-800/40" {...props} />,
  tr: (props: any) => <tr className="hover:bg-warm-50/40 dark:hover:bg-olive-900/20 transition-colors" {...props} />,
  th: (props: any) => (
    <th className="px-5 py-4 font-semibold text-warm-900 dark:text-warm-100 text-sm whitespace-nowrap" {...props} />
  ),
  td: (props: any) => (
    <td className="px-5 py-4 text-warm-700 dark:text-warm-300 align-middle text-sm" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gold-500 pl-4 italic text-warm-600 dark:text-warm-400 my-6 bg-warm-100/50 dark:bg-olive-900/40 p-4 rounded-r-xl" {...props} />
  ),
  hr: () => <hr className="my-10 border-warm-200 dark:border-olive-800" />,
  Callout,
};

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export default function MDXContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}

