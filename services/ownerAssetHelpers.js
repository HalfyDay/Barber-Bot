const createOwnerAssetHelpers = ({
  fs,
  path,
  BOT_MENU_PATH,
  IMAGE_DIR,
  MENU_IMAGE_DIR,
}) => {
  const IMAGE_EXTENSIONS = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
  ]);

  const normalizeText = (value) => (value ?? "").toString().trim();
  const canonicalizeKey = (value) => normalizeText(value).toLowerCase();
  const BOT_MENU_BUTTON_TYPES = Object.freeze([
    {
      id: "screen",
      label: "Переход на экран",
      description: "Открывает другой экран меню",
    },
    {
      id: "staff",
      label: "Выбор сотрудника",
      description: "Показывает список барберов",
    },
    {
      id: "service",
      label: "Выбор услуги",
      description: "Показывает услуги",
    },
    {
      id: "date",
      label: "Выбор даты",
      description: "Запрашивает дату",
    },
    {
      id: "time",
      label: "Выбор времени",
      description: "Запрашивает время",
    },
    {
      id: "description",
      label: "Описание",
      description: "Показывает информационный блок",
    },
    {
      id: "profile",
      label: "Профиль",
      description: "Открывает профиль пользователя",
    },
    {
      id: "userAppointments",
      label: "Мои записи",
      description: "Показывает записи пользователя",
    },
    {
      id: "custom",
      label: "Своя кнопка",
      description: "Произвольное действие/интент",
    },
  ]);
  const BOT_MENU_TYPE_SET = new Set(BOT_MENU_BUTTON_TYPES.map((item) => item.id));

  const buildDefaultBotMenu = () => ({
    version: 1,
    updatedAt: new Date().toISOString(),
    screens: [
      {
        id: "main",
        title: "Главное меню",
        message: "Добро пожаловать! Выберите действие.",
        imageUrl: "",
        buttons: [
          {
            id: "book",
            label: "Записаться",
            type: "service",
            targetScreenId: "services",
            row: 0,
            order: 0,
          },
          {
            id: "myAppointments",
            label: "Мои записи",
            type: "userAppointments",
            targetScreenId: "appointments",
            row: 0,
            order: 1,
          },
          {
            id: "profile",
            label: "Профиль",
            type: "profile",
            targetScreenId: "profile",
            row: 1,
            order: 0,
          },
          {
            id: "about",
            label: "О нас",
            type: "description",
            targetScreenId: "about",
            row: 1,
            order: 1,
          },
        ],
      },
      {
        id: "services",
        title: "Выбор услуги",
        message: "Выберите услугу для записи.",
        imageUrl: "",
        buttons: [
          {
            id: "chooseService",
            label: "Выбор услуги",
            type: "service",
            targetScreenId: null,
            row: 0,
            order: 0,
          },
          {
            id: "chooseBarber",
            label: "Выбор сотрудника",
            type: "staff",
            targetScreenId: "staff",
            row: 0,
            order: 1,
          },
          {
            id: "chooseDate",
            label: "Выбор даты",
            type: "date",
            targetScreenId: "dates",
            row: 1,
            order: 0,
          },
          {
            id: "chooseTime",
            label: "Выбор времени",
            type: "time",
            targetScreenId: "time",
            row: 1,
            order: 1,
          },
          {
            id: "backToMainFromServices",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 2,
            order: 0,
          },
        ],
      },
      {
        id: "staff",
        title: "Сотрудники",
        message: "Кого записываем?",
        imageUrl: "",
        buttons: [
          {
            id: "staffDate",
            label: "Выбор даты",
            type: "date",
            targetScreenId: "dates",
            row: 0,
            order: 0,
          },
          {
            id: "backToServices",
            label: "Назад к услугам",
            type: "screen",
            targetScreenId: "services",
            row: 1,
            order: 0,
          },
          {
            id: "backToMainFromStaff",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 1,
            order: 1,
          },
        ],
      },
      {
        id: "dates",
        title: "Выбор даты",
        message: "Выберите дату записи.",
        imageUrl: "",
        buttons: [
          {
            id: "dateTime",
            label: "Выбор времени",
            type: "time",
            targetScreenId: "time",
            row: 0,
            order: 0,
          },
          {
            id: "backToServicesFromDates",
            label: "Назад к услугам",
            type: "screen",
            targetScreenId: "services",
            row: 1,
            order: 0,
          },
        ],
      },
      {
        id: "time",
        title: "Время",
        message: "Выберите время и подтвердите.",
        imageUrl: "",
        buttons: [
          {
            id: "confirmBooking",
            label: "Подтвердить запись",
            type: "custom",
            targetScreenId: null,
            row: 0,
            order: 0,
          },
          {
            id: "backToDates",
            label: "Назад к дате",
            type: "screen",
            targetScreenId: "dates",
            row: 0,
            order: 1,
          },
          {
            id: "backToMainFromTime",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 1,
            order: 0,
          },
        ],
      },
      {
        id: "about",
        title: "О нас",
        message: "Короткое описание салона.",
        imageUrl: "",
        buttons: [
          {
            id: "backToMainFromAbout",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 0,
            order: 0,
          },
        ],
      },
      {
        id: "profile",
        title: "Профиль",
        message: "Ваши контакты и избранный барбер.",
        imageUrl: "",
        buttons: [
          {
            id: "showAppointmentsFromProfile",
            label: "Мои записи",
            type: "userAppointments",
            targetScreenId: "appointments",
            row: 0,
            order: 0,
          },
          {
            id: "backToMainFromProfile",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 1,
            order: 0,
          },
        ],
      },
      {
        id: "appointments",
        title: "Мои записи",
        message: "Список ваших записей.",
        imageUrl: "",
        buttons: [
          {
            id: "backToMainFromAppointments",
            label: "Главное меню",
            type: "screen",
            targetScreenId: "main",
            row: 0,
            order: 0,
          },
        ],
      },
    ],
  });

  const sanitizeBotMenuButton = (button, index = 0, screenId = "screen") => {
    const fallbackLabel = `Кнопка ${index + 1}`;
    const id =
      normalizeText(button?.id) ||
      `btn_${canonicalizeKey(screenId) || "screen"}_${index + 1}`;
    const typeRaw = normalizeText(button?.type || "screen");
    const type = BOT_MENU_TYPE_SET.has(typeRaw) ? typeRaw : "screen";
    const label =
      normalizeText(button?.label || button?.text || fallbackLabel) ||
      fallbackLabel;
    const targetScreenId = normalizeText(
      button?.targetScreenId || button?.target || "",
    );
    const payload =
      button?.payload !== undefined && button?.payload !== null
        ? String(button.payload)
        : "";
    const row =
      Number.isFinite(button?.row) && button.row >= 0
        ? Number(button.row)
        : Math.floor(index / 2);
    const order =
      Number.isFinite(button?.order) && button.order >= 0
        ? Number(button.order)
        : index;
    return {
      id,
      type,
      label,
      targetScreenId: targetScreenId || null,
      payload,
      row,
      order,
    };
  };

  const sanitizeBotMenuScreen = (screen, index = 0) => {
    if (!screen || typeof screen !== "object") return null;
    const id = normalizeText(screen.id) || `screen_${index + 1}`;
    const title =
      normalizeText(screen.title || screen.name || screen.caption) ||
      `Экран ${index + 1}`;
    const message = screen.message ?? screen.text ?? "";
    const imageUrl = normalizeText(screen.imageUrl || screen.image || "");
    const buttons = Array.isArray(screen.buttons)
      ? screen.buttons.map((btn, btnIndex) =>
          sanitizeBotMenuButton(btn, btnIndex, id),
        )
      : [];
    return {
      id,
      title,
      message,
      imageUrl,
      buttons,
    };
  };

  const sanitizeBotMenuPayload = (payload, { stampUpdate = false } = {}) => {
    const base = buildDefaultBotMenu();
    const rawScreens =
      Array.isArray(payload?.screens) && payload.screens.length
        ? payload.screens
        : base.screens;
    const screens = rawScreens
      .map((screen, index) => sanitizeBotMenuScreen(screen, index))
      .filter(Boolean);
    const uniqueScreens = [];
    const seen = new Set();
    for (const screen of screens) {
      if (seen.has(screen.id)) continue;
      seen.add(screen.id);
      uniqueScreens.push(screen);
    }
    const version = Number(payload?.version) || 1;
    const normalized = {
      version,
      updatedAt: stampUpdate
        ? new Date().toISOString()
        : payload?.updatedAt || base.updatedAt,
      screens: uniqueScreens,
    };
    return { ...normalized, buttonTypes: BOT_MENU_BUTTON_TYPES };
  };

  const loadBotMenu = async () => {
    await fs.ensureDir(path.dirname(BOT_MENU_PATH));
    try {
      if (!(await fs.pathExists(BOT_MENU_PATH))) {
        const defaults = buildDefaultBotMenu();
        await fs.writeJson(BOT_MENU_PATH, defaults, { spaces: 2 });
        return { ...defaults, buttonTypes: BOT_MENU_BUTTON_TYPES };
      }
      const data = await fs.readJson(BOT_MENU_PATH);
      return sanitizeBotMenuPayload(data);
    } catch (error) {
      console.error("Bot menu load failed, using defaults:", error.message);
      const defaults = buildDefaultBotMenu();
      return { ...defaults, buttonTypes: BOT_MENU_BUTTON_TYPES };
    }
  };

  const saveBotMenu = async (payload) => {
    const normalized = sanitizeBotMenuPayload(payload, { stampUpdate: true });
    const persistable = {
      version: normalized.version,
      updatedAt: normalized.updatedAt,
      screens: normalized.screens,
    };
    await fs.ensureDir(path.dirname(BOT_MENU_PATH));
    await fs.writeJson(BOT_MENU_PATH, persistable, { spaces: 2 });
    return { ...normalized, buttonTypes: BOT_MENU_BUTTON_TYPES };
  };

  const buildSafeImageFilename = (input = "", fallbackExt = ".png") => {
    const normalized = normalizeText(input).replace(/\\/g, "/");
    const candidate = path.basename(normalized) || `avatar-${Date.now()}`;
    const extCandidate = path.extname(candidate);
    const ext = (extCandidate || fallbackExt).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) {
      return null;
    }
    const baseName =
      (extCandidate ? candidate.slice(0, -extCandidate.length) : candidate) ||
      `avatar-${Date.now()}`;
    const safeBase = baseName
      .normalize("NFKD")
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}0-9._-]/gu, "")
      .replace(/-+/g, "-")
      .replace(/^[-_.]+|[-_.]+$/g, "");
    return `${safeBase || `avatar-${Date.now()}`}${ext}`;
  };

  const getExistingImageFilename = (input = "") => {
    const normalized = normalizeText(input).replace(/\\/g, "/");
    const candidate = path.basename(normalized);
    if (!candidate) return null;
    const ext = path.extname(candidate).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) return null;
    return candidate;
  };

  const decodeBase64Image = (input = "") => {
    const normalized = normalizeText(input);
    const payload = normalized.includes("base64,")
      ? normalized.split("base64,").pop()
      : normalized;
    if (!payload) {
      throw new Error("Empty image payload.");
    }
    return Buffer.from(payload, "base64");
  };

  const ensureUniqueImageName = async (filename, targetDir = IMAGE_DIR) => {
    let attempt = 0;
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    let candidate = filename;
    while (await fs.pathExists(path.join(targetDir, candidate))) {
      attempt += 1;
      candidate = `${base}-${attempt}${ext}`;
    }
    return candidate;
  };

  const listAvatarImages = async () => {
    try {
      if (!(await fs.pathExists(IMAGE_DIR))) return [];
      const entries = await fs.readdir(IMAGE_DIR, { withFileTypes: true });
      const images = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => `/Image/${entry.name.replace(/\\/g, "/")}`);
      return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
    } catch (error) {
      console.error("Avatar scan error:", error);
      return [];
    }
  };

  const listMenuImages = async () => {
    try {
      if (!(await fs.pathExists(MENU_IMAGE_DIR))) return [];
      const entries = await fs.readdir(MENU_IMAGE_DIR, { withFileTypes: true });
      const images = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()),
        )
        .map((entry) => `/Image/menu_bots/${entry.name.replace(/\\/g, "/")}`);
      return Array.from(new Set(images)).sort((a, b) => a.localeCompare(b, "ru"));
    } catch (error) {
      console.error("Menu image scan error:", error);
      return [];
    }
  };

  return {
    loadBotMenu,
    saveBotMenu,
    buildSafeImageFilename,
    getExistingImageFilename,
    decodeBase64Image,
    ensureUniqueImageName,
    listAvatarImages,
    listMenuImages,
  };
};

module.exports = {
  createOwnerAssetHelpers,
};
