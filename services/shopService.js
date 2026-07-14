const createShopService = ({
  prisma,
  randomUUID,
  normalizeText,
  logger = console,
}) => {
  const SHOP_ORDER_STATUSES = ["new", "processing", "ready", "issued"];
  const DEFAULT_SHOP_SETTINGS = {
    categoriesEnabled: false,
    restrictedIssuers: [],
    autoExpireDays: 3,
    maxProductsPerPerson: 0,
  };

  // ── Categories ──

  const listCategories = async ({ includeInactive = false } = {}) => {
    const where = includeInactive ? {} : { isActive: true };
    return prisma.shopCategories.findMany({
      where,
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
    });
  };

  const createCategory = async ({ name, orderIndex = 0 }) => {
    const trimmed = normalizeText(name);
    if (!trimmed) throw new Error("Название категории обязательно.");
    return prisma.shopCategories.create({
      data: { id: randomUUID(), name: trimmed, orderIndex },
    });
  };

  const updateCategory = async (id, patch = {}) => {
    const data = {};
    if (patch.name !== undefined) data.name = normalizeText(patch.name);
    if (patch.isActive !== undefined) data.isActive = Boolean(patch.isActive);
    if (patch.orderIndex !== undefined) data.orderIndex = Number(patch.orderIndex);
    return prisma.shopCategories.update({ where: { id }, data });
  };

  const deleteCategory = async (id) => {
    await prisma.shopProducts.updateMany({
      where: { categoryId: id },
      data: { categoryId: null },
    });
    return prisma.shopCategories.delete({ where: { id } });
  };

  // ── Products ──

  const listProducts = async ({ includeInactive = false, categoryId = null } = {}) => {
    const where = {};
    if (!includeInactive) where.isActive = true;
    if (categoryId) where.categoryId = categoryId;
    return prisma.shopProducts.findMany({
      where,
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      include: { category: true },
    });
  };

  const getProduct = async (id) =>
    prisma.shopProducts.findUnique({ where: { id }, include: { category: true } });

  const createProduct = async ({
    name,
    description = "",
    price = 0,
    imageUrl = "",
    categoryId = null,
    stock = 0,
    orderIndex = 0,
  }) => {
    const trimmed = normalizeText(name);
    if (!trimmed) throw new Error("Название товара обязательно.");
    if (price < 0) throw new Error("Цена не может быть отрицательной.");
    return prisma.shopProducts.create({
      data: {
        id: randomUUID(),
        name: trimmed,
        description: normalizeText(description),
        price: Number(price),
        imageUrl: normalizeText(imageUrl),
        categoryId: categoryId || null,
        stock: Math.max(0, Number(stock)),
        orderIndex,
      },
    });
  };

  const updateProduct = async (id, patch = {}) => {
    const data = {};
    if (patch.name !== undefined) data.name = normalizeText(patch.name);
    if (patch.description !== undefined) data.description = normalizeText(patch.description);
    if (patch.price !== undefined) data.price = Number(patch.price);
    if (patch.imageUrl !== undefined) data.imageUrl = normalizeText(patch.imageUrl);
    if (patch.categoryId !== undefined) data.categoryId = patch.categoryId || null;
    if (patch.stock !== undefined) data.stock = Math.max(0, Number(patch.stock));
    if (patch.isActive !== undefined) data.isActive = Boolean(patch.isActive);
    if (patch.orderIndex !== undefined) data.orderIndex = Number(patch.orderIndex);
    return prisma.shopProducts.update({ where: { id }, data });
  };

  const deleteProduct = async (id) => {
    const blockingOrders = await prisma.shopOrderItems.groupBy({
      by: ['orderId'],
      where: { productId: id, order: { status: { notIn: ["issued", "cancelled"] } } },
      _count: { id: true },
    });
    if (blockingOrders.length > 0) {
      const orderIds = blockingOrders.map(o => o.orderId.slice(0, 8)).join(', ');
      throw new Error(`Нельзя удалить товар: есть ${blockingOrders.length} заказ(ов) со статусом, отличным от "Выдан" или "Отменён" (ID: ${orderIds}).`);
    }
    return prisma.shopProducts.delete({ where: { id } });
  };

  // ── Stock / Audit ──

  const adjustStock = async ({ productId, delta, reason = "", editorId = null, editorName = null }) => {
    const product = await prisma.shopProducts.findUnique({ where: { id: productId } });
    if (!product) throw new Error("Товар не найден.");
    const numericDelta = Number(delta);
    if (!Number.isFinite(numericDelta) || numericDelta === 0) {
      throw new Error("Изменение остатка должно быть ненулевым числом.");
    }
    const newStock = Math.max(0, product.stock + numericDelta);
    await prisma.$transaction([
      prisma.shopProducts.update({ where: { id: productId }, data: { stock: newStock } }),
      prisma.shopStockEdits.create({
        data: {
          id: randomUUID(),
          productId,
          productName: product.name,
          delta: numericDelta,
          reason: normalizeText(reason),
          editorId: editorId ? normalizeText(editorId) : null,
          editorName: editorName ? normalizeText(editorName) : null,
        },
      }),
    ]);
    return { product: { id: productId, name: product.name, stock: newStock }, delta: numericDelta };
  };

  const getStockAudit = async ({ productId = null, editorId = null, limit = 200 } = {}) => {
    const where = {};
    if (productId) where.productId = productId;
    if (editorId) where.editorId = editorId;
    return prisma.shopStockEdits.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: Math.min(500, Math.max(1, Number(limit))),
    });
  };

  // ── Orders ──

  const listOrders = async ({ status = null, limit = 100 } = {}) => {
    const where = {};
    if (status) where.status = status;
    return prisma.shopOrders.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: Math.min(500, Math.max(1, Number(limit))),
      include: { items: { include: { product: true } } },
    });
  };

  const getOrder = async (id) =>
    prisma.shopOrders.findUnique({ where: { id }, include: { items: { include: { product: true } } } });

  const getOrderByQrCode = async (qrCode) => {
    const cleanCode = (qrCode || '').trim();
    if (!cleanCode) return null;
    return prisma.shopOrders.findFirst({
      where: {
        OR: [
          { qrCode: { equals: cleanCode, mode: 'insensitive' } },
          { qrCode: { contains: cleanCode, mode: 'insensitive' } },
          { id: { startsWith: cleanCode, mode: 'insensitive' } },
        ],
      },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: 'desc' },
    });
  };

  const createOrder = async ({
    customerName = null,
    customerPhone = null,
    userId = null,
    items = [],
    paymentMethod = "cash",
    bsAmount = 0,
    comment = "",
  }) => {
    if (!items.length) throw new Error("Заказ должен содержать хотя бы один товар.");

    const settings = await getShopSettings();
    const maxPerPerson = Number(settings.maxProductsPerPerson) || 0;
    if (maxPerPerson > 0 && userId) {
      const activeOrders = await prisma.shopOrders.count({
        where: { userId: normalizeText(userId), status: { in: ["new", "processing", "ready"] } },
      });
      if (activeOrders >= maxPerPerson) {
        throw new Error(`Превышен лимит заказов (${maxPerPerson} шт.)`);
      }
    }

    const productIds = [...new Set(items.map((i) => i.productId))];
    const products = await prisma.shopProducts.findMany({
      where: { id: { in: productIds }, isActive: true },
    });
    const productMap = new Map(products.map((p) => [p.id, p]));

    for (const item of items) {
      const product = productMap.get(item.productId);
      if (!product) throw new Error(`Товар не найден: ${item.productId}`);
      const qty = Math.max(1, Number(item.quantity) || 1);
      if (product.stock < qty) {
        throw new Error(`Недостаточно товара "${product.name}": остаток ${product.stock}, заказано ${qty}.`);
      }
    }

    let totalAmount = 0;
    const orderItems = [];
    const stockUpdates = [];
    const auditEntries = [];

    for (const item of items) {
      const product = productMap.get(item.productId);
      const qty = Math.max(1, Number(item.quantity) || 1);
      const price = product.price;
      totalAmount += price * qty;
      orderItems.push({
        id: randomUUID(),
        productId: item.productId,
        name: product.name,
        price,
        quantity: qty,
      });
      stockUpdates.push(
        prisma.shopProducts.update({
          where: { id: item.productId },
          data: { stock: { decrement: qty } },
        })
      );
      auditEntries.push({
        id: randomUUID(),
        productId: item.productId,
        productName: product.name,
        delta: -qty,
        reason: "Заказ",
        editorId: null,
        editorName: null,
      });
    }

    const orderId = randomUUID();
    const qrCode = randomUUID();

    await prisma.$transaction([
      prisma.shopOrders.create({
        data: {
          id: orderId,
          customerName: normalizeText(customerName),
          customerPhone: normalizeText(customerPhone),
          userId: userId ? normalizeText(userId) : null,
          status: "new",
          totalAmount,
          paymentMethod: normalizeText(paymentMethod) || "cash",
          bsAmount: Number(bsAmount) || 0,
          comment: normalizeText(comment),
          qrCode,
          items: { create: orderItems },
        },
      }),
      ...stockUpdates,
      prisma.shopStockEdits.createMany({ data: auditEntries }),
    ]);

    return getOrder(orderId);
  };

  const updateOrderStatus = async (id, { status, editorId = null, editorName = null }) => {
    if (!SHOP_ORDER_STATUSES.includes(status)) {
      throw new Error(`Неверный статус: ${status}`);
    }
    const order = await prisma.shopOrders.findUnique({ where: { id } });
    if (!order) throw new Error("Заказ не найден.");

    const data = { status };
    if (status === "issued") {
      data.issuedById = editorId ? normalizeText(editorId) : null;
      data.issuedByName = editorName ? normalizeText(editorName) : null;
      data.issuedAt = new Date();
    }

    return prisma.shopOrders.update({ where: { id }, data });
  };

  const issueOrder = async ({ orderId, qrCode, editorId, editorName }) => {
    let order;
    if (qrCode) {
      order = await prisma.shopOrders.findUnique({ where: { qrCode } });
    } else if (orderId) {
      order = await prisma.shopOrders.findUnique({ where: { id: orderId } });
    }
    if (!order) throw new Error("Заказ не найден.");
    if (order.status === "issued") throw new Error("Заказ уже выдан.");
    if (!["new", "processing", "ready"].includes(order.status)) {
      throw new Error(`Невозможно выдать заказ со статусом "${order.status}".`);
    }
    return updateOrderStatus(order.id, { status: "issued", editorId, editorName });
  };

  const cancelOrder = async (id) => {
    const order = await prisma.shopOrders.findUnique({ where: { id }, include: { items: true } });
    if (!order) throw new Error("Заказ не найден.");
    if (order.status === "issued") throw new Error("Нельзя отменить выданный заказ.");

    const stockReturns = order.items.map((item) =>
      prisma.shopProducts.update({
        where: { id: item.productId },
        data: { stock: { increment: item.quantity } },
      })
    );
    const auditEntries = order.items.map((item) => ({
      id: randomUUID(),
      productId: item.productId,
      productName: item.name,
      delta: item.quantity,
      reason: `Возврат по отменённому заказу ${id.slice(0, 8)}`,
      editorId: null,
      editorName: null,
    }));

    await prisma.$transaction([
      prisma.shopOrders.update({ where: { id }, data: { status: "cancelled" } }),
      ...stockReturns,
      prisma.shopStockEdits.createMany({ data: auditEntries }),
    ]);

    return getOrder(id);
  };

  // ── Settings ──

  const getShopSettings = async () => {
    try {
      const settings = await prisma.siteSettings.findFirst();
      const payload = settings?.payload || {};
      const shop = payload.shop || {};
      return { ...DEFAULT_SHOP_SETTINGS, ...shop };
    } catch {
      return { ...DEFAULT_SHOP_SETTINGS };
    }
  };

  const updateShopSettings = async (patch = {}) => {
    const current = await getShopSettings();
    const merged = { ...current, ...patch };
    try {
      const settings = await prisma.siteSettings.findFirst();
      const payload = settings?.payload || {};
      payload.shop = merged;
      if (settings) {
        await prisma.siteSettings.update({ where: { id: settings.id }, data: { payload } });
      } else {
        await prisma.siteSettings.create({ data: { id: randomUUID(), payload } });
      }
    } catch (error) {
      logger.error("Failed to update shop settings:", error.message);
    }
    return merged;
  };

  const canIssueOrders = async (barberId) => {
    const settings = await getShopSettings();
    const restricted = Array.isArray(settings.restrictedIssuers) ? settings.restrictedIssuers : [];
    return !restricted.includes(normalizeText(barberId));
  };

  let shopOrdersTableMissing = false;
  const cancelExpiredShopOrders = async () => {
    if (shopOrdersTableMissing) return 0;
    try {
      const settings = await getShopSettings();
      const days = Number(settings.autoExpireDays) || 0;
      if (days <= 0) return 0;
      const cutoff = new Date(Date.now() - days * 86400000);
      const expired = await prisma.shopOrders.findMany({
        where: { status: { in: ["new", "processing"] }, createdAt: { lt: cutoff } },
        include: { items: true },
      });
      let cancelled = 0;
      for (const order of expired) {
        try {
          await cancelOrder(order.id);
          cancelled++;
        } catch (e) {
          logger.error("Failed to auto-cancel order:", order.id, e.message);
        }
      }
      return cancelled;
    } catch (error) {
      if (String(error.message).includes("does not exist")) {
        shopOrdersTableMissing = true;
        logger.warn("ShopOrders table not yet available, auto-cancel disabled until next restart");
        return 0;
      }
      logger.error("cancelExpiredShopOrders error:", error.message);
      return 0;
    }
  };

  return {
    SHOP_ORDER_STATUSES,
    listCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    listProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    adjustStock,
    getStockAudit,
    listOrders,
    getOrder,
    getOrderByQrCode,
    createOrder,
    updateOrderStatus,
    issueOrder,
    cancelOrder,
    getShopSettings,
    updateShopSettings,
    canIssueOrders,
    cancelExpiredShopOrders,
  };
};

module.exports = { createShopService };
