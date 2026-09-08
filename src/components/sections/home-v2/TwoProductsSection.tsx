'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Badge } from '@/components/ui/Badge';

const MODES = [
  {
    badge: 'School Genomics',
    title: 'For school-age children',
    description:
      "Genetic traits and a learning-style assessment shape Helix, study plans, lesson content and what a teacher can see. The home screen leads with today's plan, an exam countdown and the tutor.",
    points: ['Helix, textbook-grounded homework help', 'Study plans, roadmaps and a lesson generator', 'A curated learning profile for teachers'],
    accent: 'text-secondary-600 dark:text-secondary-400',
    accentBg: 'bg-secondary-50 dark:bg-secondary-500/10 border-secondary-200 dark:border-secondary-500/25',
    screenshots: ['/images/helix-chat-screenshot.jpeg', '/images/games-screenshot.jpeg'],
    rotates: [-5, 6],
  },
  {
    badge: 'Health & Wellness',
    title: 'For adults in the household',
    description:
      "The same genetic foundation feeds activity rings, step tracking, diet planning and gym programming instead. The home screen leads with rings, today's plan and a wellness summary.",
    points: ['Activity rings and wearable integration', 'Diet plans with genetic adjustments', 'Gym plans and live workout logging'],
    accent: 'text-mint-500 dark:text-mint-400',
    accentBg: 'bg-mint-50 dark:bg-mint-500/10 border-mint-200 dark:border-mint-500/25',
    screenshots: ['/images/nutriscan-screenshot-2.jpeg'],
    rotates: [-3],
  },
];

export function TwoProductsSection() {
  return (
    <section id="two-products" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <SectionHeading
          eyebrow="One platform, two modes"
          title="Chosen once, at signup."
          subtitle="Both modes share the same account, the same genetic foundation and the same Helix companion — they differ in what the home screen emphasises."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MODES.map((mode, i) => (
            <motion.div
              key={mode.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-panel border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 shadow-soft p-8 sm:p-10 flex flex-col"
            >
              <Badge variant="secondary" className={`w-fit mb-5 ${mode.accentBg} ${mode.accent} border`}>
                <Sparkles className="h-3 w-3" />
                {mode.badge}
              </Badge>
              <h3 className="font-display text-xl font-medium text-primary-950 dark:text-white mb-3">{mode.title}</h3>
              <p className="text-[14.5px] leading-[1.65] text-slate-600 dark:text-slate-300 mb-6">{mode.description}</p>

              <ul className="space-y-2 mb-8">
                {mode.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <Check className={`h-4 w-4 mt-0.5 flex-none ${mode.accent}`} strokeWidth={2.4} />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-end justify-center gap-4 pt-4">
                {mode.screenshots.map((src, j) => (
                  <PhoneMockup
                    key={src}
                    src={src}
                    alt={`${mode.badge} app screen`}
                    width={mode.screenshots.length > 1 ? 150 : 190}
                    rotate={mode.rotates[j]}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
