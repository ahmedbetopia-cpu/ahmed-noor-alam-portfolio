import Link from 'next/link';
import { Github, Linkedin, Mail, Server, Heart } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-warm-200/80 dark:border-olive-800/60 bg-warm-100/50 dark:bg-olive-950/90 pt-16 pb-12 transition-colors mt-auto">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-warm-200/70 dark:border-olive-800/50">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold tracking-tight text-warm-900 dark:text-warm-100">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Server className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-warm-600 dark:text-warm-400 max-w-md leading-relaxed">
              IT Administrator & Technology Specialist with 6+ years of expertise managing Windows Server environments, Entra ID hybrid identity, MECM/SCCM, Microsoft Intune, and Microsoft 365 cloud infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-warm-200/60 dark:bg-olive-900 border border-warm-300/60 dark:border-olive-800 flex items-center justify-center text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.email}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-warm-200/60 dark:bg-olive-900 border border-warm-300/60 dark:border-olive-800 flex items-center justify-center text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-warm-200/60 dark:bg-olive-900 border border-warm-300/60 dark:border-olive-800 flex items-center justify-center text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-warm-500 dark:text-warm-400 mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-warm-600 dark:text-warm-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Home / Blog
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-warm-600 dark:text-warm-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-warm-600 dark:text-warm-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About & Qualifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-warm-600 dark:text-warm-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-warm-500 dark:text-warm-400 mb-4 font-semibold">
              Specialties
            </h3>
            <ul className="space-y-2 text-xs text-warm-600 dark:text-warm-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Windows Server &amp; Active Directory
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Microsoft Entra ID &amp; Hybrid Identity
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Microsoft Intune &amp; MECM / SCCM
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Microsoft 365 &amp; Exchange Hybrid
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Conditional Access &amp; Compliance
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                PowerShell Automation &amp; SOPs
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-500 dark:text-warm-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            IT Administrator &amp; Technology Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}

