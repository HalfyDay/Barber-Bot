-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."BarberRole" AS ENUM ('owner', 'staff');

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "TelegramID" DOUBLE PRECISION,
    "Name" TEXT,
    "Phone" TEXT,
    "LastNameChanged" TEXT,
    "Barber" TEXT,
    "HomePasswordHash" TEXT,
    "HomePasswordSalt" TEXT,
    "HomeIsActive" BOOLEAN NOT NULL DEFAULT true,
    "HomeCreatedAt" TEXT,
    "HomeUpdatedAt" TEXT,
    "HomeLastLoginAt" TEXT,
    "HomePhoneChangedAt" TEXT,
    "HomeTelegramChangedAt" TEXT,
    "LastHaircutReminderSent" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Appointments" (
    "id" TEXT NOT NULL,
    "CustomerName" TEXT,
    "Phone" TEXT,
    "Barber" TEXT,
    "Date" TEXT,
    "Time" TEXT,
    "Status" TEXT,
    "Services" TEXT,
    "Reminder2hClientSent" BOOLEAN,
    "Reminder2hBarberSent" BOOLEAN,
    "UserID" TEXT,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Schedules" (
    "id" TEXT NOT NULL,
    "Barber" TEXT,
    "DayOfWeek" TEXT,
    "Today" BOOLEAN,
    "Date" TEXT,
    "Week" TEXT,
    "Time" TEXT,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cost" (
    "id" TEXT NOT NULL,
    "РЈСЃР»СѓРіРё" TEXT,
    "РўРёРјСѓСЂ" DOUBLE PRECISION,
    "Р’Р»Р°РґРёРјРёСЂ" DOUBLE PRECISION,
    "РђР»РёРЅР°" DOUBLE PRECISION,
    "РђР»РµРєСЃРµР№" DOUBLE PRECISION,
    "Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ" TEXT,

    CONSTRAINT "Cost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "description" TEXT,
    "rating" TEXT,
    "avatarUrl" TEXT,
    "color" TEXT,
    "phone" TEXT,
    "telegramId" TEXT,
    "login" TEXT,
    "password" TEXT,
    "cardTitle" TEXT NOT NULL DEFAULT '',
    "cardDescription" TEXT NOT NULL DEFAULT '',
    "cardPhrase" TEXT NOT NULL DEFAULT '',
    "cardMode" TEXT NOT NULL DEFAULT 'generated',
    "cardImageUrl" TEXT NOT NULL DEFAULT '',
    "cardPhotoGrayscale" BOOLEAN NOT NULL DEFAULT true,
    "cardPhotoOutline" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "role" "public"."BarberRole" NOT NULL DEFAULT 'owner',
    "positionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Barbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Positions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "commissionRate" DOUBLE PRECISION DEFAULT 0,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ServicePrices" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServicePrices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BotSettings" (
    "id" TEXT NOT NULL,
    "botDescription" TEXT NOT NULL DEFAULT '',
    "aboutText" TEXT NOT NULL DEFAULT '',
    "isBotEnabled" BOOLEAN NOT NULL DEFAULT true,
    "bookingLimit" INTEGER NOT NULL DEFAULT 2,
    "minLeadHours" INTEGER NOT NULL DEFAULT 2,
    "maxDaysAhead" INTEGER NOT NULL DEFAULT 14,
    "lastSyncSource" TEXT NOT NULL DEFAULT 'site',
    "botToken" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BotSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BotMessages" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT,
    "text" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BotMessages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TelegramAuthRequests" (
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

-- CreateIndex
CREATE INDEX "Users_Phone_idx" ON "public"."Users"("Phone");

-- CreateIndex
CREATE INDEX "Users_TelegramID_idx" ON "public"."Users"("TelegramID");

-- CreateIndex
CREATE UNIQUE INDEX "Positions_name_key" ON "public"."Positions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ServicePrices_serviceId_barberId_key" ON "public"."ServicePrices"("serviceId", "barberId");

-- CreateIndex
CREATE UNIQUE INDEX "BotMessages_code_key" ON "public"."BotMessages"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TelegramAuthRequests_code_key" ON "public"."TelegramAuthRequests"("code");

-- CreateIndex
CREATE INDEX "TelegramAuthRequests_status_expiresAt_idx" ON "public"."TelegramAuthRequests"("status", "expiresAt");

-- CreateIndex
CREATE INDEX "TelegramAuthRequests_flow_targetUserId_idx" ON "public"."TelegramAuthRequests"("flow", "targetUserId");

-- CreateIndex
CREATE INDEX "TelegramAuthRequests_code_idx" ON "public"."TelegramAuthRequests"("code");

-- AddForeignKey
ALTER TABLE "public"."Barbers" ADD CONSTRAINT "Barbers_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "public"."Positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServicePrices" ADD CONSTRAINT "ServicePrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServicePrices" ADD CONSTRAINT "ServicePrices_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "public"."Barbers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

