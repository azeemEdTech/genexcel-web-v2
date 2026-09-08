'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const SCIENCE = [
  { num: '01', title: 'Order Your Kit', text: 'A collection kit ships to your door, or is collected at a school health camp. Simple, painless saliva collection.' },
  { num: '02', title: 'Lab Analysis', text: 'Your sample is analysed by our accredited partner laboratory and returned as a detailed genetic report.' },
  { num: '03', title: 'Automatic Reading', text: 'GenExcel reads the report in about ten seconds — every trait and gene reading — then checks itself four ways before anything uncertain reaches a human reviewer.' },
  { num: '04', title: 'Start Your Journey', text: 'Once assigned under recorded consent, the report reaches your child’s My Traits, your household view, and Helix — who starts teaching differently from that day.' },
];

export function ScienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="science" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <GlassCard ref={ref} className="rounded-panel py-14 px-7 sm:px-12" hover={false}>
          <span className="inline-block py-[7px] px-[14px] mb-5 rounded-full border border-slate-200 bg-white text-[10.5px] font-semibold tracking-[0.16em] uppercase text-accent-600 dark:bg-white/5 dark:border-white/15 dark:text-accent-400">
            The GenExcel journey
          </span>
          <h2 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.03em] max-w-[760px] mb-6 text-h2">
            From one sample to a tutor that teaches differently
          </h2>
          <p className="text-lg leading-[1.5] text-primary-950 dark:text-white max-w-[720px] mb-[52px]">
            <span className="text-slate-400 dark:text-slate-500">
              Accredited lab sequencing, paired with a reading engine that checks its own work four ways.
            </span>
          </p>

          <div className="relative h-0.5 rounded-full bg-slate-200 dark:bg-white/[.14] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-500 to-secondary-500"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {SCIENCE.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <span className="block w-3 h-3 mb-[22px] rounded-full bg-accent-500" style={{ boxShadow: '0 0 0 5px rgba(15,174,133,.14)' }} />
                <div className="font-display text-xs tracking-[0.14em] text-secondary-600 dark:text-secondary-400 mb-2">{step.num}</div>
                <div className="font-display text-[15.5px] font-medium text-primary-950 dark:text-white mb-2">{step.title}</div>
                <div className="text-[12.5px] leading-[1.6] text-slate-500 dark:text-slate-400">{step.text}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
