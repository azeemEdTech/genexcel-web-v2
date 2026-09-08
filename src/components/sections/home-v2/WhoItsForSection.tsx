'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, GraduationCap, Users, Stethoscope, Building2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const GROUPS = [
  {
    icon: Users,
    accent: 'text-accent-600 dark:text-accent-400',
    accentBg: 'bg-accent-50 border-accent-200 dark:bg-accent-500/10 dark:border-accent-500/25',
    title: 'Families',
    href: '/solutions/families',
    points: [
      'One household account for up to five children',
      'Consent you grant, and can withdraw, at any time',
      'Direct access to a genetic counsellor',
    ],
  },
  {
    icon: GraduationCap,
    accent: 'text-secondary-600 dark:text-secondary-400',
    accentBg: 'bg-secondary-50 border-secondary-200 dark:bg-secondary-500/10 dark:border-secondary-500/25',
    title: 'Schools',
    href: '/solutions/schools',
    points: [
      'On-campus health camps with collection kits',
      'School Genomics learning profiles for teachers',
      'Cohort-level reporting, privacy-safe by design',
    ],
  },
  {
    icon: Stethoscope,
    accent: 'text-lavender-500 dark:text-lavender-400',
    accentBg: 'bg-lavender-50 border-lavender-200 dark:bg-lavender-500/10 dark:border-lavender-600/30',
    title: 'Clinicians & Counsellors',
    href: '/solutions/healthcare',
    points: [
      'A genetic counsellor caseload workspace',
      'Automatic lab report reading, human-reviewed',
      'Telehealth scheduling and consultations',
    ],
  },
  {
    icon: Building2,
    accent: 'text-mint-500 dark:text-mint-400',
    accentBg: 'bg-mint-50 border-mint-200 dark:bg-mint-500/10 dark:border-mint-500/25',
    title: 'Clinical & Partner Organisations',
    href: '/solutions/healthcare',
    points: [
      'NABL-certified partner laboratories',
      'Cohort and enrolment-level reporting',
      'DPDP-compliant partnership terms',
    ],
  },
];

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <SectionHeading
          eyebrow="Who it's for"
          title="One platform, built for everyone around a child."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link href={group.href} className="block h-full group">
                <GlassCard className="p-7 h-full">
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl border mb-5 ${group.accentBg}`}>
                    <group.icon className={`h-[22px] w-[22px] ${group.accent}`} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-[17px] font-medium text-primary-950 dark:text-white mb-3.5">{group.title}</h3>
                  <div className="flex flex-col gap-[9px] mb-6">
                    {group.points.map((point) => (
                      <div key={point} className="flex gap-2 text-[12.5px] leading-[1.5] text-slate-600 dark:text-slate-300">
                        <Check className={`h-[14px] w-[14px] mt-0.5 flex-none ${group.accent}`} strokeWidth={2.6} />
                        {point}
                      </div>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-2 text-sm font-semibold ${group.accent} group-hover:gap-3 transition-all`}>
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
