CREATE TABLE IF NOT EXISTS "CrmNotificationHistory" (
  "id" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "barbershopId" TEXT,
  "action" TEXT,
  "target" TEXT,
  "targetTable" TEXT,
  "recordId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CrmNotificationHistory_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "CrmNotificationHistory_barbershopId_createdAt_idx" ON "CrmNotificationHistory"("barbershopId", "createdAt");
ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "action" TEXT;
ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "target" TEXT;
ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "targetTable" TEXT;
ALTER TABLE "CrmNotificationHistory" ADD COLUMN IF NOT EXISTS "recordId" TEXT;
