'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { useEffect, useState } from 'react';

interface NewsItem {
  id: number;
  imageSrc: string;
  date: string;
  category: string;
  link: string;
  titleEn: string;
  titleXh: string;
  titleAf: string;
  titleTn: string;
}

export function NewsSection() {
  const { language, t } = useLanguage();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/admin/news');
        const data = await response.json();
        
        // Transform the data to match the expected format
        const transformed = data.map((item: any): NewsItem => ({
          id: item.id,
          imageSrc: item.image || '/gallery/1.jpg',
          date: new Date(item.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long' }),
          category: item.category,
          link: '/news',
          titleEn: item.title,
          titleXh: item.titleXh || item.title,
          titleAf: item.titleAf || item.title,
          titleTn: item.titleTn || item.title,
        }));
        setNewsItems(transformed);
      } catch (error) {
        console.error('Error loading news data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const getTitle = (item: NewsItem) => {
    switch (language) {
      case 'xh':
        return item.titleXh;
      case 'af':
        return item.titleAf;
      case 'tn':
        return item.titleTn;
      default:
        return item.titleEn;
    }
  };

  return (
    <section id="news" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.news.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.news.subtitle}
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading news...</p>
            </div>
          ) : newsItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No news articles available at the moment.</p>
            </div>
          ) : (
            newsItems.map((item) => (
            <article
              key={item.id}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-video rounded-xl overflow-hidden bg-muted relative mb-5">
                <Image 
                  src={item.imageSrc} 
                  alt={item.titleEn}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-4">
                {getTitle(item)}
              </h3>

              {/* Read More */}
              <Link
                href={item.link}
                className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                target={item.category === 'Choir' ? '_blank' : undefined}
                rel={item.category === 'Choir' ? 'noopener noreferrer' : undefined}
              >
                {t.news.readMore}
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </article>
            ))
          )}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}