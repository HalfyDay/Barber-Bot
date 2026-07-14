-- CreateTable
CREATE TABLE "ShopCategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopOrderItems" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,
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

-- CreateIndex
CREATE UNIQUE INDEX "ShopOrders_qrCode_key" ON "ShopOrders"("qrCode");

-- CreateIndex
CREATE INDEX "ShopProducts_categoryId_idx" ON "ShopProducts"("categoryId");

-- CreateIndex
CREATE INDEX "ShopOrderItems_orderId_idx" ON "ShopOrderItems"("orderId");

-- CreateIndex
CREATE INDEX "ShopOrderItems_productId_idx" ON "ShopOrderItems"("productId");

-- CreateIndex
CREATE INDEX "ShopStockEdits_productId_idx" ON "ShopStockEdits"("productId");

-- AddForeignKey
ALTER TABLE "ShopProducts" ADD CONSTRAINT "ShopProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ShopCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ShopOrders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopOrderItems" ADD CONSTRAINT "ShopOrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopStockEdits" ADD CONSTRAINT "ShopStockEdits_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ShopProducts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
