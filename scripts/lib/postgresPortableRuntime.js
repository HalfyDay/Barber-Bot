const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..", "..");
const DEFAULT_PORTABLE_HOME = path.join(PROJECT_ROOT, ".local", "postgresql-portable");
const DEFAULT_PORTABLE_PORT = 54329;

const resolvePortableHome = (env = process.env) =>
  path.resolve(env.POSTGRES_PORTABLE_HOME || DEFAULT_PORTABLE_HOME);

const getExecutableName = (baseName, platform = process.platform) =>
  platform === "win32" ? `${baseName}.exe` : baseName;

const findPostgresRoot = ({
  portableHome,
  fsImpl = fs,
  pathImpl = path,
  platform = process.platform,
}) => {
  const directRoot = pathImpl.join(portableHome, "pgsql");
  const directCtl = pathImpl.join(directRoot, "bin", getExecutableName("pg_ctl", platform));
  if (fsImpl.existsSync(directCtl)) {
    return directRoot;
  }

  if (!fsImpl.existsSync(portableHome)) return null;
  const candidates = fsImpl
    .readdirSync(portableHome, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^pgsql-/i.test(entry.name))
    .map((entry) => pathImpl.join(portableHome, entry.name, "pgsql"))
    .filter((candidate) =>
      fsImpl.existsSync(pathImpl.join(candidate, "bin", getExecutableName("pg_ctl", platform))),
    )
    .sort();

  return candidates.at(-1) || null;
};

const resolvePortableConfig = ({
  env = process.env,
  fsImpl = fs,
  pathImpl = path,
  platform = process.platform,
} = {}) => {
  const portableHome = resolvePortableHome(env);
  const postgresRoot = findPostgresRoot({ portableHome, fsImpl, pathImpl, platform });
  const dataDir = pathImpl.resolve(
    env.POSTGRES_PORTABLE_DATA_DIR || pathImpl.join(portableHome, "data-smoke"),
  );
  const port = Number(env.POSTGRES_PORTABLE_PORT || DEFAULT_PORTABLE_PORT);
  const logsDir = pathImpl.join(portableHome, "logs");
  const logFile = pathImpl.join(logsDir, `${pathImpl.basename(dataDir)}.log`);
  const binDir = postgresRoot ? pathImpl.join(postgresRoot, "bin") : null;
  const pgCtlPath = binDir ? pathImpl.join(binDir, getExecutableName("pg_ctl", platform)) : null;
  const pgIsReadyPath = binDir
    ? pathImpl.join(binDir, getExecutableName("pg_isready", platform))
    : null;

  return {
    portableHome,
    postgresRoot,
    dataDir,
    port,
    logsDir,
    logFile,
    binDir,
    pgCtlPath,
    pgIsReadyPath,
    exists:
      Boolean(postgresRoot) &&
      Boolean(pgCtlPath) &&
      fsImpl.existsSync(pgCtlPath) &&
      fsImpl.existsSync(dataDir),
  };
};

const buildPgCtlArgs = ({ action, dataDir, logFile, port }) => {
  const args = ["-D", dataDir];
  if (action === "start" && logFile) {
    args.push("-l", logFile, "-o", `"-p ${port}"`);
  }
  args.push(action);
  return args;
};

const buildPgIsReadyArgs = ({ port }) => ["-h", "127.0.0.1", "-p", String(port), "-U", "postgres"];

module.exports = {
  DEFAULT_PORTABLE_HOME,
  DEFAULT_PORTABLE_PORT,
  buildPgCtlArgs,
  buildPgIsReadyArgs,
  findPostgresRoot,
  getExecutableName,
  resolvePortableConfig,
  resolvePortableHome,
};
