export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: 'Jan 2026 — Present',
    role: 'Technology Specialist | OEM',
    company: 'Betopia Limited',
    location: 'Dhaka, Bangladesh',
    description: 'Leading enterprise infrastructure and platform management, Microsoft 365 tenant administration, endpoint modernization via MECM & Intune, and identity lifecycle governance.',
    highlights: [
      'Administer and support Windows Server environments including Active Directory Domain Services (AD DS), DNS, DHCP, File Services, and Group Policy.',
      'Manage Active Directory and Microsoft Entra ID in hybrid identity scenarios, implementing lifecycle management, MFA, and Conditional Access policies.',
      'Support and maintain Microsoft Exchange (On-Prem, Hybrid, and Exchange Online) environments and perform user, mailbox, and policy administration.',
      'Manage and operate Microsoft Endpoint Configuration Manager (MECM/SCCM) for OS deployment, patching, application packaging, and compliance.',
      'Administer Microsoft Intune for device management, security baselines, and conditional access across modern workplaces.',
      'Handle L2/L3 incidents, root-cause analysis, system maintenance, upgrades, patch cycles, and technical SOP runbooks.',
      'Drive migrations across Exchange, AD, and M365, and automate routine administrative tasks using PowerShell scripting.',
    ],
    skills: ['Windows Server', 'Active Directory (AD DS)', 'Microsoft Entra ID', 'Microsoft Intune', 'MECM / SCCM', 'Microsoft Exchange', 'Microsoft 365', 'PowerShell', 'Conditional Access', 'MFA'],
  },
  {
    period: 'Jan 2022 — Jun 2025',
    role: 'IT Infrastructure and Operations',
    company: 'ESL under Robi Axiata PLC Project (End User Service)',
    location: 'Dhaka, Bangladesh',
    description: 'Managed enterprise IT infrastructure and end-user services across Robi Axiata PLC telecom environments, providing L2/L3 support and endpoint governance.',
    highlights: [
      'Delivered end-user service operations and comprehensive infrastructure support for Robi Axiata PLC telecom projects.',
      'Administered Active Directory user permissions, group policies, access control, and endpoint lifecycle management.',
      'Resolved complex L2/L3 incidents, analyzed root causes, and ensured 99%+ SLA compliance for service restoration.',
      'Executed large-scale OS deployments, client software provisioning, and security compliance rollouts across departments.',
    ],
    skills: ['IT Infrastructure', 'Active Directory', 'Endpoint Management', 'Incident Response', 'Windows Server', 'Network Support', 'SLA Governance'],
  },
  {
    period: 'Oct 2020 — Dec 2021',
    role: 'Assistant System Engineer',
    company: 'Invariant Telecom Bangladesh Ltd.',
    location: 'Dhaka, Bangladesh',
    description: 'Assisted in core system engineering, telecom infrastructure maintenance, network routing, and server administration.',
    highlights: [
      'Maintained telecom infrastructure, server hardware, and enterprise client network connections.',
      'Configured and maintained MikroTik routers, IP routing protocols, firewall rules, and bandwidth optimization.',
      'Performed proactive system monitoring, incident resolution, and preventative hardware/software maintenance.',
    ],
    skills: ['System Engineering', 'MikroTik Router', 'Network Routing', 'Firewall Configuration', 'Server Administration', 'Telecom Infrastructure'],
  },
  {
    period: 'Mar 2019 — Jun 2020',
    role: 'System Engineer',
    company: 'Redhawk Technology',
    location: 'Dhaka, Bangladesh',
    description: 'Provided end-to-end system engineering services, hardware & software deployment, network troubleshooting, and technical documentation.',
    highlights: [
      'Deployed, configured, and maintained client IT workstations, operating systems, and network peripherals.',
      'Diagnosed and resolved hardware faults, software incompatibilities, and Local Area Network (LAN) issues.',
      'Maintained technical runbooks, asset inventories, and standard operating procedures (SOPs).',
    ],
    skills: ['System Engineering', 'Workstation Deployment', 'LAN / Network Troubleshooting', 'Hardware Setup', 'Technical Documentation'],
  },
];

