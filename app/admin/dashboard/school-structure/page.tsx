'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2 } from 'lucide-react';

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

export default function AdminSchoolStructurePage() {
  const [structureItems, setStructureItems] = useState<SchoolStructureItem[]>([]);

  useEffect(() => {
    loadStructureItems();
  }, []);

  const loadStructureItems = async () => {
    try {
      const response = await fetch('/api/admin/school-structure');
      const data = await response.json();
      setStructureItems(data);
    } catch (error) {
      console.error('Error loading school structure:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this leadership position?')) return;

    try {
      const response = await fetch('/api/admin/school-structure', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadStructureItems();
      }
    } catch (error) {
      console.error('Error deleting school structure item:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">School Leadership</h1>
          <p className="text-muted-foreground mt-2">
            Manage school leadership hierarchy
          </p>
        </div>
        <Link href="/admin/dashboard/school-structure/add">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Leadership
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {structureItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Order: {item.order}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{item.nameEn}</CardTitle>
                  <CardDescription className="mt-1">
                    {item.title}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/dashboard/school-structure/edit/${item.id}`}>
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
