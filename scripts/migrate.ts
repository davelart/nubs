import { execSync } from 'child_process';

console.log('Running Prisma migrations...');

try {
  execSync('npx prisma migrate deploy', {
    stdio: 'inherit',
    env: process.env,
  });
  console.log('Migrations completed successfully');
} catch (error) {
  console.error('Migration failed:', error);
  process.exit(1);
}
