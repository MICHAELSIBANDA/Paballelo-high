'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.about.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.about.subtitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t.about.mission}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t.about.missionText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t.about.vision}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t.about.visionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">
                {t.about.learnMore}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="font-serif text-6xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="text-center p-4">
                  <History className="h-12 w-12 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">Community Heritage</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl bg-secondary/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <Target className="h-12 w-12 text-primary mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">Academic Focus</div>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="font-serif text-5xl font-bold text-primary mb-2">88.7%</div>
                  <div className="text-sm text-muted-foreground">2025 Pass Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principal Message */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{t.principal.title}</h3>
            <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
              {t.principal.message}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
