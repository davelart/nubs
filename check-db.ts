import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.production' });

const prisma = new PrismaClient();

async function main() {
  const media = await prisma.media.findMany({
    take: 5,
    orderBy: { id: 'desc' }
  });
  console.log("Recent Media:", media);

  const leaders = await prisma.leadership.findMany({
    take: 5,
    orderBy: { id: 'desc' },
    include: { photo: true }
  });
  console.log("\nRecent Leaders:", JSON.stringify(leaders, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
