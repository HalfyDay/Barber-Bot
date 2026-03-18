const registerOwnerAssetsRoutes = ({
  app,
  authenticateToken,
  isOwnerRequest,
  listAvatarImages,
  buildSafeImageFilename,
  IMAGE_DIR,
  decodeBase64Image,
  MAX_AVATAR_FILE_SIZE,
  ensureUniqueImageName,
  fs,
  path,
  CARD_IMAGE_DIR,
  normalizeText,
  getExistingImageFilename,
  listMenuImages,
  MENU_IMAGE_DIR,
  loadBotMenu,
  saveBotMenu,
  prisma,
}) => {
  app.get("/api/assets/avatars", authenticateToken, async (req, res) => {
    try {
      const images = await listAvatarImages();
      res.json({ images });
    } catch (error) {
      console.error("Avatar assets error:", error);
      res.status(500).json({ error: "Не удалось получить список изображений." });
    }
  });

  app.post("/api/assets/avatars/upload", authenticateToken, async (req, res) => {
    try {
      const { name, data } = req.body || {};
      if (!data) {
        return res.status(400).json({ error: "Не переданы данные изображения." });
      }
      const sanitizedName = buildSafeImageFilename(name || `avatar-${Date.now()}.png`);
      if (!sanitizedName) {
        return res.status(400).json({ error: "Некорректное имя файла." });
      }
      await fs.ensureDir(IMAGE_DIR);
      const buffer = decodeBase64Image(data);
      if (!buffer.length) {
        return res.status(400).json({ error: "Файл пуст." });
      }
      if (buffer.length > MAX_AVATAR_FILE_SIZE) {
        return res.status(400).json({
          error: `Файл слишком большой (до ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} МБ).`,
        });
      }
      const filename = await ensureUniqueImageName(sanitizedName);
      await fs.writeFile(path.join(IMAGE_DIR, filename), buffer);
      const images = await listAvatarImages();
      res.json({ success: true, path: `/Image/${filename}`, images });
    } catch (error) {
      console.error("Avatar upload error:", error);
      res.status(500).json({
        error: "Не удалось загрузить изображение.",
        details: error.message,
      });
    }
  });

  app.post("/api/assets/cards/upload", authenticateToken, async (req, res) => {
    try {
      const { barberId, name, data } = req.body || {};
      if (!barberId || !data) {
        return res.status(400).json({ error: "Не хватает id барбера или файла карточки." });
      }
      const safeExtName = buildSafeImageFilename(name || `card-${barberId}.png`) || null;
      const baseSafeId = normalizeText(String(barberId)).replace(/[^a-z0-9_-]/gi, "") || "card";
      const ext = safeExtName ? path.extname(safeExtName) || ".png" : ".png";
      const filename = `card-${baseSafeId}${ext.toLowerCase()}`;
      await fs.ensureDir(CARD_IMAGE_DIR);
      const buffer = decodeBase64Image(data);
      if (!buffer.length) {
        return res.status(400).json({ error: "Файл пуст." });
      }
      const targetPath = path.join(CARD_IMAGE_DIR, filename);
      await fs.writeFile(targetPath, buffer);
      res.json({ success: true, path: `/Image/tgbot/${filename}` });
    } catch (error) {
      console.error("Card upload error:", error);
      res.status(500).json({
        error: "Не удалось сохранить карточку барбера.",
        details: error.message,
      });
    }
  });

  app.delete("/api/assets/avatars", authenticateToken, async (req, res) => {
    try {
      const { filename } = req.body || {};
      if (!filename) {
        return res.status(400).json({ error: "Не указано имя файла." });
      }
      const sanitizedName = getExistingImageFilename(filename);
      if (!sanitizedName) {
        return res.status(400).json({ error: "Файл не найден." });
      }
      const targetPath = path.join(IMAGE_DIR, sanitizedName);
      if (!(await fs.pathExists(targetPath))) {
        return res.status(404).json({ error: "Файл отсутствует на сервере." });
      }
      await fs.remove(targetPath);
      const images = await listAvatarImages();
      res.json({ success: true, images });
    } catch (error) {
      console.error("Avatar delete error:", error);
      res.status(500).json({
        error: "Не удалось удалить изображение.",
        details: error.message,
      });
    }
  });

  app.get("/api/bot/menu/images", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения меню бота." });
    }
    try {
      const images = await listMenuImages();
      res.json({ images });
    } catch (error) {
      console.error("Bot menu images fetch error:", error);
      res.status(500).json({ error: "Не удалось загрузить галерею меню." });
    }
  });

  app.post("/api/bot/menu/images", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения меню бота." });
    }
    try {
      const { name, data } = req.body || {};
      if (!data) {
        return res.status(400).json({ error: "Не переданы данные изображения." });
      }
      const sanitizedName = buildSafeImageFilename(name || `menu-${Date.now()}.png`);
      if (!sanitizedName) {
        return res.status(400).json({ error: "Некорректное имя файла." });
      }
      await fs.ensureDir(MENU_IMAGE_DIR);
      const buffer = decodeBase64Image(data);
      if (!buffer.length) {
        return res.status(400).json({ error: "Файл пуст." });
      }
      if (buffer.length > MAX_AVATAR_FILE_SIZE) {
        return res.status(400).json({
          error: `Файл слишком большой (до ${Math.floor(MAX_AVATAR_FILE_SIZE / (1024 * 1024))} МБ).`,
        });
      }
      const filename = await ensureUniqueImageName(sanitizedName, MENU_IMAGE_DIR);
      await fs.writeFile(path.join(MENU_IMAGE_DIR, filename), buffer);
      const images = await listMenuImages();
      res.json({ success: true, path: `/Image/menu_bots/${filename}`, images });
    } catch (error) {
      console.error("Bot menu image upload error:", error);
      res.status(500).json({
        error: "Не удалось сохранить изображение меню.",
        details: error.message,
      });
    }
  });

  app.get("/api/bot/menu", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения меню бота." });
    }
    try {
      const menu = await loadBotMenu();
      res.json(menu);
    } catch (error) {
      console.error("Bot menu fetch error:", error);
      res.status(500).json({ error: "Не удалось загрузить меню бота." });
    }
  });

  app.put("/api/bot/menu", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для изменения меню бота." });
    }
    const payload = req.body || {};
    try {
      const normalized = await saveBotMenu(payload);
      res.json(normalized);
    } catch (error) {
      console.error("Bot menu save error:", error);
      res.status(500).json({ error: "Не удалось сохранить меню бота." });
    }
  });

  app.get("/api/bot/messages", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для изменения сообщений бота." });
    }
    try {
      const messages = await prisma.botMessages.findMany({
        orderBy: [{ code: "asc" }, { title: "asc" }],
      });
      res.json(messages);
    } catch (error) {
      console.error("Bot messages fetch error:", error);
      res.status(500).json({ error: "Не удалось загрузить сообщения бота." });
    }
  });

  app.put("/api/bot/messages/:id", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для изменения сообщений бота." });
    }
    const { id } = req.params;
    const payload = req.body || {};
    try {
      const data = {
        code: payload.code ? normalizeText(payload.code) : undefined,
        title: payload.title ?? undefined,
        text: payload.text ?? "",
      };
      if (!data.text.trim()) {
        return res.status(400).json({ error: "Текст сообщения не может быть пустым." });
      }
      const updated = await prisma.botMessages.update({
        where: { id },
        data,
      });
      res.json(updated);
    } catch (error) {
      console.error("Bot message update error:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Сообщение не найдено." });
      }
      res.status(500).json({ error: "Не удалось обновить сообщение." });
    }
  });
};

module.exports = {
  registerOwnerAssetsRoutes,
};
