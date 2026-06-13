import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const doc = await prisma.document.findFirst({
            where: { type: 'constitution' },
            orderBy: { uploadedAt: 'desc' },
        });
        return NextResponse.json(doc ?? null);
    } catch (error) {
        console.error('Error fetching constitution:', error);
        return NextResponse.json({ error: 'Failed to fetch constitution' }, { status: 500 });
    }
}
