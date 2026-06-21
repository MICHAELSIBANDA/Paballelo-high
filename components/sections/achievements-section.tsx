'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface AchievementItem {
  id: number;
  titleEn: string;
  titleXh: string;
  titleAf: string;
  titleTn: string;
  descriptionEn: string;
  descriptionXh: string;
  descriptionAf: string;
  descriptionTn: string;
  category: string;
  year: string;
  image: string;
  date: string;
  order: number;
  featured: boolean;
}

export function AchievementsSection() {
  const { language, t } = useLanguage();
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await fetch('/api/admin/achievements');
        const data = await response.json();
        // Show only featured items, sorted by order
        const featured = data
          .filter((item: AchievementItem) => item.featured)
          .sort((a: AchievementItem, b: AchievementItem) => a.order - b.order)
          .slice(0, 3);
        setAchievements(featured);
      } catch (error) {
        console.error('Error loading achievements:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAchievements();
  }, []);

  const getTitle = (item: AchievementItem) => {
    switch (language) {
      case 'xh':
        return item.titleXh || item.titleEn;
      case 'af':
        return item.titleAf || item.titleEn;
      case 'tn':
        return item.titleTn || item.titleEn;
      default:
        return item.titleEn;
    }
  };

  const getDescription = (item: AchievementItem) => {
    switch (language) {
      case 'xh':
        return item.descriptionXh || item.descriptionEn;
      case 'af':
        return item.descriptionAf || item.descriptionEn;
      case 'tn':
        return item.descriptionTn || item.descriptionEn;
      default:
        return item.descriptionEn;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic':
        return t.achievements.category.academic;
      case 'extracurricular':
        return t.achievements.category.extracurricular;
      case 'student':
        return t.achievements.category.student;
      default:
        return category;
    }
  };

  if (loading) {
    return (
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        </div>
      </section>
    );
  }

  if (achievements.length === 0) {
    return (
      <section id="achievements" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center py-12 text-muted-foreground">
            No achievements available at this time.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="achievements" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.achievements.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.achievements.subtitle}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.achievements.description}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] relative bg-muted">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={getTitle(item)}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                    <div className="text-4xl font-bold text-primary/30">
                      {getTitle(item).charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/90 text-primary-foreground">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-background/90 text-foreground">
                    {item.year}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getTitle(item)}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {getDescription(item)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Achievements */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/achievements">
              {t.achievements.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
