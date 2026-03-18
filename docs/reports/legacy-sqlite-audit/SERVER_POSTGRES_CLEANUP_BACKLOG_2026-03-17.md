# Server PostgreSQL Cleanup Backlog

Generated at: 2026-03-17T09:30:59.405Z

## Summary
- Duplicate phones: 2
- Duplicate Telegram IDs: 1
- Appointments without UserID: 74
- Appointments without UserID and without phone: 72
- Appointments without UserID but with phone and no user match: 2
- Appointments without UserID with single candidate user: 0
- Incomplete schedules: 16

## Production Cleanup Order
1. Resolve duplicate user identities before any PostgreSQL import.
2. Decide how to handle orphan appointments without UserID.
3. Remove or archive broken schedule rows without Barber/Date.
4. Re-run inventory, duplicates, cleanup and export bundle after cleanup.

## Duplicate Phones
- +79086451311: 45c06160-a2c0-4f80-aee8-a01c2f291c56 (79086451311), 7eedc13c-155a-439b-9b82-bff4b9791c79 (79086451311)
- +89086570935: d71b2d18-72dd-400a-a9cb-09fb1faf7cfa (89086570935), 2cc84589-0df1-4c13-b30f-427a46ecd6f5 (89086570935)

## Duplicate Telegram IDs
- 1484246364: 7402964b-2a94-4fb2-ab8c-d590f72422c6 (79025158030), 1bd0053d-bb41-4d57-a880-2a255d8e59f9 (89025158030)

## Appointments Without UserID
- Total: 74
- Without phone: 72
- With phone but no matching user: 2
- With single candidate user: 0

### Single-match candidates
- none

### Phone present but no user match
- 039db845-bfca-478b-a254-dbd9646324dc: +79994437455 (Константин )
- 9699807e-b647-463c-bda7-420b81412040: +79500577708 (Андрей Викторович Андриевский )

## Incomplete Schedules
- 8fadf6dd-b5c1-43c2-824e-6f460b00b430: barber=null, date=null, week=null
- 0e5f0208-530b-4ba9-9ec3-af27a9942cbe: barber=null, date=null, week=17:00-22:00
- 6c911946-3c2a-4132-9013-0ef49fd1a029: barber=null, date=null, week=20:00-22:00
- fe84464b-3c06-4683-b9a4-5aad1d7c8e85: barber=null, date=null, week=20:00-22:00
- 2d011983-35c5-48fd-8b98-db6f07c47fb8: barber=null, date=null, week=123
- 7303fc47-4fb0-4e0f-b92d-df8bb0673588: barber=null, date=null, week=0
- 9352cd60-c553-44b7-8b2b-a7af9cb512aa: barber=null, date=null, week=0
- 26acb716-72b5-4031-aa62-a1f2e5e53a90: barber=null, date=null, week=null
- 93c16453-3c80-4c2f-948e-8ed00120e52b: barber=null, date=null, week=12:00 - 20:00
- af5656c4-d74b-4a15-b1dc-7f63069b5632: barber=null, date=null, week=null
- dc2a33ea-dab3-4c4d-b287-12e7bf3007a0: barber=null, date=null, week=null
- 11458523-b48a-4562-85d5-23ed35b95ffb: barber=null, date=null, week=null
- 0a28474c-8f7b-4122-9d9e-6d4cb3c0fe3f: barber=null, date=null, week=20:00 - 23:00
- 1c8f5937-5506-44c0-ba0b-67ec84853cbf: barber=null, date=null, week=null
- 66029ef2-e62f-450c-8ab7-9ff89dec4964: barber=null, date=null, week=null
- 51def764-30da-42e4-83e5-a36b6f7738f7: barber=null, date=null, week=null

## Import Readiness
- duplicateActiveSlots: 0
- servicePricesMissingBarber: 0
- servicePricesMissingService: 0
