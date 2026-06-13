import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { uploadFile, getDownloadUrl } from '@/lib/storage';

type Leader = Prisma.LeadershipGetPayload<{
    include: { photo: { select: { id: true; key: true; url: true; filename: true } } };
}>;

export async function GET(request: NextRequest) {
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

        // Resolve accessible URLs for photo keys.
        // UploadThing URLs are permanent; legacy local paths pass through as-is.
        const leadersWithUrls = leaders.map((l: Leader) => {
            if (l.photo?.key) {
                return {
                    ...l,
                    photo: { ...l.photo, url: getDownloadUrl(l.photo.key) },
                };
            }
            return l;
        });

        return NextResponse.json(leadersWithUrls, { status: 200 });
    } catch (error) {
        console.error('Error fetching leaders:', error);
        return NextResponse.json({ error: 'Failed to fetch leaders' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
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
        const photo = formData.get('photo') as File | null;
        const order = parseInt(formData.get('order') as string) || 0;
        const academicYear = formData.get('academicYear') as string;

        if (!name || !role || !institution) {
            return NextResponse.json(
                { error: 'Name, role, and institution are required' },
                { status: 400 }
            );
        }

        // Auto-assign academic year if not provided
        let assignedAcademicYear = academicYear;
        if (!assignedAcademicYear) {
            const now = new Date();
            const currentYear = now.getFullYear();
            const month = now.getMonth();
            assignedAcademicYear =
                month < 4
                    ? `${currentYear - 1}/${currentYear}`
                    : `${currentYear}/${currentYear + 1}`;
        }

        let photoId: number | undefined;

        if (photo && photo.size > 0) {
            const buffer = Buffer.from(await photo.arrayBuffer());
            const { url, key } = await uploadFile(photo.name, buffer, photo.type);

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

        // Resolve URL for the newly created photo
        if (leader.photo?.key) {
            leader.photo.url = getDownloadUrl(leader.photo.key);
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
