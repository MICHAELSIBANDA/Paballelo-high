'use client';

import { BookOpen, Trophy, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function AcademicsSection() {
  const { t } = useLanguage();

  return (
    <section id="academics" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.academics.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.academics.subtitle}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            {t.academics.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Core Subjects */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {t.academics.subjects}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.academics.subjectsList.map((subject, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra-curricular */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {t.academics.extracurricular}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.academics.extracurricularList.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Support Programs */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {t.academics.support}
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.academics.supportList.map((program, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: BookOpen, title: 'Quality Education', desc: 'Dedicated teachers' },
            { icon: Trophy, title: 'Sports Excellence', desc: 'Multiple disciplines' },
            { icon: GraduationCap, title: 'Career Guidance', desc: 'Future planning' },
            { icon: Target, title: 'Academic Support', desc: 'Learner mentorship' },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
