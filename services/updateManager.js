const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const packageJson = require('../package.json');

const fetch = globalThis.fetch || ((...args) => import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args)));

const UPDATE_REPO = process.env.UPDATE_REPO || 'HalfyDay/Barber-Bot';
const UPDATE_BRANCH = process.env.UPDATE_BRANCH || 'main';
const UPDATE_CACHE_SECONDS = Number(process.env.UPDATE_CACHE_SECONDS || 600);

let cachedUpdate = null;

const normalizeVersion = (value = '') => value.toString().trim().replace(/^v/, '');

const versionToTuple = (value) => normalizeVersion(value).split(/\./).map((part) => Number(part.replace(/[^0-9]/g, '')) || 0);

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

const runCommand = (command, cwd = process.cwd()) => new Promise((resolve, reject) => {
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
  if (!response.ok) throw new Error(`Ошибка GitHub API: ${response.status}`);
  const payload = await response.json();
  if (!payload || Object.keys(payload).length === 0) throw new Error('Пустой ответ от GitHub');
  return {
    version: payload.tag_name || payload.name || payload.id?.toString() || '0.0.0',
    publishedAt: payload.published_at,
    url: payload.html_url,
  };
};

const fetchBranchHead = async () => {
  const response = await fetch(`https://api.github.com/repos/${UPDATE_REPO}/commits/${UPDATE_BRANCH}`, {
    headers: { 'User-Agent': 'BarberBot-Updater' },
  });
  if (!response.ok) throw new Error(`Ошибка GitHub API: ${response.status}`);
  const payload = await response.json();
  return {
    version: payload.sha?.slice(0, 12) || '0.0.0',
    publishedAt: payload.commit?.author?.date,
    url: payload.html_url,
  };
};

const checkForUpdates = async (force = false) => {
  const isCacheFresh = cachedUpdate && Date.now() - cachedUpdate.timestamp < UPDATE_CACHE_SECONDS * 1000;
  if (!force && isCacheFresh) {
    return cachedUpdate.data;
  }

  let latest;
  try {
    latest = await fetchLatestRelease();
  } catch (releaseError) {
    console.warn('Не удалось получить релиз:', releaseError.message);
    latest = await fetchBranchHead();
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
