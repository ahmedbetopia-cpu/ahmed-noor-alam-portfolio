import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Briefcase,
  Globe,
  Award,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Calendar,
  MapPin,
  FolderGit2,
  Phone,
  CheckCircle2,
  Users,
  Trophy,
  ShieldCheck
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ScrollReveal from '@/components/ScrollReveal';
import SkillsGrid from '@/components/SkillsGrid';
import CertificationsCarousel from '@/components/CertificationsCarousel';
import { experiences } from '@/data/experience';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About & Career Journey',
  description: 'About Ahmed Noor Alam — IT Administrator & Technology Specialist at Betopia Limited.',
};

const featuredProjects = [
  {
    title: 'Enterprise Hybrid Identity & Entra ID Sync',
    type: 'Identity & Security',
    stack: 'Microsoft Entra ID • Windows Server • Active Directory • MFA • Conditional Access',
    description: 'Architected hybrid identity synchronization between on-premises AD DS and Microsoft Entra ID with password hash sync, granular conditional access policies, self-service password reset (SSPR), and access reviews.',
  },
  {
    title: 'MECM & Microsoft Intune Modern Workplace Rollout',
    type: 'Modern Workplace',
    stack: 'Microsoft Intune • MECM/SCCM • Windows Autopilot • BitLocker • Compliance',
    description: 'Managed centralized endpoint administration across 1,000+ enterprise devices with automated OS deployment (OSD), zero-touch Intune enrollment, application packaging, and automated patch compliance.',
  },
  {
    title: 'Robi Axiata Telecom End-User Modernization',
    type: 'Infrastructure Project',
    stack: 'Active Directory • End User Services • Windows Server • SLA Governance',
    description: 'Delivered end-user service operations, client endpoint governance, and L2/L3 infrastructure support for ESL under Robi Axiata PLC telecom project with sustained 99%+ SLA compliance.',
  },
  {
    title: 'Microsoft 365 & Exchange Hybrid Transition',
    type: 'Cloud Migration',
    stack: 'Microsoft Exchange • Exchange Online • PowerShell • M365 Security',
    description: 'Executed staged and cutover mailbox migrations from on-premises Exchange to Exchange Online with zero downtime, transport rule configurations, retention policies, and automated management.',
  },
  {
    title: 'PowerShell Infrastructure Automation Runbooks',
    type: 'Automation Pipeline',
    stack: 'PowerShell 7 • Windows Server • Task Scheduler • REST APIs',
    description: 'Engineered comprehensive PowerShell automation suites for user onboarding/offboarding lifecycle triggers, server health telemetry logging, automated patch cycles, and SOP runbooks.',
  },
];

const academicQualifications = [
  {
    institution: 'American International University-Bangladesh (AIUB)',
    degree: 'B.Sc in Electrical and Electronics Engineering (EEE)',
    period: '2014 – 2018',
    grade: 'CGPA 3.94 / 4.00',
    location: 'Dhaka, Bangladesh',
    honors: 'Graduated with Academic Honor "Magna Cum Laude"',
    description: 'Graduated with highest academic distinction (Magna Cum Laude). Comprehensive engineering coursework and laboratory research in digital logic, microprocessors, signal systems, network architecture, and computer engineering foundations.',
  },
  {
    institution: 'Western College (Dhaka)',
    degree: 'Higher Secondary Certificate (H.S.C) — Science Group',
    period: '2011 – 2013',
    grade: 'GPA 4.00 / 5.00',
    location: 'Dhaka, Bangladesh',
    description: 'Rigorous pre-university scientific curriculum with strong emphasis on Mathematics, Physics, Chemistry, and Information Technology.',
  },
  {
    institution: 'Sara Marwari High School & College (Ishwardi)',
    degree: 'Secondary School Certificate (S.S.C) — Science Group',
    period: '2009 – 2011',
    grade: 'GPA 4.56 / 5.00',
    location: 'Ishwardi, Pabna, Bangladesh',
    description: 'Secondary education foundation in science, analytical thinking, mathematics, and foundational computer studies.',
  },
];

const academicAwards = [
  {
    title: 'Academic Honor "Magna Cum Laude"',
    source: "AIUB's 18th Convocation",
    year: '2018',
    description: 'Awarded highest institutional distinction for sustained academic excellence throughout the 4-year undergraduate degree.',
  },
  {
    title: "Dean's List Award",
    source: 'American International University-Bangladesh',
    year: '2016, 2017',
    description: 'Recognized for consecutive semesters of academic top-tier performance with outstanding semester grade point averages.',
  },
  {
    title: '3rd Position — Project & Thesis Poster Presentation',
    source: 'AIUB Engineering Symposium',
    year: '2017',
    description: 'Secured 3rd place in competitive engineering thesis poster presentation evaluated by academic and industry juries.',
  },
  {
    title: '60% Merit Scholarship',
    source: 'American International University-Bangladesh',
    year: '2014 – 2018',
    description: 'Awarded competitive merit scholarship from the university in recognition of scholastic achievement.',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container-main pt-10 sm:pt-14 pb-24 space-y-16 sm:space-y-24">

        {/* ========================================================================= */}
        {/* SECTION 1: HERO / ABOUT ME HEADER */}
        {/* ========================================================================= */}
        <section className="pt-2">
          <ScrollReveal direction="up">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: Portrait Photo / Avatar */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden bg-warm-200 dark:bg-olive-900 border border-warm-200/90 dark:border-olive-800 shadow-xl group">
                  <img
                    src="/images/profile.svg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Intro & Bio */}
              <div className="lg:col-span-8 space-y-4 text-left">
                {/* Pill */}
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                  ABOUT ME
                </span>

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-50 leading-tight">
                  Hey, I&apos;m <span className="italic font-serif font-normal text-emerald-700 dark:text-emerald-400">Ahmed Noor Alam.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-semibold text-emerald-700 dark:text-emerald-400 leading-snug">
                  IT Administrator &amp; Technology Specialist (OEM) at Betopia Limited
                </p>

                {/* Intro Bio */}
                <p className="text-sm sm:text-base text-warm-700 dark:text-warm-300 leading-relaxed max-w-2xl">
                  Experienced IT professional with a proven record of accomplishment in the field over past <strong>6 years+</strong>. Skilled in Windows Server environments, Active Directory &amp; Entra ID hybrid identity, MECM/SCCM, Microsoft Intune, security compliance, network administration, and enterprise troubleshooting.
                </p>

                {/* CTA Button & Socials */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-warm-950 font-bold text-sm transition-all shadow-sm hover:shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get in touch</span>
                  </Link>

                  <div className="flex items-center gap-2 pl-2">
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-warm-100 dark:bg-olive-900/80 border border-warm-200 dark:border-olive-800 text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.links.phone}
                      className="p-2.5 rounded-xl bg-warm-100 dark:bg-olive-900/80 border border-warm-200 dark:border-olive-800 text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                      aria-label="Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.links.email}
                      className="p-2.5 rounded-xl bg-warm-100 dark:bg-olive-900/80 border border-warm-200 dark:border-olive-800 text-warm-700 dark:text-warm-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: MY STORY */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                My Story &amp; Professional Journey
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Story Text */}
              <div className="lg:col-span-12 space-y-4 text-sm sm:text-base text-warm-700 dark:text-warm-300 leading-relaxed">
                <p>
                  My engineering foundation began at <strong className="text-warm-900 dark:text-warm-100 font-semibold">American International University-Bangladesh (AIUB)</strong>, where I pursued my Bachelor of Science in Electrical and Electronics Engineering (EEE) and graduated with the prestigious academic honor <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">&ldquo;Magna Cum Laude&rdquo;</strong> with an exceptional <strong className="text-warm-900 dark:text-warm-100 font-semibold">CGPA of 3.94 / 4.00</strong>. My early academic rigor earned me multiple Dean&apos;s Awards and full merit recognition.
                </p>
                <p>
                  Transitioning into the enterprise IT world over 6+ years ago, I began as a System Engineer at Redhawk Technology and Invariant Telecom, mastering network routing, MikroTik routers, server hardware deployment, and localized enterprise connectivity.
                </p>
                <p>
                  I expanded into large-scale telecommunications infrastructure as part of the <strong className="text-warm-900 dark:text-warm-100 font-medium">ESL team under the Robi Axiata PLC project</strong>. For over 3.5 years, I managed end-user service operations, Active Directory governance, L2/L3 troubleshooting, and system maintenance across massive operational networks.
                </p>
                <p>
                  Today at <strong className="text-warm-900 dark:text-warm-100 font-semibold">Betopia Limited</strong>, I serve as Technology Specialist | OEM, spearheading Infrastructure &amp; Platform Management, hybrid identity with Microsoft Entra ID, modern workplace administration via Microsoft Intune and MECM/SCCM, Exchange Hybrid migrations, zero-trust Conditional Access, and PowerShell automation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: WHAT I DO TODAY / CAREER EXPERIENCE */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Experience &amp; Career Path
              </h2>
            </div>

            <p className="text-sm sm:text-base text-warm-600 dark:text-warm-400 leading-relaxed mb-8 max-w-3xl">
              Over 6+ years of hands-on technical leadership across enterprise infrastructure, hybrid cloud environments, endpoint security, and IT service delivery.
            </p>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-warm-950 dark:text-warm-50 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-warm-500 dark:text-warm-400 px-3 py-1 rounded-full bg-warm-100 dark:bg-olive-950 border border-warm-200 dark:border-olive-800">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-warm-700 dark:text-warm-300 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Bullet points with bold green '>' */}
                  <div className="space-y-2.5 mt-4 pt-4 border-t border-warm-200/60 dark:border-olive-800/60 text-xs sm:text-sm text-warm-700 dark:text-warm-300 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 flex-shrink-0 select-none">
                          &gt;
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-warm-200/40 dark:border-olive-800/40">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-warm-100 dark:bg-olive-950 text-warm-600 dark:text-warm-400 border border-warm-200 dark:border-olive-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: FEATURED PROJECTS */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Key Enterprise Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-400 mb-6">
              A selection of core infrastructure implementations, cloud migrations, and endpoint management systems delivered in production.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {featuredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-5 sm:p-6 hover:border-emerald-500/40 transition-all duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-warm-900 dark:text-warm-100 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-warm-600 dark:text-warm-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-200/60 dark:border-olive-800/50">
                    <span className="text-[11px] font-mono text-warm-500 dark:text-warm-400">
                      {project.stack}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: SKILLS & TOOLS */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Skills &amp; Technical Expertise
              </h2>
            </div>

            <SkillsGrid />
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: CERTIFICATIONS */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Professional Certifications
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-400 mb-6">
              Industry credentials validating expertise in Microsoft 365 Expert Administration, Endpoint Management (MD-102), Information Security (SC-401), Fabric Data Engineering, and Oracle Cloud.
            </p>

            <CertificationsCarousel />
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: ACADEMIC QUALIFICATIONS */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Academic Qualifications
              </h2>
            </div>

            <div className="space-y-4">
              {academicQualifications.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 shadow-sm space-y-2.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-warm-950 dark:text-warm-50">
                        {edu.institution}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-warm-500 dark:text-warm-400 px-3 py-1 rounded-full bg-warm-100 dark:bg-olive-950 border border-warm-200 dark:border-olive-800">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-warm-500 dark:text-warm-400 pt-1">
                    <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-warm-800 dark:text-warm-200">{edu.grade}</span>
                    {edu.honors && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30">
                          {edu.honors}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-warm-600 dark:text-warm-300 leading-relaxed pt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 8: ACADEMIC AWARDS & ACHIEVEMENTS */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                Academic Awards &amp; Distinctions
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {academicAwards.map((award, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-5 sm:p-6 hover:border-emerald-500/40 transition-all duration-200 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-warm-900 dark:text-warm-100">
                      {award.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {award.source}
                  </p>
                  <p className="text-xs text-warm-600 dark:text-warm-300 leading-relaxed pt-1">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 9: PROFESSIONAL REFERENCES */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 dark:text-warm-100">
                References
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-olive-900/60 border border-warm-200/90 dark:border-olive-800/80 p-6 sm:p-7 hover:border-emerald-500/40 transition-all duration-300 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-warm-950 dark:text-warm-50">
                      {ref.name}
                    </h3>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      {ref.relation}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {ref.designation}
                    </p>
                    <p className="text-xs text-warm-600 dark:text-warm-300 mt-0.5">
                      {ref.organization}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-warm-200/60 dark:border-olive-800/60 space-y-1.5 text-xs text-warm-700 dark:text-warm-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <a href={`tel:${ref.phone}`} className="hover:underline font-mono">
                        {ref.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <a href={`mailto:${ref.email}`} className="hover:underline font-mono">
                        {ref.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 10: GET IN TOUCH (#contact) */}
        {/* ========================================================================= */}
        <section id="contact" className="pt-8 border-t border-warm-200/80 dark:border-olive-800/60 scroll-mt-24">
          <ScrollReveal direction="up">
            <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-olive-900/70 border border-warm-200/90 dark:border-olive-800/80 shadow-md">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-warm-950 dark:text-warm-100">
                  Let&apos;s Connect &amp; Collaborate
                </h2>
                <p className="text-sm sm:text-base text-warm-600 dark:text-warm-400 leading-relaxed">
                  Looking to optimize your Windows Server infrastructure, transition to hybrid Entra ID, deploy Intune endpoint management, or automate IT operations? Let&apos;s connect.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-warm-950 font-bold text-sm transition-colors shadow-md"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={siteConfig.links.phone}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-warm-100 dark:bg-olive-950 text-warm-800 dark:text-warm-200 border border-warm-200 dark:border-olive-800 font-semibold text-sm hover:border-emerald-500/40 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.phone}</span>
                  </a>

                  <a
                    href={siteConfig.links.email}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-warm-100 dark:bg-olive-950 text-warm-800 dark:text-warm-200 border border-warm-200 dark:border-olive-800 font-semibold text-sm hover:border-emerald-500/40 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageTransition>
  );
}
