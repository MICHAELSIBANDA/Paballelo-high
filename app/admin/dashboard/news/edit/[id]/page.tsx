'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  titleXh: string;
  titleAf: string;
  titleTn: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  excerptXh: string;
  excerptAf: string;
  excerptTn: string;
  content: string;
  contentXh: string;
  contentAf: string;
  contentTn: string;
  featured: boolean;
}

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    titleXh: '',
    titleAf: '',
    titleTn: '',
    date: '',
    category: 'Academics',
    image: '',
    excerpt: '',
    excerptXh: '',
    excerptAf: '',
    excerptTn: '',
    content: '',
    contentXh: '',
    contentAf: '',
    contentTn: '',
    featured: false,
  });

  useEffect(() => {
    fetchNewsItem();
  }, [params.id]);

  const fetchNewsItem = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch('/api/admin/news');
      const data = await response.json();
      const item = data.find((n: NewsItem) => n.id === Number(params.id));
      
      if (item) {
        setFormData({
          title: item.title,
          titleXh: item.titleXh || '',
          titleAf: item.titleAf || '',
          titleTn: item.titleTn || '',
          date: item.date,
          category: item.category,
          image: item.image || '',
          excerpt: item.excerpt,
          excerptXh: item.excerptXh || '',
          excerptAf: item.excerptAf || '',
          excerptTn: item.excerptTn || '',
          content: item.content,
          contentXh: item.contentXh || '',
          contentAf: item.contentAf || '',
          contentTn: item.contentTn || '',
          featured: item.featured,
        });
      } else {
        setError('News item not found');
      }
    } catch (error) {
      console.error('Error loading news item:', error);
      setError('Failed to load news item');
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
      const response = await fetch('/api/admin/news', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, id: Number(params.id) }),
      });

      if (response.ok) {
        router.push('/admin/dashboard/news');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update news item. Please try again.');
      }
    } catch (error) {
      console.error('Error updating news:', error);
      setError('Failed to update news item. Please try again.');
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

  if (error && !formData.title) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/news')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-serif font-bold">Edit News</h1>
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
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/news')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Edit News</h1>
          <p className="text-muted-foreground mt-2">
            Update the news item details
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
          <CardTitle>News Details</CardTitle>
          <CardDescription>Update the information for the news item</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title (English)</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
            <div className="grid grid-cols-2 gap-4">
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
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Academics">Academics</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Culture">Culture</SelectItem>
                    <SelectItem value="Community">Community</SelectItem>
                    <SelectItem value="Events">Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Upload Image Cover</Label>
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

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt (English)</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerptXh">Excerpt (isiXhosa)</Label>
              <Textarea
                id="excerptXh"
                value={formData.excerptXh}
                onChange={(e) => setFormData({ ...formData, excerptXh: e.target.value })}
                rows={2}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerptAf">Excerpt (Afrikaans)</Label>
              <Textarea
                id="excerptAf"
                value={formData.excerptAf}
                onChange={(e) => setFormData({ ...formData, excerptAf: e.target.value })}
                rows={2}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerptTn">Excerpt (Setswana)</Label>
              <Textarea
                id="excerptTn"
                value={formData.excerptTn}
                onChange={(e) => setFormData({ ...formData, excerptTn: e.target.value })}
                rows={2}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content (English)</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentXh">Content (isiXhosa)</Label>
              <Textarea
                id="contentXh"
                value={formData.contentXh}
                onChange={(e) => setFormData({ ...formData, contentXh: e.target.value })}
                rows={6}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentAf">Content (Afrikaans)</Label>
              <Textarea
                id="contentAf"
                value={formData.contentAf}
                onChange={(e) => setFormData({ ...formData, contentAf: e.target.value })}
                rows={6}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contentTn">Content (Setswana)</Label>
              <Textarea
                id="contentTn"
                value={formData.contentTn}
                onChange={(e) => setFormData({ ...formData, contentTn: e.target.value })}
                rows={6}
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
              <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/news')} disabled={loading}>
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
