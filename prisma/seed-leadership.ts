import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedLeadership() {
  try {
    // Sample leadership data for 2026/2027
    const leaders = [
      {
        name: 'Rev. Ezekiel Razak Alhassan',
        role: 'National Youth/NUBS Coordinator',
        institution: 'Ghana Baptist Convention (GBC)',
        academicYear: '2026/2027',
        order: 0,
      },
      {
        name: 'Mr. Stephen Mensah',
        role: 'National Chairperson',
        institution: 'Level 400, BSc. Forensic Sciences — UCC',
        academicYear: '2026/2027',
        grade: 'Level 400',
        order: 1,
      },
      {
        name: 'Ms. Genfi Janet Ekuful',
        role: 'Vice Chairperson',
        institution: 'Level 300, BSc. Biochemistry — UCC',
        academicYear: '2026/2027',
        grade: 'Level 300',
        order: 2,
      },
      {
        name: 'Ms. Esther Ansah',
        role: 'General Secretary',
        institution: 'Level 300, BCom. PSCM — UCC',
        academicYear: '2026/2027',
        grade: 'Level 300',
        order: 3,
      },
      {
        name: 'Ms. Abigail Essilfie',
        role: 'National Financial Secretary',
        institution: 'Level 200, BCom. HRM — UCC',
        academicYear: '2026/2027',
        grade: 'Level 200',
        order: 4,
      },
      {
        name: 'Mr. Ephraim Kpogli Kwabena',
        role: 'Deputy Fin. Sec / SE Sector',
        institution: 'Level 200, BCom. PSCM — UCC',
        academicYear: '2026/2027',
        grade: 'Level 200',
        order: 5,
      },
      {
        name: 'Mr. Prince Nyarko',
        role: 'Organizing Sec / Middle Sector',
        institution: 'Level 300, B.Ed Social Science — UCC',
        academicYear: '2026/2027',
        grade: 'Level 300',
        order: 6,
      },
      {
        name: 'Mr. Ezekiel Mba Abugre',
        role: 'Dep. Org. Sec / Northern Sector',
        institution: 'Level 200, BA. Geography — UCC',
        academicYear: '2026/2027',
        grade: 'Level 200',
        order: 7,
      },
    ];

    // Clear existing leadership data
    await prisma.leadership.deleteMany({});

    // Insert new leadership data
    for (const leader of leaders) {
      await prisma.leadership.create({
        data: leader,
      });
    }

    console.log('Leadership data seeded successfully!');
  } catch (error) {
    console.error('Error seeding leadership data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedLeadership();
