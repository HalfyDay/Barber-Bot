const test = require('node:test');
const assert = require('node:assert/strict');

const {
  describeUpdateError,
  resolvePostgresDumpPath,
  stripPostgresSchemaQuery,
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
