import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const info = await prisma.contactInfo.findFirst();
        return NextResponse.json(info ?? null);
    } catch (error) {
        console.error('Error fetching contact info:', error);
        return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { address, phone, email } = await request.json();

        if (!address || !phone || !email) {
            return NextResponse.json({ error: 'Address, phone and email are required' }, { status: 400 });
        }

        const existing = await prisma.contactInfo.findFirst();

        const info = existing
            ? await prisma.contactInfo.update({ where: { id: existing.id }, data: { address, phone, email } })
            : await prisma.contactInfo.create({ data: { address, phone, email } });

        return NextResponse.json(info);
    } catch (error) {
        console.error('Error updating contact info:', error);
        return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
    }
}
