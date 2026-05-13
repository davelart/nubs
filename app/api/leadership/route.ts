import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { getDownloadUrl, uploadFile, uploadFileLocal } from '@/lib/storage';

export async function GET(request: NextRequest, { params }: any) {
    try {
        const { searchParams } = new URL(request.url);
        const academicYear = searchParams.get('academicYear');

        const leaders = await prisma.leadership.findMany({
            where: {
                isActive: true,
                ...(academicYear && { academicYear }),
            },
            include: {
                photo: {
                    select: {
                        id: true,
                        key: true,
                        url: true,
                        filename: true,
                    },
                },
            },
            orderBy: { order: 'asc' },
        });

        // Resolve accessible URLs for photo keys (signed or public)
        const leadersWithUrls = await Promise.all(leaders.map(async (l) => {
            if (l.photo && l.photo.key && !l.photo.url?.startsWith('/')) {
                try {
                    const resolved = await getDownloadUrl(l.photo.key);
                    return { ...l, photo: { ...l.photo, url: resolved } };
                } catch (err) {
                    console.error('Error resolving media url for leader', l.id, err);
                    return l;
                }
            }
            return l;
        }));

        return NextResponse.json(leadersWithUrls, { status: 200 });
    } catch (error) {
        console.error('Error fetching leaders:', error);
        return NextResponse.json({ error: 'Failed to fetch leaders' }, { status: 500 });
    }
}

export async function POST(request: NextRequest, { params }: any) {
    const token = await auth();
    
    try {
        if (!token?.user || (token.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const formData = await request.formData();
        const name = formData.get('name') as string;
        const role = formData.get('role') as string;
        const institution = formData.get('institution') as string;
        const grade = formData.get('grade') as string;
        const bio = formData.get('bio') as string;
        const photo = formData.get('photo') as File;
        const order = parseInt(formData.get('order') as string) || 0;
        const academicYear = formData.get('academicYear') as string;

        // Validate required fields based on type
        if (!name || !role || !institution) {
            return NextResponse.json(
                { error: 'Name, role, and institution are required' },
                { status: 400 }
            );
        }

        // Auto-assign academic year for coordinators if not provided
        let assignedAcademicYear = academicYear;
        if (!assignedAcademicYear) {
            const now = new Date();
            const currentYear = now.getFullYear();
            const month = now.getMonth();
            if (month < 7) {
                assignedAcademicYear = `${currentYear - 1}/${currentYear}`;
            } else {
                assignedAcademicYear = `${currentYear}/${currentYear + 1}`;
            }
        }

        let photoId: number | undefined;

        if (photo && photo.size > 0) {
            const buffer = Buffer.from(await photo.arrayBuffer());
            const key = `leadership/${Date.now()}-${photo.name}`;
            let url: string;
            
            // Default to local storage in dev unless Tigris is explicitly enabled
            const useTigris = process.env.USE_TIGRIS === 'true' && process.env.NODE_ENV === 'production';
            
            if (useTigris) {
                try {
                    url = await uploadFile(key, buffer, photo.type);
                } catch (uploadErr) {
                    console.error('Tigris upload failed:', uploadErr);
                    throw uploadErr;
                }
            } else {
                // Use local storage in development
                url = await uploadFileLocal(key, buffer, photo.type);
            }
            const media = await prisma.media.create({
                data: {
                    filename: photo.name,
                    url,
                    key,
                    mimeType: photo.type,
                },
            });
            photoId = media.id;
        }

        const leader = await prisma.leadership.create({
            data: {
                name,
                role,
                institution,
                academicYear: assignedAcademicYear,
                grade: grade || null,
                bio: bio || null,
                photoId,
                order,
            },
            include: {
                photo: {
                    select: {
                        id: true,
                        key: true,
                        url: true,
                        filename: true,
                    },
                },
            },
        });

        // Resolve photo URL if needed (for consistency with GET endpoint)
        if (leader.photo && leader.photo.key && !leader.photo.url?.startsWith('/')) {
            try {
                const resolved = await getDownloadUrl(leader.photo.key);
                leader.photo.url = resolved;
            } catch (err) {
                console.error('Error resolving media url for leader', leader.id, err);
            }
        }

        return NextResponse.json(leader, { status: 201 });
    } catch (error) {
        console.error('Error creating leader:', error);
        const msg = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: 'Failed to create leader', message: msg },
            { status: 500 }
        );
    }
}
