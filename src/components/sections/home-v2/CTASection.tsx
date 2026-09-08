'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

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
        <GlassCard className="relative overflow-hidden rounded-panel py-16 sm:py-20 px-8 sm:px-14" hover={false}>
          <div
            aria-hidden="true"
            className="absolute -right-[8%] -top-[40%] w-[520px] h-[520px] rounded-full animate-gx-drift pointer-events-none"
            style={{ background: 'radial-gradient(circle at 40% 40%, rgba(15,174,133,.16), transparent 68%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <h2 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.035em] leading-[1.06] mb-[22px] text-h2">
                Now that you understand GenExcel, see it for yourself.
              </h2>
              <p className="text-[17px] leading-[1.6] text-slate-600 dark:text-slate-300 mb-9">
                Kits ship in 3&ndash;5 days. Results in 2&ndash;3 weeks. A tutor, a diet plan and a coach that keep reading from it.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link href="/contact">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight className="h-[17px] w-[17px]" />}>
                    Book a Demo
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    See Pricing
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-5">
              <PhoneMockup src="/images/traits-screenshot.jpeg" alt="GenExcel My Traits report" width={170} rotate={-6} />
              <PhoneMockup src="/images/helix-chat-screenshot.jpeg" alt="Helix, the AI tutor" width={190} rotate={5} className="-ml-8" />
            </div>
          </div>
        </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
