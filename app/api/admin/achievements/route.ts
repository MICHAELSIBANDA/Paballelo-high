import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'achievements.json');

async function readAchievements() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading achievements:', error);
    return [];
  }
}

async function writeAchievements(data: any[]) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing achievements:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const achievements = await readAchievements();
    return NextResponse.json(achievements);
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json({ error: 'Failed to fetch achievements' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const achievements = await readAchievements();
    
    const newAchievement = {
      id: Date.now(),
      ...body,
    };
    
    achievements.push(newAchievement);
    await writeAchievements(achievements);
    
    return NextResponse.json(newAchievement);
  } catch (error) {
    console.error('Error creating achievement:', error);
    return NextResponse.json({ error: 'Failed to create achievement' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    const achievements = await readAchievements();
    const index = achievements.findIndex((a: any) => a.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Achievement not found' }, { status: 404 });
    }
    
    achievements[index] = { ...achievements[index], ...updateData };
    await writeAchievements(achievements);
    
    return NextResponse.json(achievements[index]);
  } catch (error) {
    console.error('Error updating achievement:', error);
    return NextResponse.json({ error: 'Failed to update achievement' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;
    
    const achievements = await readAchievements();
    const filtered = achievements.filter((a: any) => a.id !== id);
    
    if (filtered.length === achievements.length) {
      return NextResponse.json({ error: 'Achievement not found' }, { status: 404 });
    }
    
    await writeAchievements(filtered);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting achievement:', error);
    return NextResponse.json({ error: 'Failed to delete achievement' }, { status: 500 });
  }
}
