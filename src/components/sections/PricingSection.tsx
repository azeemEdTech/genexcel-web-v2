'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { pricingPlans } from '@/config/site';
import { cn } from '@/lib/utils';

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative flex"
    >
      {plan.popular && (
        <div className="absolute -top-3.5 right-[22px] z-10 py-[5px] px-3 rounded-full text-[10.5px] font-bold tracking-[0.1em] uppercase text-white bg-accent-500">
          Most chosen
        </div>
      )}

      <div
        className={cn(
          'relative flex flex-col flex-1 rounded-card p-8 transition-all duration-300 border',
          plan.popular
            ? 'bg-white border-accent-200 shadow-soft-lg dark:bg-primary-900/60 dark:border-accent-500/30 dark:shadow-none'
            : 'bg-white border-slate-200 shadow-soft hover:border-slate-300 dark:bg-primary-900/40 dark:border-white/10 dark:shadow-none dark:hover:border-white/20'
        )}
      >
        <div className="font-display text-[13px] font-medium tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400 mb-4">{plan.name}</div>
        <p className="text-[14.5px] leading-[1.6] text-slate-600 dark:text-slate-300 mb-6">{plan.description}</p>

        <div className="flex flex-col gap-2 mb-6 flex-1">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-slate-600 dark:text-slate-300">
              <Check className="h-3.5 w-3.5 flex-none mt-[3px] text-accent-600 dark:text-accent-400" strokeWidth={2.4} />
              {feature}
            </div>
          ))}
        </div>

        <Link href={plan.href} className="flex">
          <Button
            variant={plan.popular ? 'primary' : 'secondary'}
            size="lg"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="w-full"
          >
            {plan.cta}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

interface PricingSectionProps {
  /** 'panel': homepage sticky-stack chrome (100vh, sticky, rounded-top overlap, id="p6").
   *  'standalone' (default): normal in-flow section, as used on /pricing. */
  mode?: 'standalone' | 'panel';
}

export function PricingSection({ mode = 'standalone' }: PricingSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isPanel = mode === 'panel';

  return (
    <section
      ref={ref}
      id={isPanel ? 'p6' : 'pricing'}
      className={cn(
        'relative overflow-hidden bg-white dark:bg-primary-950',
        isPanel
          ? 'h-screen rounded-t-[44px] border-t border-slate-200 shadow-[0_-20px_60px_rgba(15,23,42,.06)] dark:border-white/10 dark:shadow-none'
          : 'section-padding'
      )}
    >
      <div
        className={cn(
          isPanel ? 'relative max-w-[1440px] mx-auto box-border h-full flex flex-col justify-center overflow-y-auto' : 'container-custom relative'
        )}
        style={isPanel ? { padding: 'clamp(96px,13.5vh,126px) 44px clamp(40px,7vh,90px)' } : undefined}
      >
        {isPanel ? (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10" style={{ marginBottom: 'clamp(14px,3vh,38px)' }}>
            <div>
              <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-accent-600 dark:text-accent-400" style={{ marginBottom: 'clamp(8px,1.6vh,16px)' }}>
                Plans
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="font-display font-light text-primary-950 dark:text-white tracking-[-0.03em] leading-[1.1]"
                style={{ fontSize: 'clamp(24px,3.9vw,44px)' }}
              >
                Start on Basic. Add the report when ready.
              </motion.h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[300px] leading-[1.65]">
              The same app either way — Pro adds the genetic report and its personalisation.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge variant="default" className="mb-4 bg-accent-50 text-accent-700 border border-accent-200 dark:bg-white/5 dark:text-accent-400 dark:border-white/10">
              <Sparkles className="h-3 w-3 mr-1" />
              Simple Pricing
            </Badge>
            <h2
              className="font-display font-light tracking-[-0.03em] text-primary-950 dark:text-white mb-6 text-h2"
            >
              Choose Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-secondary-500">Plan</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Basic is the full app experience. Pro adds your child&rsquo;s genetic report on top.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {!isPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                Free to start on Basic
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                Upgrade to Pro anytime
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                Approved and unlocked in-app
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
