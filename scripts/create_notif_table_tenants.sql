CREATE TABLE IF NOT EXISTS "CrmNotificationHistory" (
  "id" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "barbershopId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CrmNotificationHistory_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "CrmNotificationHistory_barbershopId_createdAt_idx" ON "CrmNotificationHistory"("barbershopId", "createdAt");
