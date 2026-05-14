/**
 * Type-safe re-exports of UploadThing's React components.
 * Import UploadButton / UploadDropzone from here, not directly from @uploadthing/react,
 * so TypeScript can infer the correct endpoint types from OurFileRouter.
 */
import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
