'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Trophy, Music, GraduationCap, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

const newsItems = [
  {
    id: 1,
    icon: GraduationCap,
    date: 'January 2025',
    category: 'Achievement',
    link: 'https://schoolsdigest.co.za/matriculation/paballelo-high-school-2025-matric-results/',
    titleEn: '2024 Matric Success Celebration - 88.7% Pass Rate',
    titleXh: 'Umbhiyozo Wempumelelo yeMatriki ka-2024 - Izinga Lokupasa lika-88.7%',
    titleAf: '2024 Matriek Sukses Viering - 88.7% Slaagsyfer',
    titleTn: 'Meletlo ya Katlego ya Matriki 2024 - Sekgala sa go Pasa sa 88.7%',
  },
  {
    id: 2,
    icon: Laptop,
    date: 'May 2026',
    category: 'Sports',
    link: 'https://www.gov.za/news/speeches/deputy-minister-nonceba-mhlauli-cyber-lab-handover-paballelo-senior-secondary-school',
    titleEn: 'Deputy Minister Nonceba Mhlauli: Cyber Lab handover at Paballelo Senior Secondary School',
    titleXh: 'Usekela Mphathiswa uNonceba Mhlauli: Unikezelo lweLebhu yeCyber ePaballelo Senior Secondary School',
    titleAf: 'Adjunkminister Nonceba Mhlauli: Oorhandiging van die Cyber-laboratorium by Paballelo Senior Sekondêre Skool',
    titleTn: 'Motlatsa Tona Nonceba Mhlauli: Go neelwa ga Laboratori ya Cyber kwa Sekolong sa Paballelo Senior Secondary',
  },
  {
    id: 3,
    icon: Music,
    date: 'September 2025',
    category: 'Choir',
    link: 'https://www.youtube.com/watch?v=GxGzbp1-ySA',
    titleEn: 'Paballelo High School Choir is an award-winning ensemble renowned for its high-scoring performances at the South African Schools Choral Eisteddfod (SASCE)',
    titleXh: 'Paballelo High School se koor is ’n bekroonde ensemble wat bekend is vir sy hoogs gegradeerde uitvoerings by die South African Schools Choral Eisteddfod (SASCE)',
    titleAf: 'Ikwayara yasePaballelo High School liqela eliphumelele amabhaso elaziwayo ngokwenza kakuhle kakhulu kumakhuphiswano aphezulu eSouth African Schools Choral Eisteddfod (SASCE)',
    titleTn: 'Khwaere ya Sekolo sa Paballelo High School ke setlhopha se se itsegeng ka ditlhompho se se itsiweng ka ditiragatso tse di fumanang maduo a a kwa godimo mo South African Schools Choral Eisteddfod (SASCE)',
  },
];

export function NewsSection() {
  const { language, t } = useLanguage();

  const getTitle = (item: typeof newsItems[0]) => {
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
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="aspect-video rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="h-16 w-16 text-primary" />
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
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="https://educationsouthafrica.com/schools/northern-cape/upington/paballelo-high-school" target="_blank" rel="noopener noreferrer">
              {t.news.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}