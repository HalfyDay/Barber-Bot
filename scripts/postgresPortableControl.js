#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const { spawnSync } = require("child_process");

const {
  buildPgCtlArgs,
  buildPgIsReadyArgs,
  resolvePortableConfig,
} = require("./lib/postgresPortableRuntime");

const usage =
  'Usage: node scripts/postgresPortableControl.js <status|start|stop> [--port 54329] [--data-dir path] [--home path]';

const describePgIsReadyStatus = (status, rawOutput) => {
  if (status === 0) {
    return {
      message: "accepting connections",
      rawMessage: rawOutput || null,
    };
  }

  return {
    message: "no response",
    rawMessage: rawOutput || null,
  };
};

const normalizePath = (value) =>
  String(value || "")
    .replace(/\\/g, "/")
    .replace(/\/+$/, "")
    .toLowerCase();

const parseCliArgs = (argv = process.argv.slice(2)) => {
  const [action, ...rest] = argv;
  const options = {};
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    const next = rest[index + 1];
    if (token === "--port" && next) {
      options.POSTGRES_PORTABLE_PORT = next;
      index += 1;
      continue;
    }
    if (token === "--data-dir" && next) {
      options.POSTGRES_PORTABLE_DATA_DIR = next;
      index += 1;
      continue;
    }
    if (token === "--home" && next) {
      options.POSTGRES_PORTABLE_HOME = next;
      index += 1;
      continue;
    }
  }
  return { action, options };
};

const runPgIsReady = (config) =>
  spawnSync(config.pgIsReadyPath, buildPgIsReadyArgs({ port: config.port }), {
    stdio: "pipe",
    encoding: "utf8",
  });

const runPowerShellJson = (script) => {
  const result = spawnSync(
    "powershell",
    ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", script],
    {
      stdio: "pipe",
      encoding: "utf8",
      shell: false,
    },
  );
  if (result.status !== 0) {
    return [];
  }
  const stdout = String(result.stdout || "").trim();
  if (!stdout) return [];
  try {
    const parsed = JSON.parse(stdout);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
};

const escapePowerShellString = (value) => String(value || "").replace(/'/g, "''");

const listPortablePostgresProcesses = (config) => {
  if (process.platform !== "win32") return [];

  const escapedRoot = escapePowerShellString(normalizePath(config.postgresRoot || config.portableHome));
  const script = [
    `$root = '${escapedRoot}'`,
    `Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |`,
    `Where-Object {`,
    `  $_.Name -in @('postgres.exe', 'pg_ctl.exe') -and`,
    `  $_.CommandLine -and`,
    `  $_.CommandLine.ToLower().Replace('\\\\','/') -like "*$root*"` ,
    `} |`,
    `Select-Object ProcessId, Name, CommandLine |`,
    `ConvertTo-Json -Compress`,
  ].join(" ");

  return runPowerShellJson(script)
    .map((entry) => ({
      pid: Number(entry.ProcessId),
      name: String(entry.Name || ""),
      commandLine: String(entry.CommandLine || ""),
    }))
    .filter((entry) => Number.isInteger(entry.pid) && entry.pid > 0);
};

const cleanupPortablePostgresProcesses = (config) => {
  const processes = listPortablePostgresProcesses(config);
  if (processes.length === 0) {
    return { cleaned: false, count: 0, processes: [] };
  }

  for (const entry of processes) {
    spawnSync("taskkill", ["/PID", String(entry.pid), "/T", "/F"], {
      stdio: "ignore",
      shell: false,
    });
  }

  return { cleaned: true, count: processes.length, processes };
};

const parsePostmasterPid = (dataDir) => {
  const pidFile = `${dataDir}\\postmaster.pid`;
  if (!fs.existsSync(pidFile)) return null;

  const lines = fs
    .readFileSync(pidFile, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;
  const pid = Number(lines[0]);
  return {
    pidFile,
    pid: Number.isFinite(pid) ? pid : null,
    dataDir: lines[1] || null,
  };
};

const isProcessAlive = (pid) => {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
};

const cleanupStalePidIfNeeded = (config, { runPgIsReadyImpl = runPgIsReady } = {}) => {
  const pidInfo = parsePostmasterPid(config.dataDir);
  if (!pidInfo) return { cleaned: false, reason: "missing_pid_file" };

  const pgIsReadyResult = runPgIsReadyImpl(config);
  if (pgIsReadyResult.status === 0) {
    return { cleaned: false, reason: "server_accepts_connections" };
  }

  const currentDataDir = normalizePath(config.dataDir);
  const pidDataDir = normalizePath(pidInfo.dataDir);
  const sameDataDir = currentDataDir && pidDataDir && currentDataDir === pidDataDir;
  const alive = isProcessAlive(pidInfo.pid);

  if (alive && sameDataDir) {
    return { cleaned: false, reason: "live_process_for_same_data_dir" };
  }

  fs.rmSync(pidInfo.pidFile, { force: true });
  return {
    cleaned: true,
    reason: alive ? "data_dir_mismatch" : "stale_pid",
    pidFile: pidInfo.pidFile,
  };
};

const runStatus = (config) => {
  if (!config.pgIsReadyPath) {
    throw new Error(`Portable PostgreSQL binaries not found in ${config.portableHome}`);
  }
  const result = runPgIsReady(config);
  const output = [result.stdout, result.stderr].filter(Boolean).join("").trim();
  const acceptingConnections = result.status === 0;
  const statusInfo = describePgIsReadyStatus(result.status, output);
  console.log(
    JSON.stringify(
      {
        ok: acceptingConnections,
        port: config.port,
        dataDir: config.dataDir,
        portableHome: config.portableHome,
        postgresRoot: config.postgresRoot,
        message: statusInfo.message,
        rawMessage: statusInfo.rawMessage,
      },
      null,
      2,
    ),
  );
  process.exit(acceptingConnections ? 0 : 1);
};

const runPgCtl = (config, action) => {
  if (!config.pgCtlPath) {
    throw new Error(`Portable PostgreSQL binaries not found in ${config.portableHome}`);
  }
  if (action === "start") {
    const cleanup = cleanupStalePidIfNeeded(config);
    if (cleanup.cleaned) {
      console.log(`[postgres-portable] Removed stale lock file: ${cleanup.pidFile}`);
    }
    const readyResult = runPgIsReady(config);
    if (readyResult.status !== 0) {
      const processCleanup = cleanupPortablePostgresProcesses(config);
      if (processCleanup.cleaned) {
        console.log(
          `[postgres-portable] Stopped lingering PostgreSQL processes: ${processCleanup.processes
            .map((entry) => entry.pid)
            .join(", ")}`,
        );
      }
    }
    fs.mkdirSync(config.logsDir, { recursive: true });
    try {
      fs.rmSync(config.logFile, { force: true });
    } catch {}
    fs.closeSync(fs.openSync(config.logFile, "a"));
  }
  if (action === "stop") {
    const readyResult = runPgIsReady(config);
    if (readyResult.status !== 0) {
      const cleanup = cleanupStalePidIfNeeded(config);
      if (cleanup.cleaned) {
        console.log(`[postgres-portable] Removed stale lock file: ${cleanup.pidFile}`);
      }
      console.log("[postgres-portable] Server is already stopped.");
      return;
    }
  }
  const pgCtlArgs = buildPgCtlArgs({
    action,
    dataDir: config.dataDir,
    logFile: config.logFile,
    port: config.port,
  });
  let result = spawnSync(config.pgCtlPath, pgCtlArgs, {
    stdio: "inherit",
    shell: false,
  });
  if (action === "start" && result.status !== 0) {
    const logOutput = fs.existsSync(config.logFile) ? fs.readFileSync(config.logFile, "utf8") : "";
    if (/pre-existing shared memory block is still in use/i.test(logOutput)) {
      const processCleanup = cleanupPortablePostgresProcesses(config);
      if (processCleanup.cleaned) {
        console.log(
          `[postgres-portable] Retrying start after stopping lingering PostgreSQL processes: ${processCleanup.processes
            .map((entry) => entry.pid)
            .join(", ")}`,
        );
        result = spawnSync(config.pgCtlPath, pgCtlArgs, {
          stdio: "inherit",
          shell: false,
        });
      }
    }
  }
  if (result.status !== 0) {
    if (action === "stop") {
      const readyResult = runPgIsReady(config);
      if (readyResult.status !== 0) {
        const cleanup = cleanupStalePidIfNeeded(config);
        if (cleanup.cleaned) {
          console.log(`[postgres-portable] Removed stale lock file: ${cleanup.pidFile}`);
        }
        console.log("[postgres-portable] Server is already stopped.");
        return;
      }
    }
    process.exit(result.status || 1);
  }
};

const main = () => {
  const { action, options } = parseCliArgs();
  if (!action || !["status", "start", "stop"].includes(action)) {
    throw new Error(usage);
  }
  const env = { ...process.env, ...options };
  const config = resolvePortableConfig({ env });
  if (action === "status") {
    runStatus(config);
    return;
  }
  runPgCtl(config, action);
};

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error?.message || error);
    process.exit(1);
  }
}

module.exports = {
  cleanupPortablePostgresProcesses,
  cleanupStalePidIfNeeded,
  describePgIsReadyStatus,
  listPortablePostgresProcesses,
  normalizePath,
  parsePostmasterPid,
  parseCliArgs,
};
