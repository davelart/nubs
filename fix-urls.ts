import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.production' });

const prisma = new PrismaClient();

async function main() {
  const allMedia = await prisma.media.findMany({
    where: { url: 'undefined' }
  });

  console.log(`Found ${allMedia.length} media with broken undefined URL`);

  for (const m of allMedia) {
    if (m.key) {
      const canonical = `https://utfs.io/f/${m.key}`;
      await prisma.media.update({
        where: { id: m.id },
        data: { url: canonical }
      });
      console.log(`Fixed media ${m.id} to ${canonical}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
