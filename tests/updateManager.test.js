const test = require('node:test');
const assert = require('node:assert/strict');

const {
  canSkipPrismaMigrateForProviderSwitch,
  describeUpdateError,
  buildPrismaUpdateCommands,
  resolvePostgresDumpPath,
  stripPostgresSchemaQuery,
  buildIdempotentTenantPatch,
} = require('../services/updateManager');


test('update manager formats network error without stack trace noise', () => {
  const error = new TypeError('fetch failed');
  error.cause = {
    code: 'ECONNRESET',
    host: 'api.github.com',
  };

  assert.equal(describeUpdateError(error), 'fetch failed (ECONNRESET) [api.github.com]');
});

test('update manager formats plain error message', () => {
  assert.equal(describeUpdateError(new Error('GitHub API error: 404')), 'GitHub API error: 404');
});

test('update manager respects explicit pg_dump path override', () => {
  assert.equal(
    resolvePostgresDumpPath({
      POSTGRES_PG_DUMP_PATH: 'D:\\tools\\pg_dump.exe',
    }),
    'D:\\tools\\pg_dump.exe',
  );
});

test('update manager strips prisma schema query for pg_dump url', () => {
  assert.equal(
    stripPostgresSchemaQuery(
      'postgresql://postgres@127.0.0.1:54329/barber_bot?schema=public',
    ),
    'postgresql://postgres@127.0.0.1:54329/barber_bot',
  );
});

test('update manager runs prisma migrate deploy before generate', () => {
  const commands = buildPrismaUpdateCommands('D:\\Works\\Barber Bot\\prisma\\schema.postgresql.prisma');

  assert.deepEqual(commands.commands, [
    'npx prisma migrate deploy --schema "D:\\Works\\Barber Bot\\prisma\\schema.postgresql.prisma"',
    'npx prisma generate --schema "D:\\Works\\Barber Bot\\prisma\\schema.postgresql.prisma"',
  ]);
});

test('update manager detects prisma provider-switch lock mismatch', () => {
  const message = `
Error: P3019

The datasource provider \`postgresql\` specified in your schema does not match the one specified in the migration_lock.toml, \`sqlite\`.
`;

  assert.equal(canSkipPrismaMigrateForProviderSwitch(message), true);
});

test('buildIdempotentTenantPatch converts CREATE TABLE to IF NOT EXISTS', () => {
  const sql = `
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
`.trim();

  const result = buildIdempotentTenantPatch(sql);
  assert.ok(result.includes('CREATE TABLE IF NOT EXISTS "Users"'), 'should have IF NOT EXISTS on CREATE TABLE');
  assert.ok(!result.includes('CONSTRAINT "Users_pkey"'), 'should drop CONSTRAINT lines (handled at creation)');
});

test('buildIdempotentTenantPatch converts CREATE INDEX and CREATE UNIQUE INDEX to IF NOT EXISTS', () => {
  const sql = `
CREATE UNIQUE INDEX "Businesses_subdomain_key" ON "Businesses"("subdomain");
CREATE INDEX "TelegramAuthRequests_code_idx" ON "TelegramAuthRequests"("code");
`.trim();

  const result = buildIdempotentTenantPatch(sql);
  assert.ok(result.includes('CREATE UNIQUE INDEX IF NOT EXISTS'), 'should add IF NOT EXISTS on UNIQUE INDEX');
  assert.ok(result.includes('CREATE INDEX IF NOT EXISTS'), 'should add IF NOT EXISTS on INDEX');
});

test('buildIdempotentTenantPatch wraps CREATE TYPE with existence check', () => {
  const sql = `CREATE TYPE "BarberRole" AS ENUM ('owner', 'staff');`;

  const result = buildIdempotentTenantPatch(sql);
  assert.ok(result.includes('DO $$'), 'should wrap enum in DO block');
  assert.ok(result.includes('pg_type'), 'should check pg_type for existence');
});

test('buildIdempotentTenantPatch skips AddForeignKey blocks', () => {
  const sql = `
-- AddForeignKey
ALTER TABLE "Barbers" ADD CONSTRAINT "Barbers_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
`.trim();

  const result = buildIdempotentTenantPatch(sql);
  assert.ok(!result.includes('ADD CONSTRAINT'), 'should skip AddForeignKey ALTER TABLE statements');
  assert.ok(!result.includes('REFERENCES'), 'should skip REFERENCES in skipped blocks');
});

