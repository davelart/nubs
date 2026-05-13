import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function resetAdmin() {
  const email = 'admin@nubsghana.org';
  const newPassword = 'admin123';
  
  console.log('🔄 Resetting admin password...');
  
  // Delete existing admin user
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    await prisma.user.delete({ where: { id: existing.id } });
    console.log('✅ Deleted existing admin user');
  }
  
  // Create new admin user with fresh password
  const hashed = await bcrypt.hash(newPassword, 12);
  
  const admin = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name: 'Admin',
      role: 'admin',
    },
  });
  
  console.log('✅ Created new admin user:', {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    role: admin.role
  });
  
  // Test the new password
  const testValid = await bcrypt.compare(newPassword, hashed);
  console.log(`🔑 Testing new password "${newPassword}": ${testValid ? '✅ Valid' : '❌ Invalid'}`);
  
  await prisma.$disconnect();
}

resetAdmin().catch(console.error);
