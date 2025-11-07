/*
  Warnings:

  - You are about to alter the column `telegramId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "telegramId" BIGINT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "lastNameChanged" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "barber" TEXT
);
INSERT INTO "new_User" ("id", "lastNameChanged", "name", "phone", "telegramId") SELECT "id", coalesce("lastNameChanged", CURRENT_TIMESTAMP) AS "lastNameChanged", "name", "phone", "telegramId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
