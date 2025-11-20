const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const PACKAGE_PATH = path.join(__dirname, '..', 'package.json');

const fetch =
  globalThis.fetch ||
  ((...args) => import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args)));

const UPDATE_REPO = process.env.UPDATE_REPO || 'HalfyDay/Barber-Bot';
const UPDATE_BRANCH = process.env.UPDATE_BRANCH || 'main';
const UPDATE_REMOTE = process.env.UPDATE_REMOTE || 'origin';
const UPDATE_CACHE_SECONDS = Number(process.env.UPDATE_CACHE_SECONDS || 600);

let cachedUpdate = null;

const getWorkingTreeStatus = async () => {
  try {
    const { stdout } = await runCommand('git status --porcelain');
    return stdout.trim();
  } catch (error) {
    console.warn('[update] git status failed:', error.message);
    return '';
  }
};

const stashWorkingTree = async () => {
  const status = await getWorkingTreeStatus();
  if (!status) return null;
  console.log('[update] Working tree is dirty, creating stash before pull...');
  try {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const message = `auto-update-${stamp}`;
    const { stdout } = await runCommand(`git stash push -u -m "${message}"`);
    const match = stdout.match(/(stash@\{[^}]+\})/);
    const ref = match ? match[1] : null;
    console.log(`[update] Stashed changes${ref ? ` as ${ref}` : ''}`);
    return ref;
  } catch (error) {
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
const versionToTuple = (value) =>
  normalizeVersion(value)
    .split(/\./)
    .map((part) => Number(part.replace(/[^0-9]/g, '')) || 0);
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

const runCommand = (command, cwd = process.cwd()) =>
  new Promise((resolve, reject) => {
    console.log(`[update] run: ${command}`);
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`${command} >> ${stderr || error.message}`));
      }
      if (stdout?.trim()) {
        console.log(`[update] ${command} >> ${stdout.trim()}`);
      }
      resolve({ stdout, stderr });
    });
  });

const fetchLatestRelease = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/releases/latest`, {
    headers: { 'User-Agent': 'BarberBot-Updater' },
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
    commit: payload.target_commitish || null,
  };
};

const fetchBranchHead = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/commits/${UPDATE_BRANCH}`, {
    headers: { 'User-Agent': 'BarberBot-Updater' },
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
    commit: payload.sha || null,
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
    note =
      '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u043b\u0438\u0437: ' +
      releaseError.message;
    console.warn('[updates] ' + note);
  }

  try {
    branchInfo = await fetchBranchHead();
  } catch (branchError) {
    console.error('[updates] \u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0432\u0435\u0442\u043a\u0438:', branchError);
    throw new Error(
      branchError.message ||
        '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f GitHub.',
    );
  }

  const latestSnapshot = releaseInfo || branchInfo;
  const packageJson = readLocalPackage();
  const currentVersion = packageJson.version || '0.0.0';
  const latestVersion = latestSnapshot?.version || currentVersion;
  const currentCommit = await getLocalCommitHash();
  const latestCommit = branchInfo?.commit || releaseInfo?.commit || null;
  const currentCommitShort = currentCommit ? currentCommit.slice(0, 7) : null;
  const latestCommitShort = latestCommit ? latestCommit.slice(0, 7) : null;
  const versionComparison = compareVersions(currentVersion, latestVersion);
  const commitDiff = Boolean(latestCommit && currentCommit && latestCommit !== currentCommit);
  const currentVersionLabel = currentCommitShort ? `${currentVersion} (${currentCommitShort})` : currentVersion;
  const latestVersionLabel = latestCommitShort ? `${latestVersion} (${latestCommitShort})` : latestVersion;
  const updateAvailable = versionComparison < 0 || commitDiff;
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
  const stashRef = await stashWorkingTree();
  try {
    await runCommand(`git fetch ${UPDATE_REMOTE} --tags`);
    await runCommand(`git pull ${UPDATE_REMOTE} ${UPDATE_BRANCH}`);
    await runCommand('npm install');
    await runCommand('npm run build:web');
    const python = process.env.BOT_PYTHON_PATH || (os.platform() === 'win32' ? 'python' : 'python3');
    if (fs.existsSync(path.join(process.cwd(), 'requirements.txt'))) {
      await runCommand(`${python} -m pip install -r requirements.txt`);
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
  }
};

module.exports = {
  checkForUpdates,
  applyUpdate,
};
