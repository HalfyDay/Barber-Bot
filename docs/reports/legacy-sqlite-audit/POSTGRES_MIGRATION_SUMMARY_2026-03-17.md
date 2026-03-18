# PostgreSQL Migration Summary

Date: 2026-03-17

## Source Snapshot
- Database: `file:.legacy/sqlite-snapshots/prisma-dev.db`
- Resolved path: `D:\Works\Barber Bot\.legacy\sqlite-snapshots\prisma-dev.db`

## Row Counts
- `Users`: 212
- `Appointments`: 274
- `Schedules`: 72
- `Cost`: 5
- `Barbers`: 2
- `Positions`: 9
- `Services`: 6
- `ServicePrices`: 9
- `BotSettings`: 1
- `BotMessages`: 2
- `TelegramAuthRequests`: 8

## Findings
- `Users` has `2` duplicate normalized phone numbers.
- `Users` has `1` duplicate `TelegramID`.
- `Users` has `13` rows without `TelegramID`.
- `Appointments` has `75` rows without `UserID`.
- `Schedules` has `16` rows without `Barber`.
- `Schedules` has `16` rows without `Date`.
- No duplicate active appointment slots were detected.
- No orphan `ServicePrices` rows were detected.

## Current Readiness
- Dry-run import order is defined.
- No hard blockers were detected for starting a migration import.
- Pre-cutover cleanup is still recommended before production switch.

## Recommended Cleanup Before Real Cutover
1. Resolve duplicate user phone records.
2. Resolve duplicate `TelegramID` ownership.
3. Review whether appointments without `UserID` should remain orphaned or be backfilled.
4. Review schedule rows without `Barber/Date` and decide whether they are placeholders or stale data.

## Generated Reports
- [Inventory JSON](/d:/Works/Barber%20Bot/docs/reports/postgres-migration-inventory.json)
- [Dry Run JSON](/d:/Works/Barber%20Bot/docs/reports/postgres-migration-dry-run.json)
