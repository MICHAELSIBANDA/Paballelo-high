import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'school-structure.json');

function readSchoolStructureData() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeSchoolStructureData(data: any[]) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  try {
    const structure = readSchoolStructureData();
    return NextResponse.json(structure);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch school structure' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const structure = readSchoolStructureData();
    
    const newId = structure.length > 0 ? Math.max(...structure.map((s: any) => s.id)) + 1 : 1;
    const newItem = {
      id: newId,
      ...body,
    };
    
    structure.push(newItem);
    writeSchoolStructureData(structure);
    
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create school structure item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const structure = readSchoolStructureData();
    
    const index = structure.findIndex((s: any) => s.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'School structure item not found' }, { status: 404 });
    }
    
    structure[index] = body;
    writeSchoolStructureData(structure);
    
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update school structure item' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const structure = readSchoolStructureData();
    
    const filteredStructure = structure.filter((s: any) => s.id !== body.id);
    writeSchoolStructureData(filteredStructure);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete school structure item' }, { status: 500 });
  }
}
