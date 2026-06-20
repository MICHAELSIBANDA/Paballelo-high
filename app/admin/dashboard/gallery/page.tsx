'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingItem ? '/api/admin/gallery' : '/api/admin/gallery';
      const method = editingItem ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
      });

      if (response.ok) {
        await loadGalleryItems();
        setIsDialogOpen(false);
        resetForm();
      }
    } catch (error) {
      console.error('Error saving gallery item:', error);
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      src: item.src,
      category: item.category,
      captionEn: item.captionEn,
      captionXh: item.captionXh,
      captionAf: item.captionAf,
      captionTn: item.captionTn,
      featured: item.featured,
    });
    setIsDialogOpen(true);
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

  const resetForm = () => {
    setEditingItem(null);
    setFormData({
      src: '',
      category: 'events',
      captionEn: '',
      captionXh: '',
      captionAf: '',
      captionTn: '',
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
          <h1 className="text-3xl font-serif font-bold">Gallery Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage school photo gallery
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Image' : 'Add Image'}</DialogTitle>
              <DialogDescription>
                {editingItem ? 'Update the gallery image details' : 'Add a new image to the gallery'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="src">Image Path</Label>
                <Input
                  id="src"
                  placeholder="/gallery/image.jpg"
                  value={formData.src}
                  onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Upload images to the /public/gallery/ folder and enter the path here
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
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
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="captionXh">Caption (isiXhosa)</Label>
                <Input
                  id="captionXh"
                  value={formData.captionXh}
                  onChange={(e) => setFormData({ ...formData, captionXh: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="captionAf">Caption (Afrikaans)</Label>
                <Input
                  id="captionAf"
                  value={formData.captionAf}
                  onChange={(e) => setFormData({ ...formData, captionAf: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="captionTn">Caption (Setswana)</Label>
                <Input
                  id="captionTn"
                  value={formData.captionTn}
                  onChange={(e) => setFormData({ ...formData, captionTn: e.target.value })}
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
                  {editingItem ? 'Update' : 'Add'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
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
                <Button size="sm" variant="outline" className="flex-1" onClick={() => handleEdit(item)}>
                  <Pencil className="h-4 w-4 mr-1" />
                  Edit
                </Button>
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
