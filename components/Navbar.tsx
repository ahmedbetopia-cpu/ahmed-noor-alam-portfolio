'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = siteConfig.navLinks;


  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-warm-50/90 dark:bg-olive-950/90 border-b border-warm-200/80 dark:border-olive-800/60 transition-colors">
      <nav className="container-main flex items-center justify-between h-16 sm:h-20">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-warm-900 dark:text-warm-100"
        >
          <span className="font-heading font-extrabold text-warm-900 dark:text-warm-100 group-hover:text-emerald-600 dark:group-hover:text-gold-400 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-warm-600 dark:text-warm-300 hover:text-warm-950 dark:hover:text-warm-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action & Theme Toggle (Matching Screenshot 1) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-warm-950 transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Get in touch</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-warm-100 dark:bg-olive-900 border border-warm-200 dark:border-olive-800 text-warm-800 dark:text-warm-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-warm-200 dark:border-olive-800/80 bg-warm-50/95 dark:bg-olive-950/95 backdrop-blur-xl px-4 py-4 space-y-2 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold'
                      : 'text-warm-700 dark:text-warm-300 hover:bg-warm-100 dark:hover:bg-olive-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-warm-200 dark:border-olive-800/50">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold rounded-xl bg-emerald-600 text-white dark:bg-emerald-500 dark:text-warm-950"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
