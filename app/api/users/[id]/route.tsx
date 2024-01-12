import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export function GET(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: 'Yongsu' });
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (validation.success) {
    return NextResponse.json({ error: 'Name is required' }, { status: 404 });
  }

  const user = await prisma?.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }
  const updateUser = await prisma?.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(updateUser);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  const user = await prisma?.user.findUnique({
    where: { id: params.id },
  });
  if (!user) {
    return NextResponse.json({ error: 'User Not found' }, { status: 404 });
  }
  await prisma?.user.delete({ where: { id: user.id } });
  return NextResponse.json({});
}
