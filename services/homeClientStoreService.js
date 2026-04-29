const createHomeClientStoreService = ({
  fs,
  dataFilePath,
  randomUUID,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  prisma,
  readBlockedUsers,
  getServiceCatalog,
  getBarbers,
  getBotSettings,
  mapAppointment,
  splitServiceList,
  getServicePriceForBarber,
  isCompletedStatus,
  countAppointmentWarnings,
  warningLookbackDays = 90,
  warningBlockThreshold = 3,
}) => {
  const DEFAULT_STORE = {
    version: 1,
    users: {},
    site: {},
  };
  const HOME_USER_META_TABLE = "HomeUserMeta";
  const SITE_SETTINGS_ROW_ID = "client-site";
  const STORE_USERS_SNAPSHOT_KEY = Symbol("homeClientStoreUsersSnapshot");
  const BS_THRESHOLDS = [10, 25, 50, 100];
  const ACTIVITY_GREEN_DAYS = 90;
  const ACTIVITY_YELLOW_DAYS = 180;
  const GENDER_OPTIONS = new Set(["male", "female", "other"]);
  const parseWorkingRange = (value) => {
    const text = normalizeText(value);
    if (!text || text === "0" || !text.includes("-")) return null;
    const [startRaw, endRaw] = text.split("-", 2).map((part) => normalizeText(part));
    const timePattern = /^\d{1,2}:\d{2}$/;
    if (!timePattern.test(startRaw) || !timePattern.test(endRaw)) return null;
    const [startHour, startMinute] = startRaw.split(":").map(Number);
    const [endHour, endMinute] = endRaw.split(":").map(Number);
    const startTotal = startHour * 60 + startMinute;
    const endTotal = endHour * 60 + endMinute;
    return endTotal > startTotal ? [startTotal, endTotal] : null;
  };
  const buildDateWindowKeys = (maxDaysAhead = 14) => {
    const safeDays = Math.max(1, Math.min(30, Number(maxDaysAhead) || 14));
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return Array.from({ length: safeDays }).map((_, index) => {
      const current = new Date(start);
      current.setDate(start.getDate() + index);
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, "0");
      const day = String(current.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    });
  };
  const buildBookableBarbersPayload = async (barbers = [], services = [], options = {}) => {
    const safeBarbers = Array.isArray(barbers) ? barbers : [];
    if (!safeBarbers.length) return [];
    const settings = await getBotSettings();
    const dateWindowKeys = buildDateWindowKeys(settings?.maxDaysAhead);
    const activeScheduleRows = dateWindowKeys.length
      ? await prisma.schedules.findMany({
          where: {
            Barber: { in: safeBarbers.map((barber) => normalizeText(barber?.name)).filter(Boolean) },
            Date: { in: dateWindowKeys },
          },
          select: { Barber: true, Week: true },
        })
      : [];
    const barbersWithWorkingDays = new Set(
      activeScheduleRows
        .filter((row) => parseWorkingRange(row?.Week))
        .map((row) => normalizeText(row?.Barber)),
    );
    const includeServices = options.includeServices === true;
    return safeBarbers
      .filter((barber) => barber?.isActive !== false)
      .filter((barber) => barbersWithWorkingDays.has(normalizeText(barber?.name)))
      .map((barber) => {
        const barberServices = (Array.isArray(services) ? services : [])
          .filter((service) => {
            const price = Number(getServicePriceForBarber(service, barber.id));
            return Number.isFinite(price) && price > 0;
          })
          .map((service) => normalizeText(service?.name || service?.title || service?.label))
          .filter(Boolean);
        const servicesCount = barberServices.length;
        const displayName =
          normalizeText(barber.cardTitle) ||
          normalizeText(barber.nickname) ||
          normalizeText(barber.name) ||
          "Барбер";
        return {
          id: barber.id,
          name: displayName,
          fullName: normalizeText(barber.name) || displayName,
          nickname: normalizeText(barber.nickname),
          description: normalizeText(barber.description),
          color: normalizeText(barber.color),
          rating: normalizeText(barber.rating),
          avatarUrl: normalizeText(barber.avatarUrl),
          cardImageUrl: normalizeText(barber.cardImageUrl),
          cardTitle: normalizeText(barber.cardTitle),
          cardDescription: normalizeText(barber.cardDescription),
          cardPhrase: normalizeText(barber.cardPhrase),
          phrase: normalizeText(barber.cardPhrase) || normalizeText(barber.description),
          ...(includeServices ? { services: barberServices } : {}),
          servicesCount,
        };
      });
  };
  const DEFAULT_SITE_CONFIG = Object.freeze({
    timeZones: {
      crm: "Asia/Irkutsk",
      client: "Asia/Irkutsk",
    },
    home: {
      logoText: "BrotherShop",
      promos: [
        {
          id: "promo-1",
          title: "Стрижка + укладка",
          subtitle: "Быстрый визит",
          imageUrl: "",
          buttonLabel: "",
          buttonUrl: "",
          details:
            "Комбо-услуга для тех, кто хочет закрыть весь уход за один визит.",
        },
        {
          id: "promo-2",
          title: "Оформление бороды",
          subtitle: "Точная форма",
          imageUrl: "",
          buttonLabel: "",
          buttonUrl: "",
          details:
            "Аккуратная работа по контуру и форме с быстрым подбором образа.",
        },
        {
          id: "promo-3",
          title: "Реферальный BS",
          subtitle: "Пригласи друга",
          imageUrl: "",
          buttonLabel: "",
          buttonUrl: "",
          details:
            "За активных рефералов начисляются BS после каждой выполненной записи.",
        },
      ],
      aboutTitle: "BrotherShop",
      aboutText:
        "BrotherShop — это не просто барбершоп. Это место, где мы создадим твой образ.",
      aboutImageUrl: "",
      mapTitle: "Карта",
      mapImageUrl: "",
      mapLink: "https://go.2gis.com/fPKd6",
      mapCaption: "Гагарина 10, центральный вход, повернуть направо",
      contactsTitle: "Контакты",
      phone: "+7 964 659-92-96",
      telegramUrl: "",
      whatsappUrl: "",
      email: "",
      bookingButtonText: "Записаться",
    },
    referral: {
      pageTitle: "Бонусы и рефералы",
      introText: "",
      participationText:
        "Для участия в программе необходимо быть клиентом нашего барбершопа. BS можно потратить на любые услуги, курс: 1 BS = 1 ₽.",
      friendDiscountRub: 100,
      bsToRubRate: 1,
      rewardColumns: [
        { id: "col-beard", labels: ["Оформление бороды"] },
        { id: "col-haircut", labels: ["Стрижка"] },
        { id: "col-coloring", labels: ["Покраска или хим. завивка"] },
      ],
      levels: [
        {
          id: "level-brother",
          name: "Брат",
          minReferrals: 1,
          maxReferrals: 4,
          serviceRewards: [
            { id: "beard", label: "Оформление бороды", bsAmount: 15 },
            { id: "haircut", label: "Стрижка", bsAmount: 20 },
            { id: "coloring", label: "Покраска или хим. завивка", bsAmount: 50 },
          ],
        },
        {
          id: "level-senior-brother",
          name: "Старший брат",
          minReferrals: 5,
          maxReferrals: 10,
          serviceRewards: [
            { id: "beard", label: "Оформление бороды", bsAmount: 20 },
            { id: "haircut", label: "Стрижка", bsAmount: 30 },
            { id: "coloring", label: "Покраска или хим. завивка", bsAmount: 75 },
          ],
        },
        {
          id: "level-legend",
          name: "Легенда BrotherShop",
          minReferrals: 11,
          maxReferrals: null,
          serviceRewards: [
            { id: "beard", label: "Оформление бороды", bsAmount: 25 },
            { id: "haircut", label: "Стрижка", bsAmount: 40 },
            { id: "coloring", label: "Покраска или хим. завивка", bsAmount: 100 },
          ],
        },
      ],
    },
    booking: {
      pageTitle: "Онлайн-запись",
      commentPlaceholder: "Комментарий для мастера",
    },
    shop: {
      teaserTitle: "Скоро...",
      teaserText:
        "Магазин появится позже.",
    },
    profile: {
      pageTitle: "Личный кабинет",
      historyTitle: "Последние движения",
    },
  });

  const sanitizeDateOnly = (value) => {
    const safeValue = normalizeText(value);
    return /^\d{4}-\d{2}-\d{2}$/.test(safeValue) ? safeValue : null;
  };

  const toIsoString = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return null;
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed.toISOString();
  };
  const extractTimeTokens = (value) => {
    const safeValue = normalizeText(value);
    if (!safeValue) return [];
    return Array.from(
      new Set(
        [...safeValue.matchAll(/\b(\d{1,2}):(\d{2})\b/g)].map(
          (match) => `${match[1].padStart(2, "0")}:${match[2]}`,
        ),
      ),
    );
  };
  const formatTimeValue = (value) => {
    const safeValue = normalizeText(value);
    if (/^\d{2}:\d{2}$/.test(safeValue)) return safeValue;
    const [matchedTime] = extractTimeTokens(safeValue);
    if (matchedTime) return matchedTime;
    const parsed = new Date(safeValue);
    if (Number.isNaN(parsed.getTime())) return "";
    return `${String(parsed.getHours()).padStart(2, "0")}:${String(parsed.getMinutes()).padStart(2, "0")}`;
  };
  const buildTimeRangeLabel = (timeValue, endDateTime) => {
    const timeTokens = extractTimeTokens(timeValue);
    if (timeTokens.length >= 2) {
      return `${timeTokens[0]} - ${timeTokens[1]}`;
    }
    if (timeTokens.length === 1) {
      return timeTokens[0];
    }
    const start = formatTimeValue(timeValue);
    const end = formatTimeValue(endDateTime);
    if (start && end) return `${start} - ${end}`;
    return start || end || "";
  };

  const buildReferralCode = () =>
    randomUUID().replace(/-/g, "").slice(0, 10).toUpperCase();

  const formatShortPersonName = (value) => {
    const parts = normalizeText(value)
      .split(/\s+/)
      .filter(Boolean);
    if (!parts.length) return "Клиент";
    if (parts.length === 1) return parts[0];
    const [surname, ...rest] = parts;
    const initials = rest.map((part) => `${part[0]?.toUpperCase() || ""}.`).join(" ");
    return `${surname} ${initials}`.trim();
  };

  const extractComparablePhoneDigits = (value) => {
    const normalized = normalizePhone(value || "");
    const digits = normalized.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.length >= 10) return digits.slice(-10);
    return digits;
  };

  const phonesMatch = (left, right) => {
    const normalizedLeft = normalizePhone(left || "");
    const normalizedRight = normalizePhone(right || "");
    if (normalizedLeft && normalizedRight && normalizedLeft === normalizedRight) return true;
    const comparableLeft = extractComparablePhoneDigits(left);
    const comparableRight = extractComparablePhoneDigits(right);
    return Boolean(comparableLeft && comparableRight && comparableLeft === comparableRight);
  };

  const ensureStoreShape = (input) => {
    const store = input && typeof input === "object" ? input : DEFAULT_STORE;
    return {
      version: 1,
      users: store.users && typeof store.users === "object" ? store.users : {},
      site: store.site && typeof store.site === "object" ? store.site : {},
    };
  };

  let legacyStoreLoaded = false;
  let legacyStoreCache = ensureStoreShape(DEFAULT_STORE);

  const attachPersistedUsersSnapshot = (store, snapshot) => {
    Object.defineProperty(store, STORE_USERS_SNAPSHOT_KEY, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: snapshot instanceof Map ? snapshot : new Map(),
    });
    return store;
  };

  const getPersistedUsersSnapshot = (store) =>
    store?.[STORE_USERS_SNAPSHOT_KEY] instanceof Map ? store[STORE_USERS_SNAPSHOT_KEY] : new Map();

  const readLegacyStoreFile = async () => {
    if (legacyStoreLoaded) return legacyStoreCache;
    try {
      legacyStoreCache = ensureStoreShape(await fs.readJson(dataFilePath));
    } catch {
      legacyStoreCache = ensureStoreShape(DEFAULT_STORE);
    }
    legacyStoreLoaded = true;
    return legacyStoreCache;
  };

  const normalizeDatabaseJsonPayload = (payload) => {
    if (!payload) return {};
    if (typeof payload === "string") {
      try {
        return JSON.parse(payload);
      } catch {
        return {};
      }
    }
    return payload && typeof payload === "object" ? payload : {};
  };

  const sanitizeSitePromo = (input = {}, index = 0) => ({
    id: normalizeText(input.id) || `promo-${index + 1}`,
    title: normalizeText(input.title) || `Акция ${index + 1}`,
    subtitle: normalizeText(input.subtitle) || "",
    imageUrl: normalizeText(input.imageUrl) || "",
    details: normalizeText(input.details) || "",
    buttonLabel: normalizeText(input.buttonLabel) || "",
    buttonUrl: normalizeText(input.buttonUrl) || "",
  });

  const normalizeOptionalInteger = (value) => {
    if (value === null || value === undefined || value === "") return null;
    const numeric = Math.floor(Number(value));
    return Number.isFinite(numeric) ? numeric : null;
  };

  const sanitizeReferralServiceReward = (input = {}, index = 0) => ({
    id: normalizeText(input.id) || `service-${index + 1}`,
    label: normalizeText(input.label) || `Услуга ${index + 1}`,
    bsAmount: Math.max(0, Math.floor(Number(input.bsAmount) || 0)),
  });

  const sanitizeReferralLevel = (input = {}, index = 0) => {
    const serviceRewards = Array.isArray(input.serviceRewards)
      ? input.serviceRewards.map((item, rewardIndex) => sanitizeReferralServiceReward(item, rewardIndex)).slice(0, 24)
      : [];
    return {
      id: normalizeText(input.id) || `level-${index + 1}`,
      name: normalizeText(input.name) || `Уровень ${index + 1}`,
      minReferrals: Math.max(0, Math.floor(Number(input.minReferrals) || 0)),
      maxReferrals: normalizeOptionalInteger(input.maxReferrals),
      serviceRewards,
    };
  };

  const sanitizeReferralRewardColumn = (input = {}, index = 0) => {
    const labels = Array.isArray(input.labels)
      ? input.labels.map((item) => normalizeText(item)).filter(Boolean).slice(0, 12)
      : [];
    return {
      id: normalizeText(input.id) || `column-${index + 1}`,
      labels,
    };
  };

  const sanitizeSiteSettings = (input = {}) => {
    const homeInput = input.home && typeof input.home === "object" ? input.home : {};
    const referralInput = input.referral && typeof input.referral === "object" ? input.referral : {};
    const bookingInput = input.booking && typeof input.booking === "object" ? input.booking : {};
    const shopInput = input.shop && typeof input.shop === "object" ? input.shop : {};
    const profileInput = input.profile && typeof input.profile === "object" ? input.profile : {};
    const timeZonesInput = input.timeZones && typeof input.timeZones === "object" ? input.timeZones : {};
    const promos = Array.isArray(homeInput.promos)
      ? homeInput.promos.map((promo, index) => sanitizeSitePromo(promo, index)).slice(0, 12)
      : DEFAULT_SITE_CONFIG.home.promos.map((promo, index) => sanitizeSitePromo(promo, index));
    const referralLevels = Array.isArray(referralInput.levels)
      ? referralInput.levels.map((level, index) => sanitizeReferralLevel(level, index)).slice(0, 24)
      : DEFAULT_SITE_CONFIG.referral.levels.map((level, index) => sanitizeReferralLevel(level, index));
    const rewardColumns = Array.isArray(referralInput.rewardColumns)
      ? referralInput.rewardColumns.map((column, index) => sanitizeReferralRewardColumn(column, index)).filter((column) => column.labels.length > 0).slice(0, 24)
      : DEFAULT_SITE_CONFIG.referral.rewardColumns.map((column, index) => sanitizeReferralRewardColumn(column, index));
    return {
      timeZones: {
        crm: normalizeText(timeZonesInput.crm) || DEFAULT_SITE_CONFIG.timeZones.crm,
        client: normalizeText(timeZonesInput.client) || DEFAULT_SITE_CONFIG.timeZones.client,
      },
      home: {
        logoText: normalizeText(homeInput.logoText),
        promos,
        aboutTitle: normalizeText(homeInput.aboutTitle),
        aboutText: normalizeText(homeInput.aboutText),
        aboutImageUrl: normalizeText(homeInput.aboutImageUrl) || "",
        mapTitle: normalizeText(homeInput.mapTitle),
        mapImageUrl: normalizeText(homeInput.mapImageUrl) || "",
        mapLink: normalizeText(homeInput.mapLink),
        mapCaption: normalizeText(homeInput.mapCaption),
        contactsTitle: normalizeText(homeInput.contactsTitle),
        phone: normalizeText(homeInput.phone),
        telegramUrl: normalizeText(homeInput.telegramUrl) || "",
        whatsappUrl: normalizeText(homeInput.whatsappUrl) || "",
        email: normalizeText(homeInput.email) || "",
        bookingButtonText: normalizeText(homeInput.bookingButtonText),
      },
      referral: {
        pageTitle: normalizeText(referralInput.pageTitle),
        introText: normalizeText(referralInput.introText),
        participationText: normalizeText(referralInput.participationText),
        friendDiscountRub: Math.max(0, Math.floor(Number(referralInput.friendDiscountRub) || DEFAULT_SITE_CONFIG.referral.friendDiscountRub)),
        bsToRubRate: Math.max(1, Math.floor(Number(referralInput.bsToRubRate) || DEFAULT_SITE_CONFIG.referral.bsToRubRate)),
        rewardColumns,
        levels: referralLevels,
      },
      booking: {
        pageTitle: normalizeText(bookingInput.pageTitle),
        commentPlaceholder: normalizeText(bookingInput.commentPlaceholder),
      },
      shop: {
        teaserTitle: normalizeText(shopInput.teaserTitle),
        teaserText: normalizeText(shopInput.teaserText),
      },
      profile: {
        pageTitle: normalizeText(profileInput.pageTitle),
        historyTitle: normalizeText(profileInput.historyTitle),
      },
    };
  };

  const ensureHomeUserMetaTable = async () => {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "${HOME_USER_META_TABLE}" (
        "userId" TEXT PRIMARY KEY,
        "payload" JSONB NOT NULL DEFAULT '{}'::jsonb,
        "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
  };

  const readHomeUserMetaRows = async () => {
    await ensureHomeUserMetaTable();
    const rows = await prisma.$queryRawUnsafe(
      `SELECT "userId", "payload" FROM "${HOME_USER_META_TABLE}"`,
    );
    return Array.isArray(rows) ? rows : [];
  };

  const upsertHomeUserMetaRow = async (userId, payload) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return;
    await ensureHomeUserMetaTable();
    await prisma.$executeRawUnsafe(
      `
        INSERT INTO "${HOME_USER_META_TABLE}" ("userId", "payload", "createdAt", "updatedAt")
        VALUES ($1, $2::jsonb, NOW(), NOW())
        ON CONFLICT ("userId")
        DO UPDATE SET
          "payload" = EXCLUDED."payload",
          "updatedAt" = NOW()
      `,
      safeUserId,
      JSON.stringify(payload),
    );
  };

  const buildUsersSnapshot = (users = {}) =>
    new Map(
      Object.entries(users)
        .map(([userId, meta]) => [normalizeText(userId), JSON.stringify(sanitizeUserMeta(meta))])
        .filter(([userId]) => Boolean(userId)),
    );

  const readStore = async () => {
    let rows = await readHomeUserMetaRows();
    const legacyStore = await readLegacyStoreFile();
    const legacyUsers =
      legacyStore?.users && typeof legacyStore.users === "object" ? legacyStore.users : {};
    const dbUserIds = new Set(rows.map((row) => normalizeText(row?.userId)).filter(Boolean));
    const missingLegacyEntries = Object.entries(legacyUsers)
      .map(([userId, meta]) => [normalizeText(userId), sanitizeUserMeta(meta)])
      .filter(([userId]) => Boolean(userId) && !dbUserIds.has(userId));

    if (missingLegacyEntries.length) {
      for (const [userId, meta] of missingLegacyEntries) {
        await upsertHomeUserMetaRow(userId, meta);
      }
      rows = rows.concat(
        missingLegacyEntries.map(([userId, payload]) => ({
          userId,
          payload,
        })),
      );
    }

    const users = {};
    rows.forEach((row) => {
      const userId = normalizeText(row?.userId);
      if (!userId) return;
      users[userId] = sanitizeUserMeta(normalizeDatabaseJsonPayload(row?.payload));
    });

    const store = ensureStoreShape({
      version: 1,
      users,
      site: legacyStore?.site,
    });
    return attachPersistedUsersSnapshot(store, buildUsersSnapshot(store.users));
  };

  const writeStore = async (store) => {
    const nextStore = ensureStoreShape(store);
    const previousSnapshot = getPersistedUsersSnapshot(store);
    const nextUsers = {};
    Object.entries(nextStore.users || {}).forEach(([userId, meta]) => {
      const safeUserId = normalizeText(userId);
      if (!safeUserId) return;
      nextUsers[safeUserId] = sanitizeUserMeta(meta);
    });
    const nextSnapshot = buildUsersSnapshot(nextUsers);
    for (const [userId, serialized] of nextSnapshot.entries()) {
      if (previousSnapshot.get(userId) === serialized) continue;
      await upsertHomeUserMetaRow(userId, nextUsers[userId]);
    }
    const persistedStore = ensureStoreShape({
      ...nextStore,
      users: nextUsers,
    });
    return attachPersistedUsersSnapshot(persistedStore, nextSnapshot);
  };

  const hasLegacySiteSettings = (store = {}) =>
    Boolean(store?.site && typeof store.site === "object" && Object.keys(store.site).length > 0);

  const normalizeDatabaseSitePayload = normalizeDatabaseJsonPayload;

  const ensureSiteSettingsTable = async () => {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "SiteSettings" (
        "id" TEXT PRIMARY KEY,
        "payload" JSONB NOT NULL DEFAULT '{}'::jsonb,
        "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
  };

  const readSiteSettingsRow = async () => {
    await ensureSiteSettingsTable();
    const rows = await prisma.$queryRawUnsafe(
      'SELECT "payload" FROM "SiteSettings" WHERE "id" = $1 LIMIT 1',
      SITE_SETTINGS_ROW_ID,
    );
    return Array.isArray(rows) && rows[0] ? rows[0] : null;
  };

  const writeSiteSettingsRow = async (site) => {
    const payload = sanitizeSiteSettings(site || {});
    await ensureSiteSettingsTable();
    await prisma.$executeRawUnsafe(
      `
        INSERT INTO "SiteSettings" ("id", "payload", "createdAt", "updatedAt")
        VALUES ($1, $2::jsonb, NOW(), NOW())
        ON CONFLICT ("id")
        DO UPDATE SET
          "payload" = EXCLUDED."payload",
          "updatedAt" = NOW()
      `,
      SITE_SETTINGS_ROW_ID,
      JSON.stringify(payload),
    );
    return payload;
  };

  const getPersistedSiteSettings = async () => {
    const row = await readSiteSettingsRow();
    if (row) {
      return sanitizeSiteSettings(normalizeDatabaseSitePayload(row.payload));
    }
    const store = await readStore();
    const site = sanitizeSiteSettings(hasLegacySiteSettings(store) ? store.site : {});
    await writeSiteSettingsRow(site);
    if (hasLegacySiteSettings(store)) {
      store.site = {};
      await writeStore(store);
    }
    return site;
  };

  const sanitizeTransaction = (transaction = {}) => {
    const amountBs = Number(transaction.amountBs);
    const safeCreatedAt = toIsoString(transaction.createdAt) || new Date().toISOString();
    return {
      id: normalizeText(transaction.id) || randomUUID(),
      type: normalizeText(transaction.type) || "manual",
      title: normalizeText(transaction.title) || "Операция",
      description: normalizeText(transaction.description) || "",
      comment: normalizeText(transaction.comment) || "",
      amountBs: Number.isFinite(amountBs) ? amountBs : 0,
      createdAt: safeCreatedAt,
      status: normalizeText(transaction.status) || "posted",
      counterpartId: normalizeText(transaction.counterpartId) || "",
      counterpartName: normalizeText(transaction.counterpartName) || "",
      counterpartPhone: normalizePhone(transaction.counterpartPhone || "") || "",
      counterpartAvatarUrl: normalizeText(transaction.counterpartAvatarUrl) || "",
      appointmentId: normalizeText(transaction.appointmentId) || "",
    };
  };

  const sanitizeManualWarning = (warning = {}) => ({
    id: normalizeText(warning.id) || randomUUID(),
    createdAt: toIsoString(warning.createdAt) || new Date().toISOString(),
    title: normalizeText(warning.title) || "Предупреждение",
    description: normalizeText(warning.description) || "",
    actorName: normalizeText(warning.actorName) || "",
  });

  const sanitizeUserMeta = (input = {}) => {
    const gender = normalizeText(input.gender).toLowerCase();
    const transactions = Array.isArray(input.transactions)
      ? input.transactions.map(sanitizeTransaction)
      : [];
    const manualWarnings = Array.isArray(input.manualWarnings)
      ? input.manualWarnings.map(sanitizeManualWarning).filter((warning) => warning.id)
      : [];
    const bookingNotificationsEnabled =
      input.bookingNotificationsEnabled === undefined ? true : Boolean(input.bookingNotificationsEnabled);
    const balanceNotificationsEnabled =
      input.balanceNotificationsEnabled === undefined ? true : Boolean(input.balanceNotificationsEnabled);
    return {
      birthDate: sanitizeDateOnly(input.birthDate),
      gender: GENDER_OPTIONS.has(gender) ? gender : "",
      avatarUrl: normalizeText(input.avatarUrl) || "",
      referralCode: normalizeText(input.referralCode) || buildReferralCode(),
      referredByUserId: normalizeText(input.referredByUserId) || null,
      bookingNotificationsEnabled,
      balanceNotificationsEnabled,
      privacyConsentAcceptedAt: toIsoString(input.privacyConsentAcceptedAt),
      privacyConsentIp: normalizeText(input.privacyConsentIp) || "",
      privacyConsentSource: normalizeText(input.privacyConsentSource) || "",
      privacyConsentVersion: normalizeText(input.privacyConsentVersion) || "",
      transactions,
      manualWarnings,
    };
  };

  const ensureUserMeta = (store, userId) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return sanitizeUserMeta();
    const nextMeta = sanitizeUserMeta(store.users?.[safeUserId] || {});
    store.users[safeUserId] = nextMeta;
    return nextMeta;
  };

  const getUserMeta = async (userId) => {
    const store = await readStore();
    const meta = ensureUserMeta(store, userId);
    await writeStore(store);
    return meta;
  };

  const updateUserMeta = async (userId, patch = {}) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return null;
    const store = await readStore();
    const current = ensureUserMeta(store, safeUserId);
    const nextMeta = sanitizeUserMeta({
      ...current,
      ...patch,
      transactions: patch.transactions === undefined ? current.transactions : patch.transactions,
    });
    store.users[safeUserId] = nextMeta;
    await writeStore(store);
    return nextMeta;
  };

  const getSiteSettings = async () => {
    return getPersistedSiteSettings();
  };

  const updateSiteSettings = async (patch = {}) => {
    const current = await getPersistedSiteSettings();
    const nextSite = sanitizeSiteSettings({
      ...current,
      ...patch,
      home: {
        ...current.home,
        ...(patch.home && typeof patch.home === "object" ? patch.home : {}),
      },
      referral: {
        ...current.referral,
        ...(patch.referral && typeof patch.referral === "object" ? patch.referral : {}),
      },
      booking: {
        ...current.booking,
        ...(patch.booking && typeof patch.booking === "object" ? patch.booking : {}),
      },
      timeZones: {
        ...(current.timeZones && typeof current.timeZones === "object" ? current.timeZones : {}),
        ...(patch.timeZones && typeof patch.timeZones === "object" ? patch.timeZones : {}),
      },
      shop: {
        ...current.shop,
        ...(patch.shop && typeof patch.shop === "object" ? patch.shop : {}),
      },
      profile: {
        ...current.profile,
        ...(patch.profile && typeof patch.profile === "object" ? patch.profile : {}),
      },
    });
    await writeSiteSettingsRow(nextSite);
    return nextSite;
  };

  const resolveUserKey = (user = {}) =>
    normalizeText(user.id) || normalizePhone(user.Phone || user.phone || "");

  const collectUserAppointments = (user, appointments = []) => {
    const safeUserId = normalizeText(user?.id);
    const safePhone = normalizePhone(user?.Phone || user?.phone || "");
    const safeName = normalizeText(user?.Name || user?.name || "");
    return appointments.filter((appointment) => {
      if (!appointment) return false;
      if (safeUserId && normalizeText(appointment.UserID) === safeUserId) return true;
      if (safePhone && normalizePhone(appointment.Phone || "") === safePhone) return true;
      if (safeName && normalizeText(appointment.CustomerName) === safeName) return true;
      return false;
    });
  };

  const resolveLastCompletedAppointment = (appointments = []) =>
    appointments
      .filter((appointment) => appointment?.isConfirmed || isCompletedStatus(appointment?.Status))
      .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0))[0] || null;

  const resolveActivity = (lastAppointment) => {
    const lastDateIso = normalizeText(lastAppointment?.startDateTime || lastAppointment?.Date);
    if (!lastDateIso) {
      return { color: "red", label: "Неактивный", lastVisitAt: null };
    }
    const lastDate = new Date(lastDateIso);
    if (Number.isNaN(lastDate.getTime())) {
      return { color: "red", label: "Неактивный", lastVisitAt: null };
    }
    const diffDays = Math.floor((Date.now() - lastDate.getTime()) / (24 * 60 * 60 * 1000));
    if (diffDays <= ACTIVITY_GREEN_DAYS) {
      return { color: "green", label: "Активный", lastVisitAt: lastDate.toISOString() };
    }
    if (diffDays <= ACTIVITY_YELLOW_DAYS) {
      return { color: "yellow", label: "Редкий", lastVisitAt: lastDate.toISOString() };
    }
    return { color: "red", label: "Неактивный", lastVisitAt: lastDate.toISOString() };
  };

  const buildCatalogHelpers = async () => {
    const [services, barbers] = await Promise.all([
      getServiceCatalog(true),
      getBarbers({ includeInactive: true }),
    ]);
    const barberLookup = new Map(
      (Array.isArray(barbers) ? barbers : [])
        .filter(Boolean)
        .map((barber) => [canonicalizeKey(barber.name), barber]),
    );
    const serviceLookup = new Map(
      (Array.isArray(services) ? services : [])
        .filter(Boolean)
        .map((service) => [canonicalizeKey(service.name), service]),
    );
    return { services, barbers, barberLookup, serviceLookup };
  };

  const resolveReferralLevel = (levels = [], activeReferralsCount = 0) =>
    levels.find((level) => {
      const minReferrals = Math.max(0, Math.floor(Number(level?.minReferrals) || 0));
      const maxReferrals = normalizeOptionalInteger(level?.maxReferrals);
      if (activeReferralsCount < minReferrals) return false;
      if (maxReferrals !== null && activeReferralsCount > maxReferrals) return false;
      return true;
    }) || null;

  const resolveRewardAmountForAppointment = (appointment, level) => {
    const rewards = Array.isArray(level?.serviceRewards) ? level.serviceRewards : [];
    if (!rewards.length) return 0;
    const appointmentServices = splitServiceList(appointment?.Services)
      .map((serviceName) => canonicalizeKey(serviceName))
      .filter(Boolean);
    if (!appointmentServices.length) return 0;
    return rewards.reduce((best, reward) => {
      const rewardId = canonicalizeKey(reward?.id);
      const rewardLabel = canonicalizeKey(reward?.label);
      const matched = appointmentServices.some((serviceKey) => {
        if (!serviceKey) return false;
        if (rewardId && serviceKey === rewardId) return true;
        if (rewardLabel && (serviceKey === rewardLabel || serviceKey.includes(rewardLabel) || rewardLabel.includes(serviceKey))) {
          return true;
        }
        return false;
      });
      if (!matched) return best;
      return Math.max(best, Math.max(0, Math.floor(Number(reward?.bsAmount) || 0)));
    }, 0);
  };
  const resolveAppointmentSpend = (appointment, barberLookup, serviceLookup) => {
    const barber = barberLookup.get(canonicalizeKey(appointment?.Barber));
    if (!barber) return 0;
    return splitServiceList(appointment?.Services).reduce((total, serviceName) => {
      const service = serviceLookup.get(canonicalizeKey(serviceName));
      if (!service) return total;
      const price = Number(getServicePriceForBarber(service, barber.id));
      if (!Number.isFinite(price) || price <= 0) return total;
      return total + price;
    }, 0);
  };

  const buildNotices = (appointments = []) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - warningLookbackDays);
    return appointments
      .filter((appointment) => normalizeText(appointment?.Status) === "no_show")
      .filter((appointment) => {
        const dateValue = normalizeText(appointment.startDateTime || appointment.Date);
        if (!dateValue) return false;
        const parsed = new Date(dateValue);
        return !Number.isNaN(parsed.getTime()) && parsed >= cutoff;
      })
      .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0))
      .map((appointment) => ({
        id: normalizeText(appointment.id) || randomUUID(),
        createdAt: normalizeText(appointment.startDateTime) || null,
        title: appointment?.Status === "no_show" ? "Неявка" : "Замечание",
        description:
          appointment?.Status === "no_show"
            ? "Клиент пропустил запись."
            : "По записи было зафиксировано предупреждение.",
      }));
  };

  const countNoShowWarnings = (appointments = []) => buildNotices(appointments).length;
  const buildManualNotices = (userMeta = {}) =>
    (Array.isArray(userMeta.manualWarnings) ? userMeta.manualWarnings : [])
      .map(sanitizeManualWarning)
      .map((warning) => ({
        id: warning.id,
        createdAt: warning.createdAt,
        title: warning.title,
        description: warning.actorName
          ? `${warning.description} (${warning.actorName})`.trim()
          : warning.description,
        manual: true,
      }))
      .sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));

  const buildUserInsightsMap = async (users = [], appointments = [], blockedUsers = new Set()) => {
    const store = await readStore();
    const { barberLookup, serviceLookup } = await buildCatalogHelpers();
    const insights = new Map();
    users.forEach((user) => {
      const meta = ensureUserMeta(store, user.id);
      const relatedAppointments = collectUserAppointments(user, appointments);
      const completedAppointments = relatedAppointments
        .filter((appointment) => appointment?.isConfirmed || isCompletedStatus(appointment?.Status))
        .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0));
      const warningCount = countNoShowWarnings(relatedAppointments) + buildManualNotices(meta).length;
      const manualBlocked = blockedUsers.has(user.id);
      const isBlocked = manualBlocked || warningCount >= warningBlockThreshold;
      const lastCompleted = resolveLastCompletedAppointment(completedAppointments);
      const activity = resolveActivity(lastCompleted);
      const totalSpent = completedAppointments.reduce(
        (total, appointment) => total + resolveAppointmentSpend(appointment, barberLookup, serviceLookup),
        0,
      );
      insights.set(user.id, {
        birthDate: meta.birthDate,
        gender: meta.gender,
        avatarUrl: meta.avatarUrl,
        referralCode: meta.referralCode,
        referredByUserId: meta.referredByUserId,
        bsBalance: 0,
        activityColor: activity.color,
        activityLabel: activity.label,
        lastVisitAt: activity.lastVisitAt,
        warningCount,
        manualBlocked,
        isBlocked,
        noticeCount: buildNotices(relatedAppointments).length,
        totalSpent,
      });
    });
    await writeStore(store);
    return insights;
  };

  const applyReferralCode = async ({ userId, referralCode }) => {
    const safeUserId = normalizeText(userId);
    const safeReferralCode = normalizeText(referralCode).toUpperCase();
    if (!safeUserId || !safeReferralCode) return null;
    const [store, users] = await Promise.all([readStore(), prisma.users.findMany({ select: { id: true } })]);
    let ownerId = null;
    users.forEach((user) => {
      const meta = ensureUserMeta(store, user.id);
      if (!ownerId && normalizeText(meta.referralCode).toUpperCase() === safeReferralCode) {
        ownerId = user.id;
      }
    });
    if (!ownerId || ownerId === safeUserId) {
      await writeStore(store);
      return null;
    }
    const current = ensureUserMeta(store, safeUserId);
    if (!current.referredByUserId) {
      current.referredByUserId = ownerId;
      store.users[safeUserId] = current;
      await writeStore(store);
    } else {
      await writeStore(store);
    }
    return ownerId;
  };

  const buildReferralPayload = async (user) => {
    const safeUserId = normalizeText(user?.id);
    if (!safeUserId) return null;
    const [store, users, appointmentsRaw, settings, site] = await Promise.all([
      readStore(),
      prisma.users.findMany(),
      prisma.appointments.findMany(),
      getBotSettings().catch(() => null),
      getPersistedSiteSettings(),
    ]);
    const referralProgram = site.referral || DEFAULT_SITE_CONFIG.referral;
    const referralLevels = Array.isArray(referralProgram.levels) ? referralProgram.levels : [];
    const appointments = appointmentsRaw.map(mapAppointment);
    const ownerMeta = ensureUserMeta(store, safeUserId);
    const userMetaById = new Map(
      users.map((candidate) => [normalizeText(candidate.id), ensureUserMeta(store, candidate.id)]),
    );
    const referredUsers = users.filter((candidate) => {
      const candidateMeta = ensureUserMeta(store, candidate.id);
      return normalizeText(candidateMeta.referredByUserId) === safeUserId;
    });
    const referrals = referredUsers.map((referredUser) => {
      const relatedAppointments = collectUserAppointments(referredUser, appointments);
      const completedAppointments = relatedAppointments
        .filter((appointment) => appointment?.isConfirmed || isCompletedStatus(appointment?.Status))
        .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0));
      const lastCompleted = resolveLastCompletedAppointment(completedAppointments);
      const activity = resolveActivity(lastCompleted);
      return {
        id: referredUser.id,
        fullName: normalizeText(referredUser.Name) || normalizePhone(referredUser.Phone || '') || 'Клиент',
        phone: normalizePhone(referredUser.Phone || '') || null,
        completedAppointments,
        completedVisits: completedAppointments.length,
        color: activity.color,
        label: activity.label,
        lastVisitAt: activity.lastVisitAt,
      };
    });
    const activeReferralsCount = referrals.filter((referral) => referral.color === 'green').length;
    const sortedLevels = [...referralLevels].sort(
      (left, right) => Math.max(0, Number(left?.minReferrals) || 0) - Math.max(0, Number(right?.minReferrals) || 0),
    );
    const currentLevel = resolveReferralLevel(sortedLevels, activeReferralsCount);
    const nextLevel =
      sortedLevels.find((level) => Math.max(0, Number(level?.minReferrals) || 0) > activeReferralsCount) || null;
    const rewardOperations = [];
    const visibleReferrals = referrals
      .map((referral) => {
        let totalReward = 0;
        if (referral.color === 'green') {
          referral.completedAppointments.forEach((appointment) => {
            const rewardAmount = resolveRewardAmountForAppointment(appointment, currentLevel);
            if (rewardAmount <= 0) return;
            totalReward += rewardAmount;
            rewardOperations.push({
              id: `reward-${normalizeText(referral.id)}-${normalizeText(appointment.id)}`,
              type: 'reward',
              title: 'Начисление BS',
              description: `Реферал ${referral.fullName} завершил запись`,
              amountBs: rewardAmount,
              createdAt: normalizeText(appointment.startDateTime) || new Date().toISOString(),
              status: 'posted',
            });
          });
        }
        return {
          id: referral.id,
          fullName: referral.fullName,
          phone: referral.phone,
          completedVisits: referral.completedVisits,
          rewardedVisits: totalReward,
          color: referral.color,
          label: referral.label,
          lastVisitAt: referral.lastVisitAt,
        };
      })
      .filter((referral) => referral.color !== 'red');
    const manualTransactions = (ownerMeta.transactions || []).map((transaction) => {
      const sanitized = sanitizeTransaction(transaction);
      const currentAvatarUrl = normalizeText(
        userMetaById.get(normalizeText(sanitized.counterpartId))?.avatarUrl || "",
      );
      return {
        ...sanitized,
        counterpartAvatarUrl: currentAvatarUrl,
      };
    });
    const operations = [...rewardOperations, ...manualTransactions].sort((left, right) =>
      normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)),
    );
    const recentTransferRecipients = [];
    manualTransactions
      .filter((operation) => normalizeText(operation.type) === "transfer_out")
      .sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)))
      .forEach((operation) => {
        const phone = normalizePhone(operation.counterpartPhone || "");
        const id = normalizeText(operation.counterpartId);
        const fullName = normalizeText(operation.counterpartName);
        const key = id || phone;
        if (!key || recentTransferRecipients.some((item) => item.key === key)) return;
        recentTransferRecipients.push({
          key,
          id,
          fullName,
          shortName: formatShortPersonName(fullName),
          phone,
          avatarUrl: normalizeText(operation.counterpartAvatarUrl),
          lastTransferAt: operation.createdAt,
        });
      });
    const bsBalance = operations.reduce((total, operation) => total + (Number(operation.amountBs) || 0), 0);
    const progressStart = Math.max(0, Number(currentLevel?.minReferrals) || 0);
    const progressNext = nextLevel ? Math.max(0, Number(nextLevel.minReferrals) || 0) : progressStart;
    const progressSpan = nextLevel ? Math.max(1, progressNext - progressStart) : 1;
    const progressValue = nextLevel ? Math.max(0, activeReferralsCount - progressStart) : progressSpan;
    await writeStore(store);
    return {
      bsBalance,
      scale: {
        current: activeReferralsCount,
        next: progressNext,
        progress: Math.max(0, Math.min(100, Math.round((progressValue / progressSpan) * 100))),
        isMaxLevel: !nextLevel,
      },
      referralCode: ownerMeta.referralCode,
      referralLink: `/login/?ref=${encodeURIComponent(ownerMeta.referralCode)}`,
      referrals: visibleReferrals,
      stats: {
        total: referrals.length,
        green: activeReferralsCount,
        yellow: referrals.filter((referral) => referral.color === 'yellow').length,
      },
      operations,
      recentTransferRecipients: recentTransferRecipients.slice(0, 8),
      description: {
        title: referralProgram.pageTitle,
        text: referralProgram.introText,
        participationText: referralProgram.participationText,
        bookingLimit: settings?.bookingLimit || null,
      },
      program: {
        friendDiscountRub: Math.max(0, Number(referralProgram.friendDiscountRub) || 0),
        bsToRubRate: Math.max(1, Number(referralProgram.bsToRubRate) || 1),
        levels: sortedLevels,
        currentLevel,
        activeReferralsCount,
      },
    };
  };

  const getNetAppliedBsForAppointment = (transactions = [], appointmentId) => {
    const safeAppointmentId = normalizeText(appointmentId);
    if (!safeAppointmentId) return 0;
    return Math.max(
      0,
      (Array.isArray(transactions) ? transactions : [])
        .map(sanitizeTransaction)
        .filter(
          (transaction) =>
            normalizeText(transaction.appointmentId) === safeAppointmentId &&
            ["booking_payment", "booking_refund"].includes(normalizeText(transaction.type)),
        )
        .reduce((total, transaction) => total - (Number(transaction.amountBs) || 0), 0),
    );
  };

  const applyBsToBookingAppointment = async ({
    userId,
    appointmentId,
    amountBs,
    amountRub,
    serviceTotalRub,
    bsToRubRate,
    barberName,
    dateKey,
    timeRange,
  }) => {
    const safeUserId = normalizeText(userId);
    const safeAppointmentId = normalizeText(appointmentId);
    const safeAmountBs = Math.max(0, Math.trunc(Number(amountBs) || 0));
    const safeAmountRub = Math.max(0, Math.round(Number(amountRub) || 0));
    const safeServiceTotalRub = Math.max(0, Math.round(Number(serviceTotalRub) || 0));
    const safeBsToRubRate = Math.max(1, Math.trunc(Number(bsToRubRate) || 1));
    if (!safeUserId) throw new Error("UNAUTHORIZED");
    if (!safeAppointmentId) throw new Error("APPOINTMENT_REQUIRED");
    if (!safeAmountBs) {
      return {
        appointmentId: safeAppointmentId,
        amountBs: 0,
        amountRub: 0,
        amountDueRub: safeServiceTotalRub,
      };
    }

    const [store, user] = await Promise.all([
      readStore(),
      prisma.users.findUnique({ where: { id: safeUserId } }),
    ]);
    if (!user) throw new Error("UNAUTHORIZED");

    const userMeta = ensureUserMeta(store, safeUserId);
    if (getNetAppliedBsForAppointment(userMeta.transactions, safeAppointmentId) > 0) {
      throw new Error("BOOKING_BS_ALREADY_APPLIED");
    }

    const referralPayload = await buildReferralPayload(user);
    const currentBalance = Math.max(0, Math.trunc(Number(referralPayload?.bsBalance) || 0));
    if (currentBalance < safeAmountBs) throw new Error("INSUFFICIENT_BS");

    userMeta.transactions = [
      ...(Array.isArray(userMeta.transactions) ? userMeta.transactions : []),
      sanitizeTransaction({
        type: "booking_payment",
        title: "Оплата записи BS",
        description: `Списано ${safeAmountBs} BS за запись к ${normalizeText(barberName) || "барберу"}${normalizeText(dateKey) ? ` · ${normalizeText(dateKey)}` : ""}${normalizeText(timeRange) ? ` · ${normalizeText(timeRange)}` : ""}`,
        amountBs: -safeAmountBs,
        createdAt: new Date().toISOString(),
        status: "posted",
        appointmentId: safeAppointmentId,
      }),
    ];
    store.users[safeUserId] = sanitizeUserMeta(userMeta);
    await writeStore(store);

    return {
      appointmentId: safeAppointmentId,
      amountBs: safeAmountBs,
      amountRub: safeAmountRub,
      amountDueRub: Math.max(0, safeServiceTotalRub - safeAmountRub),
      bsToRubRate: safeBsToRubRate,
    };
  };

  const refundBsForCancelledAppointment = async ({
    userId,
    appointmentId,
    barberName,
    dateKey,
    timeRange,
  }) => {
    const safeUserId = normalizeText(userId);
    const safeAppointmentId = normalizeText(appointmentId);
    if (!safeUserId) throw new Error("UNAUTHORIZED");
    if (!safeAppointmentId) throw new Error("APPOINTMENT_REQUIRED");

    const [store, user] = await Promise.all([
      readStore(),
      prisma.users.findUnique({ where: { id: safeUserId } }),
    ]);
    if (!user) throw new Error("UNAUTHORIZED");

    const userMeta = ensureUserMeta(store, safeUserId);
    const refundAmountBs = getNetAppliedBsForAppointment(userMeta.transactions, safeAppointmentId);
    if (!refundAmountBs) {
      return {
        appointmentId: safeAppointmentId,
        amountBs: 0,
      };
    }

    userMeta.transactions = [
      ...(Array.isArray(userMeta.transactions) ? userMeta.transactions : []),
      sanitizeTransaction({
        type: "booking_refund",
        title: "Возврат BS",
        description: `Возврат ${refundAmountBs} BS за отменённую запись к ${normalizeText(barberName) || "барберу"}${normalizeText(dateKey) ? ` · ${normalizeText(dateKey)}` : ""}${normalizeText(timeRange) ? ` · ${normalizeText(timeRange)}` : ""}`,
        amountBs: refundAmountBs,
        createdAt: new Date().toISOString(),
        status: "posted",
        appointmentId: safeAppointmentId,
      }),
    ];
    store.users[safeUserId] = sanitizeUserMeta(userMeta);
    await writeStore(store);

    return {
      appointmentId: safeAppointmentId,
      amountBs: refundAmountBs,
    };
  };
  const resolveBsTransferRecipient = async ({
    fromUserId,
    targetPhone,
  }) => {
    const safeFromUserId = normalizeText(fromUserId);
    const safeTargetPhone = normalizePhone(targetPhone || "");
    if (!safeFromUserId) throw new Error("UNAUTHORIZED");
    if (!safeTargetPhone) throw new Error("TARGET_REQUIRED");

    const [users, senderUser] = await Promise.all([
      prisma.users.findMany({ select: { id: true, Name: true, Phone: true } }),
      prisma.users.findUnique({ where: { id: safeFromUserId } }),
    ]);
    if (!senderUser) throw new Error("UNAUTHORIZED");

    const recipientUser =
      users.find((candidate) => phonesMatch(candidate.Phone || "", safeTargetPhone)) || null;
    if (!recipientUser) throw new Error("TARGET_NOT_FOUND");
    if (normalizeText(recipientUser.id) === safeFromUserId) throw new Error("SELF_TRANSFER");

    const fullName = normalizeText(recipientUser.Name) || normalizePhone(recipientUser.Phone || "") || "Пользователь";
    return {
      id: recipientUser.id,
      fullName,
      shortName: formatShortPersonName(fullName),
      phone: normalizePhone(recipientUser.Phone || "") || "",
    };
  };

  const transferBsBalance = async ({
    fromUserId,
    targetPhone,
    targetReferralCode,
    amountBs,
    comment,
  }) => {
    const safeFromUserId = normalizeText(fromUserId);
    const safeTargetPhone = normalizePhone(targetPhone || "");
    const safeTargetReferralCode = normalizeText(targetReferralCode).toUpperCase();
    const safeAmount = Math.floor(Number(amountBs) || 0);
    const safeComment = normalizeText(comment);
    if (!safeFromUserId) throw new Error("UNAUTHORIZED");
    if (!safeTargetPhone && !safeTargetReferralCode) throw new Error("TARGET_REQUIRED");
    if (!Number.isFinite(safeAmount) || safeAmount <= 0) throw new Error("INVALID_AMOUNT");

    const [store, users, senderUser] = await Promise.all([
      readStore(),
      prisma.users.findMany({ select: { id: true, Name: true, Phone: true } }),
      prisma.users.findUnique({ where: { id: safeFromUserId } }),
    ]);
    if (!senderUser) throw new Error("UNAUTHORIZED");

    let recipientUser = null;
    users.forEach((candidate) => {
      if (recipientUser) return;
      const candidateMeta = ensureUserMeta(store, candidate.id);
      const candidatePhone = normalizePhone(candidate.Phone || "");
      const candidateReferralCode = normalizeText(candidateMeta.referralCode).toUpperCase();
      if (safeTargetPhone && candidatePhone && phonesMatch(candidatePhone, safeTargetPhone)) {
        recipientUser = candidate;
        return;
      }
      if (safeTargetReferralCode && candidateReferralCode === safeTargetReferralCode) {
        recipientUser = candidate;
      }
    });

    if (!recipientUser) throw new Error("TARGET_NOT_FOUND");
    if (normalizeText(recipientUser.id) === safeFromUserId) throw new Error("SELF_TRANSFER");

    const senderReferral = await buildReferralPayload(senderUser);
    const senderBalance = Number(senderReferral?.bsBalance) || 0;
    if (senderBalance < safeAmount) throw new Error("INSUFFICIENT_BS");

    const senderMeta = ensureUserMeta(store, safeFromUserId);
    const recipientMeta = ensureUserMeta(store, recipientUser.id);
    const senderLabel = normalizeText(senderUser.Name) || normalizePhone(senderUser.Phone || "") || "Пользователь";
    const recipientLabel = normalizeText(recipientUser.Name) || normalizePhone(recipientUser.Phone || "") || "Пользователь";
    const createdAt = new Date().toISOString();

    senderMeta.transactions = [
      ...(Array.isArray(senderMeta.transactions) ? senderMeta.transactions : []),
      sanitizeTransaction({
        type: "transfer_out",
        title: "Перевод BS",
        description: `Перевод пользователю ${recipientLabel}`,
        comment: safeComment,
        amountBs: -safeAmount,
        createdAt,
        status: "posted",
        counterpartId: recipientUser.id,
        counterpartName: recipientLabel,
        counterpartPhone: normalizePhone(recipientUser.Phone || "") || "",
        counterpartAvatarUrl: "",
      }),
    ];

    recipientMeta.transactions = [
      ...(Array.isArray(recipientMeta.transactions) ? recipientMeta.transactions : []),
      sanitizeTransaction({
        type: "transfer_in",
        title: "Получение BS",
        description: `Перевод от ${senderLabel}`,
        comment: safeComment,
        amountBs: safeAmount,
        createdAt,
        status: "posted",
        counterpartId: safeFromUserId,
        counterpartName: senderLabel,
        counterpartPhone: normalizePhone(senderUser.Phone || "") || "",
        counterpartAvatarUrl: "",
      }),
    ];

    store.users[safeFromUserId] = sanitizeUserMeta(senderMeta);
    store.users[normalizeText(recipientUser.id)] = sanitizeUserMeta(recipientMeta);
    await writeStore(store);

    return {
      amountBs: safeAmount,
      recipient: {
        id: recipientUser.id,
        fullName: recipientLabel,
        phone: normalizePhone(recipientUser.Phone || "") || "",
      },
    };
  };

  const adjustUserBsBalance = async ({
    userId,
    mode,
    amountBs,
    comment,
    actorName,
  }) => {
    const safeUserId = normalizeText(userId);
    const safeMode = normalizeText(mode) === "set" ? "set" : "adjust";
    const safeAmount = Math.trunc(Number(amountBs));
    const safeComment = normalizeText(comment);
    const safeActorName = normalizeText(actorName);
    if (!safeUserId) throw new Error("USER_REQUIRED");
    if (!Number.isFinite(safeAmount)) throw new Error("INVALID_AMOUNT");

    const [store, user] = await Promise.all([
      readStore(),
      prisma.users.findUnique({ where: { id: safeUserId } }),
    ]);
    if (!user) throw new Error("USER_NOT_FOUND");

    const referralPayload = await buildReferralPayload(user);
    const currentBalance = Math.max(0, Math.trunc(Number(referralPayload?.bsBalance) || 0));
    const delta = safeMode === "set" ? safeAmount - currentBalance : safeAmount;
    const nextBalance = currentBalance + delta;
    if (!Number.isFinite(nextBalance)) throw new Error("INVALID_AMOUNT");
    if (safeMode === "set" && safeAmount < 0) throw new Error("NEGATIVE_BALANCE");
    if (nextBalance < 0) throw new Error("NEGATIVE_BALANCE");
    if (delta === 0) {
      return {
        userId: safeUserId,
        mode: safeMode,
        amountBs: 0,
        previousBalance: currentBalance,
        balance: currentBalance,
      };
    }

    const userMeta = ensureUserMeta(store, safeUserId);
    const createdAt = new Date().toISOString();
    const title =
      safeMode === "set"
        ? "Ручная установка BS"
        : delta > 0
          ? "Ручное начисление BS"
          : "Ручное списание BS";
    const actorSuffix = safeActorName ? ` Админ: ${safeActorName}.` : "";
    const descriptionBase =
      safeMode === "set"
        ? `Баланс изменён с ${currentBalance} BS до ${nextBalance} BS.${actorSuffix}`
        : `${delta > 0 ? "Начислено" : "Списано"} ${Math.abs(delta)} BS.${actorSuffix}`;
    userMeta.transactions = [
      ...(Array.isArray(userMeta.transactions) ? userMeta.transactions : []),
      sanitizeTransaction({
        type: safeMode === "set" ? "manual_set" : "manual_adjust",
        title,
        description: descriptionBase.trim(),
        comment: safeComment,
        amountBs: delta,
        createdAt,
        status: "posted",
      }),
    ];
    store.users[safeUserId] = sanitizeUserMeta(userMeta);
    await writeStore(store);

    return {
      userId: safeUserId,
      mode: safeMode,
      amountBs: delta,
      previousBalance: currentBalance,
      balance: nextBalance,
    };
  };

  const addUserWarning = async ({ userId, comment = "", actorName = "" } = {}) => {
    const safeUserId = normalizeText(userId);
    const safeComment = normalizeText(comment);
    if (!safeUserId) throw new Error("USER_REQUIRED");
    if (!safeComment) throw new Error("COMMENT_REQUIRED");
    const store = await readStore();
    const userMeta = ensureUserMeta(store, safeUserId);
    const warning = sanitizeManualWarning({
      description: safeComment,
      actorName,
    });
    userMeta.manualWarnings = [warning, ...(Array.isArray(userMeta.manualWarnings) ? userMeta.manualWarnings : [])];
    store.users[safeUserId] = sanitizeUserMeta(userMeta);
    await writeStore(store);
    return {
      success: true,
      warning,
      warnings: userMeta.manualWarnings.length,
    };
  };

  const buildHomeAppPayload = async (userId) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return null;
    const [user, store, blockedUsers, appointmentsRaw, site] = await Promise.all([
      prisma.users.findUnique({ where: { id: safeUserId } }),
      readStore(),
      readBlockedUsers(),
      prisma.appointments.findMany(),
      getPersistedSiteSettings(),
    ]);
    if (!user) return null;
    const appointments = appointmentsRaw.map(mapAppointment);
    const relatedAppointments = collectUserAppointments(user, appointments);
    const completedAppointments = relatedAppointments
      .filter(
        (appointment) =>
          appointment?.isConfirmed ||
          isCompletedStatus(appointment?.Status) ||
          normalizeText(appointment?.Status) === "no_show",
      )
      .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0));
    const activeAppointments = relatedAppointments
      .filter((appointment) => appointment?.isActive)
      .sort((left, right) => (left?.sortKey || 0) - (right?.sortKey || 0));
    const manualBlocked = blockedUsers.has(user.id);
    const userMeta = ensureUserMeta(store, user.id);
    const manualNotices = buildManualNotices(userMeta);
    const warningCount = countNoShowWarnings(relatedAppointments) + manualNotices.length;
    const notices = [...buildNotices(relatedAppointments), ...manualNotices].sort((left, right) =>
      normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)),
    );
    const isBlocked = manualBlocked || warningCount >= warningBlockThreshold;
    const { barberLookup, serviceLookup, barbers, services } = await buildCatalogHelpers();
    const bookingBarbers = await buildBookableBarbersPayload(barbers, services);
    const visitHistory = completedAppointments.map((appointment) => {
      const amountRub = resolveAppointmentSpend(appointment, barberLookup, serviceLookup);
      return {
        id: appointment.id,
        when: normalizeText(appointment.startDateTime) || null,
        date: normalizeText(appointment.Date) || null,
        time: normalizeText(appointment.Time) || null,
        barber: normalizeText(appointment.Barber) || "",
        services: splitServiceList(appointment.Services),
        amountRub,
        status: normalizeText(appointment.Status) || "",
      };
    });
    const referral = await buildReferralPayload(user);
    const operations = [
      ...visitHistory.map((visit) => ({
        id: `visit-${visit.id}`,
        type: "visit",
        title: "Визит",
        description: `${visit.barber || "Барбер"}${visit.services.length ? `, ${visit.services.join(", ")}` : ""}`,
        amountRub: -Math.abs(visit.amountRub || 0),
        amountBs: 0,
        createdAt: visit.when || (visit.date ? `${visit.date}T00:00:00.000Z` : new Date().toISOString()),
      })),
      ...((referral?.operations || []).map((operation) => ({
        ...operation,
        amountRub: 0,
      }))),
    ].sort((left, right) => normalizeText(right.createdAt).localeCompare(normalizeText(left.createdAt)));
    await writeStore(store);
    const matchedBarber =
      (Array.isArray(barbers) ? barbers : []).find(
        (barber) => normalizePhone(barber?.phone || "") === normalizePhone(user.Phone || ""),
      ) || null;
    return {
      user: {
        id: user.id,
        displayName: normalizeText(user.Name) || normalizePhone(user.Phone || "") || "Клиент",
        phone: normalizePhone(user.Phone || "") || null,
        telegramId: normalizeText(user.TelegramID) || null,
        preferredBarber: normalizeText(user.Barber) || "",
        birthDate: userMeta.birthDate,
        gender: userMeta.gender,
        avatarUrl: userMeta.avatarUrl,
        bookingNotificationsEnabled: userMeta.bookingNotificationsEnabled !== false,
        balanceNotificationsEnabled: userMeta.balanceNotificationsEnabled !== false,
        referralCode: userMeta.referralCode,
        warningCount,
        noticeCount: notices.length,
        isBlocked,
        blockThreshold: warningBlockThreshold,
        access: {
          isBarber: Boolean(matchedBarber),
          role: normalizeText(matchedBarber?.role) || "client",
          barberId: normalizeText(matchedBarber?.id),
          barberName: normalizeText(matchedBarber?.name),
        },
      },
      booking: {
        activeAppointments: activeAppointments.map((appointment) => ({
          id: appointment.id,
          date: appointment.Date,
          time: appointment.Time,
          timeLabel: buildTimeRangeLabel(appointment.Time, appointment.endDateTime),
          barber: appointment.Barber,
          barberId: appointment.BarberID || "",
          barberAvatarUrl:
            (Array.isArray(barbers) ? barbers : []).find(
              (barber) =>
                canonicalizeKey(barber?.id) === canonicalizeKey(appointment.BarberID) ||
                canonicalizeKey(barber?.name) === canonicalizeKey(appointment.Barber),
            )?.avatarUrl || "",
          services: splitServiceList(appointment.Services),
          status: appointment.Status,
        })),
        barbers: bookingBarbers,
      },
      profile: {
        notices,
        visitHistory,
        operations,
      },
      referral,
      site,
    };
  };

  const buildPublicHomePayload = async () => {
    const [site, botSettings] = await Promise.all([
      getPersistedSiteSettings(),
      getBotSettings().catch(() => null),
    ]);
    const { barbers, services } = await buildCatalogHelpers();
    const bookingBarbers = await buildBookableBarbersPayload(barbers, services, { includeServices: true });
    return {
      booking: {
        activeAppointments: [],
        barbers: bookingBarbers,
      },
      site: {
        ...site,
        auth: {
          ...(site?.auth && typeof site.auth === "object" ? site.auth : {}),
          telegramEnabled: botSettings?.isBotEnabled !== false,
        },
      },
    };
  };

  return {
    getUserMeta,
    updateUserMeta,
    getSiteSettings,
    updateSiteSettings,
    applyReferralCode,
    buildReferralPayload,
    resolveBsTransferRecipient,
    transferBsBalance,
    adjustUserBsBalance,
    addUserWarning,
    applyBsToBookingAppointment,
    refundBsForCancelledAppointment,
    buildHomeAppPayload,
    buildPublicHomePayload,
    buildUserInsightsMap,
  };
};

module.exports = {
  createHomeClientStoreService,
};
