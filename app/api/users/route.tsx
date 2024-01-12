import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: body.name });
}




