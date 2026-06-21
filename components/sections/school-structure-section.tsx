'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface SchoolStructureItem {
  id: number;
  name: string;
  title: string;
  nameEn: string;
  nameXh: string;
  nameAf: string;
  nameTn: string;
  image: string;
  order: number;
  category: string;
}

export function SchoolStructureSection() {
  const { language, t } = useLanguage();
  const [structureItems, setStructureItems] = useState<SchoolStructureItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStructure() {
      try {
        const response = await fetch('/api/admin/school-structure');
        const data = await response.json();
        setStructureItems(data.sort((a: SchoolStructureItem, b: SchoolStructureItem) => a.order - b.order));
      } catch (error) {
        console.error('Error loading school structure:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStructure();
  }, []);

  const getName = (item: SchoolStructureItem) => {
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

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.schoolStructure.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.schoolStructure.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.schoolStructure.description}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : structureItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">No leadership information available</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {structureItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] relative bg-muted">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={getName(item)}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <div className="text-4xl font-bold text-muted-foreground/30">
                        {getName(item).charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {getName(item)}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {item.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View Staff Page */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/meet-our-staff">
              {t.schoolStructure.viewStaff}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
