'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { stats } from '@/config/site';

export function StatsSection() {
  return (
    <section id="numbers" className="relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block text-[11.5px] font-semibold tracking-[0.24em] uppercase text-accent-600 dark:text-accent-400">
            The platform in numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div
                className="font-display font-light text-primary-950 dark:text-white tracking-[-0.03em] leading-none mb-3"
                style={{ fontSize: 'clamp(38px,5.6vw,68px)' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.8} />
              </div>
              <div className="text-[12.5px] font-medium tracking-[0.02em] text-slate-500 dark:text-slate-400 max-w-[160px] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
