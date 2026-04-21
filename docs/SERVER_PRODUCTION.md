# Production Server Notes

Current production server for `BrotherShop`.

## Host

- Hostname: `spb-3-vm-8whw`
- Project path: `/opt/brothershop`
- Public panel: `https://panel.brothershop.website/`
- Reverse proxy: `nginx`

TLS note:

- The nginx certificate must include `brothershop.website`, `www.brothershop.website`, and `panel.brothershop.website`
- If `panel.brothershop.website` is served with a certificate issued only for `brothershop.website`, browsers and antivirus products will flag CRM as unsafe even when the app code itself is clean

## Services

- Systemd service: `brothershop`
- Systemd user/group: `brothershop:brothershop`
- Node entrypoint: `/opt/brothershop/server.js`
- Python bot entrypoint: `/opt/brothershop/BotBrotherShop.py`
- Python venv: `/opt/brothershop/.venv`

## Runtime

- App runtime: `PRISMA_RUNTIME=postgres`
- Prisma schema: `prisma/schema.postgresql.prisma`
- Live application no longer uses `prisma/dev.db`
- PostgreSQL is the active runtime for CRM, site, bot, reminders, backup, and CRM-triggered updates

## Environment Notes

Do not commit real secrets into the repository.

Important production env keys:

- `PRISMA_RUNTIME=postgres`
- `POSTGRES_DATABASE_URL=...`
- `POSTGRES_SHADOW_DATABASE_URL=...`
- `JWT_SECRET=...`
- `HOME_JWT_SECRET=...`
- `BOT_INTERNAL_API_TOKEN=...`
- `BOT_PYTHON_PATH=/opt/brothershop/.venv/bin/python`
- `APP_TIMEZONE=Asia/Irkutsk`
- `POSTGRES_PG_DUMP_PATH=/usr/bin/pg_dump`
- `POSTGRES_PSQL_PATH=/usr/bin/psql`

Important:

- If PostgreSQL password contains reserved URL characters, the password part inside `POSTGRES_DATABASE_URL` must be URL-encoded.
- `psql` and `pg_dump` do not understand Prisma-style `?schema=public` the same way Prisma does; this is handled in app code.

## Operational Checks

Service status:

```bash
sudo systemctl status brothershop --no-pager -l
```

Live logs:

```bash
journalctl -u brothershop -f
```

Health check:

```bash
curl -sS http://127.0.0.1:3000/api/health
```

Check active app runtime:

```bash
sudo journalctl -u brothershop --no-pager | grep 'Prisma runtime=postgres' | tail
```

Check PostgreSQL activity:

```bash
sudo -u postgres psql -d brothershop -c "select pid, usename, application_name, client_addr, state from pg_stat_activity where datname = 'brothershop';"
```

## Backups

Current active backup format:

- PostgreSQL SQL dumps: `/opt/brothershop/backups/*.sql`

Useful commands:

```bash
find /opt/brothershop/backups -maxdepth 1 -type f -name '*.sql' -ls
```

Legacy and migration archives:

- `/opt/brothershop/backups/archive/legacy-sqlite-and-cutover-2026-03-18.tar.gz`

Historical SQLite and cutover folders were archived and removed from the active backup directory after successful migration.

## Auto Update

CRM-triggered auto-update is working on production.

Observed update flow:

1. Create pre-update PostgreSQL backup
2. Stash dirty worktree if needed
3. `git pull --ff-only origin main`
4. Skip unnecessary install/build steps when unchanged
5. Self-restart through systemd
6. Start app again in `postgres` runtime

Useful checks:

```bash
cd /opt/brothershop
sudo -u brothershop git rev-parse HEAD
sudo -u brothershop git status --short
sudo -u brothershop git stash list
```

## Git State

Current post-migration server policy:

- Keep one recent stash if it contains local server-only overrides worth preserving
- Avoid accumulating historical auto-update stashes indefinitely

At the end of PostgreSQL migration cleanup, one recent stash was intentionally left as a temporary reserve:

- `stash@{0}: auto-update-2026-03-18T08-29-45-670Z`

## Legacy SQLite Notes

- `prisma/dev.db` is not used by the live runtime anymore
- Keep old SQLite artifacts only as rollback/history during the observation period
- Remove or archive old SQLite snapshots only after stable PostgreSQL operation is confirmed

## Recommended Post-Deploy Smoke

After deploy or auto-update:

1. Open CRM and verify login
2. Check appointments, barbers, schedules
3. Create a test appointment in CRM
4. Verify site and bot can see it
5. Create a test appointment via site
6. Verify CRM and bot can see it
7. Create a test appointment via bot
8. Verify CRM and site can see it
9. Check backup creation from CRM
10. Watch `journalctl -u brothershop -f` for a few minutes
