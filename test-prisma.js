const { PrismaClient } = require('./generated/prisma-postgresql-client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.appointments.findMany({ where: { Date: { lt: "2026-06-22" } } });
    console.log("Success with Date");
  } catch (e) {
    console.error("Error with Date:", e.message);
  }
}

main().finally(() => prisma.$disconnect());
