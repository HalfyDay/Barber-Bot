# BrotherShop

Web CRM + site for a barbershop.
Stack: Node.js, Express, Prisma, PostgreSQL, Python Telegram bot.

## Project structure
- `server.js` - main API and runtime orchestration
- `BotBrotherShop.py` - Telegram bot
- `script.js` / `script.bundle.js` - web client logic
- `prisma/` - schema and migrations
- `services/` - update/license and helper services
- `scripts/` - Ubuntu deploy and healthcheck scripts
- `deploy/systemd/` - ready systemd service file

## Local run
1. Install dependencies:
   - `npm install`
   - `python -m venv .venv`
   - Windows: `.venv\Scripts\python -m pip install -r requirements.txt`
   - Linux/macOS: `.venv/bin/python -m pip install -r requirements.txt`
2. Create `.env` from `.env.example`.
3. Generate Prisma client for the selected runtime:
   - PostgreSQL runtime: `npm run prisma:generate:runtime`
4. For PostgreSQL, prepare schema/import separately using the migration runbook before app start.
5. Legacy SQLite repair helpers, if you need to clean an old snapshot manually:
   - `node scripts/legacy/fixUsersSqlite.js --sqlite-path path/to/snapshot.db`
6. Build web bundle:
   - `npm run build:web`
7. Start:
   - `npm start`

## Local portable PostgreSQL
If you use a portable PostgreSQL on Windows, keep it inside the project and out of git:
- default project-local path: `.local/postgresql-portable`
- adopt an existing portable install:
  - `powershell -File scripts/adopt-postgres-portable.ps1 -SourcePath "D:\Download\1BS\postgresql-portable"`
- check/start/stop:
  - `npm run postgres:portable:status`
  - `npm run postgres:portable:start`
  - `npm run postgres:portable:stop`
- one-shot app start with project-local PostgreSQL:
  - `npm run app:local-postgres`

Config vars:
- `POSTGRES_PORTABLE_HOME`
- `POSTGRES_PORTABLE_DATA_DIR`
- `POSTGRES_PORTABLE_PORT`
- `HOME_USERS_DB_PATH`  
  legacy-only path for one-time import of the old `home-users.db` snapshot
- `LEGACY_SQLITE_SNAPSHOT_PATH`  
  legacy-only path to an explicit SQLite snapshot for old audit/repair scripts

`postgres:portable:status` returns a stable English `message` field (`accepting connections` / `no response`) and keeps the original `pg_isready` output in `rawMessage`.

## Ubuntu deploy
1. Install base packages:
   - `sudo apt update`
   - `sudo apt install -y git curl build-essential python3 python3-venv postgresql-client`
2. Install Node.js 20+.
3. Clone repo and configure `.env`.
4. Run deploy script:
   - `chmod +x scripts/deploy-ubuntu.sh`
   - `./scripts/deploy-ubuntu.sh`

`scripts/deploy-ubuntu.sh` always removes `node_modules` and runs `npm ci`.
This avoids Windows/Linux native binary mismatch issues.
The script also creates `.venv` and installs Python deps there.
For default PostgreSQL runtime the deploy script skips `prisma migrate deploy` and only generates the runtime client.

## systemd service
Service template:
- [deploy/systemd/brothershop.service](deploy/systemd/brothershop.service)

Install steps (adjust user/path if needed):
1. Create service user:
   - `sudo useradd --system --home /opt/brothershop --shell /usr/sbin/nologin brothershop`
2. Set ownership:
   - `sudo chown -R brothershop:brothershop /opt/brothershop`
3. Make scripts executable:
   - `chmod +x /opt/brothershop/scripts/deploy-ubuntu.sh`
   - `chmod +x /opt/brothershop/scripts/systemd-healthcheck.sh`
4. Install unit:
   - `sudo cp /opt/brothershop/deploy/systemd/brothershop.service /etc/systemd/system/brothershop.service`
   - `sudo systemctl daemon-reload`
   - `sudo systemctl enable --now brothershop`
5. Check status/logs:
   - `sudo systemctl status brothershop`
   - `journalctl -u brothershop -f`

## Health endpoint and checks
- API health endpoint: `GET /api/health` (path can be changed by `HEALTHCHECK_PATH`).
- Service post-start healthcheck script:
  - [scripts/systemd-healthcheck.sh](scripts/systemd-healthcheck.sh)
- Update alerts file:
  - `data/update-alert.log`

## Important env vars for production
- `APP_RESTART_MODE=auto` (`auto|spawn|exit`)
- `PRISMA_RUNTIME=postgres`
- `BACKUP_CRON_EXPRESSION` (default `0 3 * * *`)
- `BACKUP_CRON_TIMEZONE` (example `Asia/Irkutsk`)
- `UPDATE_NPM_INSTALL_COMMAND` (default `npm ci`)
- `HEALTHCHECK_PATH` (default `/api/health`)
- `POST_RESTART_HEALTHCHECK_ENABLED=true`
- `POST_RESTART_HEALTHCHECK_TIMEOUT_MS=45000`
- `POST_RESTART_HEALTHCHECK_INTERVAL_MS=1500`
- `POST_RESTART_HEALTHCHECK_HOST=127.0.0.1`
- `UPDATE_COMMAND_MAX_BUFFER_BYTES=10485760`
- `BOT_PYTHON_PATH=/opt/brothershop/.venv/bin/python`

