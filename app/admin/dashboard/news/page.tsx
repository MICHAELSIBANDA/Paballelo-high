'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Plus, Pencil, Trash2, Calendar } from 'lucide-react';

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

export default function AdminNewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
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
    loadNewsItems();
  }, []);

  const loadNewsItems = async () => {
    try {
      const response = await fetch('/api/admin/news');
      const data = await response.json();
      setNewsItems(data);
    } catch (error) {
      console.error('Error loading news:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingItem ? '/api/admin/news' : '/api/admin/news';
      const method = editingItem ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
      });

      if (response.ok) {
        await loadNewsItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } catch (error) {
      console.error('Error saving news:', error);
    }
  };

  const handleEdit = (item: NewsItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      titleXh: item.titleXh || '',
      titleAf: item.titleAf || '',
      titleTn: item.titleTn || '',
      date: item.date,
      category: item.category,
      image: item.image,
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
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news item?')) return;

    try {
      const response = await fetch('/api/admin/news', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await loadNewsItems();
      }
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      titleXh: '',
      titleAf: '',
      titleTn: '',
      date: new Date().toISOString().split('T')[0],
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
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold">News & Events</h1>
          <p className="text-muted-foreground mt-2">
            Manage school news and events
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add News
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit News' : 'Add News'}</DialogTitle>
              <DialogDescription>
                {editingItem ? 'Update the news item details' : 'Create a new news or event post'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title (English)</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="titleXh">Title (isiXhosa)</Label>
                <Input
                  id="titleXh"
                  value={formData.titleXh}
                  onChange={(e) => setFormData({ ...formData, titleXh: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="titleAf">Title (Afrikaans)</Label>
                <Input
                  id="titleAf"
                  value={formData.titleAf}
                  onChange={(e) => setFormData({ ...formData, titleAf: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="titleTn">Title (Setswana)</Label>
                <Input
                  id="titleTn"
                  value={formData.titleTn}
                  onChange={(e) => setFormData({ ...formData, titleTn: e.target.value })}
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
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
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
                <Label htmlFor="image">Image Path</Label>
                <Input
                  id="image"
                  placeholder="/news/image.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt (English)</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerptXh">Excerpt (isiXhosa)</Label>
                <Textarea
                  id="excerptXh"
                  value={formData.excerptXh}
                  onChange={(e) => setFormData({ ...formData, excerptXh: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerptAf">Excerpt (Afrikaans)</Label>
                <Textarea
                  id="excerptAf"
                  value={formData.excerptAf}
                  onChange={(e) => setFormData({ ...formData, excerptAf: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerptTn">Excerpt (Setswana)</Label>
                <Textarea
                  id="excerptTn"
                  value={formData.excerptTn}
                  onChange={(e) => setFormData({ ...formData, excerptTn: e.target.value })}
                  rows={2}
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
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contentXh">Content (isiXhosa)</Label>
                <Textarea
                  id="contentXh"
                  value={formData.contentXh}
                  onChange={(e) => setFormData({ ...formData, contentXh: e.target.value })}
                  rows={6}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contentAf">Content (Afrikaans)</Label>
                <Textarea
                  id="contentAf"
                  value={formData.contentAf}
                  onChange={(e) => setFormData({ ...formData, contentAf: e.target.value })}
                  rows={6}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contentTn">Content (Setswana)</Label>
                <Textarea
                  id="contentTn"
                  value={formData.contentTn}
                  onChange={(e) => setFormData({ ...formData, contentTn: e.target.value })}
                  rows={6}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                />
                <Label htmlFor="featured">Featured on homepage</Label>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  {editingItem ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
