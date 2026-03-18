# Local vs Server Diff Summary

Date: 2026-03-17

This comparison uses:
- local inventory: [postgres-migration-inventory.json](/d:/Works/Barber%20Bot/docs/reports/postgres-migration-inventory.json)
- server inventory: [server-postgres-migration-inventory.json](/d:/Works/Barber%20Bot/docs/reports/server-postgres-migration-inventory.json)
- raw diff: [local-vs-server-inventory-diff.json](/d:/Works/Barber%20Bot/docs/reports/local-vs-server-inventory-diff.json)

## Count Differences
- `Users`: local `212`, server `215`, delta `+3`
- `Appointments`: local `273`, server `286`, delta `+13`
- `TelegramAuthRequests`: local `26`, server `18`, delta `-8`

All other tracked table counts match.

## Issue Differences
- `appointmentsMissingUserReference`: local `75`, server `74`, delta `-1`

All other tracked issue counters match between local and server snapshots.

## Practical Conclusion
- production data is close to local, but not identical
- the main production differences are extra `Users` and `Appointments`
- cleanup policy should be based on server reports, not local-only reports
- duplicate phone and `TelegramID` problems exist in both environments, so they are not just local artifacts
