'use client';

import React from 'react';
import { Award } from 'lucide-react';
import { certifications, Certification } from '@/data/certifications';
import CertificationBadge from './CertificationBadge';

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[230px] sm:w-[260px] flex-shrink-0 group flex flex-col items-center text-center justify-between rounded-2xl bg-white dark:bg-olive-900/75 border border-warm-200/90 dark:border-olive-800/80 p-4 sm:p-5 hover:border-emerald-500/50 dark:hover:border-gold-500/50 hover:shadow-lg dark:hover:shadow-glow-olive hover:-translate-y-1 transition-all duration-300"
    >
      {/* Badge with Hanging Code Pill */}
      <div className="relative mb-3 flex items-center justify-center pt-1">
        <div className="relative p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <CertificationBadge cert={cert} size="md" />
        </div>
        {cert.isNew && (
          <span className="absolute top-0 -right-2 font-mono text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-bold">
            NEW
          </span>
        )}
      </div>

      {/* Title & Year */}
      <div className="space-y-1 w-full">
        <h4 className="text-xs sm:text-sm font-bold text-warm-900 dark:text-warm-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
          {cert.name}
        </h4>
        <p className="text-[11px] font-mono text-warm-500 dark:text-warm-400 font-semibold">
          {cert.date}
        </p>
      </div>
    </a>
  );
}

export default function CertificationsCarousel() {
  return (
    <div className="relative w-full space-y-3">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-xs font-mono text-warm-500 dark:text-warm-400">
          <Award className="w-4 h-4 text-emerald-500 dark:text-gold-400" />
          <span>{certifications.length} Official Industry Accreditations • Auto-Sliding Showcase</span>
        </div>
        <span className="text-[11px] font-mono text-warm-400 dark:text-warm-500 hidden sm:inline-block">
          Hover to pause
        </span>
      </div>

      {/* Auto-Sliding Marquee Viewport */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Edge gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee-slow flex items-center gap-4">
          {[...certifications, ...certifications].map((cert, idx) => (
            <CertificationCard key={`${cert.id}-${idx}`} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
