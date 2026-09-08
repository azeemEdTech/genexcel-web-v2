'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section id="p0" className="relative z-[1] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-[840px] mx-auto text-center flex flex-col items-center"
        style={{ padding: 'clamp(112px,16vh,168px) 24px 56px' }}
      >
        <span className="inline-flex items-center gap-2 py-[9px] px-4 mb-6 rounded-full border border-slate-200 bg-white shadow-glass text-xs font-semibold tracking-[0.02em] text-slate-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none dark:text-[#C7D2E5]">
          <Droplets className="h-3.5 w-3.5 text-cyan-600 dark:text-[#22D3EE]" />
          Purpose of GenExcel
        </span>

        <h1
          className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.18] mb-8 text-balance"
          style={{ fontSize: 'clamp(34px,5.4vw,58px)' }}
        >
          One genetic report.
          <br />
          Read by a tutor, a diet plan,
          <br />
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-[#22D3EE] dark:to-[#60A5FA]">
            and a coach.
          </span>
        </h1>

        <p className="text-[17px] leading-[1.65] text-slate-600 dark:text-[#8B9AB5] max-w-[560px] mb-9">
          1,020+ genetic traits, an AI tutor grounded in your child&rsquo;s own textbooks, and daily nutrition and fitness guidance &mdash; built on accredited laboratory sequencing, from a single saliva sample.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5 mb-10">
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

        <div className="flex items-center gap-2 text-[12.5px] text-slate-500 dark:text-[#8B9AB5]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-[#22D3EE]" />
          DPDP compliant &middot; Accredited partner laboratories &middot; ISO-certified sequencing
        </div>
      </motion.div>
    </section>
  );
}
