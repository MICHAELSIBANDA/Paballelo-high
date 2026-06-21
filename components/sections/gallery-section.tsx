'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

type GalleryCategory = 'events' | 'sports' | 'culture' | 'academics' | 'community';

interface GalleryItem {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  src: string;
  category: GalleryCategory;
  captionEn: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/gallery/1.jpg', category: 'events', captionEn: 'School Celebration' },
  { id: 2, src: '/gallery/2.jpg', category: 'academics', captionEn: 'Matric Achievers 2025' },
  { id: 3, src: '/gallery/3.jpg', category: 'sports', captionEn: 'Sports Day' },
  { id: 4, src: '/gallery/4.jpg', category: 'culture', captionEn: 'Choir Performance' },
  { id: 5, src: '/gallery/5.jpg', category: 'community', captionEn: 'Community Event' },
  { id: 6, src: '/gallery/6.jpg', category: 'academics', captionEn: 'Cyber Lab Handover' },
  { id: 7, src: '/gallery/7.jpg', category: 'events', captionEn: 'Awards Ceremony' },
  { id: 8, src: '/gallery/8.jpg', category: 'culture', captionEn: 'Heritage Day' },
  { id: 9, src: '/gallery/9.jpg', category: 'sports', captionEn: 'Athletics' },
];

export function GallerySection() {
  const { t } = useLanguage();
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  // Show only first 3 items on home page
  const displayItems = galleryItems.slice(0, 3);
  const lightboxItem = galleryItems.find((item) => item.id === lightboxId);
  const hasAnyImages = galleryItems.some((item) => item.src);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Capturing moments of excellence and celebration at Paballelo High School
          </p>
        </div>

        {/* Empty State Banner */}
        {!hasAnyImages && (
          <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <ImageIcon className="h-10 w-10 text-primary mx-auto mb-3" />
            <h2 className="font-semibold text-foreground">No images available</h2>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for updates</p>
          </div>
        )}

        {/* Gallery Grid - Only 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => item.src && setLightboxId(item.id)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={item.captionEn}
            >
              {item.src ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.captionEn}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
                  <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-xs font-medium text-primary-foreground bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.captionEn}
                  </span>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 bg-muted/60">
                  <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                  <span className="text-xs text-muted-foreground/70 text-center font-medium">
                    {item.captionEn}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* View All Images Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/gallery">
              View All Images
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && lightboxItem.src && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setLightboxId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.captionEn}
        >
          <button
            type="button"
            onClick={() => setLightboxId(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.captionEn}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
