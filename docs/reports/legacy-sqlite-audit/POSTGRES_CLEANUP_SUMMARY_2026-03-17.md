# PostgreSQL Cleanup Summary

Date: 2026-03-17

## Main Result
The migration prep phase is now split into three concrete report types:
- duplicate users
- orphan appointments
- incomplete schedules

## Duplicate Users
Source: [postgres-duplicate-users.json](/d:/Works/Barber%20Bot/docs/reports/postgres-duplicate-users.json)

- `2` duplicate normalized phone groups
- `1` duplicate `TelegramID` group

These duplicates should be resolved before production cutover so user identity stays deterministic after PostgreSQL import.

## Orphan Appointments
Source: [postgres-cleanup-candidates.json](/d:/Works/Barber%20Bot/docs/reports/postgres-cleanup-candidates.json)

- `75` appointments without `UserID`
- `73` of them also have no usable phone number
- `2` have a phone number but no matching user by phone
- `0` have an unambiguous single user match

Practical conclusion:
- most orphan appointments look like historical/manual records and should probably remain importable as orphan history
- the `2` rows with phone but no matching user should be reviewed manually

## Incomplete Schedules
Source: [postgres-cleanup-candidates.json](/d:/Works/Barber%20Bot/docs/reports/postgres-cleanup-candidates.json)

- `16` schedule rows without `Barber`
- `16` schedule rows without `Date`

Practical conclusion:
- these rows should be reviewed as placeholders or stale data before real cutover

## Recommended Next Action
1. Resolve the `Users` duplicates.
2. Decide policy for orphan historical appointments:
   - keep as imported history without `UserID`
   - or backfill manually if business really needs linkage
3. Remove or normalize incomplete schedule placeholders before final migration.
