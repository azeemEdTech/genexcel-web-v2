import type { Metadata } from 'next';
import PricingPage from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Start on Basic with Helix and the lifestyle tools, or unlock the full genetic report, My Traits and genetic personalisation with Pro.',
};

export default function Page() {
  return <PricingPage />;
}
