import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Laptop, 
  Boxes, 
  Mail, 
  Terminal, 
  Network, 
  Cloud, 
  KeyRound, 
  Layers, 
  Cpu, 
  FileCode2 
} from 'lucide-react';

export const techPills = [
  { name: 'Windows Server', icon: Server, color: 'text-blue-500' },
  { name: 'Active Directory (AD DS)', icon: ShieldCheck, color: 'text-emerald-500' },
  { name: 'Microsoft Entra ID', icon: KeyRound, color: 'text-cyan-500' },
  { name: 'Microsoft Intune', icon: Laptop, color: 'text-purple-500' },
  { name: 'MECM / SCCM', icon: Boxes, color: 'text-amber-500' },
  { name: 'Microsoft 365', icon: Cloud, color: 'text-blue-400' },
  { name: 'Exchange Online & Hybrid', icon: Mail, color: 'text-teal-500' },
  { name: 'PowerShell Scripting', icon: Terminal, color: 'text-indigo-400' },
  { name: 'MikroTik Router', icon: Network, color: 'text-rose-500' },
  { name: 'Hyper-V & VMware', icon: Cpu, color: 'text-orange-500' },
  { name: 'Microsoft Fabric', icon: Layers, color: 'text-emerald-400' },
  { name: 'Python Automation', icon: FileCode2, color: 'text-yellow-500' },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-warm-200/80 dark:border-olive-800/60 bg-warm-100/40 dark:bg-olive-950/60 backdrop-blur-sm">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-warm-50 dark:from-olive-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="animate-marquee flex items-center gap-3">
        {[...techPills, ...techPills].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-olive-900/80 border border-warm-200/90 dark:border-olive-800/80 text-xs font-medium text-warm-800 dark:text-warm-200 shadow-sm flex-shrink-0 hover:border-emerald-500/40 dark:hover:border-gold-500/40 transition-colors"
            >
              <Icon className={`w-3.5 h-3.5 ${tech.color}`} />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

