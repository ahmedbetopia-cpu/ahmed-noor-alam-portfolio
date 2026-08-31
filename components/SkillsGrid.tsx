import React from 'react';

const coreCompetencies = [
  'ACTIVE DIRECTORY & HYBRID IDENTITY',
  'WINDOWS SERVER INFRASTRUCTURE',
  'ENDPOINT MANAGEMENT (MECM & INTUNE)',
  'MICROSOFT 365 TENANT ADMINISTRATION',
  'ZERO-TRUST CONDITIONAL ACCESS & MFA',
  'EXCHANGE HYBRID & EMAIL ROUTING',
  'GROUP POLICY & SECURITY BASELINES',
  'OS DEPLOYMENT & APPLICATION PACKAGING',
  'L2 / L3 INCIDENT & ROOT CAUSE ANALYSIS',
  'IDENTITY LIFECYCLE GOVERNANCE',
  'POWERSHELL INFRASTRUCTURE AUTOMATION',
  'NETWORK ROUTING & FIREWALL MANAGEMENT',
  'PATCH MANAGEMENT & AUDIT COMPLIANCE',
  'TECHNICAL SOPs & RUNBOOKS CREATION',
];

const toolsAndTechnologies = [
  'WINDOWS SERVER (AD DS, DNS, DHCP)',
  'MICROSOFT ENTRA ID',
  'MICROSOFT INTUNE',
  'MECM / SCCM',
  'MICROSOFT 365',
  'EXCHANGE ONLINE & HYBRID',
  'POWERSHELL',
  'MIKROTIK ROUTERS',
  'HYPER-V / VMWARE',
  'AZURE PLATFORMS',
  'ORACLE CLOUD (OCI)',
  'MICROSOFT FABRIC',
  'PYTHON',
  'TEAMS & SHAREPOINT ONLINE',
  'GROUP POLICY OBJECTS (GPO)',
  'MULTI-FACTOR AUTH (MFA)',
];

export default function SkillsGrid() {
  return (
    <div className="space-y-8">
      {/* Core Competencies */}
      <div className="space-y-3.5">
        <h3 className="text-xs font-mono font-bold tracking-wider text-warm-600 dark:text-warm-400 uppercase">
          Core Competencies
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {coreCompetencies.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-semibold bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors cursor-default shadow-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="space-y-3.5">
        <h3 className="text-xs font-mono font-bold tracking-wider text-warm-600 dark:text-warm-400 uppercase">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {toolsAndTechnologies.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-medium bg-white dark:bg-olive-900/80 text-warm-800 dark:text-warm-200 border border-warm-200/90 dark:border-olive-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors cursor-default shadow-xs"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

