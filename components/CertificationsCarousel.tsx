'use client';

import React, { useCallback, useMemo } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { certifications, Certification } from '@/data/certifications';
import CertificationBadge from './CertificationBadge';

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex-[0_0_230px] sm:flex-[0_0_260px] min-w-0 mr-4">
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full group flex flex-col items-center text-center justify-between rounded-2xl bg-white dark:bg-olive-900/75 border border-warm-200/90 dark:border-olive-800/80 p-4 sm:p-5 hover:border-emerald-500/50 dark:hover:border-gold-500/50 hover:shadow-lg dark:hover:shadow-glow-olive hover:-translate-y-1 transition-all duration-300 h-full select-none cursor-pointer"
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
    </div>
  );
}

export default function CertificationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  // Tripled list ensures seamless continuous looping across all display widths
  const slides = useMemo(() => [...certifications, ...certifications, ...certifications], []);

  return (
    <div className="relative w-full space-y-3">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-xs font-mono text-warm-500 dark:text-warm-400">
          <Award className="w-4 h-4 text-emerald-500 dark:text-gold-400" />
          <span>{certifications.length} Official Industry Accreditations • Auto-Sliding Showcase</span>
        </div>
      </div>

      {/* Carousel Viewport Container */}
      <div className="relative w-full group/carousel py-2">
        {/* Edge gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />

        {/* Floating Side Left Arrow Button */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous certification"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/95 dark:bg-olive-900/95 backdrop-blur-md border border-warm-200 dark:border-olive-700 text-warm-700 dark:text-warm-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 shadow-md hover:shadow-lg transition-all duration-200 active:scale-90 opacity-90 hover:opacity-100 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Floating Side Right Arrow Button */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next certification"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/95 dark:bg-olive-900/95 backdrop-blur-md border border-warm-200 dark:border-olive-700 text-warm-700 dark:text-warm-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white hover:border-emerald-600 shadow-md hover:shadow-lg transition-all duration-200 active:scale-90 opacity-90 hover:opacity-100 hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex select-none">
            {slides.map((cert, idx) => (
              <CertificationCard key={`${cert.id}-${idx}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
