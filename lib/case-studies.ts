export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  description: string;
  techStack: string[];
  year: string;
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'enterprise-approval-system',
    title: 'Enterprise Approval Management System',
    client: 'Social Marketing Company (SMC)',
    description: 'Designed and built a multi-layer approval workflow system on Microsoft 365 Power Platform with dynamic approver insertion, vetting, and document governance — embedded within Microsoft Teams.',
    techStack: ['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft Teams', 'Adaptive Cards'],
    year: '2024',
    highlights: [
      '5-action approver decision model (Approve, Reject, Return, Vet, Insert)',
      'Dynamic approval path modification mid-process',
      'Auto-generated sequential approval numbers',
      'Complete audit trail with exportable logs',
    ],
  },
  {
    slug: 'sales-analytics-dashboard',
    title: 'Sales Analytics Dashboard',
    client: 'Internal Project',
    description: 'Built an interactive Power BI dashboard for real-time sales performance tracking with drill-through capabilities, KPI monitoring, and automated data refresh.',
    techStack: ['Power BI', 'SQL', 'Microsoft Fabric', 'DAX'],
    year: '2024',
    highlights: [
      'Real-time data refresh with scheduled pipelines',
      'Drill-through from summary to transaction level',
      'Mobile-optimized dashboard views',
      'Role-based row-level security',
    ],
  },
  {
    slug: 'inventory-management-app',
    title: 'Inventory Management Application',
    client: 'Internal Project',
    description: 'Developed a canvas app for warehouse inventory tracking with barcode scanning, stock alerts, and automated reorder notifications via Power Automate.',
    techStack: ['Power Apps', 'Power Automate', 'SharePoint', 'Dataverse'],
    year: '2023',
    highlights: [
      'Barcode scanning integration for quick stock updates',
      'Automated low-stock alerts via Teams and email',
      'Role-based access for warehouse staff and managers',
      'Monthly inventory reports auto-generated',
    ],
  },
];
