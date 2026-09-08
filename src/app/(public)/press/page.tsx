'use client';

import { PageHero, GradientText } from '@/components/ui/PageHero';
import { ComingSoonSection } from '@/components/ui/ComingSoonSection';
import { Newspaper } from 'lucide-react';

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        icon={Newspaper}
        eyebrow="Press"
        title={<>Press & <GradientText>Media</GradientText></>}
        subtitle="News, updates, and media resources from GenExcel."
      />

      <ComingSoonSection
        icon={Newspaper}
        description="Our press and media kit is being prepared. For press inquiries, please contact us directly."
        ctaLabel="Press Inquiries"
      />
    </main>
  );
}
