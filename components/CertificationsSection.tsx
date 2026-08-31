import { certifications } from '@/lib/skills';
import { Award } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="card flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-accent-600 dark:text-accent-400" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {cert.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {cert.issuer} · {cert.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
