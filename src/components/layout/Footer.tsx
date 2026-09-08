'use client';

import Link from 'next/link';
import { ShieldCheck, Fingerprint, MapPin } from 'lucide-react';
import { footerLinks, siteConfig } from '@/config/site';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';

const linkClass =
  'text-[13.5px] text-slate-500 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors';

const columnHeadingClass =
  'text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-950 dark:text-white mb-4';

const trustStrip = [
  { icon: ShieldCheck, label: 'DPDP compliant' },
  { icon: Fingerprint, label: 'Anonymised genetic data' },
  { icon: MapPin, label: 'AI processing in India' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-paper-alt text-slate-500 border-t border-slate-200 dark:bg-primary-950 dark:text-slate-400 dark:border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-9 pt-14 pb-11">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-8 h-8 flex-none">
                <img
                  src="/images/logo-dark.png"
                  alt="GenExcel"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="font-display text-base font-semibold text-primary-950 dark:text-white">
                GenExcel
              </span>
            </Link>
            <p className="text-[13.5px] leading-relaxed max-w-[270px] mb-5">
              A genomics-led learning and wellness platform &mdash; pairing a genetic report with Helix, an AI tutor grounded in your child&rsquo;s own textbooks, plus nutrition and fitness guidance for the whole family.
            </p>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-primary-950 dark:text-white mb-3">Get the App</div>
            <AppStoreBadges />
          </div>

          <div>
            <div className={columnHeadingClass}>Product</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.product.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={columnHeadingClass}>Who it&rsquo;s for</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.whoItsFor.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={columnHeadingClass}>Company</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={columnHeadingClass}>Resources</div>
            <div className="flex flex-col gap-2.5 mb-6">
              {footerLinks.resources.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className={columnHeadingClass}>Legal</div>
            <div className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5 border-t border-slate-200 dark:border-white/10 text-[12px] font-medium text-slate-500 dark:text-slate-400">
          {trustStrip.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              <item.icon className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200 dark:border-white/10 text-[12.5px] text-slate-400 dark:text-slate-500">
          <span>&copy; {currentYear} {siteConfig.creator}. All rights reserved.</span>
          <span>Genetic analysis performed in ISO-certified partner laboratories.</span>
        </div>
      </div>
    </footer>
  );
}
