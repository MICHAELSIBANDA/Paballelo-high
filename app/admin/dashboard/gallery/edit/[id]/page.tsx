'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft } from 'lucide-react';

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

export default function EditImagePage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    src: '',
    category: 'events',
    captionEn: '',
    captionXh: '',
    captionAf: '',
    captionTn: '',
    featured: false,
  });

  useEffect(() => {
    fetchGalleryItem();
  }, [params.id]);

  const fetchGalleryItem = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch('/api/admin/gallery');
      const data = await response.json();
      const item = data.find((n: GalleryItem) => n.id === Number(params.id));
      
      if (item) {
        setFormData({
          src: item.src,
          category: item.category,
          captionEn: item.captionEn,
          captionXh: item.captionXh,
          captionAf: item.captionAf,
          captionTn: item.captionTn,
          featured: item.featured,
        });
      } else {
        setError('Gallery item not found');
      }
    } catch (error) {
      console.error('Error loading gallery item:', error);
      setError('Failed to load gallery item');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, src: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/admin/gallery', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, id: Number(params.id) }),
      });

      if (response.ok) {
        router.push('/admin/dashboard/gallery');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update gallery item. Please try again.');
      }
    } catch (error) {
      console.error('Error updating gallery item:', error);
      setError('Failed to update gallery item. Please try again.');
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

  if (error && !formData.captionEn) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/gallery')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-serif font-bold">Edit Image</h1>
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
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/gallery')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Edit Image</h1>
          <p className="text-muted-foreground mt-2">
            Update the gallery image details
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
          <CardTitle>Image Details</CardTitle>
          <CardDescription>Update the information for the gallery image</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="src">Upload Image</Label>
              <div className="flex gap-4 items-center mt-1">
                <Input
                  id="src"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={loading}
                  className="cursor-pointer"
                />
                {formData.src && (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border">
                    <img 
                      src={formData.src} 
                      alt="Preview" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="culture">Culture</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="captionEn">Caption (English)</Label>
              <Input
                id="captionEn"
                value={formData.captionEn}
                onChange={(e) => setFormData({ ...formData, captionEn: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="captionXh">Caption (isiXhosa)</Label>
              <Input
                id="captionXh"
                value={formData.captionXh}
                onChange={(e) => setFormData({ ...formData, captionXh: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="captionAf">Caption (Afrikaans)</Label>
              <Input
                id="captionAf"
                value={formData.captionAf}
                onChange={(e) => setFormData({ ...formData, captionAf: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="captionTn">Caption (Setswana)</Label>
              <Input
                id="captionTn"
                value={formData.captionTn}
                onChange={(e) => setFormData({ ...formData, captionTn: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                disabled={loading}
              />
              <Label htmlFor="featured">Featured on homepage</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/gallery')} disabled={loading}>
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
