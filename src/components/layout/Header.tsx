'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Smartphone } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';
import { navItems } from '@/config/site';
import { cn } from '@/lib/utils';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="block w-9 h-9 flex-none">
        <img
          src="/images/logo-dark.png"
          alt="GenExcel"
          className="w-full h-full object-contain"
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-[-0.01em] text-primary-950 dark:text-white">
        GenExcel
      </span>
    </Link>
  );
}

function NavItem({
  item,
  pathname,
}: {
  item: (typeof navItems)[0];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  // Close on navigation — this component persists across route changes
  // (Header lives in the layout), so local state must reset itself.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Click-outside / Escape close, for the click-to-toggle dropdown below.
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const triggerClassName = cn(
    'flex items-center gap-1 px-3 py-2 rounded-full text-[13.5px] font-medium whitespace-nowrap transition-colors duration-200',
    isActive
      ? 'bg-slate-100 text-primary-950 dark:bg-white/10 dark:text-white'
      : 'text-slate-600 hover:bg-slate-100 hover:text-primary-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
  );

  if (!hasChildren) {
    return (
      <Link href={item.href} className={triggerClassName}>
        {item.title}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className={cn(triggerClassName, 'cursor-pointer')}
      >
        {item.title}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2.5 z-50 w-[300px]"
          >
            <div className="bg-white border border-slate-200 shadow-soft-lg dark:bg-primary-900 dark:border-white/10 rounded-2xl p-2.5 flex flex-col gap-0.5">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-3.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <div className="text-sm font-semibold text-primary-950 dark:text-white mb-0.5">{child.title}</div>
                  <div className="text-[12.5px] text-slate-500 dark:text-slate-400 leading-snug">{child.description}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GetAppMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[13.5px] font-medium text-slate-600 hover:bg-slate-100 hover:text-primary-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
      >
        <Smartphone className="h-3.5 w-3.5" />
        Get the App
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 pt-2.5 z-50"
          >
            <div className="bg-white border border-slate-200 shadow-soft-lg dark:bg-primary-900 dark:border-white/10 rounded-2xl p-4">
              <AppStoreBadges className="flex-col items-stretch" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-primary-950 shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10">
                <Logo />
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 rounded-xl font-medium transition-colors',
                          pathname === item.href
                            ? 'bg-slate-100 text-accent-600 dark:bg-white/10 dark:text-accent-400'
                            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5'
                        )}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block px-4 py-2 text-sm text-slate-500 hover:text-accent-600 rounded-lg hover:bg-slate-50 dark:text-slate-400 dark:hover:text-accent-400 dark:hover:bg-white/5"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                <Link href="/contact" onClick={onClose} className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    Book a Demo
                  </Button>
                </Link>
                <div className="pt-1">
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-slate-400 dark:text-slate-500 mb-3">
                    Get the App
                  </div>
                  <AppStoreBadges className="flex-col items-stretch" />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[80] bg-white/85 backdrop-blur-md border-b border-slate-200 dark:bg-primary-950/85 dark:border-white/10"
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 gap-4">
            <Logo />

            <div className="hidden lg:flex items-center gap-0.5 min-w-0">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-1.5">
              <ThemeToggle />
              <GetAppMenu />
              <Link href="/contact" className="ml-1">
                <Button variant="primary" size="sm">
                  Book a Demo
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
