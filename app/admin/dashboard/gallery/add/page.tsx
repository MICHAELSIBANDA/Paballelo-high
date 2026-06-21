'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft } from 'lucide-react';

interface GalleryFormData {
  src: string;
  category: string;
  captionEn: string;
  captionXh: string;
  captionAf: string;
  captionTn: string;
  featured: boolean;
}

export default function AddImagePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<GalleryFormData>({
    src: '',
    category: 'events',
    captionEn: '',
    captionXh: '',
    captionAf: '',
    captionTn: '',
    featured: false,
  });

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/dashboard/gallery');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create gallery item. Please try again.');
      }
    } catch (error) {
      console.error('Error saving gallery item:', error);
      setError('Failed to create gallery item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/gallery')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Add Image</h1>
          <p className="text-muted-foreground mt-2">
            Add a new image to the gallery
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
          <CardDescription>Fill in the information for the gallery image</CardDescription>
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
                  required
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
                {loading ? 'Adding...' : 'Add'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
