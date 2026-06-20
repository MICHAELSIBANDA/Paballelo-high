import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const NEWS_FILE = path.join(process.cwd(), 'data', 'news.json');

// Helper function to read news data
function readNewsData(): any[] {
  try {
    const data = fs.readFileSync(NEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write news data
function writeNewsData(data: any[]): void {
  fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
}

// GET - Fetch all news
export async function GET() {
  try {
    const news = readNewsData();
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

// POST - Create new news
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const news = readNewsData();
    
    const newId = news.length > 0 ? Math.max(...news.map((n: any) => n.id)) + 1 : 1;
    const newItem = {
      id: newId,
      ...body,
    };
    
    news.unshift(newItem);
    writeNewsData(news);
    
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create news' }, { status: 500 });
  }
}

// PUT - Update news
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const news = readNewsData();
    
    const index = news.findIndex((n: any) => n.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    
    news[index] = body;
    writeNewsData(news);
    
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

// DELETE - Delete news
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const news = readNewsData();
    
    const filteredNews = news.filter((n: any) => n.id !== body.id);
    writeNewsData(filteredNews);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}
