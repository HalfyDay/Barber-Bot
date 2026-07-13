require('dotenv').config();
const { Client } = require('pg');

const schemas = ['public', 'tenant_panelbrothershopwebsite', 'tenant_test'];

const sql = `
CREATE TABLE IF NOT EXISTS "BarberLevelHistory" (
  "id" TEXT NOT NULL,
  "barberId" TEXT NOT NULL,
  "month" TEXT NOT NULL,
  "actualClientVolume" INTEGER NOT NULL DEFAULT 0,
  "actualRetainedClients" INTEGER NOT NULL DEFAULT 0,
  "actualReturnPercent" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "meetsCurrentRequirements" BOOLEAN NOT NULL DEFAULT false,
  "meetsNextRequirements" BOOLEAN NOT NULL DEFAULT false,
  "currentPositionId" TEXT NOT NULL,
  "nextPositionId" TEXT,
  "evaluatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "BarberLevelHistory_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "BarberLevelHistory_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barbers"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "BarberLevelHistory_currentPositionId_fkey" FOREIGN KEY ("currentPositionId") REFERENCES "Positions"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "BarberLevelHistory_nextPositionId_fkey" FOREIGN KEY ("nextPositionId") REFERENCES "Positions"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "BarberLevelHistory_barberId_month_key" UNIQUE ("barberId", "month")
);
`;

(async () => {
  const client = new Client({ connectionString: process.env.POSTGRES_DATABASE_URL });
  await client.connect();
  for (const schema of schemas) {
    try {
      await client.query(`SET search_path TO "${schema}"`);
      await client.query(sql);
      console.log(`[OK] ${schema}`);
    } catch (e) {
      console.error(`[ERR] ${schema}: ${e.message}`);
    }
  }
  await client.end();
  console.log('Done.');
})();
