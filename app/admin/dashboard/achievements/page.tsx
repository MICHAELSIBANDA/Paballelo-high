'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2 } from 'lucide-react';

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

export default function AdminAchievementsPage() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);

  useEffect(() => {
    loadAchievements();
  }, []);

  const loadAchievements = async () => {
    try {
      const response = await fetch('/api/admin/achievements');
      const data = await response.json();
      setAchievements(data);
    } catch (error) {
      console.error('Error loading achievements:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this achievement?')) return;

    try {
      const response = await fetch('/api/admin/achievements', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadAchievements();
      }
    } catch (error) {
      console.error('Error deleting achievement:', error);
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">Achievements Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage school achievements and awards
          </p>
        </div>
        <Link href="/admin/dashboard/achievements/add">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Achievement
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {achievements.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {getCategoryLabel(item.category)}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {item.year}
                    </span>
                    {item.featured && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-600">
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      Order: {item.order}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{item.titleEn}</CardTitle>
                  <CardDescription className="mt-1 line-clamp-2">
                    {item.descriptionEn}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/dashboard/achievements/edit/${item.id}`}>
                    <Button size="sm" variant="outline">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
