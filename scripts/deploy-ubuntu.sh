#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

echo "[deploy] root: ${ROOT_DIR}"
echo "[deploy] platform: $(uname -s)"

if [[ ! -f package-lock.json ]]; then
  echo "[deploy] package-lock.json not found. Aborting."
  exit 1
fi

# Playwright browsers are not required for this project runtime.
# Keep install lightweight unless explicitly disabled by user.
if [[ -z "${PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD:-}" ]]; then
  export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
  echo "[deploy] PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1"
fi

# Always reinstall modules on Linux to avoid cross-platform native binary issues.
if [[ -d node_modules ]]; then
  echo "[deploy] removing existing node_modules"
  rm -rf node_modules
fi

echo "[deploy] npm ci"
npm ci

if [[ -f requirements.txt ]]; then
  echo "[deploy] python venv setup"
  if [[ ! -d .venv ]]; then
    python3 -m venv .venv
  fi

  echo "[deploy] python dependencies (.venv)"
  .venv/bin/python -m pip install --upgrade pip
  .venv/bin/python -m pip install -r requirements.txt
fi

RUNTIME_MODE="${PRISMA_RUNTIME:-postgres}"
echo "[deploy] prisma runtime: ${RUNTIME_MODE}"

if [[ "${RUNTIME_MODE}" != "postgres" ]]; then
  echo "[deploy] sqlite runtime is no longer supported for the application."
  echo "[deploy] use PostgreSQL for deploy/runtime and keep SQLite only for legacy migration scripts."
  exit 1
fi

echo "[deploy] skip prisma migrate deploy for postgres runtime"
echo "[deploy] expected: target schema/import already prepared before app deploy"

echo "[deploy] prisma generate for runtime"
npm run prisma:generate:runtime

echo "[deploy] build web"
npm run build:web

echo "[deploy] done"
echo "[deploy] BOT_PYTHON_PATH should point to ${ROOT_DIR}/.venv/bin/python"
