'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Genetics that changes behaviour, not just a report.',
    text: 'It feeds the tutor, the nutrition engine and the fitness engine directly — wired into the product, not bolted onto it.',
  },
  {
    num: '02',
    title: "A tutor grounded in the child's own textbooks.",
    text: 'Helix answers from the actual prescribed textbook — more than 225,000 passages — and says so, rather than inventing an answer.',
  },
  {
    num: '03',
    title: 'Child-safety rules built into the AI itself.',
    text: 'Never a disease-risk claim, never a psychometric score, never a shaming tone, never a fabricated quiz result.',
  },
  {
    num: '04',
    title: 'Genetic data that is not linked to a name.',
    text: 'Every record is stored against an anonymous sample code. Re-identifying it is permission-controlled and always recorded.',
  },
  {
    num: '05',
    title: 'All AI processing stays in India.',
    text: "Every AI feature runs inside Indian data-centre regions — one voice capability was deliberately left off rather than move a child's audio abroad.",
  },
  {
    num: '06',
    title: 'Reports read without a laboratory in the loop.',
    text: 'GenExcel reads the lab PDF automatically, in about ten seconds, with verified accuracy and no per-report cost.',
  },
];

export function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="relative z-[1]">
      <div className="max-w-[1000px] mx-auto px-6 pb-28">
        <SectionHeading
          eyebrow="What makes it different"
          title="Six things GenExcel is built to get right."
          className="mb-16"
        />

        <div className="flex flex-col divide-y divide-slate-200 dark:divide-white/10">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-3 sm:gap-8 py-8 sm:py-10"
            >
              <div className="font-display text-2xl font-light text-accent-500 dark:text-accent-400">{item.num}</div>
              <div>
                <h3 className="font-display text-[20px] sm:text-[24px] font-medium text-primary-950 dark:text-white tracking-[-0.01em] mb-2.5 max-w-[560px]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-slate-600 dark:text-slate-300 max-w-[520px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
