'use client';

import { PageHero, GradientText } from '@/components/ui/PageHero';
import { ComingSoonSection } from '@/components/ui/ComingSoonSection';
import { LifeBuoy } from 'lucide-react';

export default function HelpPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={LifeBuoy}
        eyebrow="Help Center"
        title={<>Help <GradientText>Center</GradientText></>}
        subtitle="Get the support you need with GenExcel."
      />

      <ComingSoonSection
        icon={LifeBuoy}
        description="Our help center with guides, tutorials, and troubleshooting is being built. For immediate assistance, please contact our support team."
        ctaLabel="Contact Support"
      />
    </main>
  );
}
