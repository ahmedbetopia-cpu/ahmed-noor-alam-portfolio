'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

const blogDropdownItems = [
  { href: '/blog/exchange-server', label: 'Exchange Server' },
  { href: '/blog/intune', label: 'Intune' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogDropOpen, setBlogDropOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBlogDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isBlogActive = pathname === '/' || pathname.startsWith('/blog');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-warm-50/90 border-b border-warm-200/80 transition-colors">
      <nav className="container-main flex items-center justify-between h-16 sm:h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-warm-900"
        >
          <span className="font-heading font-extrabold text-warm-900 group-hover:text-emerald-600 transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Blogs with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setBlogDropOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isBlogActive
                  ? 'text-emerald-700 font-bold'
                  : 'text-warm-600 hover:text-warm-950'
              }`}
            >
              Blogs
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${blogDropOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {blogDropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-2.5 w-48 rounded-2xl bg-white border border-warm-200/90 shadow-lg overflow-hidden"
                >
                  {blogDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setBlogDropOpen(false)}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${
                        pathname === item.href
                          ? 'bg-emerald-50 text-emerald-700 font-bold'
                          : 'text-warm-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links */}
          {siteConfig.navLinks
            .filter((l) => l.href !== '/')
            .map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-700 font-bold'
                      : 'text-warm-600 hover:text-warm-950'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
        </div>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Get in touch</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-warm-100 border border-warm-200 text-warm-800"
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
            className="md:hidden border-t border-warm-200 bg-warm-50/95 backdrop-blur-xl px-4 py-4 space-y-1 overflow-hidden"
          >
            {/* Mobile Blogs accordion */}
            <div>
              <button
                onClick={() => setMobileBlogOpen((o) => !o)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isBlogActive
                    ? 'bg-emerald-500/10 text-emerald-600 font-bold'
                    : 'text-warm-700 hover:bg-warm-100'
                }`}
              >
                <span>Blogs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {mobileBlogOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {blogDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          pathname === item.href
                            ? 'bg-emerald-500/10 text-emerald-600 font-bold'
                            : 'text-warm-600 hover:bg-warm-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other mobile links */}
            {siteConfig.navLinks
              .filter((l) => l.href !== '/')
              .map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-600 font-bold'
                        : 'text-warm-700 hover:bg-warm-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

            <div className="pt-2 border-t border-warm-200">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold rounded-xl bg-emerald-600 text-white"
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
