#!/usr/bin/env bash
set -euo pipefail

PORT_VALUE="${PORT:-3000}"
HEALTHCHECK_PATH_VALUE="${HEALTHCHECK_PATH:-/api/health}"
if [[ "${HEALTHCHECK_PATH_VALUE}" != /* ]]; then
  HEALTHCHECK_PATH_VALUE="/${HEALTHCHECK_PATH_VALUE}"
fi

URL="${1:-http://127.0.0.1:${PORT_VALUE}${HEALTHCHECK_PATH_VALUE}}"
TIMEOUT_SECONDS="${HEALTHCHECK_TIMEOUT_SECONDS:-45}"
INTERVAL_SECONDS="${HEALTHCHECK_INTERVAL_SECONDS:-2}"
ALERT_LOG="${UPDATE_ALERT_LOG:-./data/update-alert.log}"
DEADLINE=$((SECONDS + TIMEOUT_SECONDS))
LAST_ERROR="timeout"

while (( SECONDS < DEADLINE )); do
  if curl -fsS --max-time 4 "${URL}" >/dev/null 2>&1; then
    echo "[healthcheck] ok: ${URL}"
    exit 0
  fi
  LAST_ERROR="$(curl -sS --max-time 4 "${URL}" -o /dev/null 2>&1 || true)"
  sleep "${INTERVAL_SECONDS}"
done

echo "[healthcheck] failed: ${URL}" >&2

mkdir -p "$(dirname "${ALERT_LOG}")"
printf '{"level":"error","source":"systemd-healthcheck","url":"%s","error":"%s","time":"%s"}\n' \
  "${URL}" \
  "${LAST_ERROR:-timeout}" \
  "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> "${ALERT_LOG}"

exit 1
