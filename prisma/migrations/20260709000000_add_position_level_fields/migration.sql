-- AlterTable: Positions - rename commissionRate to masterSharePercent and add new fields
ALTER TABLE "Positions" RENAME COLUMN "commissionRate" TO "masterSharePercent";

ALTER TABLE "Positions" ADD COLUMN "requiredClientVolume" INTEGER DEFAULT 0;
ALTER TABLE "Positions" ADD COLUMN "requiredRetainedClients" INTEGER DEFAULT 0;
ALTER TABLE "Positions" ADD COLUMN "targetReturnPercent" DOUBLE PRECISION DEFAULT 0;
ALTER TABLE "Positions" ADD COLUMN "specialConditions" TEXT;
ALTER TABLE "Positions" ADD COLUMN "privileges" TEXT;

-- CreateTable: PositionServiceMaxPrices
CREATE TABLE "PositionServiceMaxPrices" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "maxPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PositionServiceMaxPrices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex: Unique constraint
CREATE UNIQUE INDEX "PositionServiceMaxPrices_positionId_serviceId_key" ON "PositionServiceMaxPrices"("positionId", "serviceId");

-- AddForeignKey
ALTER TABLE "PositionServiceMaxPrices" ADD CONSTRAINT "PositionServiceMaxPrices_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PositionServiceMaxPrices" ADD CONSTRAINT "PositionServiceMaxPrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
