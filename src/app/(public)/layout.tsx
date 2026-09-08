import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { BackgroundField } from '@/components/effects/BackgroundField';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <BackgroundField />
      <Header />
      {children}
      <Footer />
    </>
  );
}
