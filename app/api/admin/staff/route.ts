import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'staff.json');

function readStaffData() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeStaffData(data: any[]) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  try {
    const staff = readStaffData();
    return NextResponse.json(staff);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch staff' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const staff = readStaffData();
    
    const newId = staff.length > 0 ? Math.max(...staff.map((s: any) => s.id)) + 1 : 1;
    const newItem = {
      id: newId,
      ...body,
    };
    
    staff.push(newItem);
    writeStaffData(staff);
    
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create staff item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const staff = readStaffData();
    
    const index = staff.findIndex((s: any) => s.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Staff item not found' }, { status: 404 });
    }
    
    staff[index] = body;
    writeStaffData(staff);
    
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update staff item' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const staff = readStaffData();
    
    const filteredStaff = staff.filter((s: any) => s.id !== body.id);
    writeStaffData(filteredStaff);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete staff item' }, { status: 500 });
  }
}
