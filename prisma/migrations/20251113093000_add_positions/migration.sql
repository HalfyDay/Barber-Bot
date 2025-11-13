-- CreateTable
CREATE TABLE "Positions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "salary" INTEGER,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Barbers" (
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
    "positionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Barbers_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Positions" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Barbers" ("avatarUrl", "color", "createdAt", "description", "id", "isActive", "login", "name", "nickname", "orderIndex", "password", "phone", "rating", "role", "telegramId", "updatedAt") SELECT "avatarUrl", "color", "createdAt", "description", "id", "isActive", "login", "name", "nickname", "orderIndex", "password", "phone", "rating", "role", "telegramId", "updatedAt" FROM "Barbers";
DROP TABLE "Barbers";
ALTER TABLE "new_Barbers" RENAME TO "Barbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Positions_name_key" ON "Positions"("name");
