const { spawn } = require("child_process");

const { resolvePortableConfig } = require("../scripts/lib/postgresPortableRuntime");

const SQL_BACKUP_RE = /\.sql$/i;
const SQLITE_BACKUP_RE = /\.db$/i;

const isBackupFileName = (fileName = "") => SQL_BACKUP_RE.test(fileName) || SQLITE_BACKUP_RE.test(fileName);
const parseBackupTimestamp = (fileName = "") => {
  const match = String(fileName || "").match(/backup(?:-pre-update)?-(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})(?:-(\d{3}))?/i);
  if (!match) return 0;
  const [, datePart, hours, minutes, seconds, milliseconds = "000"] = match;
  const parsed = new Date(`${datePart}T${hours}:${minutes}:${seconds}.${milliseconds}Z`);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
};

const stripPostgresSchemaQuery = (databaseUrl = "") => {
  const raw = String(databaseUrl || "").trim();
  if (!raw) return raw;
  return raw.replace(/\?schema=public$/i, "");
};

const quoteShellValue = (value) => {
  const safe = String(value || "");
  return `"${safe.replace(/"/g, '\\"')}"`;
};

const buildCommandError = (command, args, stderr, stdout, code) =>
  new Error(`${command} ${args.join(" ")} >> ${stderr || stdout || `exit ${code}`}`);

const createBackupService = ({
  fs,
  path,
  BACKUP_DIR,
  DB_PATH = null,
  prisma,
  runtimeConfig,
  env = process.env,
  spawnImpl = spawn,
  resolvePortableConfigImpl = resolvePortableConfig,
}) => {
  const runtime = runtimeConfig?.runtime === "sqlite" ? "sqlite" : "postgres";

  const runSpawnedCommand = (command, args) =>
    new Promise((resolve, reject) => {
      const child = spawnImpl(command, args, {
        cwd: path.join(__dirname, ".."),
        env,
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true,
      });
      let stdout = "";
      let stderr = "";
      child.stdout.on("data", (chunk) => {
        stdout += chunk.toString();
      });
      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
      });
      child.on("error", reject);
      child.on("close", (code) => {
        if (code === 0) {
          resolve({ stdout, stderr });
          return;
        }
        reject(buildCommandError(command, args, stderr, stdout, code));
      });
    });

  const resolvePostgresExecutablePath = (baseName) => {
    const explicitEnvName = baseName === "pg_dump" ? "POSTGRES_PG_DUMP_PATH" : "POSTGRES_PSQL_PATH";
    const configured = (env[explicitEnvName] || "").toString().trim();
    if (configured) return configured;

    const portableConfig = resolvePortableConfigImpl({ env });
    if (!portableConfig?.binDir) return null;

    const executable = process.platform === "win32" ? `${baseName}.exe` : baseName;
    const candidate = path.join(portableConfig.binDir, executable);
    return fs.existsSync(candidate) ? candidate : null;
  };

  const getPostgresDatabaseUrl = () => {
    const databaseUrl =
      runtimeConfig?.databaseUrlEnv && env[runtimeConfig.databaseUrlEnv]
        ? env[runtimeConfig.databaseUrlEnv]
        : env.POSTGRES_DATABASE_URL || env.DATABASE_URL || "";
    return String(databaseUrl || "").trim();
  };

  const ensureBackupDir = async () => {
    await fs.ensureDir(BACKUP_DIR);
  };

  const listBackups = async () => {
    await ensureBackupDir();
    const files = await fs.readdir(BACKUP_DIR);
    return files
      .filter(isBackupFileName)
      .sort((left, right) => {
        const timestampDiff = parseBackupTimestamp(right) - parseBackupTimestamp(left);
        if (timestampDiff !== 0) return timestampDiff;
        return right.localeCompare(left);
      });
  };

  const createSqliteBackup = async (timestamp) => {
    if (!DB_PATH) {
      throw new Error("SQLite backup path is not configured.");
    }
    const target = path.join(BACKUP_DIR, `backup-${timestamp}.db`);
    await fs.copyFile(DB_PATH, target);
    return target;
  };

  const createPostgresBackup = async (timestamp) => {
    const databaseUrl = getPostgresDatabaseUrl();
    if (!databaseUrl) {
      throw new Error("POSTGRES_DATABASE_URL is required for PostgreSQL backups.");
    }
    const cliDatabaseUrl = stripPostgresSchemaQuery(databaseUrl);
    const pgDumpPath = resolvePostgresExecutablePath("pg_dump");
    if (!pgDumpPath) {
      throw new Error("pg_dump not found for PostgreSQL backup.");
    }
    const target = path.join(BACKUP_DIR, `backup-${timestamp}.sql`);
    await runSpawnedCommand(pgDumpPath, [
      "--clean",
      "--if-exists",
      "--no-owner",
      "--no-privileges",
      "--file",
      target,
      cliDatabaseUrl,
    ]);
    return target;
  };

  const createBackup = async () => {
    await ensureBackupDir();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    if (runtime === "postgres") {
      return createPostgresBackup(timestamp);
    }
    return createSqliteBackup(timestamp);
  };

  const restoreSqliteBackup = async (backupPath) => {
    if (!DB_PATH) {
      throw new Error("SQLite backup path is not configured.");
    }
    await prisma.$disconnect();
    await fs.copyFile(backupPath, DB_PATH);
    return {
      restored: true,
      format: "sqlite",
      command: null,
    };
  };

  const restorePostgresBackup = async (backupPath) => {
    if (!SQL_BACKUP_RE.test(backupPath)) {
      throw new Error("Для PostgreSQL можно восстановить только SQL-дамп (.sql).");
    }
    const databaseUrl = getPostgresDatabaseUrl();
    if (!databaseUrl) {
      throw new Error("POSTGRES_DATABASE_URL is required for PostgreSQL restore.");
    }
    const cliDatabaseUrl = stripPostgresSchemaQuery(databaseUrl);
    const psqlPath = resolvePostgresExecutablePath("psql");
    if (!psqlPath) {
      throw new Error("psql not found for PostgreSQL restore.");
    }
    await prisma.$disconnect();
    await runSpawnedCommand(psqlPath, [
      "-v",
      "ON_ERROR_STOP=1",
      "-d",
      cliDatabaseUrl,
      "-f",
      backupPath,
    ]);
    return {
      restored: true,
      format: "postgres",
      command: `${quoteShellValue(psqlPath)} -v ON_ERROR_STOP=1 -d ${quoteShellValue(cliDatabaseUrl)} -f ${quoteShellValue(backupPath)}`,
    };
  };

  const restoreBackup = async (filename) => {
    const safeName = path.basename(String(filename || ""));
    if (!safeName) {
      throw new Error("Не указано имя файла бэкапа.");
    }
    const backupPath = path.join(BACKUP_DIR, safeName);
    if (!(await fs.pathExists(backupPath))) {
      throw new Error("BACKUP_NOT_FOUND");
    }
    if (runtime === "postgres") {
      return restorePostgresBackup(backupPath);
    }
    return restoreSqliteBackup(backupPath);
  };

  return {
    createBackup,
    listBackups,
    restoreBackup,
  };
};

module.exports = {
  createBackupService,
};
