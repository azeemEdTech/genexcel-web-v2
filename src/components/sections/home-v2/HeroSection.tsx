'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

export function HeroSection() {
  return (
    <section id="p0" className="relative z-[1] overflow-hidden">
      <div
        className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-16"
        style={{ padding: 'clamp(112px,16vh,168px) 24px 72px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <span className="inline-flex items-center gap-2 py-[9px] px-4 mb-6 rounded-full border border-slate-200 bg-white shadow-soft text-xs font-semibold tracking-[0.02em] text-primary-700 dark:bg-white/5 dark:border-white/15 dark:shadow-none dark:text-slate-200">
            <Droplets className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
            Purpose of GenExcel
          </span>

          <h1 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.035em] mb-8 text-balance text-hero">
            One genetic report.
            <br />
            Read by a tutor, a diet plan,
            <br />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-secondary-500 dark:from-accent-400 dark:to-secondary-400">
              and a coach.
            </span>
          </h1>

          <p className="text-[17px] leading-[1.65] text-slate-600 dark:text-slate-300 max-w-[520px] mb-9">
            1,020+ genetic traits, an AI tutor grounded in your child&rsquo;s own textbooks, and daily nutrition and fitness guidance &mdash; built on accredited laboratory sequencing, from a single saliva sample.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 mb-10">
            <Link href="#platform">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-[17px] w-[17px]" />}>
                Meet Helix, the AI tutor
              </Button>
            </Link>
            <Link href="/science">
              <Button variant="secondary" size="lg">
                Explore the traits
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-[12.5px] text-slate-500 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
            DPDP compliant &middot; Accredited partner laboratories &middot; ISO-certified sequencing
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center"
        >
          <PhoneMockup
            src="/images/traits-screenshot.jpeg"
            alt="My Traits report in the GenExcel app"
            width={220}
            rotate={-6}
            float
            floatDelay={0}
            className="absolute left-[6%] top-[8%] sm:left-[10%] z-10"
          />
          <PhoneMockup
            src="/images/helix-chat-screenshot.jpeg"
            alt="Helix, the AI tutor, chatting with a student"
            width={240}
            rotate={5}
            float
            floatDelay={0.8}
            className="absolute right-[4%] bottom-[6%] sm:right-[8%] z-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
