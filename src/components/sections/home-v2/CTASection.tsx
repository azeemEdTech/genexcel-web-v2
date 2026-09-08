'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { AppStoreBadges } from '@/components/ui/AppStoreBadges';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="cta" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
        <GlassCard className="relative overflow-hidden rounded-panel py-20 px-8 sm:px-14" hover={false}>
          <div
            aria-hidden="true"
            className="absolute -right-[8%] -top-[40%] w-[520px] h-[520px] rounded-full animate-gx-drift pointer-events-none"
            style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,211,238,.18), transparent 68%)' }}
          />
          <div className="relative max-w-[760px]">
            <h2
              className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.06] mb-[22px]"
              style={{ fontSize: 'clamp(30px,4.2vw,56px)' }}
            >
              Give your child a head start written in their own code.
            </h2>
            <p className="text-[17px] leading-[1.6] text-slate-600 dark:text-[#8B9AB5] mb-9">
              Kits ship in 3&ndash;5 days. Results in 2&ndash;3 weeks. A tutor, a diet plan and a coach that keep reading from it.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/pricing">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-[17px] w-[17px]" />}>
                  Order the genetic kit
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Talk to our team
                </Button>
              </Link>
            </div>
            <div className="mt-9 pt-9 border-t border-slate-200 dark:border-white/10">
              <p className="text-[12.5px] font-semibold tracking-[0.1em] uppercase text-slate-500 dark:text-[#8B9AB5] mb-3.5">
                Or take GenExcel with you
              </p>
              <AppStoreBadges />
            </div>
          </div>
        </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
