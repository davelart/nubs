import { createRouteHandler } from 'uploadthing/next';
import { ourFileRouter } from './core';

// Exposes the FileRouter as Next.js App Router GET / POST handlers.
// UploadThing uses GET to serve client-side config and POST to handle uploads.
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
