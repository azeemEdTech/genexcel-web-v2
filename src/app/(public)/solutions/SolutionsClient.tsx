'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { PageHero, GradientText } from '@/components/ui/PageHero';
import {
  Users,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const solutions = [
  {
    title: 'For Families',
    description: 'A household account for every child, with Helix — an AI tutor grounded in their own textbooks — plus a genetic report that shapes their nutrition and fitness plans.',
    icon: Users,
    href: '/solutions/families',
    features: ['Helix AI Tutor', 'Genetic Report', 'Nutrition & Fitness', 'Family Account'],
  },
  {
    title: 'For Schools',
    description: 'School Genomics brings health camps, per-student learning profiles for teachers, and an AI lesson generator to your campus — with Helix available to every student at home.',
    icon: GraduationCap,
    href: '/solutions/schools',
    features: ['Health Camps', 'Teacher Learning Profiles', 'Lesson Generator', 'Helix at Home'],
  },
  {
    title: 'For Healthcare',
    description: 'A genetic counsellor workspace, telehealth scheduling, and lab report verification built for pediatric practices, hospitals, and counsellors.',
    icon: Stethoscope,
    href: '/solutions/healthcare',
    features: ['NABL Certified Labs', 'Counsellor Workspace', 'Telehealth Booking', 'DPDP Compliant'],
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        icon={Sparkles}
        eyebrow="Solutions"
        title={<>Personalized Health <GradientText>For Everyone</GradientText></>}
        subtitle="Whether you're a parent, school administrator, or healthcare provider, GenExcel has solutions tailored to your needs."
      />

      {/* Solutions Grid */}
      <section className="relative z-[1]">
        <div className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link key={solution.title} href={solution.href} className="block group">
                <GlassCard className="p-8 h-full" glow>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-accent-200 bg-accent-50 dark:border-[#34D2A6]/[.24] dark:bg-[#34D2A6]/[.09] mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="h-8 w-8 text-accent-600 dark:text-[#6FE6C0]" strokeWidth={1.6} />
                  </div>

                  <h2 className="font-display font-light text-2xl text-slate-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-[#34D2A6] transition-colors">
                    {solution.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-white/[.08] text-slate-600 dark:text-[#8B9AB5] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-accent-600 dark:text-[#34D2A6] font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[1] py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-panel py-16 px-8 sm:px-14 max-w-4xl mx-auto text-center bg-white border border-slate-200 shadow-glass-lg dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.14] dark:to-white/[.05] dark:backdrop-blur-3xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none"
          >
            <div
              aria-hidden="true"
              className="absolute -right-[10%] -top-[30%] w-[420px] h-[420px] rounded-full animate-gx-drift pointer-events-none"
              style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,211,238,.18), transparent 68%)' }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 dark:text-white mb-6">
                Not Sure Which Solution is Right for You?
              </h2>
              <p className="text-lg text-slate-600 dark:text-[#8B9AB5] max-w-2xl mx-auto mb-8">
                Our team can help you find the perfect fit for your needs. Schedule a free consultation today.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="xl" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
