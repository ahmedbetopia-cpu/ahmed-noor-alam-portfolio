export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Infrastructure & Platform Management',
    description: 'Windows Server administration, Active Directory, Entra ID hybrid identity, and Exchange management',
    skills: [
      { name: 'Windows Server (AD DS, DNS, DHCP, File Services, GPO)', level: 'Expert' },
      { name: 'Active Directory Domain Services & Hybrid Entra ID', level: 'Expert' },
      { name: 'Microsoft Exchange (On-Prem, Hybrid & Exchange Online)', level: 'Expert' },
      { name: 'Mailbox, Transport Rules & Tenant Administration', level: 'Expert' },
      { name: 'Virtualization (Hyper-V, VMware ESXi)', level: 'Advanced' },
      { name: 'Server Upgrades, Patching & Lifecycle Cycles', level: 'Expert' },
    ],
  },
  {
    category: 'Endpoint & Modern Workplace',
    description: 'Centralized endpoint management, automated OS deployment, and Microsoft 365 collaboration',
    skills: [
      { name: 'Microsoft Intune (Device Enrollment, Configuration, Baselines)', level: 'Expert' },
      { name: 'MECM / SCCM (OSD, Task Sequences, Software Packaging)', level: 'Expert' },
      { name: 'Microsoft 365 Administration (Teams, SharePoint, OneDrive, Outlook)', level: 'Expert' },
      { name: 'Application Packaging, Distribution & Patch Compliance', level: 'Expert' },
      { name: 'Mobile Device & Application Management (MDM / MAM)', level: 'Advanced' },
    ],
  },
  {
    category: 'Security, Identity & Governance',
    description: 'Identity lifecycle management, zero-trust conditional access, and compliance enforcement',
    skills: [
      { name: 'Microsoft Entra ID (Identity Lifecycle Management)', level: 'Expert' },
      { name: 'Conditional Access, Multi-Factor Authentication (MFA) & SSPR', level: 'Expert' },
      { name: 'Device Compliance Policies & Security Baselines', level: 'Expert' },
      { name: 'Information Security, Access Reviews & Role-Based Access Control (RBAC)', level: 'Advanced' },
      { name: 'Audit Readiness & Security Governance SOPs', level: 'Advanced' },
    ],
  },
  {
    category: 'Networking, Automation & Cloud',
    description: 'PowerShell scripting, network routing, Azure platforms, and root-cause troubleshooting',
    skills: [
      { name: 'PowerShell Scripting & Routine Automation', level: 'Expert' },
      { name: 'MikroTik Router Configuration & Network Routing', level: 'Advanced' },
      { name: 'Python for Automation & Data Engineering', level: 'Proficient' },
      { name: 'Azure Platforms & Cloud Services', level: 'Advanced' },
      { name: 'Oracle Cloud Infrastructure (OCI)', level: 'Advanced' },
      { name: 'L2 / L3 Incident Response & Root Cause Analysis', level: 'Expert' },
    ],
  },
];

