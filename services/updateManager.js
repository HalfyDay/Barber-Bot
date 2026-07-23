const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');
const { Client } = require('pg');
const { getPrismaRuntimeConfig } = require('./prismaRuntime');
const { resolvePortableConfig } = require('../scripts/lib/postgresPortableRuntime');
const PROJECT_ROOT = path.join(__dirname, '..');
const TENANT_TEMPLATE_PATH = path.join(PROJECT_ROOT, 'prisma', 'tenant_template.sql');
const PACKAGE_PATH = path.join(PROJECT_ROOT, 'package.json');

const fetch =
  globalThis.fetch ||
  ((...args) => import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args)));

const UPDATE_REPO = process.env.UPDATE_REPO || 'HalfyDay/BrotherShop';
const UPDATE_BRANCH = process.env.UPDATE_BRANCH || 'main';
const UPDATE_REMOTE = process.env.UPDATE_REMOTE || 'origin';
const UPDATE_CACHE_SECONDS = Number(process.env.UPDATE_CACHE_SECONDS || 600);
const UPDATE_GITHUB_TOKEN = process.env.UPDATE_GITHUB_TOKEN || process.env.GITHUB_TOKEN || '';
const UPDATE_COMMAND_MAX_BUFFER_BYTES =
  Number(process.env.UPDATE_COMMAND_MAX_BUFFER_BYTES) || 10 * 1024 * 1024;
const PRISMA_RUNTIME_CONFIG = getPrismaRuntimeConfig(process.env);
const { schemaPath: PRISMA_SCHEMA_PATH } = PRISMA_RUNTIME_CONFIG;
const BACKUP_DIR = path.join(PROJECT_ROOT, 'backups');
const RUNTIME_IMAGE_ROOT = 'Image';
const WEB_BUILD_OUTPUTS = [
  path.join(PROJECT_ROOT, 'script.bundle.js'),
  path.join(PROJECT_ROOT, 'styles.css'),
];
const PRISMA_SCHEMA_RELATIVE_PATH = path
  .relative(PROJECT_ROOT, PRISMA_SCHEMA_PATH)
  .split(path.sep)
  .join('/');
const MIGRATION_REMOVE_HOME_DISPLAY_NAME = '20260227193000_remove_home_display_name';

let cachedUpdate = null;

const POSTGRES_STORAGE_ERROR_RE =
  /connection terminated unexpectedly|the database system is starting up|too many clients already|could not connect to server|remaining connection slots are reserved|terminating connection due to administrator command|connection refused|econnrefused/i;

const isPostgresStorageError = (error) =>
  POSTGRES_STORAGE_ERROR_RE.test(String(error?.message || error || ''));

const buildPostgresStorageErrorMessage = () =>
  'PostgreSQL недоступна или повреждена. Проверьте подключение к базе и восстановите её из резервной копии при необходимости.';

const describeUpdateError = (error) => {
  const baseMessage = String(error?.message || error || 'Unknown error').trim();
  const causeCode = error?.cause?.code ? ` (${error.cause.code})` : '';
  const causeHost = error?.cause?.host ? ` [${error.cause.host}]` : '';
  return `${baseMessage}${causeCode}${causeHost}`;
};

const quoteShellValue = (value) => {
  const safe = String(value || '');
  return `"${safe.replace(/"/g, '\\"')}"`;
};

const stripPostgresSchemaQuery = (databaseUrl = '') => {
  const raw = String(databaseUrl || '').trim();
  if (!raw) return raw;
  return raw.replace(/\?schema=public$/i, '');
};

const resolvePostgresDumpPath = (env = process.env) => {
  const configured = (env.POSTGRES_PG_DUMP_PATH || '').toString().trim();
  if (configured) return configured;
  const portableConfig = resolvePortableConfig({ env });
  if (!portableConfig?.binDir) return null;
  const executable = process.platform === 'win32' ? 'pg_dump.exe' : 'pg_dump';
  const candidate = path.join(portableConfig.binDir, executable);
  return fs.existsSync(candidate) ? candidate : null;
};

const runSpawnedCommand = (command, args, { env = process.env, cwd = PROJECT_ROOT } = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      env,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
        return;
      }
      reject(new Error(`${command} ${args.join(' ')} >> ${stderr || stdout || `exit ${code}`}`));
    });
  });

const resolveUpdateNpmInstallCommand = () => {
  const configured = (process.env.UPDATE_NPM_INSTALL_COMMAND || 'npm ci').trim();
  const normalized = configured.toLowerCase();
  const looksLikeNpmInstall =
    normalized === 'npm ci' ||
    normalized === 'npm install' ||
    normalized.startsWith('npm ci ') ||
    normalized.startsWith('npm install ');
  const hasExplicitDependencyMode =
    /(^|\s)--include(=|\s)|(^|\s)--omit(=|\s)|(^|\s)--only(=|\s)/i.test(configured);
  if (looksLikeNpmInstall && !hasExplicitDependencyMode) {
    return `${configured} --include=dev`;
  }
  return configured;
};

const createPreUpdateBackup = async () => {
  await fs.promises.mkdir(BACKUP_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  if (PRISMA_RUNTIME_CONFIG.runtime === 'postgres') {
    const databaseUrl = process.env.POSTGRES_DATABASE_URL;
    if (!databaseUrl) {
      console.warn('[update] POSTGRES_DATABASE_URL is not set, skipping pre-update backup');
      return null;
    }
    const cliDatabaseUrl = stripPostgresSchemaQuery(databaseUrl);
    const pgDumpPath = resolvePostgresDumpPath(process.env);
    if (!pgDumpPath) {
      console.warn('[update] pg_dump not found for PostgreSQL runtime, skipping pre-update backup');
      return null;
    }
    const target = path.join(BACKUP_DIR, `backup-pre-update-${timestamp}.sql`);
    const shellCommand = `${quoteShellValue(pgDumpPath)} --clean --if-exists --no-owner --no-privileges --file ${quoteShellValue(target)} ${quoteShellValue(cliDatabaseUrl)}`;
    await runSpawnedCommand(pgDumpPath, [
      '--clean',
      '--if-exists',
      '--no-owner',
      '--no-privileges',
      '--file',
      target,
      cliDatabaseUrl,
    ]);
    console.log(`[update] Created pre-update PostgreSQL backup: ${path.relative(PROJECT_ROOT, target)}`);
    console.log(`[update] pg_dump command: ${shellCommand}`);
    return target;
  }

  console.warn('[update] non-PostgreSQL runtime backup is no longer supported for the application');
  return null;
};

const getWorkingTreeStatus = async () => {
  try {
    const { stdout } = await runCommand('git status --porcelain');
    return stdout.trim();
  } catch (error) {
    console.warn('[update] git status failed:', error.message);
    return '';
  }
};

const listUntrackedRuntimeAssets = async () => {
  try {
    const { stdout } = await runCommand(`git ls-files --others --exclude-standard -- ${RUNTIME_IMAGE_ROOT}`);
    return String(stdout || '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.endsWith('/'));
  } catch (error) {
    console.warn('[update] Failed to list untracked runtime assets:', error.message);
    return [];
  }
};

const backupRuntimeAssetsBeforeUpdate = async () => {
  const files = await listUntrackedRuntimeAssets();
  if (!files.length) return null;
  await fs.promises.mkdir(BACKUP_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const targetDir = path.join(BACKUP_DIR, `runtime-assets-pre-update-${stamp}`);
  await fs.promises.mkdir(targetDir, { recursive: true });
  const copiedFiles = [];
  for (const relativeFile of files) {
    const sourcePath = path.join(PROJECT_ROOT, relativeFile);
    if (!fs.existsSync(sourcePath)) continue;
    const backupPath = path.join(targetDir, relativeFile);
    await fs.promises.mkdir(path.dirname(backupPath), { recursive: true });
    await fs.promises.copyFile(sourcePath, backupPath);
    copiedFiles.push(relativeFile);
  }
  if (!copiedFiles.length) return null;
  console.log(`[update] Backed up runtime assets: ${copiedFiles.join(', ')}`);
  return { targetDir, files: copiedFiles };
};

const restoreRuntimeAssetsAfterUpdate = async (snapshot) => {
  if (!snapshot?.targetDir || !Array.isArray(snapshot.files) || !snapshot.files.length) return;
  for (const relativeFile of snapshot.files) {
    const backupPath = path.join(snapshot.targetDir, relativeFile);
    const targetPath = path.join(PROJECT_ROOT, relativeFile);
    if (!fs.existsSync(backupPath) || fs.existsSync(targetPath)) continue;
    await fs.promises.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.promises.copyFile(backupPath, targetPath);
    console.log(`[update] Restored runtime asset: ${relativeFile}`);
  }
};

const getLatestStashRef = async () => {
  try {
    const { stdout } = await runCommand('git stash list --format="%gd" -n 1');
    const match = String(stdout || '').trim().match(/stash@\{\d+\}/);
    return match ? match[0] : null;
  } catch (error) {
    console.warn('[update] git stash list failed:', error.message);
    return null;
  }
};

const stashWorkingTree = async () => {
  const status = await getWorkingTreeStatus();
  if (!status) return null;
  console.log('[update] Working tree is dirty, creating stash before pull...');
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const message = `auto-update-${stamp}`;
  const previousTopRef = await getLatestStashRef();
  const resolveCreatedStashRef = async () => {
    const currentTopRef = await getLatestStashRef();
    if (!currentTopRef) return null;
    return currentTopRef !== previousTopRef ? currentTopRef : null;
  };
  const logStashResult = async (mode = 'default') => {
    const ref = await resolveCreatedStashRef();
    const suffix = mode === 'tracked-only' ? ' (tracked files only)' : '';
    console.log(`[update] Stashed changes${ref ? ` as ${ref}` : ''}${suffix}`);
    return ref;
  };
  try {
    await runCommand(`git stash push -u -m "${message}"`);
    return await logStashResult();
  } catch (error) {
    const details = String(error?.message || error || '');
    const canRetryTrackedOnly =
      /cannot save the untracked files/i.test(details) ||
      (/permission denied/i.test(details) && /unable to process path/i.test(details));
    if (canRetryTrackedOnly) {
      console.warn(
        '[update] Stash with untracked files failed, retrying with tracked files only:',
        error.message,
      );
      try {
        await runCommand(`git stash push -m "${message}"`);
        return await logStashResult('tracked-only');
      } catch (fallbackError) {
        console.error('[update] Tracked-only stash also failed:', fallbackError.message);
      }
    }
    console.error('[update] Failed to stash changes:', error.message);
    throw new Error('Не удалось подготовить репозиторий к обновлению (stash).');
  }
};

const popStash = async (stashRef) => {
  if (!stashRef) return;
  try {
    console.log(`[update] Restoring stash ${stashRef}...`);
    await runCommand(`git stash pop ${stashRef}`);
    console.log('[update] Stash restored');
  } catch (error) {
    console.error('[update] Failed to restore stash:', error.message);
  }
};

const normalizeVersion = (value = '') => value.toString().trim().replace(/^v/, '');
const normalizeCommitHash = (value) => {
  const normalized = String(value || '').trim();
  return /^[0-9a-f]{40}$/i.test(normalized) ? normalized.toLowerCase() : null;
};
const versionToTuple = (value) =>
  normalizeVersion(value)
    .split(/\./)
    .map((part) => Number(part.replace(/[^0-9]/g, '')) || 0);
const isSemverish = (value = '') => /^\d+(\.\d+){0,2}$/.test(normalizeVersion(value));
const compareVersions = (current, latest) => {
  const currTuple = versionToTuple(current);
  const nextTuple = versionToTuple(latest);
  const maxLength = Math.max(currTuple.length, nextTuple.length, 3);
  for (let index = 0; index < maxLength; index += 1) {
    const left = currTuple[index] || 0;
    const right = nextTuple[index] || 0;
    if (left > right) return 1;
    if (left < right) return -1;
  }
  return 0;
};

const runCommand = (command, cwd = PROJECT_ROOT) =>
  new Promise((resolve, reject) => {
    console.log(`[update] run: ${command}`);
    exec(command, { cwd, maxBuffer: UPDATE_COMMAND_MAX_BUFFER_BYTES }, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`${command} >> ${stderr || error.message}`));
      }
      if (stdout?.trim()) {
        console.log(`[update] ${command} >> ${stdout.trim()}`);
      }
      resolve({ stdout, stderr });
    });
  });

const buildGithubHeaders = () => {
  const headers = {
    'User-Agent': 'BrotherShop-Updater',
    Accept: 'application/vnd.github+json',
  };
  if (UPDATE_GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${UPDATE_GITHUB_TOKEN}`;
  }
  return headers;
};

const canAutoResolveHomeDisplayNameMigration = (message = '') => {
  if (!message) return false;
  const hasMigrationName = new RegExp(
    `Migration name:\\s*${MIGRATION_REMOVE_HOME_DISPLAY_NAME}`,
    'i',
  ).test(message);
  const hasP3018 = /\bP3018\b/i.test(message);
  const missingColumn = /no such column:\s*"?HomeDisplayName"?/i.test(message);
  return hasMigrationName && hasP3018 && missingColumn;
};

const canSkipPrismaMigrateForProviderSwitch = (message = '') => {
  if (!message) return false;
  const hasP3019 = /\bP3019\b/i.test(message);
  const mentionsProviderMismatch =
    /datasource provider [`'"]postgresql[`'"]/i.test(message) &&
    /migration_lock\.toml/i.test(message) &&
    /[`'"]sqlite[`'"]/i.test(message);
  return hasP3019 && mentionsProviderMismatch;
};

const buildPrismaUpdateCommands = (schemaPath = PRISMA_SCHEMA_PATH) => {
  const schemaArg = `--schema "${schemaPath}"`;
  return {
    schemaArg,
    migrate: `npx prisma migrate deploy ${schemaArg}`,
    generate: `npx prisma generate ${schemaArg}`,
    commands: [
      `npx prisma migrate deploy ${schemaArg}`,
      `npx prisma generate ${schemaArg}`,
    ],
  };
};

const runPrismaMigrations = async () => {
  if (!fs.existsSync(PRISMA_SCHEMA_PATH)) {
    console.warn('[update] Prisma schema not found, skipping migrations');
    return;
  }
  const { schemaArg, migrate, commands } = buildPrismaUpdateCommands(PRISMA_SCHEMA_PATH);
  let homeDisplayNameMigrationResolved = false;
  for (const command of commands) {
    let attempt = 0;
    const isGenerate = command.includes('prisma generate');
    // Keeping the retry loop small avoids long UI hangs during update checks.
    while (true) {
      attempt += 1;
      try {
        await runCommand(command);
        break;
      } catch (error) {
        const message = error?.message || '';
        if (
          !homeDisplayNameMigrationResolved &&
          command === migrate &&
          canAutoResolveHomeDisplayNameMigration(message)
        ) {
          console.warn(
            `[update] ${MIGRATION_REMOVE_HOME_DISPLAY_NAME} failed because HomeDisplayName column is already missing; marking migration as applied and retrying migrate deploy.`,
          );
          await runCommand(
            `npx prisma migrate resolve --applied ${MIGRATION_REMOVE_HOME_DISPLAY_NAME} ${schemaArg}`,
          );
          homeDisplayNameMigrationResolved = true;
          continue;
        }
        if (command === migrate && canSkipPrismaMigrateForProviderSwitch(message)) {
          console.warn(
            `[update] ${command} skipped because prisma migration history still has sqlite provider lock; PostgreSQL runtime will continue with generated client and runtime-managed schema compatibility.`,
          );
          break;
        }
        if (command === migrate && /\bP3005\b/i.test(message)) {
          console.warn(
            `[update] ${command} skipped because database schema is not empty (P3005); schema is managed by runtime patches.`,
          );
          break;
        }
        const isLocked = /database is locked/i.test(message);
        const isEpermPrismaEngine =
          /query_engine.*\.dll/i.test(message) && /EPERM/i.test(message);
        const isEpermGenerate = isGenerate && /EPERM/i.test(message);
        if (isEpermPrismaEngine || isEpermGenerate) {
          console.warn(
            `[update] ${command} failed with EPERM (likely file lock), skipping generate to avoid lock; consider running "npx prisma generate --schema ${PRISMA_SCHEMA_RELATIVE_PATH}" manually after restart. Details: ${message}`,
          );
          break;
        }
        if (isLocked && attempt < 3) {
          const delayMs = 1500 * attempt;
          console.warn(
            `[update] ${command} failed with database lock, retrying in ${delayMs}ms (attempt ${attempt}/3)`,
          );
          await new Promise((resolve) => setTimeout(resolve, delayMs));
          continue;
        }
        if (isPostgresStorageError(error)) {
          throw new Error(buildPostgresStorageErrorMessage());
        }
        throw error;
      }
    }
  }
};

const fetchLatestRelease = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/releases/latest`, {
    headers: buildGithubHeaders(),
  });
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  const payload = await response.json();
  if (!payload || Object.keys(payload).length === 0) {
    throw new Error('\u041f\u0443\u0441\u0442\u043e\u0439 \u043e\u0442\u0432\u0435\u0442 GitHub');
  }
  return {
    version: payload.tag_name || payload.name || payload.id?.toString() || '0.0.0',
    publishedAt: payload.published_at,
    url: payload.html_url,
    source: 'release',
    commit: normalizeCommitHash(payload.target_commitish),
  };
};

const fetchBranchHead = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/commits/${UPDATE_BRANCH}`, {
    headers: buildGithubHeaders(),
  });
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  const payload = await response.json();
  return {
    version: payload.sha?.slice(0, 12) || '0.0.0',
    publishedAt: payload.commit?.author?.date,
    url: payload.html_url,
    source: 'branch',
    commit: normalizeCommitHash(payload.sha),
  };
};

const fetchBranchHeadFromRemote = async () => {
  const command = `git ls-remote --heads ${UPDATE_REMOTE} ${UPDATE_BRANCH}`;
  const { stdout } = await runCommand(command);
  const line = (stdout || '')
    .split(/\r?\n/)
    .map((entry) => entry.trim())
    .find(Boolean);
  if (!line) {
    throw new Error('git ls-remote returned empty response');
  }
  const sha = line.split(/\s+/)[0]?.trim();
  if (!normalizeCommitHash(sha)) {
    throw new Error(`Unexpected ls-remote output: ${line}`);
  }
  return {
    version: sha.slice(0, 12),
    publishedAt: null,
    url: null,
    source: 'git-remote',
    commit: normalizeCommitHash(sha),
  };
};

const readLocalPackage = () => {
  try {
    const raw = fs.readFileSync(PACKAGE_PATH, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { version: '0.0.0' };
  }
};

const getLocalCommitHash = async () => {
  try {
    const { stdout } = await runCommand('git rev-parse HEAD');
    return stdout.trim();
  } catch {
    return null;
  }
};
const getChangedFilesBetween = async (fromCommit, toCommit) => {
  const from = normalizeCommitHash(fromCommit);
  const to = normalizeCommitHash(toCommit);
  if (!from || !to || from === to) return [];
  try {
    const { stdout } = await runCommand(`git diff --name-only ${from} ${to}`);
    return (stdout || '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (error) {
    console.warn('[update] Failed to calculate changed files:', error.message);
    return [];
  }
};
const hasChangedFile = (files = [], matcher) => {
  if (typeof matcher === 'function') {
    return files.some((file) => matcher(file));
  }
  return files.includes(matcher);
};
const shouldRebuildWebForChangedFile = (file = '') =>
  [
    'script.js',
    'styles.tailwind.css',
    'tailwind.config.js',
    'index.html',
    'manifest.webmanifest',
    'service-worker.js',
    'client-app.js',
    'client-app.css',
  ].includes(file) ||
  file.startsWith('crm-source/') ||
  file.startsWith('server-source/') ||
  file.startsWith('routes/') ||
  file.startsWith('services/') ||
  file === 'scripts/buildSourceBundle.js';
const removeWebBuildOutputs = async () => {
  for (const target of WEB_BUILD_OUTPUTS) {
    try {
      await fs.promises.unlink(target);
      console.log(`[update] Removed stale build artifact: ${path.relative(PROJECT_ROOT, target)}`);
    } catch (error) {
      if (error?.code === 'ENOENT') continue;
      console.warn(
        `[update] Failed to remove build artifact ${path.relative(PROJECT_ROOT, target)}: ${error.message}`,
      );
    }
  }
};

const checkForUpdates = async (force = false) => {
  const isCacheFresh =
    cachedUpdate && Date.now() - cachedUpdate.timestamp < UPDATE_CACHE_SECONDS * 1000;
  if (!force && isCacheFresh) {
    return cachedUpdate.data;
  }

  let releaseInfo = null;
  let branchInfo = null;
  let note = null;

  try {
    releaseInfo = await fetchLatestRelease();
    if (!releaseInfo) {
      note = '\u0420\u0435\u043b\u0438\u0437\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432\u0435\u0442\u043a\u0443.';
    }
  } catch (releaseError) {
    note = 'Не удалось получить релиз: ' + describeUpdateError(releaseError);
    console.warn('[updates] ' + note);
  }

  try {
    branchInfo = await fetchBranchHead();
  } catch (branchError) {
    const branchErrorMessage = describeUpdateError(branchError);
    try {
      branchInfo = await fetchBranchHeadFromRemote();
      note = note || 'GitHub API недоступен, использован git remote: ' + branchErrorMessage;
      console.warn('[updates] GitHub branch API failed, used git remote fallback:', branchErrorMessage);
    } catch (remoteError) {
      const remoteErrorMessage = describeUpdateError(remoteError);
      console.warn('[updates] Git remote branch lookup failed:', remoteErrorMessage);
      note = note || 'Не удалось получить ветку: ' + branchErrorMessage;
      branchInfo = null;
    }
  }

  const packageJson = readLocalPackage();
  const currentVersion = packageJson.version || '0.0.0';
  const currentCommit = normalizeCommitHash(await getLocalCommitHash());
  const fallbackSnapshot = releaseInfo || branchInfo || { version: currentVersion, publishedAt: null, url: null, source: 'local', commit: currentCommit };
  const latestSnapshot = releaseInfo || branchInfo || fallbackSnapshot;
  const latestVersion = latestSnapshot?.version || currentVersion;
  const latestCommit = branchInfo?.commit || releaseInfo?.commit || null;
  const currentCommitShort = currentCommit ? currentCommit.slice(0, 7) : null;
  const latestCommitShort = latestCommit ? latestCommit.slice(0, 7) : null;
  const versionComparison = compareVersions(currentVersion, latestVersion);
  const commitDiff = Boolean(latestCommit && currentCommit && latestCommit !== currentCommit);
  const semverComparable = isSemverish(currentVersion) && isSemverish(latestVersion);
  const currentVersionLabel = currentCommitShort ? `${currentVersion} (${currentCommitShort})` : currentVersion;
  const latestVersionLabel = latestCommitShort ? `${latestVersion} (${latestCommitShort})` : latestVersion;
  const updateAvailable = commitDiff || (semverComparable && versionComparison < 0);
  const info = {
    currentVersion,
    latestVersion,
    currentVersionLabel,
    latestVersionLabel,
    currentCommitShort,
    latestCommitShort,
    updateAvailable,
    commitChanged: commitDiff,
    currentCommit,
    latestCommit,
    checkedAt: new Date().toISOString(),
    publishedAt: latestSnapshot?.publishedAt || branchInfo?.publishedAt || null,
    sourceUrl: latestSnapshot?.url || branchInfo?.url || null,
    source: latestSnapshot?.source || branchInfo?.source || 'branch',
    note,
    details: updateAvailable
      ? commitDiff && versionComparison >= 0
        ? '\u041d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u0439 \u0432\u0435\u0442\u043a\u0435 \u0435\u0441\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0444\u0430\u0439\u043b\u044b'
        : '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f'
      : '\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043d\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e',
  };
  cachedUpdate = { timestamp: Date.now(), data: info };
  return info;
};

/**
 * Builds an idempotent DDL patch script from the tenant_template.sql.
 * Converts each CREATE TABLE / CREATE INDEX / CREATE TYPE / CREATE UNIQUE INDEX
 * to IF NOT EXISTS variants, and wraps ALTER TABLE ADD COLUMN statements
 * so they only run if the column is missing.
 * Ignores CONSTRAINT and AddForeignKey statements (safe to skip — constraints
 * are already applied when the schema was first created).
 */
const buildIdempotentTenantPatch = (templateSql) => {
  const lines = templateSql.split(/\r?\n/);
  const output = [];
  let skipBlock = false;
  let insideCreateTable = false;
  let parenDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for AddForeignKey marker BEFORE generic comment filtering,
    // because "-- AddForeignKey" starts with "--" and would be filtered first.
    if (/^-- AddForeignKey/i.test(trimmed)) {
      skipBlock = true;
      continue;
    }

    // While inside a skipped block, consume lines until end of statement
    if (skipBlock) {
      if (trimmed.endsWith(';')) skipBlock = false;
      continue;
    }

    // Skip blank lines and generic comments
    if (!trimmed || trimmed.startsWith('--')) {
      continue;
    }

    // Make CREATE TABLE idempotent
    if (/^CREATE TABLE "/.test(trimmed)) {
      output.push(line.replace('CREATE TABLE "', 'CREATE TABLE IF NOT EXISTS "'));
      insideCreateTable = true;
      parenDepth = 0;
      for (const ch of trimmed) {
        if (ch === '(') parenDepth++;
        if (ch === ')') parenDepth--;
      }
      if (trimmed.endsWith(';') && parenDepth <= 0) insideCreateTable = false;
      continue;
    }

    // Track parentheses inside CREATE TABLE block
    if (insideCreateTable) {
      for (const ch of trimmed) {
        if (ch === '(') parenDepth++;
        if (ch === ')') parenDepth--;
      }
      if (trimmed.endsWith(';') && parenDepth <= 0) {
        insideCreateTable = false;
      }
      // Drop inline CONSTRAINT lines (primary keys, unique constraints, etc.)
      if (/^\s*CONSTRAINT\s+/i.test(trimmed)) {
        // Remove trailing comma from the last output line to avoid syntax error
        if (output.length > 0) {
          const lastIdx = output.length - 1;
          output[lastIdx] = output[lastIdx].replace(/,\s*$/, '');
        }
        continue;
      }
    }

    // Make CREATE UNIQUE INDEX idempotent
    if (/^CREATE UNIQUE INDEX "/.test(trimmed)) {
      output.push(line.replace('CREATE UNIQUE INDEX "', 'CREATE UNIQUE INDEX IF NOT EXISTS "'));
      continue;
    }

    // Make CREATE INDEX idempotent
    if (/^CREATE INDEX "/.test(trimmed)) {
      output.push(line.replace('CREATE INDEX "', 'CREATE INDEX IF NOT EXISTS "'));
      continue;
    }

    // Make CREATE TYPE idempotent (enums)
    if (/^CREATE TYPE "/.test(trimmed)) {
      // Wrap with DO block to check if type already exists
      output.push(`DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = '${trimmed.match(/CREATE TYPE "(\w+)"/)?.[1] || ''}') THEN ${line.trim()} END IF; END $$;`);
      continue;
    }

    // Pass through all other statements (table columns, etc.)
    output.push(line);
  }

  return output.join('\n');
};

/**
 * Opens a raw pg Client against the given schema and runs the idempotent
 * tenant patch SQL derived from the current tenant_template.sql.
 */
const applyTenantSchemaPatch = async (schema, templateSql, connectionString) => {
  let cleanUrl = connectionString;
  try {
    const parsedUrl = new URL(connectionString);
    parsedUrl.search = '';
    cleanUrl = parsedUrl.toString();
  } catch (e) {
    if (connectionString.includes('?')) {
      cleanUrl = connectionString.split('?')[0];
    }
  }

  const client = new Client({ connectionString: cleanUrl });
  await client.connect();
  try {
    await client.query(`SET search_path TO "${schema}";`);
    await client.query(`
      ALTER TABLE "Appointments" ADD COLUMN IF NOT EXISTS "Comment" TEXT;
      ALTER TABLE "Appointments" ADD COLUMN IF NOT EXISTS "CoverBs" INTEGER;
      ALTER TABLE "Appointments" ADD COLUMN IF NOT EXISTS "DiscountRub" INTEGER;
      ALTER TABLE "Appointments" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "Schedules" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "Barbers" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "Services" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "ShopCategories" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "ShopProducts" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
      ALTER TABLE "ShopOrders" ADD COLUMN IF NOT EXISTS "cityId" TEXT;
    `);
    // Patch Barbers: add lastSeenAt for presence tracking
    await client.query(`
      ALTER TABLE "Barbers" ADD COLUMN IF NOT EXISTS "lastSeenAt" TIMESTAMP(3);
    `);
    // Patch Positions: drop old columns, add new level fields
    await client.query(`
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "commissionRate";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "beardPrice";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "trimPrice";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "minClients";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "regularClients";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "returnRate";
      ALTER TABLE "Positions" DROP COLUMN IF EXISTS "minIncome";
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "masterSharePercent" DOUBLE PRECISION DEFAULT 0;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "requiredClientVolume" INTEGER DEFAULT 0;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "requiredRetainedClients" INTEGER DEFAULT 0;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "targetReturnPercent" DOUBLE PRECISION DEFAULT 0;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "specialConditions" TEXT;
      ALTER TABLE "Positions" ADD COLUMN IF NOT EXISTS "privileges" TEXT;
    `);
    // Create PositionServiceMaxPrices if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS "PositionServiceMaxPrices" (
        "id" TEXT NOT NULL,
        "positionId" TEXT NOT NULL,
        "serviceId" TEXT NOT NULL,
        "maxPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "PositionServiceMaxPrices_pkey" PRIMARY KEY ("id")
      );
      CREATE UNIQUE INDEX IF NOT EXISTS "PositionServiceMaxPrices_positionId_serviceId_key" 
        ON "PositionServiceMaxPrices"("positionId", "serviceId");
    `);
    // Add foreign keys for PositionServiceMaxPrices (idempotent via DO block)
    try {
      await client.query(`
        DO $$ BEGIN
          ALTER TABLE "PositionServiceMaxPrices" ADD CONSTRAINT "PositionServiceMaxPrices_positionId_fkey" 
            FOREIGN KEY ("positionId") REFERENCES "Positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
        EXCEPTION WHEN duplicate_object THEN null;
        END $$;
      `);
      await client.query(`
        DO $$ BEGIN
          ALTER TABLE "PositionServiceMaxPrices" ADD CONSTRAINT "PositionServiceMaxPrices_serviceId_fkey" 
            FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
        EXCEPTION WHEN duplicate_object THEN null;
        END $$;
      `);
    } catch (fkError) {
      // Non-fatal: FK may already exist
    }
    // Create Shop tables if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS "ShopCategories" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "orderIndex" INTEGER NOT NULL DEFAULT 0,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "ShopCategories_pkey" PRIMARY KEY ("id")
      );
      CREATE TABLE IF NOT EXISTS "ShopProducts" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "description" TEXT,
        "price" DOUBLE PRECISION NOT NULL,
        "imageUrl" TEXT,
        "categoryId" TEXT,
        "stock" INTEGER NOT NULL DEFAULT 0,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "orderIndex" INTEGER NOT NULL DEFAULT 0,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "ShopProducts_pkey" PRIMARY KEY ("id")
      );
      CREATE TABLE IF NOT EXISTS "ShopOrders" (
        "id" TEXT NOT NULL,
        "customerName" TEXT,
        "customerPhone" TEXT,
        "userId" TEXT,
        "status" TEXT NOT NULL DEFAULT 'new',
        "totalAmount" DOUBLE PRECISION NOT NULL,
        "paymentMethod" TEXT NOT NULL DEFAULT 'cash',
        "bsAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
        "comment" TEXT,
        "qrCode" TEXT,
        "issuedById" TEXT,
        "issuedByName" TEXT,
        "issuedAt" TIMESTAMP(3),
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "ShopOrders_pkey" PRIMARY KEY ("id")
      );
      CREATE TABLE IF NOT EXISTS "ShopOrderItems" (
        "id" TEXT NOT NULL,
        "orderId" TEXT NOT NULL,
        "productId" TEXT,
        "name" TEXT NOT NULL,
        "price" DOUBLE PRECISION NOT NULL,
        "quantity" INTEGER NOT NULL DEFAULT 1,
        CONSTRAINT "ShopOrderItems_pkey" PRIMARY KEY ("id")
      );
      CREATE TABLE IF NOT EXISTS "ShopStockEdits" (
        "id" TEXT NOT NULL,
        "productId" TEXT NOT NULL,
        "productName" TEXT NOT NULL,
        "delta" INTEGER NOT NULL,
        "reason" TEXT,
        "editorId" TEXT,
        "editorName" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "ShopStockEdits_pkey" PRIMARY KEY ("id")
      );
    `);
    // Add unique index on ShopOrders.qrCode if not exists
    try {
      await client.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS "ShopOrders_qrCode_key" ON "ShopOrders"("qrCode");
      `);
    } catch (idxError) { /* non-fatal */ }
    // Migrate ShopOrderItems.productId to nullable + SET NULL (fixes crash on deleted products)
    try {
      await client.query(`
        ALTER TABLE "ShopOrderItems" ALTER COLUMN "productId" DROP NOT NULL;
      `);
      // Drop old CASCADE FK and replace with SET NULL
      await client.query(`
        ALTER TABLE "ShopOrderItems" DROP CONSTRAINT IF EXISTS "ShopOrderItems_productId_fkey";
      `);
      await client.query(`
        DO $$ BEGIN
          ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_productId_fkey"
            FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
        EXCEPTION WHEN duplicate_object THEN null;
        END $$;
      `);
    } catch (patchErr) { /* non-fatal, idempotent */ }
    // Add foreign keys for Shop tables (idempotent via DO block)
    const shopForeignKeys = [
      `ALTER TABLE "ShopProducts" ADD CONSTRAINT "ShopProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ShopCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
      `ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrders"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
      `ALTER TABLE "ShopStockEdits" ADD CONSTRAINT "ShopStockEdits_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    ];
    for (const fkSql of shopForeignKeys) {
      try {
        await client.query(`DO $$ BEGIN ${fkSql}; EXCEPTION WHEN duplicate_object THEN null; END $$;`);
      } catch (fkErr) { /* non-fatal */ }
    }
    // Create CrmNotificationHistory table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS "CrmNotificationHistory" (
        "id" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "title" TEXT NOT NULL,
        "message" TEXT NOT NULL,
        "barbershopId" TEXT,
        "action" TEXT,
        "target" TEXT,
        "targetTable" TEXT,
        "recordId" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "CrmNotificationHistory_pkey" PRIMARY KEY ("id")
      );
      CREATE INDEX IF NOT EXISTS "CrmNotificationHistory_barbershopId_createdAt_idx"
        ON "CrmNotificationHistory"("barbershopId", "createdAt");
      ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "action" TEXT;
      ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "target" TEXT;
      ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "targetTable" TEXT;
      ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "recordId" TEXT;
    `);
    const patchSql = buildIdempotentTenantPatch(templateSql);
    await client.query(patchSql);
  } finally {
    await client.end();
  }
};

/**
 * Post-update database fix pass:
 * 1. Ensures the Businesses table exists in public (handled by Prisma migrations,
 *    but we double-check here for resilience).
 * 2. Reads all tenant schemas registered in Businesses and applies the
 *    current tenant_template.sql to each one as an idempotent patch,
 *    so existing tenants receive any new columns/tables/indexes.
 */
const runPostUpdateDatabaseFixes = async () => {
  // Always ensure Prisma client is generated to match the current schema
  try {
    const { schemaArg } = buildPrismaUpdateCommands(PRISMA_SCHEMA_PATH);
    await runCommand(`npx prisma generate ${schemaArg}`);
  } catch (genError) {
    console.warn('[update] prisma generate failed (non-fatal):', genError?.message || genError);
  }

  if (!fs.existsSync(TENANT_TEMPLATE_PATH)) {
    console.warn('[update] tenant_template.sql not found, skipping tenant schema patches');
    return;
  }

  const connectionString = process.env.POSTGRES_DATABASE_URL;
  if (!connectionString) {
    console.warn('[update] POSTGRES_DATABASE_URL not set, skipping post-update database fixes');
    return;
  }

  const templateSql = fs.readFileSync(TENANT_TEMPLATE_PATH, 'utf8');

  // --- Step 1: Ensure Businesses table exists in public schema ---
  try {
    let cleanUrl = connectionString;
    try {
      const parsedUrl = new URL(connectionString);
      parsedUrl.search = '';
      cleanUrl = parsedUrl.toString();
    } catch (e) {
      if (connectionString.includes('?')) cleanUrl = connectionString.split('?')[0];
    }

    const publicClient = new Client({ connectionString: cleanUrl });
    await publicClient.connect();
    try {
      // Idempotent creation of Businesses table in public schema
      await publicClient.query(`SET search_path TO "public";`);
      await publicClient.query(`
        CREATE TABLE IF NOT EXISTS "Businesses" (
          "id" TEXT NOT NULL,
          "name" TEXT NOT NULL,
          "subdomain" TEXT NOT NULL,
          "customDomain" TEXT,
          "customCrmDomain" TEXT,
          "dbSchema" TEXT NOT NULL,
          "isActive" BOOLEAN NOT NULL DEFAULT true,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "Businesses_pkey" PRIMARY KEY ("id")
        );
        ALTER TABLE "Businesses" ADD COLUMN IF NOT EXISTS "customCrmDomain" TEXT;
        CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_subdomain_key" ON "Businesses"("subdomain");
        CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_customDomain_key" ON "Businesses"("customDomain");
        CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_customCrmDomain_key" ON "Businesses"("customCrmDomain");
        CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_dbSchema_key" ON "Businesses"("dbSchema");

        CREATE TABLE IF NOT EXISTS "TelegramAuthRequests" (
          "id" TEXT NOT NULL,
          "code" TEXT NOT NULL,
          "status" TEXT NOT NULL,
          "flow" TEXT NOT NULL DEFAULT 'login',
          "targetUserId" TEXT,
          "telegramId" TEXT,
          "phone" TEXT,
          "displayName" TEXT,
          "userId" TEXT,
          "errorMessage" TEXT,
          "createdAt" TEXT NOT NULL,
          "expiresAt" TEXT NOT NULL,
          "updatedAt" TEXT NOT NULL,
          CONSTRAINT "TelegramAuthRequests_pkey" PRIMARY KEY ("id")
        );
        CREATE UNIQUE INDEX IF NOT EXISTS "TelegramAuthRequests_code_key" ON "TelegramAuthRequests"("code");
        CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_status_expiresAt_idx" ON "TelegramAuthRequests"("status", "expiresAt");
        CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_flow_targetUserId_idx" ON "TelegramAuthRequests"("flow", "targetUserId");
        CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_code_idx" ON "TelegramAuthRequests"("code");

        CREATE TABLE IF NOT EXISTS "CreatorIncome" (
          "id" TEXT NOT NULL,
          "businessId" TEXT NOT NULL,
          "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
          "periodStart" TEXT,
          "periodEnd" TEXT,
          "date" TEXT NOT NULL,
          "note" TEXT,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "CreatorIncome_pkey" PRIMARY KEY ("id")
        );
        CREATE INDEX IF NOT EXISTS "CreatorIncome_businessId_idx" ON "CreatorIncome"("businessId");
        CREATE INDEX IF NOT EXISTS "CreatorIncome_date_idx" ON "CreatorIncome"("date");

        -- Shop tables
        CREATE TABLE IF NOT EXISTS "ShopCategories" (
          "id" TEXT NOT NULL,
          "name" TEXT NOT NULL,
          "isActive" BOOLEAN NOT NULL DEFAULT true,
          "orderIndex" INTEGER NOT NULL DEFAULT 0,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "ShopCategories_pkey" PRIMARY KEY ("id")
        );

        CREATE TABLE IF NOT EXISTS "ShopProducts" (
          "id" TEXT NOT NULL,
          "name" TEXT NOT NULL,
          "description" TEXT,
          "price" DOUBLE PRECISION NOT NULL,
          "imageUrl" TEXT,
          "categoryId" TEXT,
          "stock" INTEGER NOT NULL DEFAULT 0,
          "isActive" BOOLEAN NOT NULL DEFAULT true,
          "orderIndex" INTEGER NOT NULL DEFAULT 0,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "ShopProducts_pkey" PRIMARY KEY ("id")
        );
        CREATE INDEX IF NOT EXISTS "ShopProducts_categoryId_idx" ON "ShopProducts"("categoryId");

        CREATE TABLE IF NOT EXISTS "ShopOrders" (
          "id" TEXT NOT NULL,
          "customerName" TEXT,
          "customerPhone" TEXT,
          "userId" TEXT,
          "status" TEXT NOT NULL DEFAULT 'new',
          "totalAmount" DOUBLE PRECISION NOT NULL,
          "paymentMethod" TEXT NOT NULL DEFAULT 'cash',
          "bsAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
          "comment" TEXT,
          "qrCode" TEXT,
          "issuedById" TEXT,
          "issuedByName" TEXT,
          "issuedAt" TIMESTAMP(3),
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "ShopOrders_pkey" PRIMARY KEY ("id")
        );
        CREATE UNIQUE INDEX IF NOT EXISTS "ShopOrders_qrCode_key" ON "ShopOrders"("qrCode");

        CREATE TABLE IF NOT EXISTS "ShopOrderItems" (
          "id" TEXT NOT NULL,
          "orderId" TEXT NOT NULL,
          "productId" TEXT,
          "name" TEXT NOT NULL,
          "price" DOUBLE PRECISION NOT NULL,
          "quantity" INTEGER NOT NULL DEFAULT 1,
          CONSTRAINT "ShopOrderItems_pkey" PRIMARY KEY ("id")
        );
        CREATE INDEX IF NOT EXISTS "ShopOrderItems_orderId_idx" ON "ShopOrderItems"("orderId");
        CREATE INDEX IF NOT EXISTS "ShopOrderItems_productId_idx" ON "ShopOrderItems"("productId");

        CREATE TABLE IF NOT EXISTS "ShopStockEdits" (
          "id" TEXT NOT NULL,
          "productId" TEXT NOT NULL,
          "productName" TEXT NOT NULL,
          "delta" INTEGER NOT NULL,
          "reason" TEXT,
          "editorId" TEXT,
          "editorName" TEXT,
          "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "ShopStockEdits_pkey" PRIMARY KEY ("id")
        );
        CREATE INDEX IF NOT EXISTS "ShopStockEdits_productId_idx" ON "ShopStockEdits"("productId");
      `);
      // Add foreign keys separately (PostgreSQL doesn't support ADD CONSTRAINT IF NOT EXISTS)
      for (const fkSql of [
        `DO $$ BEGIN ALTER TABLE "CreatorIncome" ADD CONSTRAINT "CreatorIncome_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Businesses"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN null; END $$;`,
        `DO $$ BEGIN ALTER TABLE "ShopProducts" ADD CONSTRAINT "ShopProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ShopCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN null; END $$;`,
        `DO $$ BEGIN ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrders"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN null; END $$;`,
        `DO $$ BEGIN ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN null; END $$;`,
        `DO $$ BEGIN ALTER TABLE "ShopStockEdits" ADD CONSTRAINT "ShopStockEdits_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN null; END $$;`,
      ]) {
        try { await publicClient.query(fkSql); } catch (e) { /* Non-fatal: FK may already exist */ }
      }
      console.log('[update] Public schema tables verified/created (Businesses, TelegramAuthRequests, CreatorIncome, Shop*)');

      // If Appointments table exists in public schema, ensure Comment/CoverBs/DiscountRub exist
      const tableCheck = await publicClient.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'Appointments'
        );
      `);
      if (tableCheck.rows[0]?.exists) {
        console.log('[update] Patching public schema Appointments table with new columns');
        await publicClient.query(`
          ALTER TABLE "public"."Appointments" ADD COLUMN IF NOT EXISTS "Comment" TEXT;
          ALTER TABLE "public"."Appointments" ADD COLUMN IF NOT EXISTS "CoverBs" INTEGER;
          ALTER TABLE "public"."Appointments" ADD COLUMN IF NOT EXISTS "DiscountRub" INTEGER;
        `);
      }

      // Add cityId to all core tables in the public schema if they exist
      const tablesToPatch = ['Appointments', 'Schedules', 'Barbers', 'Positions', 'Services', 'ShopCategories', 'ShopProducts', 'ShopOrders'];
      for (const t of tablesToPatch) {
        const check = await publicClient.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = '${t}'
          );
        `);
        if (check.rows[0]?.exists) {
          await publicClient.query(`ALTER TABLE "public"."${t}" ADD COLUMN IF NOT EXISTS "cityId" TEXT;`);
        }
      }
    } finally {
      await publicClient.end();
    }
  } catch (publicError) {
    console.error('[update] Failed to ensure public schema tables:', publicError.message);
    // Non-fatal: Prisma migration may have already handled this
  }

  // --- Step 2: Patch all existing tenant schemas ---
  let tenantSchemas = [];
  try {
    let cleanUrl = connectionString;
    try {
      const parsedUrl = new URL(connectionString);
      parsedUrl.search = '';
      cleanUrl = parsedUrl.toString();
    } catch (e) {
      if (connectionString.includes('?')) cleanUrl = connectionString.split('?')[0];
    }

    const listClient = new Client({ connectionString: cleanUrl });
    await listClient.connect();
    try {
      const result = await listClient.query(
        'SELECT "dbSchema" FROM public."Businesses" WHERE "isActive" = true ORDER BY "name" ASC'
      );
      tenantSchemas = result.rows.map((row) => row.dbSchema).filter(Boolean);
    } finally {
      await listClient.end();
    }
  } catch (listError) {
    // Businesses table may not exist yet (very first install — migration will create it)
    console.warn('[update] Could not list tenant schemas (Businesses table may not exist yet):', listError.message);
    return;
  }

  if (!tenantSchemas.length) {
    console.log('[update] No active tenant schemas found, skipping tenant patch pass');
    return;
  }

  console.log(`[update] Applying tenant schema patches to ${tenantSchemas.length} schema(s): ${tenantSchemas.join(', ')}`);
  const errors = [];
  for (const schema of tenantSchemas) {
    try {
      await applyTenantSchemaPatch(schema, templateSql, connectionString);
      console.log(`[update] Patched tenant schema: ${schema}`);
    } catch (patchError) {
      const msg = `Failed to patch tenant schema "${schema}": ${patchError.message}`;
      console.error(`[update] ${msg}`);
      errors.push(msg);
    }
  }

  if (errors.length) {
    console.warn(`[update] ${errors.length} tenant schema patch(es) failed. Manual inspection may be required.`);
  } else {
    console.log('[update] All tenant schemas patched successfully');
  }
};

const applyUpdate = async () => {
  console.log("[update] applying update...");
  await createPreUpdateBackup();
  const runtimeAssetSnapshot = await backupRuntimeAssetsBeforeUpdate();
  const stashRef = await stashWorkingTree();
  try {
    const previousCommit = normalizeCommitHash(await getLocalCommitHash());
    await runCommand(`git fetch ${UPDATE_REMOTE} --tags`);
    await runCommand(`git pull --ff-only ${UPDATE_REMOTE} ${UPDATE_BRANCH}`);
    const nextCommit = normalizeCommitHash(await getLocalCommitHash());
    const changedFiles = await getChangedFilesBetween(previousCommit, nextCommit);
    const shouldRunNodeInstall =
      !changedFiles.length ||
      hasChangedFile(changedFiles, 'package.json') ||
      hasChangedFile(changedFiles, 'package-lock.json') ||
      hasChangedFile(changedFiles, 'npm-shrinkwrap.json');
    const shouldRunPrisma =
      !changedFiles.length ||
      hasChangedFile(changedFiles, (file) => file === PRISMA_SCHEMA_RELATIVE_PATH) ||
      hasChangedFile(changedFiles, (file) => file.startsWith('prisma/migrations/'));
    const shouldRunPythonInstall =
      !changedFiles.length || hasChangedFile(changedFiles, 'requirements.txt');
    const shouldRunWebBuild =
      !changedFiles.length ||
      shouldRunNodeInstall ||
      hasChangedFile(changedFiles, shouldRebuildWebForChangedFile);
    if (shouldRunNodeInstall) {
      await runCommand(resolveUpdateNpmInstallCommand());
    } else {
      console.log('[update] package manifests unchanged, skipping npm install');
    }
    if (shouldRunPrisma) {
      await runPrismaMigrations();
    } else {
      console.log('[update] prisma schema unchanged, skipping migrations');
      // Always regenerate Prisma client to ensure it matches the current schema
      try {
        const { schemaArg } = buildPrismaUpdateCommands(PRISMA_SCHEMA_PATH);
        await runCommand(`npx prisma generate ${schemaArg}`);
      } catch (genError) {
        console.warn('[update] prisma generate failed (non-fatal):', genError?.message || genError);
      }
    }
    // Always run post-update DB fixes to ensure Businesses table and tenant
    // schemas are in sync with the current codebase, regardless of whether
    // prisma migrations ran.
    await runPostUpdateDatabaseFixes();
    const shouldRunServerBuild =
      !changedFiles.length ||
      hasChangedFile(changedFiles, (file) =>
        file.startsWith('server-source/') || file.startsWith('routes/') || file.startsWith('services/')
      );
    if (shouldRunServerBuild) {
      await runCommand('npm run build:server-source');
    }
    if (shouldRunWebBuild) {
      await removeWebBuildOutputs();
      await runCommand('npm run build:web');
    } else {
      console.log('[update] web assets unchanged, skipping build:web');
    }
    const python = process.env.BOT_PYTHON_PATH || (os.platform() === 'win32' ? 'python' : 'python3');
    const requirementsPath = path.join(PROJECT_ROOT, 'requirements.txt');
    if (fs.existsSync(requirementsPath) && shouldRunPythonInstall) {
      await runCommand(`${python} -m pip install -r "${requirementsPath}"`);
    } else if (fs.existsSync(requirementsPath)) {
      console.log('[update] requirements unchanged, skipping pip install');
    }
    console.log("[update] apply complete");
    cachedUpdate = null;
    return {
      success: true,
      completedAt: new Date().toISOString(),
    };
  } finally {
    if (stashRef) {
      await popStash(stashRef);
    }
    await restoreRuntimeAssetsAfterUpdate(runtimeAssetSnapshot);
  }
};

module.exports = {
  checkForUpdates,
  applyUpdate,
  runPostUpdateDatabaseFixes,
  buildIdempotentTenantPatch,
  canSkipPrismaMigrateForProviderSwitch,
  describeUpdateError,
  buildPrismaUpdateCommands,
  createPreUpdateBackup,
  resolvePostgresDumpPath,
  stripPostgresSchemaQuery,
};
