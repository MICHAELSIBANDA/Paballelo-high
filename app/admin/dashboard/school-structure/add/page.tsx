'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface SchoolStructureFormData {
  nameEn: string;
  nameXh: string;
  nameAf: string;
  nameTn: string;
  title: string;
  image: string;
  order: number;
  category: string;
}

export default function AddSchoolStructurePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<SchoolStructureFormData>({
    nameEn: '',
    nameXh: '',
    nameAf: '',
    nameTn: '',
    title: '',
    image: '',
    order: 1,
    category: 'administration',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/admin/school-structure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/school-structure');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create leadership position. Please try again.');
      }
    } catch (error) {
      console.error('Error saving school structure:', error);
      setError('Failed to create leadership position. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/school-structure')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Add Leadership Position</h1>
          <p className="text-muted-foreground mt-2">
            Add a new leadership position to the school structure
          </p>
        </div>
      </div>

      {error && (
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive text-sm">{error}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Leadership Details</CardTitle>
          <CardDescription>Fill in the information for the leadership position</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title/Position</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                disabled={loading}
                placeholder="e.g., Principal, Deputy Principal"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Order (Hierarchy)</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                required
                disabled={loading}
                min="1"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameEn">Name (English)</Label>
              <Input
                id="nameEn"
                value={formData.nameEn}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameXh">Name (isiXhosa)</Label>
              <Input
                id="nameXh"
                value={formData.nameXh}
                onChange={(e) => setFormData({ ...formData, nameXh: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameAf">Name (Afrikaans)</Label>
              <Input
                id="nameAf"
                value={formData.nameAf}
                onChange={(e) => setFormData({ ...formData, nameAf: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameTn">Name (Setswana)</Label>
              <Input
                id="nameTn"
                value={formData.nameTn}
                onChange={(e) => setFormData({ ...formData, nameTn: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image</Label>
              <div className="flex gap-4 items-center mt-1">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  disabled={loading}
                  className="cursor-pointer"
                />
                {formData.image && (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/school-structure')} disabled={loading}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
