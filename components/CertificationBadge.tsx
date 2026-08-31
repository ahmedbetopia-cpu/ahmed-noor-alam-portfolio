import React from 'react';
import { Certification } from '@/data/certifications';

interface CertificationBadgeProps {
  cert: Certification;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CertificationBadge({
  cert,
  size = 'md',
  className = '',
}: CertificationBadgeProps) {
  const isMicrosoft = cert.issuer === 'Microsoft';
  const isHuawei = cert.id === 'huawei-ict';

  // Sizing configurations
  const dimensions = {
    sm: { container: 'w-10 h-11', img: 'w-10 h-10', pillText: 'text-[8px]', pillPad: 'px-1 py-0', pillOffset: '-bottom-1.5' },
    md: { container: 'w-12 h-14', img: 'w-12 h-12', pillText: 'text-[9px]', pillPad: 'px-1.5 py-0.5', pillOffset: '-bottom-1.5' },
    lg: { container: 'w-20 h-24', img: 'w-20 h-20', pillText: 'text-[11px]', pillPad: 'px-2 py-0.5', pillOffset: '-bottom-2' },
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center flex-shrink-0 ${dimensions.container} ${className}`}>
      {/* Badge / Logo Image */}
      <img
        src={cert.badgeImage}
        alt={cert.name}
        className={`${dimensions.img} object-contain filter drop-shadow-sm ${
          isHuawei ? 'rounded-xl overflow-hidden shadow-sm' : ''
        } group-hover:scale-105 transition-transform duration-200`}
        loading="lazy"
      />

      {/* Microsoft Exam Code Hanging Pill Tag (Matches Sulaiman Ahmed's site design) */}
      {isMicrosoft && (
        <span
          className={`absolute ${dimensions.pillOffset} left-1/2 -translate-x-1/2 whitespace-nowrap font-mono font-bold ${dimensions.pillText} ${dimensions.pillPad} rounded-md bg-white dark:bg-olive-950 text-slate-800 dark:text-warm-100 border border-slate-300/90 dark:border-olive-700 shadow-sm leading-tight`}
        >
          {cert.code}
        </span>
      )}
    </div>
  );
}
