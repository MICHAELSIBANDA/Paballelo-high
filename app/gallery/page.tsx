import { Header } from '@/components/header';
import { GallerySection } from '@/components/sections/gallery-section';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Gallery | Paballelo High School',
  description:
    'Photo gallery of Paballelo High School - moments from our learners, events, sports, culture, and community in Upington, Northern Cape.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GallerySection />
      <Footer />
    </main>
  );
}
