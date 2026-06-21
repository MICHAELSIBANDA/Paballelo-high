import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { AcademicsSection } from '@/components/sections/academics-section';
import { AdmissionsSection } from '@/components/sections/admissions-section';
import { NewsSection } from '@/components/sections/news-section';
import { StaffSlideshowSection } from '@/components/sections/staff-slideshow-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AchievementsSection />
      <AcademicsSection />
      <AdmissionsSection />
      <NewsSection />
      <StaffSlideshowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
