const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');
const { getPrismaRuntimeConfig } = require('./prismaRuntime');
const { resolvePortableConfig } = require('../scripts/lib/postgresPortableRuntime');
const PROJECT_ROOT = path.join(__dirname, '..');
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
  path.join(PROJECT_ROOT, 'bot-constructor.bundle.js'),
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
      hasChangedFile(changedFiles, (file) =>
        [
          'script.js',
          'bot-constructor.js',
          'styles.tailwind.css',
          'tailwind.config.js',
          'index.html',
          'manifest.webmanifest',
          'service-worker.js',
        ].includes(file),
      );
    if (shouldRunNodeInstall) {
      await runCommand(resolveUpdateNpmInstallCommand());
    } else {
      console.log('[update] package manifests unchanged, skipping npm install');
    }
    if (shouldRunPrisma) {
      await runPrismaMigrations();
    } else {
      console.log('[update] prisma schema unchanged, skipping migrations/generate');
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
  describeUpdateError,
  buildPrismaUpdateCommands,
  createPreUpdateBackup,
  resolvePostgresDumpPath,
  stripPostgresSchemaQuery,
};
