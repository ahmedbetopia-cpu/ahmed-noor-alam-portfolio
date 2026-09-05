import type { Metadata } from 'next';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Clock, 
  CheckCircle2, 
  Send, 
  Server, 
  ShieldCheck 
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact — Get in Touch',
  description: 'Connect with Ahmed Noor Alam for enterprise IT infrastructure, Windows Server administration, Entra ID hybrid identity, and MECM / Intune modern workplace solutions.',
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.links.email,
    description: 'Direct inbox for consultations and inquiries',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.links.phone,
    description: 'Direct line (voice & WhatsApp)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-noor-alam',
    href: siteConfig.links.linkedin,
    description: 'Professional profile & network connections',
  },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="container-main pt-10 sm:pt-14 pb-24 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <section className="pt-2">
          <ScrollReveal direction="up">
            <div className="space-y-3.5 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                GET IN TOUCH
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 leading-[1.12]">
                Let&apos;s talk <span className="italic font-normal text-emerald-700 dark:text-emerald-400">infrastructure &amp; cloud.</span>
              </h1>
              <p className="text-base sm:text-lg text-warm-600 dark:text-warm-300 leading-relaxed max-w-2xl">
                Have a Windows Server environment to modernize, Microsoft Entra ID hybrid sync to implement, or enterprise endpoint fleet to manage? Reach out directly.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Cards Grid */}
        <section>
          <ScrollReveal direction="up">
            <div className="grid sm:grid-cols-3 gap-4">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group rounded-2xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-5 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-mono font-semibold text-warm-500 dark:text-warm-400 uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-warm-900 dark:text-warm-100 mt-1 truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <p className="text-[11px] text-warm-500 dark:text-warm-400 mt-3 pt-2 border-t border-warm-200/60 dark:border-olive-800/50">
                      {item.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* Main Reachout Section */}
        <section>
          <ScrollReveal direction="up">
            <div className="rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 shadow-md">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-950 dark:text-warm-100">
                      Professional Highlights
                    </h2>
                    <p className="text-sm text-warm-600 dark:text-warm-400 mt-2 leading-relaxed">
                      Available for IT administration, system engineering, Microsoft 365 cloud migrations, endpoint deployment, and technical consulting.
                    </p>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-warm-700 dark:text-warm-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>6+ Years Experience:</strong> Proven track record in enterprise systems, telecom operations, and server administration.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Microsoft Certified:</strong> MS-102 Expert, MD-102 Endpoint Administrator, SC-401 Security Administrator, DP-700 Fabric Data Engineer.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>Academic Distinction:</strong> B.Sc in EEE from AIUB graduated <em>Magna Cum Laude</em> (CGPA 3.94 / 4.00).</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-warm-200/70 dark:border-olive-800/60">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Available for enterprise IT opportunities &amp; consultations</span>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Email Action */}
                <div className="lg:col-span-6 rounded-2xl bg-warm-50 dark:bg-olive-950/80 border border-warm-200/90 dark:border-olive-800/80 p-6 sm:p-8 space-y-4">
                  <h3 className="text-lg font-serif font-bold text-warm-900 dark:text-warm-100">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-400 leading-relaxed">
                    Click below to open your email client with pre-filled recipient information, or connect directly via LinkedIn.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`mailto:${siteConfig.email}?subject=Inquiry%20for%20Ahmed%20Noor%20Alam`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-warm-950 font-bold text-sm transition-all shadow-sm hover:shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email ahmednooralam08@gmail.com</span>
                    </a>

                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-olive-900 border border-warm-200/90 dark:border-olive-800 text-warm-800 dark:text-warm-100 font-semibold text-sm hover:border-emerald-500/40 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Connect on LinkedIn</span>
                    </a>

                    <a
                      href={siteConfig.links.phone}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-olive-900 border border-warm-200/90 dark:border-olive-800 text-warm-800 dark:text-warm-100 font-semibold text-sm hover:border-emerald-500/40 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Call {siteConfig.phone}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageTransition>
  );
}
