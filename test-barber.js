require('dotenv').config();
const { PrismaClient } = require('./generated/prisma-postgresql-client');
const prisma = new PrismaClient({ datasources: { db: { url: process.env.POSTGRES_DATABASE_URL } } });

async function main() {
  const b = await prisma.barbers.findFirst({ select: { cityId: true } });
  console.log("Barber cityId:", b?.cityId);
  console.log("Barbers count:", await prisma.barbers.count());
  
  const bEmpty = await prisma.barbers.count({ where: { cityId: "" } });
  console.log("Barbers with empty string cityId:", bEmpty);
}

main().catch(console.error).finally(() => prisma.$disconnect());
