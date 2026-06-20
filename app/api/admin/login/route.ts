import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Read admin credentials from JSON file
    const adminPath = path.join(process.cwd(), 'data', 'admin.json');
    const adminData = JSON.parse(fs.readFileSync(adminPath, 'utf-8'));

    if (username === adminData.username && password === adminData.password) {
      // Generate a simple token (in production, use proper JWT)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      return NextResponse.json({ 
        success: true, 
        token,
        user: { username }
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
