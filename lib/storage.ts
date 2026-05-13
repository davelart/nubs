import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { promises as fs } from 'fs';
import path from 'path';

const s3 = new S3Client({
  endpoint: process.env.TIGRIS_ENDPOINT,
  region: process.env.TIGRIS_REGION ?? 'auto',
  credentials: {
    accessKeyId: process.env.TIGRIS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.TIGRIS_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: false,
});

const bucket = process.env.TIGRIS_BUCKET!;

function getPublicUrl(key: string) {
  return `https://${bucket}.fly.storage.tigris.dev/${key}`;
}

export async function uploadFile(key: string, body: Buffer, contentType: string) {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  return getPublicUrl(key);
}

export async function deleteFile(key: string) {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}

export async function getSignedDownloadUrl(key: string, expiresIn = 3600) {
  return getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    }),
    { expiresIn }
  );
}

export { bucket, getPublicUrl };

export async function getDownloadUrl(key: string, expiresIn = 3600) {
  // If the bucket is publicly accessible, return a public URL; otherwise return a signed URL
  const isPublic = process.env.TIGRIS_PUBLIC === 'true';
  if (isPublic) return getPublicUrl(key);
  return getSignedDownloadUrl(key, expiresIn);
}

// Local dev fallback: save uploads to public/uploads/ for easy testing without S3
export async function uploadFileLocal(key: string, body: Buffer, contentType: string) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Local upload disabled in production');
  }
  try {
    const dir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(dir, { recursive: true });
    const filename = path.basename(key);
    const filepath = path.join(dir, filename);
    await fs.writeFile(filepath, body);
    console.log('File saved locally:', filepath);
    return `/uploads/${filename}`;
  } catch (err) {
    console.error('Error saving file locally:', err);
    throw err;
  }
}
