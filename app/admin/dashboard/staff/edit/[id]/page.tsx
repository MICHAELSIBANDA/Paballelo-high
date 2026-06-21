'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

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

export default function EditStaffPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nameEn: '',
    nameXh: '',
    nameAf: '',
    nameTn: '',
    positionEn: '',
    positionXh: '',
    positionAf: '',
    positionTn: '',
    image: '',
    order: 1,
    category: 'teacher',
  });

  useEffect(() => {
    fetchStaffItem();
  }, [params.id]);

  const fetchStaffItem = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch('/api/admin/staff');
      const data = await response.json();
      const item = data.find((n: StaffItem) => n.id === Number(params.id));
      
      if (item) {
        setFormData({
          nameEn: item.nameEn,
          nameXh: item.nameXh,
          nameAf: item.nameAf,
          nameTn: item.nameTn,
          positionEn: item.positionEn,
          positionXh: item.positionXh,
          positionAf: item.positionAf,
          positionTn: item.positionTn,
          image: item.image,
          order: item.order,
          category: item.category,
        });
      } else {
        setError('Staff member not found');
      }
    } catch (error) {
      console.error('Error loading staff member:', error);
      setError('Failed to load staff member');
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
      const response = await fetch('/api/admin/staff', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, id: Number(params.id) }),
      });

      if (response.ok) {
        router.push('/admin/dashboard/staff');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update staff member. Please try again.');
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      setError('Failed to update staff member. Please try again.');
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

  if (error && !formData.nameEn) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/staff')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-serif font-bold">Edit Staff Member</h1>
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
        <Button variant="outline" size="icon" onClick={() => router.push('/admin/dashboard/staff')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-serif font-bold">Edit Staff Member</h1>
          <p className="text-muted-foreground mt-2">
            Update the staff member details
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
          <CardTitle>Staff Details</CardTitle>
          <CardDescription>Update the information for the staff member</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="support">Support Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
              <Label htmlFor="positionEn">Position (English)</Label>
              <Input
                id="positionEn"
                value={formData.positionEn}
                onChange={(e) => setFormData({ ...formData, positionEn: e.target.value })}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positionXh">Position (isiXhosa)</Label>
              <Input
                id="positionXh"
                value={formData.positionXh}
                onChange={(e) => setFormData({ ...formData, positionXh: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positionAf">Position (Afrikaans)</Label>
              <Input
                id="positionAf"
                value={formData.positionAf}
                onChange={(e) => setFormData({ ...formData, positionAf: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="positionTn">Position (Setswana)</Label>
              <Input
                id="positionTn"
                value={formData.positionTn}
                onChange={(e) => setFormData({ ...formData, positionTn: e.target.value })}
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
              <Button type="button" variant="outline" onClick={() => router.push('/admin/dashboard/staff')} disabled={loading}>
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
