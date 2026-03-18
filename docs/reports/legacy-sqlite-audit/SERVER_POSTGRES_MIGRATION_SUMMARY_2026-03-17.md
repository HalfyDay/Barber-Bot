# Server PostgreSQL Migration Summary

Date: 2026-03-17

Source snapshot:
- label: `server`
- database: `file:D:/Download/1BS/prisma/dev.db`
- resolved path: `D:/Download/1BS/prisma/dev.db`

## Row Counts
- `Users`: 215
- `Appointments`: 286
- `Schedules`: 72
- `Cost`: 5
- `Barbers`: 2
- `Positions`: 9
- `Services`: 6
- `ServicePrices`: 9
- `BotSettings`: 1
- `BotMessages`: 2
- `TelegramAuthRequests`: 18

## Findings
- `Users` has `2` duplicate normalized phone groups.
- `Users` has `1` duplicate `TelegramID` group.
- `Users` has `13` rows without `TelegramID`.
- `Appointments` has `74` rows without `UserID`.
- `Schedules` has `16` rows without `Barber`.
- `Schedules` has `16` rows without `Date`.
- No duplicate active appointment slots were detected.
- No orphan `ServicePrices` rows were detected.

## Cleanup Shape
- orphan appointments total: `74`
- orphan appointments without phone: `72`
- orphan appointments with phone but no matching user: `2`
- orphan appointments with unambiguous user match: `0`

Practical conclusion:
- most orphan appointments on the server also look like historical/manual rows and can likely stay orphaned during import
- the `2` rows with phone but no matching user should be reviewed manually
- duplicate `Users` are still a real production cleanup task before cutover

## Readiness
- dry-run import says `canStartImport = true`
- there are no hard blockers in current server snapshot
- cleanup is still recommended before production PostgreSQL cutover

## Generated Server Reports
- [Inventory JSON](/d:/Works/Barber%20Bot/docs/reports/server-postgres-migration-inventory.json)
- [Dry Run JSON](/d:/Works/Barber%20Bot/docs/reports/server-postgres-migration-dry-run.json)
- [Duplicate Users JSON](/d:/Works/Barber%20Bot/docs/reports/server-postgres-duplicate-users.json)
- [Cleanup Candidates JSON](/d:/Works/Barber%20Bot/docs/reports/server-postgres-cleanup-candidates.json)
