'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface StaffItem {
  id: number;
  nameEn: string;
  nameXh: string;
  nameAf: string;
  nameTn: string;
  position: string;
  positionEn: string;
  positionXh: string;
  positionAf: string;
  positionTn: string;
  image: string;
  order: number;
  category: string;
}

export default function AdminStaffPage() {
  const [staffItems, setStaffItems] = useState<StaffItem[]>([]);

  useEffect(() => {
    loadStaffItems();
  }, []);

  const loadStaffItems = async () => {
    try {
      const response = await fetch('/api/admin/staff');
      const data = await response.json();
      setStaffItems(data);
    } catch (error) {
      console.error('Error loading staff:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return;

    try {
      const response = await fetch('/api/admin/staff', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadStaffItems();
      }
    } catch (error) {
      console.error('Error deleting staff member:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">Staff Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage school staff and teachers
          </p>
        </div>
        <Link href="/admin/dashboard/staff/add">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {staffItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.category}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      Order: {item.order}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{item.nameEn}</CardTitle>
                  <CardDescription className="mt-1">
                    {item.positionEn}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/dashboard/staff/edit/${item.id}`}>
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
