'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

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

export default function EditAchievementPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    titleEn: '',
    titleXh: '',
    titleAf: '',
    titleTn: '',
    descriptionEn: '',
    descriptionXh: '',
    descriptionAf: '',
    descriptionTn: '',
    category: 'academic',
    year: '',
    image: '',
    date: '',
    order: 1,
    featured: false,
  });

  useEffect(() => {
    fetchAchievement();
  }, [params.id]);

  const fetchAchievement = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch('/api/admin/achievements');
      const data = await response.json();
      const item = data.find((n: AchievementItem) => n.id === Number(params.id));
      
      if (item) {
        setFormData({
          titleEn: item.titleEn,
          titleXh: item.titleXh,
          titleAf: item.titleAf,
          titleTn: item.titleTn,
          descriptionEn: item.descriptionEn,
          descriptionXh: item.descriptionXh,
          descriptionAf: item.descriptionAf,
          descriptionTn: item.descriptionTn,
          category: item.category,
          year: item.year,
          image: item.image,
          date: item.date,
          order: item.order,
          featured: item.featured,
        });
      } else {
        setError('Achievement not found');
      }
    } catch (error) {
      console.error('Error loading achievement:', error);
      setError('Failed to load achievement');
    } finally {
      setFetchLoading(false);
    }
  };

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
      const response = await fetch('/api/admin/achievements', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, id: Number(params.id) }),
      });

      if (response.ok) {
        router.push('/admin/dashboard/achievements');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update achievement. Please try again.');
      }
    } catch (error) {
      console.error('Error updating achievement:', error);
      setError('Failed to update achievement. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error && !formData.titleEn) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/achievements')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-serif font-bold">Edit Achievement</h1>
          </div>
        </div>
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <p className="text-destructive text-sm">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/achievements')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Edit Achievement</h1>
          <p className="text-muted-foreground mt-2">
            Update the achievement details
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
          <CardTitle>Achievement Details</CardTitle>
          <CardDescription>Update the information for the achievement</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="extracurricular">Extra-Curricular</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="order">Order</Label>
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
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="titleEn">Title (English)</Label>
              <Input
                id="titleEn"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="titleXh">Title (isiXhosa)</Label>
              <Input
                id="titleXh"
                value={formData.titleXh}
                onChange={(e) => setFormData({ ...formData, titleXh: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="titleAf">Title (Afrikaans)</Label>
              <Input
                id="titleAf"
                value={formData.titleAf}
                onChange={(e) => setFormData({ ...formData, titleAf: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="titleTn">Title (Setswana)</Label>
              <Input
                id="titleTn"
                value={formData.titleTn}
                onChange={(e) => setFormData({ ...formData, titleTn: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descriptionEn">Description (English)</Label>
              <textarea
                id="descriptionEn"
                value={formData.descriptionEn}
                onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                required
                disabled={loading}
                rows={3}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descriptionXh">Description (isiXhosa)</Label>
              <textarea
                id="descriptionXh"
                value={formData.descriptionXh}
                onChange={(e) => setFormData({ ...formData, descriptionXh: e.target.value })}
                disabled={loading}
                rows={3}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descriptionAf">Description (Afrikaans)</Label>
              <textarea
                id="descriptionAf"
                value={formData.descriptionAf}
                onChange={(e) => setFormData({ ...formData, descriptionAf: e.target.value })}
                disabled={loading}
                rows={3}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descriptionTn">Description (Setswana)</Label>
              <textarea
                id="descriptionTn"
                value={formData.descriptionTn}
                onChange={(e) => setFormData({ ...formData, descriptionTn: e.target.value })}
                disabled={loading}
                rows={3}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                disabled={loading}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="featured" className="text-sm font-medium">
                Featured (show on home page)
              </Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/achievements')} disabled={loading}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
