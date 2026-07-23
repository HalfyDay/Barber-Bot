require('dotenv').config();
const { PrismaClient } = require('./generated/prisma-postgresql-client');
const prisma = new PrismaClient({ datasources: { db: { url: process.env.POSTGRES_DATABASE_URL } } });

async function main() {
  const count = await prisma.appointments.count();
  console.log("Count:", count);
}

main().catch(console.error).finally(() => prisma.$disconnect());
