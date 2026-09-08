'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, type LucideIcon } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export function ComingSoonSection({
  icon: Icon,
  description,
  ctaLabel,
}: {
  icon: LucideIcon;
  description: string;
  ctaLabel: string;
}) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-light text-2xl md:text-3xl text-slate-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                {description}
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" leftIcon={<Mail className="w-5 h-5" />}>
                  {ctaLabel}
                </Button>
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
