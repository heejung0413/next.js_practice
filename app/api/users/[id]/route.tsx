import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: 'Name is required' }, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: { id: String(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }

  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updateUser);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  const user = await prisma?.user.findUnique({
    where: { id: String(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }

  await prisma.user.delete({ where: { id: user.id } });

  return NextResponse.json({});
}
