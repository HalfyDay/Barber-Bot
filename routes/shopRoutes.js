const registerShopRoutes = ({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  normalizeText,
  isOwnerRequest,
  isStaffIdentity,
  resolveUserIdentity,
  shopService,
  fs,
  path,
  IMAGE_DIR,
  decodeBase64Image,
  buildSafeImageFilename,
  ensureUniqueImageName,
  adjustUserBsBalance,
  requestRealtimePush,
  homePushService,
  logger = console,
}) => {
  const {
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
  } = shopService;

  const resolveIdentityName = (req) => {
    const identity = req.identity || req.user || {};
    return identity.barberName || identity.displayName || identity.username || "Staff";
  };

  const resolveIdentityId = (req) => {
    const identity = req.identity || req.user || {};
    return identity.barberId || identity.id || null;
  };

  // ── Public routes (client site) ──

  app.get("/api/shop/products", async (req, res) => {
    try {
      const products = await listProducts({ includeInactive: false });
      const categories = await listCategories({ includeInactive: false });
      res.json({ success: true, products, categories });
    } catch (error) {
      logger.error("Shop products error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить товары." });
    }
  });

  app.get("/api/shop/categories", async (req, res) => {
    try {
      const categories = await listCategories({ includeInactive: false });
      res.json({ success: true, categories });
    } catch (error) {
      logger.error("Shop categories error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить категории." });
    }
  });

  app.post("/api/shop/orders", async (req, res) => {
    try {
      const { customerName, customerPhone, userId, items, paymentMethod, bsAmount, comment } = req.body || {};
      if (!Array.isArray(items) || !items.length) {
        return res.status(400).json({ success: false, message: "Заказ должен содержать товары." });
      }
      const order = await createOrder({
        customerName,
        customerPhone,
        userId,
        items,
        paymentMethod,
        bsAmount,
        comment,
      });
      const usedBs = Number(bsAmount) || 0;
      if (usedBs > 0 && userId && typeof adjustUserBsBalance === "function") {
        try {
          await adjustUserBsBalance({
            userId,
            mode: "adjust",
            amountBs: -usedBs,
            comment: `Оплата заказа №${normalizeText(order.id).slice(0, 8)} в магазине`,
            actorName: normalizeText(customerName),
          });
        } catch (bsError) {
          logger.error("Failed to deduct BS for shop order:", bsError.message);
        }
      }
      res.json({ success: true, order });
      if (typeof requestRealtimePush === "function") {
        try { requestRealtimePush(); } catch {}
      }
      if (homePushService?.sendNotificationToUser) {
        try {
          const owners = await prisma.barbers.findMany({ where: { role: "owner" }, select: { id: true } });
          for (const b of owners) {
            await homePushService.sendNotificationToUser(`crm-${b.id}`, {
              title: "Новый заказ!",
              body: `Заказ от ${normalizeText(customerName || "клиента")} на ${order.totalAmount || 0} ₽`,
              tag: "shop-new-order",
              url: "/crm/",
            }, { channel: "booking" });
          }
        } catch {}
      }
    } catch (error) {
      logger.error("Shop create order error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось создать заказ." });
    }
  });

  app.get("/api/shop/orders/search", async (req, res) => {
    try {
      const q = (req.query.q || '').trim();
      if (!q) return res.json({ success: true, orders: [] });
      const orders = await prisma.shopOrders.findMany({
        where: {
          OR: [
            { id: { startsWith: q, mode: 'insensitive' } },
            { qrCode: { contains: q, mode: 'insensitive' } },
            { customerName: { contains: q, mode: 'insensitive' } },
            { customerPhone: { contains: q, mode: 'insensitive' } },
          ],
        },
        include: { items: { include: { product: true } } },
        orderBy: { createdAt: 'desc' },
        take: 20,
      });
      res.json({ success: true, orders });
    } catch (error) {
      logger.error("Shop search error:", error.message);
      res.status(500).json({ success: false, message: "Ошибка поиска." });
    }
  });

  app.get("/api/shop/orders/:qrCode", async (req, res) => {
    try {
      const order = await getOrderByQrCode(req.params.qrCode);
      if (!order) {
        return res.status(404).json({ success: false, message: "Заказ не найден." });
      }
      res.json({ success: true, order });
    } catch (error) {
      logger.error("Shop order lookup error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось найти заказ." });
    }
  });

  app.get("/api/shop/orders/:qrCode/qr", async (req, res) => {
    try {
      const qrCodeModule = (() => { try { return require("qrcode"); } catch { return null; } })();
      if (!qrCodeModule?.create) {
        return res.status(503).json({ success: false, message: "QR generator unavailable." });
      }
      const code = req.params.qrCode;
      const requestedSize = Math.max(200, Math.min(600, Number(req.query?.size) || 320));
      const qrData = qrCodeModule.create(code, { errorCorrectionLevel: "M", margin: 0 });
      const moduleCount = Math.max(1, Number(qrData?.modules?.size) || 1);
      const padding = 16;
      const cellSize = Math.max(1, Math.floor((requestedSize - padding * 2) / moduleCount));
      const size = cellSize * moduleCount + padding * 2;
      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
      svg += `<rect width="${size}" height="${size}" fill="white" rx="12"/>`;
      for (let row = 0; row < moduleCount; row++) {
        for (let col = 0; col < moduleCount; col++) {
          if (qrData.modules.get(row, col)) {
            svg += `<rect x="${padding + col * cellSize}" y="${padding + row * cellSize}" width="${cellSize}" height="${cellSize}" fill="#0a1414" rx="1"/>`;
          }
        }
      }
      svg += `</svg>`;
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      return res.send(svg);
    } catch (error) {
      logger.error("Shop order QR error:", error.message);
      return res.status(500).json({ success: false, message: "Не удалось сгенерировать QR." });
    }
  });

  app.get("/api/shop/orders/user/:userId", async (req, res) => {
    try {
      const userId = normalizeText(req.params.userId);
      if (!userId) {
        return res.status(400).json({ success: false, message: "userId обязателен." });
      }
      const orders = await prisma.shopOrders.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: { items: { include: { product: true } } },
      });
      res.json({ success: true, orders });
    } catch (error) {
      logger.error("Shop user orders error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить заказы." });
    }
  });

  // ── CRM panel routes (authenticated) ──

  const requireAuth = (req, res, next) => {
    authenticateToken(req, res, (err) => {
      if (err || !req.identity) {
        return res.status(401).json({ success: false, message: "Требуется авторизация." });
      }
      next();
    });
  };

  const requireOwner = (req, res, next) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ success: false, message: "Недостаточно прав." });
    }
    next();
  };

  // ── Product image upload (CRM) ──

  app.post("/api/shop/panel/products/upload", requireAuth, requireOwner, async (req, res) => {
    try {
      const { name, data } = req.body || {};
      if (!data) {
        return res.status(400).json({ success: false, message: "Не переданы данные изображения." });
      }
      const sanitizedName = buildSafeImageFilename(name || `product-${Date.now()}.png`);
      if (!sanitizedName) {
        return res.status(400).json({ success: false, message: "Некорректное имя файла." });
      }
      await fs.ensureDir(IMAGE_DIR);
      const buffer = decodeBase64Image(data);
      if (!buffer.length) {
        return res.status(400).json({ success: false, message: "Файл пуст." });
      }
      const maxSize = 5 * 1024 * 1024;
      if (buffer.length > maxSize) {
        return res.status(400).json({ success: false, message: "Файл слишком большой (до 5 МБ)." });
      }
      const filename = await ensureUniqueImageName(sanitizedName);
      await fs.writeFile(path.join(IMAGE_DIR, filename), buffer);
      res.json({ success: true, path: `/Image/${filename}` });
    } catch (error) {
      logger.error("Shop product upload error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить изображение." });
    }
  });

  // ── Products (CRM) ──

  app.get("/api/shop/panel/products", requireAuth, async (req, res) => {
    try {
      const includeInactive = isOwnerRequest(req);
      const products = await listProducts({ includeInactive });
      res.json({ success: true, products });
    } catch (error) {
      logger.error("Shop panel products error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить товары." });
    }
  });

  app.post("/api/shop/panel/products", requireAuth, requireOwner, async (req, res) => {
    try {
      const product = await createProduct(req.body || {});
      res.json({ success: true, product });
    } catch (error) {
      logger.error("Shop panel create product error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось создать товар." });
    }
  });

  app.put("/api/shop/panel/products/:id", requireAuth, requireOwner, async (req, res) => {
    try {
      const product = await updateProduct(req.params.id, req.body || {});
      res.json({ success: true, product });
    } catch (error) {
      logger.error("Shop panel update product error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось обновить товар." });
    }
  });

  app.delete("/api/shop/panel/products/:id", requireAuth, requireOwner, async (req, res) => {
    try {
      await deleteProduct(req.params.id);
      res.json({ success: true });
    } catch (error) {
      logger.error("Shop panel delete product error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось удалить товар." });
    }
  });

  app.post("/api/shop/panel/products/reorder", requireAuth, requireOwner, async (req, res) => {
    try {
      const orderedIds = Array.isArray(req.body?.orderedIds) ? req.body.orderedIds : [];
      const existing = await prisma.shopProducts.findMany({ select: { id: true } });
      const knownIds = new Set(existing.map((p) => p.id));
      const uniqueIds = orderedIds
        .map((v) => normalizeText(v))
        .filter((v, i, arr) => v && knownIds.has(v) && arr.indexOf(v) === i);
      const remaining = existing.map((p) => p.id).filter((id) => !uniqueIds.includes(id));
      const finalOrder = [...uniqueIds, ...remaining];
      await prisma.$transaction(
        finalOrder.map((id, index) =>
          prisma.shopProducts.update({ where: { id }, data: { orderIndex: index } })
        )
      );
      res.json({ success: true });
    } catch (error) {
      logger.error("Shop products reorder error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось изменить порядок." });
    }
  });

  // ── Categories (CRM) ──

  app.get("/api/shop/panel/categories", requireAuth, async (req, res) => {
    try {
      const includeInactive = isOwnerRequest(req);
      const categories = await listCategories({ includeInactive });
      res.json({ success: true, categories });
    } catch (error) {
      logger.error("Shop panel categories error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить категории." });
    }
  });

  app.post("/api/shop/panel/categories", requireAuth, requireOwner, async (req, res) => {
    try {
      const category = await createCategory(req.body || {});
      res.json({ success: true, category });
    } catch (error) {
      logger.error("Shop panel create category error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось создать категорию." });
    }
  });

  app.put("/api/shop/panel/categories/:id", requireAuth, requireOwner, async (req, res) => {
    try {
      const category = await updateCategory(req.params.id, req.body || {});
      res.json({ success: true, category });
    } catch (error) {
      logger.error("Shop panel update category error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось обновить категорию." });
    }
  });

  app.delete("/api/shop/panel/categories/:id", requireAuth, requireOwner, async (req, res) => {
    try {
      await deleteCategory(req.params.id);
      res.json({ success: true });
    } catch (error) {
      logger.error("Shop panel delete category error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось удалить категорию." });
    }
  });

  // ── Orders (CRM) ──

  app.get("/api/shop/panel/orders", requireAuth, async (req, res) => {
    try {
      const { status, limit } = req.query || {};
      const orders = await listOrders({ status: status || null, limit: limit || 100 });
      res.json({ success: true, orders });
    } catch (error) {
      logger.error("Shop panel orders error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить заказы." });
    }
  });

  app.get("/api/shop/panel/orders/:id", requireAuth, async (req, res) => {
    try {
      const order = await getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ success: false, message: "Заказ не найден." });
      }
      res.json({ success: true, order });
    } catch (error) {
      logger.error("Shop panel order detail error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить заказ." });
    }
  });

  app.patch("/api/shop/panel/orders/:id/status", requireAuth, async (req, res) => {
    try {
      const { status } = req.body || {};
      const order = await updateOrderStatus(req.params.id, {
        status,
        editorId: resolveIdentityId(req),
        editorName: resolveIdentityName(req),
      });
      res.json({ success: true, order });
      if (typeof requestRealtimePush === "function") {
        try { requestRealtimePush(); } catch {}
      }
    } catch (error) {
      logger.error("Shop panel order status error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось изменить статус." });
    }
  });

  app.post("/api/shop/panel/orders/:id/issue", requireAuth, async (req, res) => {
    try {
      const barberId = resolveIdentityId(req);
      if (barberId && !(await canIssueOrders(barberId))) {
        return res.status(403).json({ success: false, message: "У вас нет прав на выдачу заказов." });
      }
      const order = await issueOrder({
        orderId: req.params.id,
        editorId: barberId,
        editorName: resolveIdentityName(req),
      });
      res.json({ success: true, order });
      if (typeof requestRealtimePush === "function") {
        try { requestRealtimePush(); } catch {}
      }
    } catch (error) {
      logger.error("Shop panel order issue error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось выдать заказ." });
    }
  });

  app.post("/api/shop/panel/orders/issue-by-qr", requireAuth, async (req, res) => {
    try {
      const { qrCode } = req.body || {};
      if (!qrCode) {
        return res.status(400).json({ success: false, message: "QR-код обязателен." });
      }
      const barberId = resolveIdentityId(req);
      if (barberId && !(await canIssueOrders(barberId))) {
        return res.status(403).json({ success: false, message: "У вас нет прав на выдачу заказов." });
      }
      const order = await issueOrder({
        qrCode,
        editorId: barberId,
        editorName: resolveIdentityName(req),
      });
      res.json({ success: true, order });
      if (typeof requestRealtimePush === "function") {
        try { requestRealtimePush(); } catch {}
      }
    } catch (error) {
      logger.error("Shop panel order issue by QR error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось выдать заказ." });
    }
  });

  app.post("/api/shop/panel/orders/:id/cancel", requireAuth, async (req, res) => {
    try {
      const order = await cancelOrder(req.params.id);
      res.json({ success: true, order });
      if (typeof requestRealtimePush === "function") {
        try { requestRealtimePush(); } catch {}
      }
    } catch (error) {
      logger.error("Shop panel order cancel error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось отменить заказ." });
    }
  });

  // ── Stock (CRM) ──

  app.get("/api/shop/panel/stock", requireAuth, async (req, res) => {
    try {
      const products = await listProducts({ includeInactive: isOwnerRequest(req) });
      res.json({ success: true, products });
    } catch (error) {
      logger.error("Shop panel stock error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить склад." });
    }
  });

  app.post("/api/shop/panel/stock", requireAuth, requireOwner, async (req, res) => {
    try {
      const { productId, delta, reason } = req.body || {};
      const result = await adjustStock({
        productId,
        delta,
        reason,
        editorId: resolveIdentityId(req),
        editorName: resolveIdentityName(req),
      });
      res.json({ success: true, ...result });
    } catch (error) {
      logger.error("Shop panel stock adjust error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось изменить остаток." });
    }
  });

  app.get("/api/shop/panel/stock/audit", requireAuth, async (req, res) => {
    try {
      const { productId, editorId, limit } = req.query || {};
      const audit = await getStockAudit({ productId, editorId, limit: limit || 200 });
      res.json({ success: true, audit });
    } catch (error) {
      logger.error("Shop panel stock audit error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить ведомость." });
    }
  });

  // ── Settings (CRM) ──

  app.get("/api/shop/panel/settings", requireAuth, requireOwner, async (req, res) => {
    try {
      const settings = await getShopSettings();
      res.json({ success: true, settings });
    } catch (error) {
      logger.error("Shop panel settings error:", error.message);
      res.status(500).json({ success: false, message: "Не удалось загрузить настройки." });
    }
  });

  app.patch("/api/shop/panel/settings", requireAuth, requireOwner, async (req, res) => {
    try {
      const settings = await updateShopSettings(req.body || {});
      res.json({ success: true, settings });
    } catch (error) {
      logger.error("Shop panel settings update error:", error.message);
      res.status(400).json({ success: false, message: error.message || "Не удалось обновить настройки." });
    }
  });
};

module.exports = { registerShopRoutes };
