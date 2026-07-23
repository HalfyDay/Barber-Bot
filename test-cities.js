const { PrismaClient } = require('./generated/prisma-postgresql-client');
const { createHomeClientStoreService } = require('./services/homeClientStoreService');

const prisma = new PrismaClient();
const service = createHomeClientStoreService({ prisma, randomUUID: require('crypto').randomUUID, normalizeText: t => t ? t.trim() : t });

async function main() {
  console.log('Original from DB:');
  const site = await service.getSiteSettings();
  console.log(JSON.stringify(site?.cities));

  console.log('Updating...');
  await service.updateSiteSettings({ cities: { enabled: true, defaultCityId: 'foo' } });

  console.log('After update:');
  const newSite = await service.getSiteSettings();
  console.log(JSON.stringify(newSite?.cities));
}

main().catch(console.error).finally(() => prisma.$disconnect());
