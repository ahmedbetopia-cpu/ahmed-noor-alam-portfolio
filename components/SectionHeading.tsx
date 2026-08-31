import { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  action,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 ${
        align === 'center' ? 'text-center items-center' : ''
      } ${className}`}
    >
      <div className="max-w-2xl">
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/80 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30 mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {badge}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-warm-950 dark:text-warm-100">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-base text-warm-600 dark:text-warm-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
