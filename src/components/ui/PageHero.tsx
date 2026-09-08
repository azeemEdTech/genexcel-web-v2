'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Shared inner-page hero: eyebrow pill + Manrope font-light headline + subtitle,
 * matching the homepage's typography (see home-v2/HeroSection.tsx). Pages
 * mount this as the first element under <main> — it supplies its own top
 * clearance for the fixed Header, so remove any `pt-*` on <main>/the old
 * hero wrapper. The page background comes from the shared BackgroundField
 * mounted once in (public)/layout.tsx.
 */
export function PageHero({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon?: LucideIcon;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative z-[1]" style={{ padding: 'clamp(112px,16vh,168px) 24px 64px' }}>
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 py-[9px] px-4 mb-6 rounded-full border border-slate-200 bg-white shadow-soft text-xs font-semibold tracking-[0.02em] text-primary-700 dark:bg-white/5 dark:border-white/15 dark:shadow-none dark:text-slate-200">
            {Icon && <Icon className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />}
            {eyebrow}
          </span>

          <h1
            className="font-display font-light text-primary-950 dark:text-white tracking-[-0.035em] mb-5 text-balance text-hero"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg leading-[1.6] text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/** Teal → soft-blue gradient accent span, for the emphasized part of a PageHero title. */
export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-secondary-500 dark:from-[#34D2A6] dark:to-[#5C97EA]">
      {children}
    </span>
  );
}
