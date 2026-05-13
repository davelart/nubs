import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { uploadFile, deleteFile, getDownloadUrl, uploadFileLocal } from '@/lib/storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { identifier: string } }
) {
  try {
    // Read id from params (dynamic route), query string (fallback)
    let rawId = (params as any).identifier ?? (params as any).id;
    if (!rawId) {
      const url = new URL(request.url);
      rawId = url.searchParams.get('id');
    }
    const id = parseInt(String(rawId));
    if (Number.isNaN(id)) {
      console.error('Invalid or missing id param for GET', { params, url: request.url, rawId });
      return NextResponse.json({ error: 'Missing or invalid id parameter', details: { params, rawId } }, { status: 400 });
    }

    const leader = await prisma.leadership.findUnique({
      where: { id },
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

    if (!leader) {
      return NextResponse.json({ error: 'Leader not found' }, { status: 404 });
    }

    if (leader.photo?.key && !leader.photo.url?.startsWith('/')) {
      try {
        const resolved = await getDownloadUrl(leader.photo.key);
        leader.photo.url = resolved;
      } catch (err) {
        console.error('Error resolving media url for leader', leader.id, err);
      }
    }

    return NextResponse.json(leader);
  } catch (error) {
    console.error('Error fetching leader:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leader' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { identifier: string } }
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
    const photo = formData.get('photo') as File;
    const order = parseInt(formData.get('order') as string) || 0;
    const isActive = formData.get('isActive') === 'true';

    // Resolve id from params, form body, query string, or URL path
    let rawId = (params as any).identifier ?? (params as any).id;
    if (!rawId) {
      const idFromBody = formData.get('id') ?? formData.get('identifier');
      if (idFromBody) rawId = idFromBody;
    }
    if (!rawId) {
      const url = new URL(request.url);
      rawId = url.searchParams.get('id');
    }

    const id = parseInt(String(rawId));
    if (Number.isNaN(id)) {
      console.error('Invalid or missing id param for PUT', { params, url: request.url, rawId });
      return NextResponse.json({ error: 'Missing or invalid id parameter', details: { params, url: request.url, rawId } }, { status: 400 });
    }

    const existingLeader = await prisma.leadership.findUnique({ where: { id } });

    if (!existingLeader) {
      return NextResponse.json({ error: 'Leader not found' }, { status: 404 });
    }

    // Handle photo upload / replacement using Media relation
    let photoId: number | undefined = existingLeader.photoId ?? undefined;

    if (photo && photo.size > 0) {
      // Default to local storage in dev unless Tigris is explicitly enabled
      const useTigris = process.env.USE_TIGRIS === 'true' && process.env.NODE_ENV === 'production';
      
      if (existingLeader.photoId) {
        const existingMedia = await prisma.media.findUnique({ where: { id: existingLeader.photoId } });
        if (existingMedia?.key) {
          try { await deleteFile(existingMedia.key); } catch (err) { console.error('Failed to delete old media file', err); }
        }
        await prisma.media.delete({ where: { id: existingLeader.photoId } });
        photoId = undefined;
      }

      const buffer = Buffer.from(await photo.arrayBuffer());
      const key = `leadership/${Date.now()}-${photo.name}`;
      let url: string;
      
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
      const media = await prisma.media.create({ data: { filename: photo.name, url, key, mimeType: photo.type } });
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

    // Resolve photo URL if needed (for consistency with GET endpoint)
    if (leader.photo && leader.photo.key && !leader.photo.url?.startsWith('/')) {
      try {
        const resolved = await getDownloadUrl(leader.photo.key);
        leader.photo.url = resolved;
      } catch (err) {
        console.error('Error resolving media url for leader', leader.id, err);
      }
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

export async function DELETE( request: NextRequest, { params }: { params: { identifier: string } }) {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const rawId = (params as any).identifier ?? (params as any).id;
    const id = parseInt(String(rawId));
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

    // Delete photo from storage and media record if exists
    if (leader.photo) {
      try {
        if (leader.photo.key) await deleteFile(leader.photo.key);
      } catch (err) {
        console.error('Error deleting media file', err);
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
    return NextResponse.json(
      { error: 'Failed to delete leader' },
      { status: 500 }
    );
  }
}
