'use client';

import { PageHero, GradientText } from '@/components/ui/PageHero';
import { ComingSoonSection } from '@/components/ui/ComingSoonSection';
import { Briefcase } from 'lucide-react';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={Briefcase}
        eyebrow="Careers"
        title={<>Join Our <GradientText>Mission</GradientText></>}
        subtitle="We're building the future of pediatric healthcare. Our careers page is coming soon."
      />

      <ComingSoonSection
        icon={Briefcase}
        description="We're preparing exciting opportunities to join our team. In the meantime, feel free to reach out to us directly if you're passionate about transforming pediatric healthcare."
        ctaLabel="Get in Touch"
      />
    </main>
  );
}
