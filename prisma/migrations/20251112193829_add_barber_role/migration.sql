/*
  Warnings:

  - You are about to drop the column `Алексей🦐` on the `Cost` table. All the data in the column will be lost.
  - You are about to drop the column `Алина💖` on the `Cost` table. All the data in the column will be lost.
  - You are about to drop the column `Владимир😎` on the `Cost` table. All the data in the column will be lost.
  - You are about to drop the column `Тимур🐼` on the `Cost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN "Time" TEXT;

-- CreateTable
CREATE TABLE "Barbers" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "role" TEXT NOT NULL DEFAULT 'owner',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ServicePrices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ServicePrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ServicePrices_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barbers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BotSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "botDescription" TEXT NOT NULL DEFAULT '',
    "aboutText" TEXT NOT NULL DEFAULT '',
    "isBotEnabled" BOOLEAN NOT NULL DEFAULT true,
    "bookingLimit" INTEGER NOT NULL DEFAULT 2,
    "minLeadHours" INTEGER NOT NULL DEFAULT 2,
    "maxDaysAhead" INTEGER NOT NULL DEFAULT 14,
    "lastSyncSource" TEXT NOT NULL DEFAULT 'site',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BotMessages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT,
    "text" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Услуги" TEXT,
    "Тимур" REAL,
    "Владимир" REAL,
    "Алина" REAL,
    "Алексей" REAL,
    "Длительность" TEXT
);
INSERT INTO "new_Cost" ("id", "Длительность", "Услуги") SELECT "id", "Длительность", "Услуги" FROM "Cost";
DROP TABLE "Cost";
ALTER TABLE "new_Cost" RENAME TO "Cost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ServicePrices_serviceId_barberId_key" ON "ServicePrices"("serviceId", "barberId");

-- CreateIndex
CREATE UNIQUE INDEX "BotMessages_code_key" ON "BotMessages"("code");
