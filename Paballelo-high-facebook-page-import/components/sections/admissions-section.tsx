'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export function AdmissionsSection() {
  const { t } = useLanguage();

  return (
    <section id="admissions" className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t.admissions.title}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                {t.admissions.subtitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.admissions.description}
              </p>

              {/* Deadline Card */}
              <div className="p-5 rounded-xl bg-accent/20 border border-accent/30 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{t.admissions.deadline}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{t.admissions.deadlineText}</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="https://forms.gle/WeEKsRj2gqNHWAB66" target="_blank" rel="noopener noreferrer">
                  {t.admissions.applyNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right - Requirements Card */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {t.admissions.requirements}
              </h3>
              <div className="space-y-4">
                {t.admissions.requirementsList.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{req.replace('&apos;', "'")}</span>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Application Process</h4>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'Complete online application form' },
                    { step: '2', text: 'Submit required documents' },
                    { step: '3', text: 'Attend entrance assessment' },
                    { step: '4', text: 'Receive admission decision' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {item.step}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
