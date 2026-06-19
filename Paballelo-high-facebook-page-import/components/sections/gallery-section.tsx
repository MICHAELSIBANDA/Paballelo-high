'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Facebook, ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

type GalleryCategory = 'events' | 'sports' | 'culture' | 'academics' | 'community';

interface GalleryItem {
  id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  // Add the image path here once you have the photo (e.g. '/gallery/matric-2025.jpg').
  // Leave as empty string to show a styled placeholder slot.
  src: string;
  category: GalleryCategory;
  captionEn: string;
}

/*
  HOW TO ADD REAL FACEBOOK PHOTOS:
  1. Download a photo from the Facebook page.
  2. Save it into the /public/gallery/ folder (e.g. /public/gallery/event-1.jpg).
  3. Set the `src` value below to '/gallery/event-1.jpg'.
  The grid, lightbox, and filtering all work automatically once `src` is set.
*/
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

const categoryKeys = ['all', 'events', 'sports', 'culture', 'academics', 'community'] as const;
type FilterKey = (typeof categoryKeys)[number];

export function GallerySection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>('all');
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const filtered =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const lightboxItem = galleryItems.find((item) => item.id === lightboxId);
  const hasAnyImages = galleryItems.some((item) => item.src);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.gallery.backHome}
        </Link>

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.gallery.title}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.gallery.subtitle}
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
            {t.gallery.description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {t.gallery.categories[key]}
            </button>
          ))}
        </div>

        {/* Empty State Banner */}
        {!hasAnyImages && (
          <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <ImageIcon className="h-10 w-10 text-primary mx-auto mb-3" />
            <h2 className="font-semibold text-foreground">{t.gallery.emptyTitle}</h2>
            <p className="text-sm text-muted-foreground mt-2">{t.gallery.emptyText}</p>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filtered.map((item) => (
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
                    sizes="(max-width: 768px) 50vw, 33vw"
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

        {/* Facebook CTA */}
        <div className="text-center mt-12">
          <Button asChild className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
            <Link
              href="https://www.facebook.com/people/Paballelo-High-School/61558234076140/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="mr-2 h-4 w-4" />
              {t.gallery.viewFacebook}
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
