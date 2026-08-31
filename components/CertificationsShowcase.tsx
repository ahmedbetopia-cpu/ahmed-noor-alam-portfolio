import React from 'react';
import { certifications, Certification } from '@/data/certifications';
import CertificationBadge from './CertificationBadge';

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 p-3 rounded-2xl bg-[#f4f7f2]/85 dark:bg-olive-950/75 border border-warm-200/80 dark:border-olive-800/70 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-olive-900 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
    >
      {/* Badge with hanging code pill */}
      <CertificationBadge cert={cert} size="md" />

      {/* Title & Year */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <span className="text-[10px] font-mono font-semibold text-warm-500 dark:text-warm-400">
            {cert.date}
          </span>
          {cert.isNew && (
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex-shrink-0">
              ACTIVE
            </span>
          )}
        </div>
        <h4 className="text-xs font-medium text-warm-800 dark:text-warm-200 truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
          {cert.name}
        </h4>
      </div>
    </a>
  );
}

export default function CertificationsShowcase() {
  const microsoftCount = certifications.filter((c) => c.issuer === 'Microsoft').length;
  const totalCount = certifications.length;

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-olive-900/50 border border-warm-200/90 dark:border-olive-800/80 shadow-md backdrop-blur-md">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Certified Stats */}
        <div className="lg:col-span-4 space-y-3 text-center lg:text-left pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-warm-200/80 dark:border-olive-800/60 pb-6 lg:pb-0 flex-shrink-0">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-5xl sm:text-6xl font-serif font-bold text-emerald-700 dark:text-emerald-400 leading-none">
              {microsoftCount}x
            </span>
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-warm-900 dark:text-warm-100 leading-tight">
                Microsoft
                <br />
                <span className="text-warm-700 dark:text-warm-300">Certified</span>
              </h3>
            </div>
          </div>
          <p className="text-xs font-mono font-semibold tracking-wider text-warm-500 dark:text-warm-400 uppercase">
            EXPERT & ASSOCIATE • {totalCount} INDUSTRY CREDENTIALS
          </p>
          <p className="text-xs text-warm-600 dark:text-warm-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
            Professional credentials in Microsoft 365 Administrator Expert (MS-102), Endpoint Administrator (MD-102), Security Administrator (SC-401), Fabric Data Engineer (DP-700), and Oracle Cloud Infrastructure Foundations.
          </p>
        </div>

        {/* Right Column: Badge Cards */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

