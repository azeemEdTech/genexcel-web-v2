'use client';

import { motion } from 'framer-motion';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

const PREVIEWS = [
  { src: '/images/traits-screenshot.jpeg', title: 'My Traits report', caption: 'Diet, learning, fitness & health' },
  { src: '/images/helix-chat-screenshot.jpeg', title: 'Helix chat', caption: 'Textbook-grounded tutoring' },
  { src: '/images/nutriscan-screenshot-2.jpeg', title: 'AI NutriScan', caption: 'Photo-based nutrition analysis' },
  { src: '/images/games-screenshot.jpeg', title: 'Brain games', caption: 'Cognitive games that build focus' },
];

export function ProductPreviewSection() {
  return (
    <section id="preview" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[600px] mx-auto mb-11"
        >
          <div className="text-[11.5px] font-semibold tracking-[0.24em] uppercase text-accent-600 dark:text-accent-400 mb-4">The app</div>
          <h2 className="font-display font-light text-primary-950 dark:text-white tracking-[-0.03em] text-h3">
            Reports, tutoring and tracking in one family app.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {PREVIEWS.map((preview, i) => (
            <motion.div
              key={preview.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <PhoneMockup src={preview.src} alt={preview.title} width={170} className="mb-4" />
              <div className="text-[13.5px] font-semibold text-primary-950 dark:text-white">{preview.title}</div>
              <div className="mt-0.5 text-[12.5px] text-slate-500 dark:text-slate-400">{preview.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
