const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

const { createBackupService } = require("../services/backupService");

test("backup service lists sql and sqlite backups in reverse order", async () => {
  const service = createBackupService({
    fs: {
      async ensureDir() {},
      async readdir() {
        return ["note.txt", "backup-b.db", "backup-c.sql", "backup-a.db"];
      },
      existsSync() {
        return false;
      },
    },
    path,
    BACKUP_DIR: "D:\\backups",
    DB_PATH: "D:\\db.sqlite",
    prisma: {
      async $disconnect() {},
    },
    runtimeConfig: { runtime: "postgres", databaseUrlEnv: "POSTGRES_DATABASE_URL" },
  });

  const backups = await service.listBackups();

  assert.deepEqual(backups, ["backup-c.sql", "backup-b.db", "backup-a.db"]);
});

test("backup service copies sqlite database into timestamped file", async () => {
  const copies = [];
  const service = createBackupService({
    fs: {
      async ensureDir() {},
      async copyFile(from, to) {
        copies.push({ from, to });
      },
      existsSync() {
        return false;
      },
    },
    path,
    BACKUP_DIR: "D:\\backups",
    DB_PATH: "D:\\db.sqlite",
    prisma: {
      async $disconnect() {},
    },
    runtimeConfig: { runtime: "sqlite", databaseUrlEnv: "DATABASE_URL" },
  });

  const backupPath = await service.createBackup();

  assert.equal(copies.length, 1);
  assert.equal(copies[0].from, "D:\\db.sqlite");
  assert.equal(copies[0].to, backupPath);
  assert.match(backupPath, /backup-.*\.db$/);
});

test("backup service creates postgres sql dump through pg_dump", async () => {
  const calls = [];
  const service = createBackupService({
    fs: {
      async ensureDir() {},
      existsSync(targetPath) {
        return targetPath.endsWith("pg_dump.exe");
      },
    },
    path,
    BACKUP_DIR: "D:\\backups",
    DB_PATH: "D:\\db.sqlite",
    prisma: {
      async $disconnect() {},
    },
    runtimeConfig: { runtime: "postgres", databaseUrlEnv: "POSTGRES_DATABASE_URL" },
    env: {
      POSTGRES_DATABASE_URL: "postgresql://postgres@127.0.0.1:54329/barber_bot?schema=public",
    },
    resolvePortableConfigImpl: () => ({
      binDir: "D:\\pg\\bin",
    }),
    spawnImpl(command, args) {
      calls.push({ command, args });
      return {
        stdout: { on() {} },
        stderr: { on() {} },
        on(event, handler) {
          if (event === "close") {
            handler(0);
          }
        },
      };
    },
  });

  const backupPath = await service.createBackup();

  assert.match(backupPath, /backup-.*\.sql$/);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].command, "D:\\pg\\bin\\pg_dump.exe");
  assert.deepEqual(calls[0].args.slice(0, 6), [
    "--clean",
    "--if-exists",
    "--no-owner",
    "--no-privileges",
    "--file",
    backupPath,
  ]);
});

test("backup service restores postgres sql dump through psql", async () => {
  const calls = [];
  const service = createBackupService({
    fs: {
      async ensureDir() {},
      async pathExists(targetPath) {
        return targetPath === path.join("D:\\backups", "backup.sql");
      },
      existsSync(targetPath) {
        return targetPath.endsWith("psql.exe");
      },
    },
    path,
    BACKUP_DIR: "D:\\backups",
    DB_PATH: "D:\\db.sqlite",
    prisma: {
      async $disconnect() {
        calls.push("disconnect");
      },
    },
    runtimeConfig: { runtime: "postgres", databaseUrlEnv: "POSTGRES_DATABASE_URL" },
    env: {
      POSTGRES_DATABASE_URL: "postgresql://postgres@127.0.0.1:54329/barber_bot?schema=public",
    },
    resolvePortableConfigImpl: () => ({
      binDir: "D:\\pg\\bin",
    }),
    spawnImpl(command, args) {
      calls.push({ command, args });
      return {
        stdout: { on() {} },
        stderr: { on() {} },
        on(event, handler) {
          if (event === "close") {
            handler(0);
          }
        },
      };
    },
  });

  const result = await service.restoreBackup("backup.sql");

  assert.equal(result.format, "postgres");
  assert.deepEqual(calls, [
    "disconnect",
    {
      command: "D:\\pg\\bin\\psql.exe",
      args: [
        "-v",
        "ON_ERROR_STOP=1",
        "-d",
        "postgresql://postgres@127.0.0.1:54329/barber_bot?schema=public",
        "-f",
        path.join("D:\\backups", "backup.sql"),
      ],
    },
  ]);
});
