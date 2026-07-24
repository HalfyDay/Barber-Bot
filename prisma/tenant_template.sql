
-- CreateTable
CREATE TABLE "Cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Cities_isActive_orderIndex_idx" ON "Cities"("isActive", "orderIndex");

-- CreateEnum
CREATE TYPE "BarberRole" AS ENUM ('owner', 'staff');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
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
    "LastHaircutReminderSent" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
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
    "Comment" TEXT,
    "CoverBs" INTEGER,
    "DiscountRub" INTEGER,
    "cityId" TEXT,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL,
    "Barber" TEXT,
    "DayOfWeek" TEXT,
    "Today" BOOLEAN,
    "Date" TEXT,
    "Week" TEXT,
    "Time" TEXT,
    "cityId" TEXT,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "description" TEXT,
    "rating" TEXT,
    "avatarUrl" TEXT,
    "color" TEXT,
    "phone" TEXT,
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
    "role" "BarberRole" NOT NULL DEFAULT 'owner',
    "positionId" TEXT,
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastSeenAt" TIMESTAMP(3),

    CONSTRAINT "Barbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Positions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "masterSharePercent" DOUBLE PRECISION DEFAULT 0,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "requiredClientVolume" INTEGER DEFAULT 0,
    "requiredRetainedClients" INTEGER DEFAULT 0,
    "targetReturnPercent" DOUBLE PRECISION DEFAULT 0,
    "specialConditions" TEXT,
    "privileges" TEXT,
    "parentId" TEXT,
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServicePrices" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServicePrices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionServiceMaxPrices" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "maxPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PositionServiceMaxPrices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingSettings" (
    "id" TEXT NOT NULL,
    "aboutText" TEXT NOT NULL DEFAULT '',
    "bookingLimit" INTEGER NOT NULL DEFAULT 2,
    "minLeadHours" INTEGER NOT NULL DEFAULT 2,
    "maxDaysAhead" INTEGER NOT NULL DEFAULT 14,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeUserMeta" (
    "userId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeUserMeta_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "BlockedUsers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reason" TEXT,
    "blockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blockedBy" TEXT,

    CONSTRAINT "BlockedUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarberAliases" (
    "id" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BarberAliases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Businesses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "customDomain" TEXT,
    "dbSchema" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Businesses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Appointments_cityId_idx" ON "Appointments"("cityId");

-- CreateIndex
CREATE INDEX "Schedules_cityId_idx" ON "Schedules"("cityId");

-- CreateIndex
CREATE INDEX "Users_Phone_idx" ON "Users"("Phone");

-- Note: Positions.name is no longer globally unique (each city can have positions with the same name)
-- Previous unique index removed to support per-city positions

-- CreateIndex
CREATE UNIQUE INDEX "ServicePrices_serviceId_barberId_key" ON "ServicePrices"("serviceId", "barberId");

-- CreateIndex
CREATE UNIQUE INDEX "PositionServiceMaxPrices_positionId_serviceId_key" ON "PositionServiceMaxPrices"("positionId", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "BlockedUsers_userId_key" ON "BlockedUsers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BarberAliases_barberId_alias_key" ON "BarberAliases"("barberId", "alias");

-- CreateIndex
CREATE UNIQUE INDEX "Businesses_subdomain_key" ON "Businesses"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "Businesses_customDomain_key" ON "Businesses"("customDomain");

-- CreateIndex
CREATE UNIQUE INDEX "Businesses_dbSchema_key" ON "Businesses"("dbSchema");

-- AddForeignKey
ALTER TABLE "Barbers" ADD CONSTRAINT "Barbers_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Barbers" ADD CONSTRAINT "Barbers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Positions" ADD CONSTRAINT "Positions_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCategories" ADD CONSTRAINT "ShopCategories_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopProducts" ADD CONSTRAINT "ShopProducts_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrders" ADD CONSTRAINT "ShopOrders_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePrices" ADD CONSTRAINT "ServicePrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicePrices" ADD CONSTRAINT "ServicePrices_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barbers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "ShopCategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopProducts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT,
    "categoryId" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrders" (
    "id" TEXT NOT NULL,
    "customerName" TEXT,
    "customerPhone" TEXT,
    "userId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL DEFAULT 'cash',
    "bsAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "comment" TEXT,
    "qrCode" TEXT,
    "issuedById" TEXT,
    "issuedByName" TEXT,
    "issuedAt" TIMESTAMP(3),
    "cityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrderItems" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ShopOrderItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopStockEdits" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "delta" INTEGER NOT NULL,
    "reason" TEXT,
    "editorId" TEXT,
    "editorName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopStockEdits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarberLevelHistory" (
    "id" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "actualClientVolume" INTEGER NOT NULL DEFAULT 0,
    "actualRetainedClients" INTEGER NOT NULL DEFAULT 0,
    "actualReturnPercent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "meetsCurrentRequirements" BOOLEAN NOT NULL DEFAULT false,
    "meetsNextRequirements" BOOLEAN NOT NULL DEFAULT false,
    "currentPositionId" TEXT NOT NULL,
    "nextPositionId" TEXT,
    "evaluatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BarberLevelHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BarberLevelHistory_barberId_month_key" ON "BarberLevelHistory"("barberId", "month");

-- CreateIndex
CREATE UNIQUE INDEX "ShopOrders_qrCode_key" ON "ShopOrders"("qrCode");

-- AddForeignKey
ALTER TABLE "ShopProducts" ADD CONSTRAINT "ShopProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ShopCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopStockEdits" ADD CONSTRAINT "ShopStockEdits_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "CrmNotificationHistory" (
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

-- CreateIndex
CREATE INDEX "CrmNotificationHistory_barbershopId_createdAt_idx" ON "CrmNotificationHistory"("barbershopId", "createdAt");

