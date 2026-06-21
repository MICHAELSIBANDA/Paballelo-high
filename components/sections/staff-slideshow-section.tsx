'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface StaffItem {
  id: number;
  nameEn: string;
  nameXh: string;
  nameAf: string;
  nameTn: string;
  position: string;
  positionEn: string;
  positionXh: string;
  positionAf: string;
  positionTn: string;
  image: string;
  order: number;
  category: string;
}

export function StaffSlideshowSection() {
  const { language, t } = useLanguage();
  const [staffItems, setStaffItems] = useState<StaffItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStaff() {
      try {
        const response = await fetch('/api/admin/staff');
        const data = await response.json();
        setStaffItems(data.sort((a: StaffItem, b: StaffItem) => a.order - b.order));
      } catch (error) {
        console.error('Error loading staff:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStaff();
  }, []);

  const getName = (item: StaffItem) => {
    switch (language) {
      case 'xh':
        return item.nameXh || item.nameEn;
      case 'af':
        return item.nameAf || item.nameEn;
      case 'tn':
        return item.nameTn || item.nameEn;
      default:
        return item.nameEn;
    }
  };

  const getPosition = (item: StaffItem) => {
    switch (language) {
      case 'xh':
        return item.positionXh || item.positionEn;
      case 'af':
        return item.positionAf || item.positionEn;
      case 'tn':
        return item.positionTn || item.positionEn;
      default:
        return item.positionEn;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % staffItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + staffItems.length) % staffItems.length);
  };

  useEffect(() => {
    if (staffItems.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [staffItems.length]);

  if (loading) {
    return (
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        </div>
      </section>
    );
  }

  if (staffItems.length === 0) {
    return null;
  }

  const currentItem = staffItems[currentIndex];

  return (
    <section id="staff" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.staff.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.staff.subtitle}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.staff.description}
          </p>
        </div>

        {/* Slideshow */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-muted">
              {currentItem.image ? (
                <Image
                  src={currentItem.image}
                  alt={getName(currentItem)}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 90vw, 80vw"
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-6xl font-bold text-muted-foreground/30">
                    {getName(currentItem).charAt(0)}
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              {staffItems.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-2xl text-foreground mb-2">
                {getName(currentItem)}
              </h3>
              <p className="text-primary font-medium text-lg">
                {getPosition(currentItem)}
              </p>
              {staffItems.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {staffItems.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Meet Our Team Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/meet-our-staff">
              {t.staff.meetTeam}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
