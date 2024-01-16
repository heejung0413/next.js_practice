import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

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
  const user = await prisma?.user.findUnique({
    where: { email: body.email },
  });
  if (user) {
    return NextResponse.json({ error: 'User Already Exists' }, { status: 400 });
  }
  const newUser = await prisma?.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser);
}
