import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

const f = createUploadthing();

export const ourFileRouter = {
  /**
   * Constitution document uploads (PDF or Word).
   * Only authenticated admins may upload.
   * Replaces the existing constitution record on completion.
   */
  constitution: f({ pdf: { maxFileSize: '8MB', maxFileCount: 1 }, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { maxFileSize: '8MB', maxFileCount: 1 } })
    .middleware(async () => {
      const session = await auth();
      if (!session?.user || (session.user as any).role !== 'admin') {
        throw new UploadThingError('Unauthorized');
      }
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      // Remove any previous constitution record
      const existing = await prisma.document.findFirst({ where: { type: 'constitution' } });
      if (existing) {
        await prisma.document.delete({ where: { id: existing.id } });
      }
      const doc = await prisma.document.create({
        data: {
          type: 'constitution',
          filename: file.name,
          url: file.ufsUrl,
          key: file.key,
          mimeType: file.type ?? null,
        },
      });
      return { documentId: doc.id, url: file.ufsUrl };
    }),

  /**
   * Leadership photo uploads.
   * Only authenticated admins may use this route.
   * On completion a Media record is written to the database and
   * { mediaId, url } is returned to the client-side callback.
   */
  leadershipImage: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(async () => {
      const session = await auth();

      if (!session?.user || (session.user as any).role !== 'admin') {
        throw new UploadThingError('Unauthorized');
      }

      return { userId: (session.user as any).id as string };
    })
    .onUploadComplete(async ({ file }) => {
      // Persist file metadata to our Media table so the rest of the app
      // can reference it by mediaId or URL without extra UploadThing calls.
      const media = await prisma.media.create({
        data: {
          filename: file.name,
          url: file.ufsUrl,   // permanent, publicly accessible URL
          key: file.key,      // used later for deletion via UTApi
          mimeType: file.type ?? null,
        },
      });

      // Whatever is returned here is forwarded to onClientUploadComplete.
      return { mediaId: media.id, url: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
