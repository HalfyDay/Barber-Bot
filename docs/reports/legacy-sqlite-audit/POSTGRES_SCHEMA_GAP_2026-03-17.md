# PostgreSQL Schema Gap Report

Generated at: 2026-03-18T06:40:03.844Z

## Current Prisma State
- Provider: sqlite
- URL: env("LEGACY_SQLITE_DATABASE_URL")
- Models: 10

## Import Tables
- Positions
- Barbers
- Services
- ServicePrices
- Users
- Schedules
- Appointments
- BotSettings
- BotMessages
- TelegramAuthRequests

## Missing Prisma Models
- TelegramAuthRequests

## Blockers
- Datasource provider is sqlite, expected postgresql.
- Prisma schema is missing import tables: TelegramAuthRequests.
