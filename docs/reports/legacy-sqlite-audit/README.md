# Legacy SQLite Audit

This directory stores historical SQLite audit and migration artifacts.

These files are kept for:
- migration history
- local vs server snapshot comparison
- server cleanup planning
- archived import/export evidence

They are not part of the live application runtime.

## Typical Contents
- local inventory / dry-run / duplicates / cleanup reports
- server inventory / dry-run / duplicates / cleanup reports
- local-vs-server diff reports
- exported SQLite bundles
- SQL generated from SQLite bundles
- historical markdown summaries

## Important
- Paths inside these files may still point to old SQLite snapshot locations.
- This is expected for historical audit evidence.
- Do not treat those paths as the current application database.

## Current Runtime
The live application runtime is PostgreSQL-first.

Current operational PostgreSQL artifacts live in:

- [../README.md](d:/Works/Barber%20Bot/docs/reports/README.md)
