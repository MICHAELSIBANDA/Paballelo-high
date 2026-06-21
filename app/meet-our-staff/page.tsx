'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

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

export default function MeetOurStaffPage() {
  const { language } = useLanguage();
  const [structureItems, setStructureItems] = useState<SchoolStructureItem[]>([]);
  const [staffItems, setStaffItems] = useState<StaffItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [structureRes, staffRes] = await Promise.all([
          fetch('/api/admin/school-structure'),
          fetch('/api/admin/staff')
        ]);
        const structureData = await structureRes.json();
        const staffData = await staffRes.json();
        setStructureItems(structureData.sort((a: SchoolStructureItem, b: SchoolStructureItem) => a.order - b.order));
        setStaffItems(staffData.sort((a: StaffItem, b: StaffItem) => a.order - b.order));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const getName = (item: SchoolStructureItem | StaffItem): string => {
    if ('nameEn' in item) {
      const typedItem = item as SchoolStructureItem;
      switch (language) {
        case 'xh':
          return typedItem.nameXh || typedItem.nameEn;
        case 'af':
          return typedItem.nameAf || typedItem.nameEn;
        case 'tn':
          return typedItem.nameTn || typedItem.nameEn;
        default:
          return typedItem.nameEn;
      }
    } else {
      const typedItem = item as StaffItem;
      switch (language) {
        case 'xh':
          return typedItem.nameXh || typedItem.nameEn;
        case 'af':
          return typedItem.nameAf || typedItem.nameEn;
        case 'tn':
          return typedItem.nameTn || typedItem.nameEn;
        default:
          return typedItem.nameEn;
      }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider opacity-80">
              Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Meet Our Staff
            </h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">
              Get to know the dedicated team that makes our school exceptional
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
              School Leadership
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our educational leaders committed to excellence
            </p>
          </div>

          {structureItems.length === 0 ? (
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
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Staff
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Staff Members
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Dedicated professionals working together for educational excellence
            </p>
          </div>

          {staffItems.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No staff information available</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {staffItems.map((item) => (
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
                    <div className="absolute top-2 right-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getName(item)}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {getPosition(item)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
