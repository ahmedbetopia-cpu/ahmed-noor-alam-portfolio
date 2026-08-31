export interface Skill {
  name: string;
  category: 'platform' | 'data' | 'design' | 'database';
}

export const skills: Skill[] = [
  { name: 'Power Platform', category: 'platform' },
  { name: 'Power Apps', category: 'platform' },
  { name: 'Power Automate', category: 'platform' },
  { name: 'SharePoint', category: 'platform' },
  { name: 'Microsoft 365', category: 'platform' },
  { name: 'Microsoft Fabric', category: 'data' },
  { name: 'Power BI', category: 'data' },
  { name: 'Data Analysis', category: 'data' },
  { name: 'SQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Figma', category: 'design' },
  { name: 'Canva', category: 'design' },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Power Platform Fundamentals (PL-900)',
    issuer: 'Microsoft',
    date: '2024',
  },
  {
    name: 'Microsoft Certified: Power Platform App Maker Associate (PL-100)',
    issuer: 'Microsoft',
    date: '2024',
  },
  {
    name: 'Microsoft Certified: Data Analyst Associate (PL-300)',
    issuer: 'Microsoft',
    date: '2024',
  },
];
