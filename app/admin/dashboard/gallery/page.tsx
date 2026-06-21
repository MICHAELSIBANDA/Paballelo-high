'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  captionEn: string;
  captionXh: string;
  captionAf: string;
  captionTn: string;
  featured: boolean;
}

export default function AdminGalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    loadGalleryItems();
  }, []);

  const loadGalleryItems = async () => {
    try {
      const response = await fetch('/api/admin/gallery');
      const data = await response.json();
      setGalleryItems(data);
    } catch (error) {
      console.error('Error loading gallery:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      const response = await fetch('/api/admin/gallery', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadGalleryItems();
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">Gallery Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage school photo gallery
          </p>
        </div>
        <Link href="/admin/dashboard/gallery/add">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Image
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="p-0">
              <div className="relative aspect-square bg-muted">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.captionEn}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-1">
                  {item.featured && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm font-medium mb-2">{item.captionEn}</p>
              <div className="flex gap-2">
                <Link href={`/admin/dashboard/gallery/edit/${item.id}`} className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </Link>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
