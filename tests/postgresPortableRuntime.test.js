const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  DEFAULT_PORTABLE_PORT,
  buildPgCtlArgs,
  buildPgIsReadyArgs,
  findPostgresRoot,
  resolvePortableConfig,
} = require("../scripts/lib/postgresPortableRuntime");
const {
  cleanupStalePidIfNeeded,
  describePgIsReadyStatus,
  normalizePath,
  parseCliArgs,
  parsePostmasterPid,
} = require("../scripts/postgresPortableControl");

test("postgres portable runtime resolves project-local defaults", () => {
  const config = resolvePortableConfig({
    env: {},
    fsImpl: { existsSync: () => false },
    pathImpl: path,
    platform: "win32",
  });

  assert.match(config.portableHome, /[\\/]\.local[\\/]postgresql-portable$/);
  assert.equal(config.port, DEFAULT_PORTABLE_PORT);
  assert.equal(config.exists, false);
});

test("postgres portable runtime finds versioned pgsql root", () => {
  const fsImpl = {
    existsSync(target) {
      return (
        target === "D:\\project\\.local\\postgresql-portable" ||
        /pgsql-17\.9\.2[\\/]pgsql[\\/]bin[\\/]pg_ctl\.exe$/i.test(target)
      );
    },
    readdirSync() {
      return [{ isDirectory: () => true, name: "pgsql-17.9.2" }];
    },
  };

  const root = findPostgresRoot({
    portableHome: "D:\\project\\.local\\postgresql-portable",
    fsImpl,
    pathImpl: path.win32,
    platform: "win32",
  });

  assert.equal(root, "D:\\project\\.local\\postgresql-portable\\pgsql-17.9.2\\pgsql");
});

test("postgres portable runtime builds pg_ctl args for start", () => {
  assert.deepEqual(
    buildPgCtlArgs({
      action: "start",
      dataDir: "D:\\data-smoke",
      logFile: "D:\\data-smoke\\server.log",
      port: 54329,
    }),
    ["-D", "D:\\data-smoke", "-l", "D:\\data-smoke\\server.log", "-o", "\"-p 54329\"", "start"],
  );
});

test("postgres portable runtime builds pg_isready args", () => {
  assert.deepEqual(buildPgIsReadyArgs({ port: 54329 }), [
    "-h",
    "127.0.0.1",
    "-p",
    "54329",
    "-U",
    "postgres",
  ]);
});

test("postgres portable control parses cli overrides", () => {
  const parsed = parseCliArgs(["start", "--port", "55432", "--home", "D:\\pg", "--data-dir", "D:\\pg\\data"]);

  assert.equal(parsed.action, "start");
  assert.deepEqual(parsed.options, {
    POSTGRES_PORTABLE_PORT: "55432",
    POSTGRES_PORTABLE_HOME: "D:\\pg",
    POSTGRES_PORTABLE_DATA_DIR: "D:\\pg\\data",
  });
});

test("postgres portable control parses postmaster pid payload", () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "portable-pg-pid-"));
  const pidFile = path.join(tmpDir, "postmaster.pid");
  const payload = ["999999", "D:/Download/1BS/postgresql-portable/data-smoke", "1773754251", "54329"].join("\n");
  fs.writeFileSync(pidFile, payload, "utf8");

  assert.deepEqual(parsePostmasterPid(tmpDir), {
    pidFile,
    pid: 999999,
    dataDir: "D:/Download/1BS/postgresql-portable/data-smoke",
  });
});

test("postgres portable control normalizes path separators and casing", () => {
  assert.equal(normalizePath("D:\\Works\\Barber Bot\\.local\\postgresql-portable\\"), "d:/works/barber bot/.local/postgresql-portable");
});

test("postgres portable control maps pg_isready status to stable message", () => {
  assert.deepEqual(describePgIsReadyStatus(0, "127.0.0.1:54329 - принимает подключения"), {
    message: "accepting connections",
    rawMessage: "127.0.0.1:54329 - принимает подключения",
  });

  assert.deepEqual(describePgIsReadyStatus(1, "127.0.0.1:54329 - нет ответа"), {
    message: "no response",
    rawMessage: "127.0.0.1:54329 - нет ответа",
  });
});

test("postgres portable control removes stale pid when copied data dir points to old location", () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "portable-pg-cleanup-"));
  const pidFile = path.join(tmpDir, "postmaster.pid");
  fs.writeFileSync(
    pidFile,
    ["999999", "D:/Download/1BS/postgresql-portable/data-smoke", "1773754251", "54329"].join("\n"),
    "utf8",
  );

  const cleanup = cleanupStalePidIfNeeded({
    dataDir: tmpDir,
    port: 54329,
    pgIsReadyPath: process.execPath,
  }, {
    runPgIsReadyImpl: () => ({ status: 1 }),
  });

  assert.equal(cleanup.cleaned, true);
  assert.equal(cleanup.reason, "stale_pid");
  assert.equal(fs.existsSync(pidFile), false);
});
