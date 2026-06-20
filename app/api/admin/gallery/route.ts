import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GALLERY_FILE = path.join(process.cwd(), 'data', 'gallery.json');

// Helper function to read gallery data
function readGalleryData(): any[] {
  try {
    const data = fs.readFileSync(GALLERY_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write gallery data
function writeGalleryData(data: any[]): void {
  fs.writeFileSync(GALLERY_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch all gallery items
export async function GET() {
  try {
    const gallery = readGalleryData();
    return NextResponse.json(gallery);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

// POST - Create new gallery item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const gallery = readGalleryData();
    
    const newId = gallery.length > 0 ? Math.max(...gallery.map((g: any) => g.id)) + 1 : 1;
    const newItem = {
      id: newId,
      ...body,
    };
    
    gallery.push(newItem);
    writeGalleryData(gallery);
    
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}

// PUT - Update gallery item
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const gallery = readGalleryData();
    
    const index = gallery.findIndex((g: any) => g.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }
    
    gallery[index] = body;
    writeGalleryData(gallery);
    
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}

// DELETE - Delete gallery item
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const gallery = readGalleryData();
    
    const filteredGallery = gallery.filter((g: any) => g.id !== body.id);
    writeGalleryData(filteredGallery);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
  }
}
