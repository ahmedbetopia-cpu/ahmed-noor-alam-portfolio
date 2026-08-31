export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  date: string;
  badgeImage: string;
  verifyUrl?: string;
  skills: string[];
  isNew?: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'ms-102',
    name: 'Microsoft 365 Administrator Expert',
    code: 'MS-102',
    issuer: 'Microsoft',
    date: '2026',
    badgeImage: '/certs/microsoft-certified-associate-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/m365-administrator-expert/',
    skills: ['Microsoft 365 Tenant', 'Entra ID Identity', 'Exchange Online', 'Teams & SharePoint', 'Compliance & Security'],
    isNew: true,
  },
  {
    id: 'md-102',
    name: 'Microsoft 365 Endpoint Administrator Associate',
    code: 'MD-102',
    issuer: 'Microsoft',
    date: '2026',
    badgeImage: '/certs/microsoft-certified-associate-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/m365-endpoint-administrator-associate/',
    skills: ['Microsoft Intune', 'MECM / SCCM', 'Windows OS Deployment', 'Application Packaging', 'Device Compliance'],
    isNew: true,
  },
  {
    id: 'sc-401',
    name: 'Information Security Administrator Associate',
    code: 'SC-401',
    issuer: 'Microsoft',
    date: '2026',
    badgeImage: '/certs/microsoft-certified-associate-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/information-protection-administrator/',
    skills: ['Information Protection', 'Data Loss Prevention', 'Conditional Access', 'MFA', 'Security Governance'],
    isNew: true,
  },
  {
    id: 'dp-700',
    name: 'Fabric Data Engineer Associate',
    code: 'DP-700',
    issuer: 'Microsoft',
    date: '2026',
    badgeImage: '/certs/microsoft-certified-associate-badge.svg',
    verifyUrl: 'https://learn.microsoft.com/credentials/certifications/fabric-data-engineer-associate/',
    skills: ['Microsoft Fabric', 'Dataflow Gen2', 'Lakehouse Architecture', 'Delta Lake', 'Data Engineering'],
    isNew: true,
  },
  {
    id: 'oci-foundations',
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    code: 'OCI Foundations',
    issuer: 'Oracle',
    date: '2026',
    badgeImage: '/certs/oracle-cloud-foundations.svg',
    verifyUrl: 'https://education.oracle.com/oracle-cloud-infrastructure-foundations-associate/pexam_1Z0-1085-23',
    skills: ['Cloud Architecture', 'OCI Compute & VCN', 'Identity & Security', 'Autonomous Database'],
  },
];

