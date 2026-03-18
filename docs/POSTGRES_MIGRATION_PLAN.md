# PostgreSQL Migration Plan

## Goal
Move the project from local SQLite storage to PostgreSQL without changing public API behavior for the bot, site, or CRM.

## Commands
- `npm run db:inventory`
- `npm run db:migration:dry-run`
- `npm run db:duplicates`
- `npm run db:cleanup-report`
- `npm run db:report-diff`
- `npm run db:export-bundle`
- `npm run db:sanitize-bundle`
- `npm run db:cleanup-backlog`
- `npm run db:bundle-to-sql`
- `npm run db:schema-gap`
- `npm run db:init-sql`
- `npm run db:apply-sql`
- `npm run db:verify-import`
- `npm run db:smoke-run`
- `npm run db:smoke-preflight`
- `npm run db:cutover-packet`
- `npm run prisma:generate:postgres`
- `npm run app:smoke`

## Current Reports
- [Target schema gap report](/d:/Works/Barber%20Bot/docs/reports/POSTGRES_TARGET_SCHEMA_GAP_2026-03-17.md)
- [PostgreSQL target init SQL](/d:/Works/Barber%20Bot/docs/reports/postgres-target-init.sql)
- [PostgreSQL cutover packet](/d:/Works/Barber%20Bot/docs/reports/postgres-cutover-packet.json)
- [PostgreSQL cutover runbook](/d:/Works/Barber%20Bot/docs/reports/POSTGRES_CUTOVER_RUNBOOK_2026-03-17.md)

## Legacy SQLite Audit Reports
- [Inventory summary](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/POSTGRES_MIGRATION_SUMMARY_2026-03-17.md)
- [Cleanup summary](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/POSTGRES_CLEANUP_SUMMARY_2026-03-17.md)
- [Server inventory summary](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/SERVER_POSTGRES_MIGRATION_SUMMARY_2026-03-17.md)
- [Local vs server diff summary](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/LOCAL_VS_SERVER_DIFF_SUMMARY_2026-03-17.md)
- [Server cleanup backlog](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/SERVER_POSTGRES_CLEANUP_BACKLOG_2026-03-17.md)
- [Schema gap report](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/POSTGRES_SCHEMA_GAP_2026-03-17.md)
- [PostgreSQL server import SQL](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/server-postgres-import.sql)
- [Sanitized PostgreSQL server bundle](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/server-postgres-export-bundle-sanitized.json)
- [Sanitized PostgreSQL server import SQL](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/server-postgres-import-sanitized.sql)
- [PostgreSQL bundle sanitization report](/d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit/server-postgres-bundle-sanitization.json)

## Server Audit Workflow
1. Copy the server SQLite file to a safe local path or mount it read-only.
2. Run the same reports against that file with explicit arguments, for example:
   - `npm run db:inventory -- --database-url "file:D:/backups/server-dev.db" --label server --write docs/reports/legacy-sqlite-audit/server-inventory.json`
   - `npm run db:migration:dry-run -- --database-url "file:D:/backups/server-dev.db" --label server --write docs/reports/legacy-sqlite-audit/server-dry-run.json`
   - `npm run db:duplicates -- --database-url "file:D:/backups/server-dev.db" --label server --write docs/reports/legacy-sqlite-audit/server-duplicates.json`
   - `npm run db:cleanup-report -- --database-url "file:D:/backups/server-dev.db" --label server --write docs/reports/legacy-sqlite-audit/server-cleanup.json`
   - `npm run db:export-bundle -- --database-url "file:D:/backups/server-dev.db" --label server --write docs/reports/legacy-sqlite-audit/server-export-bundle.json`
   - `npm run db:sanitize-bundle -- --bundle docs/reports/legacy-sqlite-audit/server-export-bundle.json --write-bundle docs/reports/legacy-sqlite-audit/server-export-bundle-sanitized.json --write-report docs/reports/legacy-sqlite-audit/server-bundle-sanitization.json`
   - `npm run db:cleanup-backlog -- --inventory docs/reports/legacy-sqlite-audit/server-inventory.json --duplicates docs/reports/legacy-sqlite-audit/server-duplicates.json --cleanup docs/reports/legacy-sqlite-audit/server-cleanup.json --write docs/reports/legacy-sqlite-audit/server-cleanup-backlog.md --title "Server PostgreSQL Cleanup Backlog"`
   - `npm run db:bundle-to-sql -- --bundle docs/reports/legacy-sqlite-audit/server-export-bundle-sanitized.json --write docs/reports/legacy-sqlite-audit/server-import-sanitized.sql`
   - `npm run db:schema-gap -- --bundle docs/reports/legacy-sqlite-audit/server-export-bundle.json --schema prisma/schema.sqlite.legacy.prisma --write docs/reports/legacy-sqlite-audit/schema-gap.md`
   - `npm run db:init-sql -- --schema prisma/schema.postgresql.prisma --write docs/reports/postgres-target-init.sql`
   - `npm run db:apply-sql -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --file docs/reports/postgres-target-init.sql`
   - `npm run db:apply-sql -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --file docs/reports/legacy-sqlite-audit/server-import-sanitized.sql`
   - `npm run db:verify-import -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" --bundle docs/reports/legacy-sqlite-audit/server-export-bundle-sanitized.json --write docs/reports/postgres-import-verification.json`
   - `npm run db:smoke-preflight -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public"`
   - `npm run db:smoke-run -- --database-url "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public"`
   - `powershell -File scripts/run-postgres-rehearsal.ps1 -DatabaseUrl "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public" -StartApp`
   - `npm run db:cutover-packet`
   - `npm run app:smoke -- --base-url "http://127.0.0.1:3000" --owner-login "..." --owner-password "..." --home-phone "..." --home-password "..."`
3. Compare local and server reports:
   - `npm run db:report-diff -- --left docs/reports/legacy-sqlite-audit/postgres-migration-inventory.json --right docs/reports/legacy-sqlite-audit/server-inventory.json --write docs/reports/legacy-sqlite-audit/local-vs-server-inventory-diff.json`
4. Only after that decide what cleanup belongs to local data and what cleanup belongs to production data.

## Current Readiness
- Core booking logic is centralized in services and dedicated routes.
- Bot flows no longer depend on direct SQLite reads for booking and profile scenarios.
- Critical admin, owner, home, and bot-internal routes are covered by automated tests.
- `server.js` is mostly application wiring instead of business logic.
- Application runtime is PostgreSQL-only; SQLite remains only for legacy snapshots and migration tooling.
- Local Windows portable PostgreSQL can live under `.local/postgresql-portable` and be managed through `npm run postgres:portable:*`.

## Constraints
- Do not change public HTTP contracts during the migration.
- Migrate only after all critical writes go through server-side services.
- Keep the project runnable locally during the transition.

## Phase 1: Inventory
1. List every place that still assumes SQLite-specific behavior.
2. Mark tables by risk:
   - High: `Appointments`, `Users`, `Schedules`, `Services`, `ServicePrices`, `Barbers`
   - Medium: `BotSettings`, `Positions`, `TelegramAuthRequests`
   - Low: legacy and support tables/files
3. Confirm which non-database files remain file-based by design:
   - bot menu JSON
   - image assets
   - logs
   - backups

## Phase 2: Prisma Preparation
1. Switch Prisma datasource configuration to support environment-based provider selection.
2. Prepare PostgreSQL connection variables in `.env`:
   - `POSTGRES_DATABASE_URL`
   - optional `POSTGRES_SHADOW_DATABASE_URL` for migrations
3. Review schema types that need explicit PostgreSQL handling:
   - timestamps
   - booleans
   - numeric price fields
   - unique constraints for booking and auth flows

## Phase 3: Data Mapping
1. Define table-by-table migration rules:
   - preserve IDs exactly where possible
   - normalize nullable phone and telegram fields
   - preserve appointment status values as-is after current normalization
2. Decide what is not migrated from SQLite:
   - obsolete temp rows
   - deprecated legacy artifacts
3. Prepare verification queries for row counts and key invariants.

## Phase 4: Migration Tooling
1. Create a dedicated migration script, for example:
   - read SQLite
   - transform rows
   - write to PostgreSQL in deterministic order
2. Run import in dependency-safe order:
   - `Positions`
   - `Barbers`
   - `Services`
   - `ServicePrices`
   - `Users`
   - `Schedules`
   - `Appointments`
   - `BotSettings`
   - `TelegramAuthRequests`
3. Add dry-run mode with summary output only.

## Phase 5: Verification
1. Compare row counts between SQLite and PostgreSQL.
2. Validate business invariants:
   - no duplicate active appointment conflicts
   - all appointment foreign references resolve
   - all service price mappings remain intact
   - staff/barber identity mapping still works
3. Run the full automated test suite against PostgreSQL-backed environment.

## Phase 6: Cutover
1. Freeze writes briefly.
2. Run final incremental migration or final full import.
3. Point Prisma to PostgreSQL.
4. Start the app and run smoke checks:
   - owner login
   - CRM appointments list
   - site booking
   - bot booking
   - reminders
5. Keep SQLite backup untouched until production stabilization window passes.

## Smoke Checklist
- Create appointment from site
- Create appointment from bot
- Create and edit appointment from CRM
- Cancel appointment from bot
- Update schedule from staff account
- Update bot token and owner settings
- Send test reminder path
- Run HTTP smoke against the started app:
  - `npm run app:smoke -- --base-url "http://127.0.0.1:3000" --owner-login "..." --owner-password "..." --home-phone "..." --home-password "..."`
  - or `powershell -File scripts/run-app-smoke.ps1 -BaseUrl "http://127.0.0.1:3000" -OwnerLogin "..." -OwnerPassword "..." -HomePhone "..." -HomePassword "..."`

## Risks
- hidden SQLite assumptions in legacy helpers
- timezone differences between SQLite text dates and PostgreSQL timestamps
- implicit ordering differences without explicit `orderBy`
- numeric parsing drift for prices and commission fields

## Done Criteria
- all tests pass with PostgreSQL configuration
- booking flows behave identically for bot, site, and CRM
- no direct operational dependency on SQLite remains
- rollback plan and final SQLite snapshot are stored
