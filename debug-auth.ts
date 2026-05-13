import { prisma } from './lib/prisma';
import bcrypt from 'bcryptjs';

async function debugAuth() {
  console.log('🔍 Debugging authentication...');
  
  // Check all users in database
  const allUsers = await prisma.user.findMany();
  console.log('All users in database:', allUsers.map(u => ({ 
    id: u.id, 
    email: u.email, 
    name: u.name, 
    role: u.role,
    hasPassword: !!u.password 
  })));

  // Test the specific admin user
  const adminUser = await prisma.user.findUnique({
    where: { email: 'admin@nubsghana.org' }
  });
  
  if (adminUser) {
    console.log('✅ Found admin user:', {
      id: adminUser.id,
      email: adminUser.email,
      name: adminUser.name,
      role: adminUser.role
    });

    // Test password comparison
    const testPasswords = ['changeme123', '1234567', 'password123'];
    for (const testPwd of testPasswords) {
      const isValid = await bcrypt.compare(testPwd, adminUser.password);
      console.log(`🔑 Testing "${testPwd}": ${isValid ? '✅ Valid' : '❌ Invalid'}`);
    }
  } else {
    console.log('❌ Admin user not found');
  }

  await prisma.$disconnect();
}

debugAuth().catch(console.error);
