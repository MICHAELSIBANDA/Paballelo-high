import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { AcademicsSection } from '@/components/sections/academics-section';
import { AdmissionsSection } from '@/components/sections/admissions-section';
import { NewsSection } from '@/components/sections/news-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <AdmissionsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
