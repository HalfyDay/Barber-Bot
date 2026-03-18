# PostgreSQL Cutover Runbook

Generated at: 2026-03-17T11:10:25.482Z

## Current Readiness
- Label: server
- Users: 215
- Appointments: 286
- Schedules: 72
- Duplicate phones: 2
- Duplicate Telegram IDs: 1
- Appointments without UserID: 74
- Incomplete schedules: 16
- Removed exact duplicate rows in bundle: 52
- Conflicting duplicate groups in bundle: 0
- Ready for smoke migration: yes

## Schema Blockers
- none

## Artifact Checklist
- inventory: exists=yes, sizeBytes=1094, path=D:\Works\Barber Bot\docs\reports\server-postgres-migration-inventory.json
- duplicates: exists=yes, sizeBytes=2072, path=D:\Works\Barber Bot\docs\reports\server-postgres-duplicate-users.json
- cleanup: exists=yes, sizeBytes=27227, path=D:\Works\Barber Bot\docs\reports\server-postgres-cleanup-candidates.json
- backlog: exists=yes, sizeBytes=2822, path=D:\Works\Barber Bot\docs\reports\SERVER_POSTGRES_CLEANUP_BACKLOG_2026-03-17.md
- initSql: exists=yes, sizeBytes=6571, path=D:\Works\Barber Bot\docs\reports\postgres-target-init.sql
- importSql: exists=yes, sizeBytes=233903, path=D:\Works\Barber Bot\docs\reports\server-postgres-import-sanitized.sql
- bundle: exists=yes, sizeBytes=322468, path=D:\Works\Barber Bot\docs\reports\server-postgres-export-bundle-sanitized.json
- schemaGap: exists=yes, sizeBytes=381, path=D:\Works\Barber Bot\docs\reports\POSTGRES_TARGET_SCHEMA_GAP_2026-03-17.md
- sanitization: exists=yes, sizeBytes=8051, path=D:\Works\Barber Bot\docs\reports\server-postgres-bundle-sanitization.json

## Pre-Cutover Checklist
1. Take a fresh read-only copy of the current production SQLite file.
2. Re-run inventory, duplicates, cleanup and export bundle against that final snapshot.
3. Confirm the final reports still match the expected cleanup scope.
4. Freeze writes briefly before the final import window.
5. Keep the previous SQLite snapshot untouched until the stabilization window passes.

## Smoke Rehearsal Commands
```powershell
npm run db:smoke-preflight -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --init-sql docs/reports/postgres-target-init.sql --import-sql docs/reports/server-postgres-import-sanitized.sql --bundle docs/reports/server-postgres-export-bundle-sanitized.json
npm run db:smoke-run -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --init-sql docs/reports/postgres-target-init.sql --import-sql docs/reports/server-postgres-import-sanitized.sql --bundle docs/reports/server-postgres-export-bundle-sanitized.json
powershell -File scripts/run-postgres-rehearsal.ps1 -DatabaseUrl "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" -InitSql "docs/reports/postgres-target-init.sql" -ImportSql "docs/reports/server-postgres-import-sanitized.sql" -Bundle "docs/reports/server-postgres-export-bundle-sanitized.json" -StartApp
```

## Manual Cutover Commands
```powershell
npm run db:apply-sql -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --file docs/reports/postgres-target-init.sql
npm run db:apply-sql -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --file docs/reports/server-postgres-import-sanitized.sql
npm run db:verify-import -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --bundle docs/reports/server-postgres-export-bundle-sanitized.json --write docs/reports/postgres-import-verification.json
```

## Post-Cutover Application Smoke Commands
```powershell
npm run app:smoke -- --base-url "http://127.0.0.1:3000" --owner-login "<owner-login>" --owner-password "<owner-password>" --home-phone "<home-phone>" --home-password "<home-password>" --write docs/reports/app-runtime-smoke.json --write-summary docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md
powershell -File scripts/run-app-smoke.ps1 -BaseUrl "http://127.0.0.1:3000" -OwnerLogin "<owner-login>" -OwnerPassword "<owner-password>" -HomePhone "<home-phone>" -HomePassword "<home-password>" -WriteJson "docs/reports/app-runtime-smoke.json" -WriteSummary "docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md"
```

## Application Smoke Checklist
- Owner login
- CRM appointments list
- Site booking create
- Bot booking create
- Bot cancellation
- Staff schedule update
- Reminder path check

## Rollback Plan
1. Stop the application processes.
2. Restore the previous SQLite-based configuration.
3. Point runtime env back to the SQLite datasource.
4. Start the app with the preserved SQLite snapshot.
5. Re-run the same smoke checklist on SQLite.

## Supporting Reports
- Cleanup backlog: D:\Works\Barber Bot\docs\reports\SERVER_POSTGRES_CLEANUP_BACKLOG_2026-03-17.md
