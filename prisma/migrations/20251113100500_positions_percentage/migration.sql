-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Positions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "commissionRate" REAL DEFAULT 0,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Positions" ("createdAt", "id", "name", "orderIndex", "updatedAt", "commissionRate")
SELECT "createdAt", "id", "name", "orderIndex", "updatedAt", COALESCE("salary", 0)
FROM "Positions";
DROP TABLE "Positions";
ALTER TABLE "new_Positions" RENAME TO "Positions";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Positions_name_key" ON "Positions"("name");
