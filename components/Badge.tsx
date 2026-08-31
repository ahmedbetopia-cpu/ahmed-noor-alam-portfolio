import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'olive' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs';
  
  let variantClasses = '';
  switch (variant) {
    case 'gold':
      variantClasses = 'bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/20';
      break;
    case 'olive':
      variantClasses = 'bg-olive-500/10 text-olive-700 dark:text-olive-300 border border-olive-500/20';
      break;
    case 'neutral':
    default:
      variantClasses = 'bg-warm-200/50 dark:bg-olive-900 text-warm-700 dark:text-warm-300 border border-warm-300/40 dark:border-olive-800';
      break;
  }

  return (
    <span className={`inline-flex items-center rounded-lg font-medium ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}
