'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Award, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

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

export default function AchievementsPage() {
  const { language } = useLanguage();
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('all');

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await fetch('/api/admin/achievements');
        const data = await response.json();
        setAchievements(data.sort((a: AchievementItem, b: AchievementItem) => b.order - a.order));
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
        return 'Academic';
      case 'extracurricular':
        return 'Extra-Curricular';
      case 'student':
        return 'Student';
      default:
        return category;
    }
  };

  // Get unique years from achievements
  const years = Array.from(new Set(achievements.map((a) => a.year))).sort((a, b) => b.localeCompare(a));

  // Generate years from 2002 to current year
  const currentYear = new Date().getFullYear();
  const allYears = Array.from({ length: currentYear - 2002 + 1 }, (_, i) => (2002 + i).toString()).reverse();

  // Filter achievements
  const filteredAchievements = achievements.filter((item) => {
    const categoryMatch = categoryFilter === 'all' || item.category === categoryFilter;
    const yearMatch = yearFilter === 'all' || item.year === yearFilter;
    return categoryMatch && yearMatch;
  });

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
              Excellence
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Our Achievements
            </h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">
              Celebrating excellence in academics, sports, and personal development
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Category:</span>
              <div className="flex gap-2">
                {['all', 'academic', 'extracurricular', 'student'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      categoryFilter === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat === 'all' ? 'All' : getCategoryLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Year:</span>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {allYears.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredAchievements.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No achievements found for the selected filters.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredAchievements.map((item) => (
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
                        <Award className="h-16 w-16 text-primary/30" />
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
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {getDescription(item)}
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
