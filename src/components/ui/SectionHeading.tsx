'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Standard eyebrow + headline (+ optional subtext) pattern used to open a
 *  homepage section — replaces the hand-duplicated eyebrow/h2 markup that
 *  used to be repeated per section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'max-w-[640px]',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block py-[7px] px-[14px] mb-4 rounded-full border border-slate-200 bg-white text-[10.5px] font-semibold tracking-[0.16em] uppercase text-accent-600 dark:bg-white/5 dark:border-white/15 dark:text-accent-400">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.02em] text-h2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[16.5px] leading-[1.65] text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
