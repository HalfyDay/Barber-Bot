-- CreateTable: Businesses (global tenant registry in public schema)
CREATE TABLE IF NOT EXISTS "Businesses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "customDomain" TEXT,
    "dbSchema" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Businesses_pkey" PRIMARY KEY ("id")
);

-- CreateUniqueIndexes
CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_subdomain_key" ON "Businesses"("subdomain");
CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_customDomain_key" ON "Businesses"("customDomain");
CREATE UNIQUE INDEX IF NOT EXISTS "Businesses_dbSchema_key" ON "Businesses"("dbSchema");

-- CreateTable: TelegramAuthRequests (shared auth flow in public schema)
CREATE TABLE IF NOT EXISTS "TelegramAuthRequests" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "flow" TEXT NOT NULL DEFAULT 'login',
    "targetUserId" TEXT,
    "telegramId" TEXT,
    "phone" TEXT,
    "displayName" TEXT,
    "userId" TEXT,
    "errorMessage" TEXT,
    "createdAt" TEXT NOT NULL,
    "expiresAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "TelegramAuthRequests_pkey" PRIMARY KEY ("id")
);

-- CreateUniqueIndexes for TelegramAuthRequests
CREATE UNIQUE INDEX IF NOT EXISTS "TelegramAuthRequests_code_key" ON "TelegramAuthRequests"("code");
CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_status_expiresAt_idx" ON "TelegramAuthRequests"("status", "expiresAt");
CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_flow_targetUserId_idx" ON "TelegramAuthRequests"("flow", "targetUserId");
CREATE INDEX IF NOT EXISTS "TelegramAuthRequests_code_idx" ON "TelegramAuthRequests"("code");
