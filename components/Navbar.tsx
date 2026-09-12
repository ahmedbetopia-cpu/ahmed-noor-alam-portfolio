'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

const exchangeDropdownItems = [
  { href: '/blog/exchange-online', label: 'Exchange Online' },
  { href: '/blog/exchange-on-premises', label: 'Exchange On-Premises' },
];

const deviceManagementDropdownItems = [
  { href: '/blog/intune', label: 'Intune' },
  { href: '/blog/mecm-sccm', label: 'MECM/SCCM' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exchangeDropOpen, setExchangeDropOpen] = useState(false);
  const [mobileExchangeOpen, setMobileExchangeOpen] = useState(false);
  const [deviceDropOpen, setDeviceDropOpen] = useState(false);
  const [mobileDeviceOpen, setMobileDeviceOpen] = useState(false);

  const exchangeRef = useRef<HTMLDivElement>(null);
  const exchangeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const deviceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (exchangeRef.current && !exchangeRef.current.contains(e.target as Node)) {
        setExchangeDropOpen(false);
      }
      if (deviceRef.current && !deviceRef.current.contains(e.target as Node)) {
        setDeviceDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (exchangeTimeoutRef.current) clearTimeout(exchangeTimeoutRef.current);
      if (deviceTimeoutRef.current) clearTimeout(deviceTimeoutRef.current);
    };
  }, []);

  const handleExchangeMouseEnter = () => {
    if (exchangeTimeoutRef.current) clearTimeout(exchangeTimeoutRef.current);
    setExchangeDropOpen(true);
  };

  const handleExchangeMouseLeave = () => {
    exchangeTimeoutRef.current = setTimeout(() => {
      setExchangeDropOpen(false);
    }, 180);
  };

  const handleDeviceMouseEnter = () => {
    if (deviceTimeoutRef.current) clearTimeout(deviceTimeoutRef.current);
    setDeviceDropOpen(true);
  };

  const handleDeviceMouseLeave = () => {
    deviceTimeoutRef.current = setTimeout(() => {
      setDeviceDropOpen(false);
    }, 180);
  };

  const isExchangeActive = pathname.startsWith('/blog/exchange');
  const isDeviceActive = pathname.startsWith('/blog/intune') || pathname.startsWith('/blog/mecm-sccm');

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
          {/* Exchange Tab with dropdown */}
          <div
            className="relative"
            ref={exchangeRef}
            onMouseEnter={handleExchangeMouseEnter}
            onMouseLeave={handleExchangeMouseLeave}
          >
            <button
              onClick={() => setExchangeDropOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors py-1 ${
                isExchangeActive
                  ? 'text-emerald-700 font-bold'
                  : 'text-warm-600 hover:text-warm-950'
              }`}
            >
              Exchange
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  exchangeDropOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {exchangeDropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2 w-56 z-50"
                >
                  <div className="rounded-2xl bg-white border border-warm-200/90 shadow-xl overflow-hidden p-1 space-y-0.5">
                    {exchangeDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setExchangeDropOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${
                          pathname === item.href
                            ? 'bg-emerald-50 text-emerald-700 font-bold'
                            : 'text-warm-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Device Management Tab with dropdown */}
          <div
            className="relative"
            ref={deviceRef}
            onMouseEnter={handleDeviceMouseEnter}
            onMouseLeave={handleDeviceMouseLeave}
          >
            <button
              onClick={() => setDeviceDropOpen((o) => !o)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors py-1 ${
                isDeviceActive
                  ? 'text-emerald-700 font-bold'
                  : 'text-warm-600 hover:text-warm-950'
              }`}
            >
              Device Management
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  deviceDropOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {deviceDropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2 w-56 z-50"
                >
                  <div className="rounded-2xl bg-white border border-warm-200/90 shadow-xl overflow-hidden p-1 space-y-0.5">
                    {deviceManagementDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDeviceDropOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-700 ${
                          pathname === item.href
                            ? 'bg-emerald-50 text-emerald-700 font-bold'
                            : 'text-warm-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other nav links: About, Contact */}
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
            {/* Mobile Exchange accordion */}
            <div>
              <button
                onClick={() => setMobileExchangeOpen((o) => !o)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isExchangeActive
                    ? 'bg-emerald-500/10 text-emerald-600 font-bold'
                    : 'text-warm-700 hover:bg-warm-100'
                }`}
              >
                <span>Exchange</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileExchangeOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileExchangeOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4 space-y-0.5 pt-0.5"
                  >
                    {exchangeDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExchangeOpen(false);
                        }}
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

            {/* Mobile Device Management accordion */}
            <div>
              <button
                onClick={() => setMobileDeviceOpen((o) => !o)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isDeviceActive
                    ? 'bg-emerald-500/10 text-emerald-600 font-bold'
                    : 'text-warm-700 hover:bg-warm-100'
                }`}
              >
                <span>Device Management</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDeviceOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileDeviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4 space-y-0.5 pt-0.5"
                  >
                    {deviceManagementDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileDeviceOpen(false);
                        }}
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
