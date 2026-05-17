/**
 * Storage abstraction — backed by UploadThing.
 *
 * Works identically in development and production; no dual-path logic needed.
 * Old /uploads/... relative paths (local dev files) are passed through as-is
 * for backward compatibility while existing data is re-uploaded manually.
 */
import { UTApi } from 'uploadthing/server';
import { promises as fs } from 'fs';
import path from 'path';

export const utapi = new UTApi();

// ---------------------------------------------------------------------------
// Upload
// ---------------------------------------------------------------------------

/**
 * Upload a file from a Buffer (used by server-side API route handlers that
 * already have the file in memory from FormData).
 *
 * Returns { url, key } where `url` is the permanent public UploadThing URL
 * and `key` is the file key needed for future deletion.
 */
export async function uploadFile(
  filename: string,
  body: Buffer,
  contentType: string
): Promise<{ url: string; key: string }> {
  // Convert Buffer → Uint8Array for Node.js 22 compatibility (File constructor type).
  const file = new File([new Uint8Array(body)], filename, { type: contentType });
  const response = await utapi.uploadFiles(file);

  if (response.error) {
    throw new Error(`UploadThing upload failed: ${response.error.message}`);
  }

  return {
    url: response.data.url, // utapi returns .url, not .ufsUrl
    key: response.data.key,
  };
}

// ---------------------------------------------------------------------------
// Delete
// ---------------------------------------------------------------------------

/**
 * Delete a file by its storage key.
 * Handles both UploadThing keys and legacy local /uploads/... paths.
 */
export async function deleteFile(key: string): Promise<void> {
  // Legacy local file — key is stored as the relative URL e.g. /uploads/foo.jpg
  if (key.startsWith('/uploads/') || key.startsWith('uploads/')) {
    const filename = path.basename(key);
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
    try {
      await fs.unlink(filepath);
    } catch {
      // File may already be gone; swallow the error.
    }
    return;
  }

  // UploadThing key
  await utapi.deleteFiles(key);
}

// ---------------------------------------------------------------------------
// URL resolution
// ---------------------------------------------------------------------------

/**
 * Resolve an accessible URL for a stored file.
 *
 * - Legacy local paths (/uploads/...) are returned as-is; Next.js serves them
 *   from public/uploads for backward compatibility.
 * - UploadThing URLs are permanent and public, so we return them directly.
 * - Raw UploadThing keys (no protocol) are converted to their canonical URL.
 */
export function getDownloadUrl(key: string): string {
  // Already a full URL (UploadThing ufsUrl or Tigris public URL)
  if (key.startsWith('http://') || key.startsWith('https://')) {
    return key;
  }

  // Legacy local path
  if (key.startsWith('/') || key.startsWith('uploads/')) {
    return key.startsWith('/') ? key : `/${key}`;
  }

  // Raw UploadThing file key → canonical URL
  return `https://utfs.io/f/${key}`;
}
