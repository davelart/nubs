import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { uploadFile, deleteFile, getDownloadUrl } from '@/lib/storage';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ identifier: string }> }
) {
    try {
        const { identifier } = await params;
        let rawId: string | null | undefined = identifier;
        if (!rawId) {
            const url = new URL(request.url);
            rawId = url.searchParams.get('id');
        }
        const id = parseInt(String(rawId));
        if (Number.isNaN(id)) {
            console.error('Invalid or missing id param for GET', { params, rawId });
            return NextResponse.json(
                { error: 'Missing or invalid id parameter', details: { rawId } },
                { status: 400 }
            );
        }

        const leader = await prisma.leadership.findUnique({
            where: { id },
            include: {
                photo: {
                    select: { id: true, key: true, url: true, filename: true },
                },
            },
        });

        if (!leader) {
            return NextResponse.json({ error: 'Leader not found' }, { status: 404 });
        }

        if (leader.photo?.key) {
            leader.photo.url = getDownloadUrl(leader.photo.key);
        }

        return NextResponse.json(leader);
    } catch (error) {
        console.error('Error fetching leader:', error);
        return NextResponse.json({ error: 'Failed to fetch leader' }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ identifier: string }> }
) {
    try {
        const session = await auth();
        if (!session?.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const formData = await request.formData();
        const name = formData.get('name') as string;
        const role = formData.get('role') as string;
        const bio = formData.get('bio') as string;
        const photo = formData.get('photo') as File | null;
        const order = parseInt(formData.get('order') as string) || 0;
        const isActive = formData.get('isActive') === 'true';

        // Resolve id from params, form body, or query string
        const { identifier } = await params;
        let rawId: string | null | undefined = identifier;
        if (!rawId) {
            const idFromBody = formData.get('id') ?? formData.get('identifier');
            if (idFromBody) rawId = String(idFromBody);
        }
        if (!rawId) {
            const url = new URL(request.url);
            rawId = url.searchParams.get('id');
        }

        const id = parseInt(String(rawId));
        if (Number.isNaN(id)) {
            console.error('Invalid or missing id param for PUT', { rawId });
            return NextResponse.json(
                { error: 'Missing or invalid id parameter', details: { rawId } },
                { status: 400 }
            );
        }

        const existingLeader = await prisma.leadership.findUnique({ where: { id } });
        if (!existingLeader) {
            return NextResponse.json({ error: 'Leader not found' }, { status: 404 });
        }

        let photoId: number | undefined = existingLeader.photoId ?? undefined;

        if (photo && photo.size > 0) {
            // Delete the existing photo from storage (UploadThing or local) before uploading the new one
            if (existingLeader.photoId) {
                const existingMedia = await prisma.media.findUnique({
                    where: { id: existingLeader.photoId },
                });
                if (existingMedia?.key) {
                    try {
                        await deleteFile(existingMedia.key);
                    } catch (err) {
                        console.error('Failed to delete old media file', err);
                    }
                }
                await prisma.media.delete({ where: { id: existingLeader.photoId } });
                photoId = undefined;
            }

            const buffer = Buffer.from(await photo.arrayBuffer());
            const { url, key } = await uploadFile(photo.name, buffer, photo.type);

            const media = await prisma.media.create({
                data: { filename: photo.name, url, key, mimeType: photo.type },
            });
            photoId = media.id;
        }

        const leader = await prisma.leadership.update({
            where: { id },
            data: {
                name,
                role: role || undefined,
                bio,
                photoId,
                order,
                isActive,
            },
            include: {
                photo: { select: { id: true, key: true, url: true, filename: true } },
            },
        });

        if (leader.photo?.key) {
            leader.photo.url = getDownloadUrl(leader.photo.key);
        }

        return NextResponse.json(leader);
    } catch (error) {
        console.error('Error updating leader:', error);
        const msg = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: 'Failed to update leader', message: msg },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ identifier: string }> }
) {
    try {
        const session = await auth();
        if (!session?.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { identifier } = await params;
        const id = parseInt(String(identifier));
        if (Number.isNaN(id)) {
            console.error('Invalid or missing id param for DELETE', { params });
            return NextResponse.json({ error: 'Missing or invalid id parameter' }, { status: 400 });
        }

        const leader = await prisma.leadership.findUnique({
            where: { id },
            include: { photo: { select: { id: true, key: true } } },
        });

        if (!leader) {
            return NextResponse.json({ error: 'Leader not found' }, { status: 404 });
        }

        // Delete photo from UploadThing (or local disk) and remove Media record
        if (leader.photo) {
            if (leader.photo.key) {
                try {
                    await deleteFile(leader.photo.key);
                } catch (err) {
                    console.error('Error deleting media file', err);
                }
            }
            try {
                await prisma.media.delete({ where: { id: leader.photo.id } });
            } catch (err) {
                console.error('Error deleting media record', err);
            }
        }

        await prisma.leadership.delete({ where: { id } });

        return NextResponse.json({ message: 'Leader deleted successfully' });
    } catch (error) {
        console.error('Error deleting leader:', error);
        return NextResponse.json({ error: 'Failed to delete leader' }, { status: 500 });
    }
}
