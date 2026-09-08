'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fingerprint, MapPin, MessageCircleOff, Layers, Lock, FileCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const PILLARS = [
  { icon: Fingerprint, title: 'Not linked to a name', text: 'Every genetic record is stored against an anonymous sample code — never a name, email or date of birth.' },
  { icon: MapPin, title: 'AI stays in India', text: 'Every AI feature runs inside Indian data-centre regions, checked automatically before every release.' },
  { icon: MessageCircleOff, title: "Child-safety rules Helix can't talk around", text: 'A child is never told they carry a disease risk, and never sees a psychometric score or label.' },
  { icon: Layers, title: 'Consent, layered and revocable', text: 'Legal, testing and per-category consent are each granted separately — every grant and withdrawal is recorded.' },
  { icon: Lock, title: 'Protected beyond the storage layer', text: 'Every gene reading carries its own encryption, and access is re-checked the moment a report is viewed.' },
  { icon: FileCheck, title: 'Your rights, honoured directly', text: 'Export, correct or delete your data, and withdraw any consent, at any time.' },
];

export function TrustPreviewSection() {
  return (
    <section id="trust" className="relative z-[1]">
      <div className="max-w-[1440px] mx-auto px-6 pb-28">
        <SectionHeading
          eyebrow="Trust &amp; privacy"
          title="Built for children's genetic data."
          subtitle="Most of what GenExcel processes belongs to children — that shapes more of the product than anything else. Governed by India's DPDP Act, 2023."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-card border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 shadow-soft p-6"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-50 dark:bg-accent-500/10 border border-accent-200 dark:border-accent-500/25 text-accent-600 dark:text-accent-400 mb-4">
                <p.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <div className="font-display text-[15px] font-semibold text-primary-950 dark:text-white mb-1.5">{p.title}</div>
              <div className="text-[13px] leading-[1.6] text-slate-600 dark:text-slate-300">{p.text}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/trust">
            <Button variant="secondary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
              See the full trust &amp; privacy page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
