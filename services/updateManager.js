const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const packageJson = require('../package.json');

const fetch =
  globalThis.fetch ||
  ((...args) => import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args)));

const UPDATE_REPO = process.env.UPDATE_REPO || 'HalfyDay/Barber-Bot';
const UPDATE_BRANCH = process.env.UPDATE_BRANCH || 'main';
const UPDATE_CACHE_SECONDS = Number(process.env.UPDATE_CACHE_SECONDS || 600);

let cachedUpdate = null;

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
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`${command} >> ${stderr || error.message}`));
      }
      resolve({ stdout, stderr });
    });
  });

const fetchLatestRelease = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/releases/latest`, {
    headers: { 'User-Agent': 'BarberBot-Updater' },
  });
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
  };
};

const checkForUpdates = async (force = false) => {
  const isCacheFresh =
    cachedUpdate && Date.now() - cachedUpdate.timestamp < UPDATE_CACHE_SECONDS * 1000;
  if (!force && isCacheFresh) {
    return cachedUpdate.data;
  }

  let latest;
  let note = null;

  try {
    latest = await fetchLatestRelease();
  } catch (releaseError) {
    note = '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u043b\u0438\u0437: ' + releaseError.message;
    console.warn('[updates] ' + note);
    try {
      latest = await fetchBranchHead();
    } catch (branchError) {
      console.error('[updates] \u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0432\u0435\u0442\u043a\u0438:', branchError);
      throw new Error(
        branchError.message || '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f GitHub.',
      );
    }
  }

  const currentVersion = packageJson.version || '0.0.0';
  const updateAvailable = compareVersions(currentVersion, latest.version) < 0;
  const info = {
    currentVersion,
    latestVersion: latest.version,
    updateAvailable,
    checkedAt: new Date().toISOString(),
    publishedAt: latest.publishedAt,
    sourceUrl: latest.url,
    source: latest.source,
    note,
  };
  cachedUpdate = { timestamp: Date.now(), data: info };
  return info;
};

const applyUpdate = async () => {
  await runCommand('git fetch --tags');
  await runCommand(`git pull origin ${UPDATE_BRANCH}`);
  await runCommand('npm install --omit=dev');
  const python = process.env.BOT_PYTHON_PATH || (os.platform() === 'win32' ? 'python' : 'python3');
  if (fs.existsSync(path.join(process.cwd(), 'requirements.txt'))) {
    await runCommand(`${python} -m pip install -r requirements.txt`);
  }
  cachedUpdate = null;
  return {
    success: true,
    completedAt: new Date().toISOString(),
  };
};

module.exports = {
  checkForUpdates,
  applyUpdate,
};
