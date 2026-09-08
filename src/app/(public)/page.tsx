'use client';

import { HeroSection } from '@/components/sections/home-v2/HeroSection';
import { ProductPreviewSection } from '@/components/sections/home-v2/ProductPreviewSection';
import { AboutSection } from '@/components/sections/home-v2/AboutSection';
import { TwoProductsSection } from '@/components/sections/home-v2/TwoProductsSection';
import { HelixSection } from '@/components/sections/home-v2/HelixSection';
import { ScienceSection } from '@/components/sections/home-v2/ScienceSection';
import { DifferentiatorsSection } from '@/components/sections/home-v2/DifferentiatorsSection';
import { TrustPreviewSection } from '@/components/sections/home-v2/TrustPreviewSection';
import { StatsSection } from '@/components/sections/home-v2/StatsSection';
import { WhoItsForSection } from '@/components/sections/home-v2/WhoItsForSection';
import { ReviewsSection } from '@/components/sections/home-v2/ReviewsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/home-v2/CTASection';

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProductPreviewSection />
      <AboutSection />
      <TwoProductsSection />
      <HelixSection />
      <ScienceSection />
      <DifferentiatorsSection />
      <TrustPreviewSection />
      <StatsSection />
      <WhoItsForSection />
      <ReviewsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
