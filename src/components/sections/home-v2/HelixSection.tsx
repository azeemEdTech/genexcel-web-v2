'use client';

import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: 'Textbook grounding',
    text: "Answers homework from your child's own textbook — more than 225,000 passages — and says so, rather than inventing an answer.",
  },
  {
    icon: MessageCircle,
    title: "Teach, don't tell",
    text: 'Chat and voice, practice questions and teach-backs — built to help a child understand, not just hand over an answer.',
  },
  {
    icon: ShieldCheck,
    title: 'Child safety, built in',
    text: 'Helix never mentions genetics while it teaches, never shows a risk trait or score, and refuses to fabricate a quiz result.',
  },
];

export function HelixSection() {
  return (
    <section id="helix" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Helix, the AI tutor"
              title="Meet Helix."
              align="left"
              className="mx-0 text-left mb-8"
            />
            <p className="text-[16.5px] leading-[1.7] text-slate-600 dark:text-slate-300 max-w-[460px] mb-10">
              Answers homework from your child&rsquo;s own textbook, in their own language, and never mentions genetics while it teaches.
            </p>

            <div className="flex flex-col gap-6">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-50 dark:bg-accent-500/10 border border-accent-200 dark:border-accent-500/25 text-accent-600 dark:text-accent-400 flex-none">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="font-display text-[15px] font-semibold text-primary-950 dark:text-white mb-1">{item.title}</div>
                    <div className="text-[13.5px] leading-[1.6] text-slate-600 dark:text-slate-300">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <PhoneMockup
              src="/images/helix-chat-screenshot.jpeg"
              alt="Helix answering a student's homework question, grounded in their textbook"
              width={280}
              float
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
