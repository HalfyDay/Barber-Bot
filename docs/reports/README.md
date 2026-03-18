# Reports

This directory contains the current PostgreSQL-first operational artifacts for the project.

## Current PostgreSQL Artifacts
- `postgres-target-init.sql`
  Target PostgreSQL schema init SQL generated from `prisma/schema.postgresql.prisma`.
- `POSTGRES_TARGET_SCHEMA_GAP_*.md`
  Gap report for the PostgreSQL target schema.
- `postgres-cutover-packet.json`
  Machine-readable cutover manifest.
- `POSTGRES_CUTOVER_RUNBOOK_*.md`
  Human-readable cutover checklist and rollback order.
- `postgres-smoke-preflight.json`
  Preflight validation for PostgreSQL rehearsal/cutover.
- `postgres-smoke-verification.json`
  Import verification report against PostgreSQL.
- `POSTGRES_SMOKE_VERIFICATION_SUMMARY.md`
  Markdown summary for import verification.
- `app-runtime-smoke.json`
  Application-level smoke report after booting in PostgreSQL mode.
- `APP_RUNTIME_SMOKE_SUMMARY.md`
  Markdown summary for application smoke.

## Legacy SQLite Audit
Historical SQLite migration and audit artifacts were moved to:

- [legacy-sqlite-audit](d:/Works/Barber%20Bot/docs/reports/legacy-sqlite-audit)

These files are not part of the live PostgreSQL runtime. They are preserved only for migration history, comparison, and forensic review.

