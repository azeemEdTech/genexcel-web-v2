'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, GraduationCap, Apple, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

const OUTPUTS = [
  { icon: GraduationCap, label: 'Learning', color: 'text-secondary-600 dark:text-secondary-400', bg: 'bg-secondary-50 border-secondary-200 dark:bg-secondary-500/10 dark:border-secondary-500/25' },
  { icon: Apple, label: 'Nutrition', color: 'text-mint-500 dark:text-mint-400', bg: 'bg-mint-50 border-mint-200 dark:bg-mint-500/10 dark:border-mint-500/25' },
  { icon: Dumbbell, label: 'Fitness', color: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 border-accent-200 dark:bg-accent-500/10 dark:border-accent-500/25' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-center mb-16"
        >
          <span className="inline-block py-[7px] px-[14px] mb-[22px] rounded-full border border-slate-200 bg-white text-[10.5px] font-semibold tracking-[0.16em] uppercase text-accent-600 dark:bg-white/5 dark:border-white/15 dark:text-accent-400">
            The core idea
          </span>
          <h2 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.03em] mb-5 text-h2">
            To turn your child&rsquo;s genetic code into software that teaches, feeds and coaches them,{' '}
            <span className="text-slate-400 dark:text-slate-500">not just a report they read once.</span>
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-slate-600 dark:text-slate-300 max-w-[520px] mx-auto mb-8">
            GenExcel.ai is India&rsquo;s genomics-led learning and wellness platform &mdash; pairing accredited laboratory sequencing with Helix, an AI tutor grounded in your child&rsquo;s own textbooks, plus nutrition and fitness guidance that carries the same genetic adjustments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/platform">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Learn more
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-full border border-slate-200 bg-white text-accent-600 dark:bg-white/5 dark:border-white/15 dark:text-accent-400">
                <Phone className="h-[18px] w-[18px]" />
              </span>
              <span>
                <span className="block text-[11px] tracking-[0.1em] uppercase text-slate-400 dark:text-slate-500">For any questions</span>
                <span className="block mt-[3px] text-[14.5px] font-semibold text-primary-950 dark:text-white">info@curanova.ai</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Report is the input, not the product — visual flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative max-w-[880px] mx-auto rounded-panel border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 shadow-soft px-6 sm:px-12 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-10">
            <div className="flex justify-center">
              <PhoneMockup src="/images/traits-screenshot.jpeg" alt="The genetic report inside the GenExcel app" width={150} />
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400 dark:text-slate-500">The input</span>
              </div>
              <div className="text-[15px] font-semibold text-primary-950 dark:text-white mb-6">One genetic report</div>

              <svg width="2" height="28" className="text-slate-300 dark:text-white/20 mb-2" aria-hidden="true">
                <line x1="1" y1="0" x2="1" y2="28" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" />
              </svg>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950 text-white dark:bg-white dark:text-primary-950 text-sm font-semibold mb-6">
                GenExcel
              </div>

              <svg width="2" height="28" className="text-slate-300 dark:text-white/20 mb-2" aria-hidden="true">
                <line x1="1" y1="0" x2="1" y2="28" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" />
              </svg>

              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400 dark:text-slate-500 mb-4">What it becomes</span>
              <div className="flex flex-wrap gap-3">
                {OUTPUTS.map((o) => (
                  <div
                    key={o.label}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border ${o.bg}`}
                  >
                    <o.icon className={`h-4 w-4 ${o.color}`} strokeWidth={2} />
                    <span className={`text-sm font-semibold ${o.color}`}>{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
