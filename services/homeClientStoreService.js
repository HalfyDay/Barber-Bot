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
  const BS_THRESHOLDS = [10, 25, 50, 100];
  const ACTIVITY_GREEN_DAYS = 90;
  const ACTIVITY_YELLOW_DAYS = 180;
  const GENDER_OPTIONS = new Set(["male", "female", "other"]);
  const DEFAULT_SITE_CONFIG = Object.freeze({
    home: {
      logoText: "BrotherShop",
      promos: [
        {
          id: "promo-1",
          title: "Стрижка + укладка",
          subtitle: "Быстрый визит",
          imageUrl: "",
          details:
            "Комбо-услуга для тех, кто хочет закрыть весь уход за один визит.",
        },
        {
          id: "promo-2",
          title: "Оформление бороды",
          subtitle: "Точная форма",
          imageUrl: "",
          details:
            "Аккуратная работа по контуру и форме с быстрым подбором образа.",
        },
        {
          id: "promo-3",
          title: "Реферальный BS",
          subtitle: "Пригласи друга",
          imageUrl: "",
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
      phone: "+7 908 669-00-94",
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

  const sanitizeSitePromo = (input = {}, index = 0) => ({
    id: normalizeText(input.id) || `promo-${index + 1}`,
    title: normalizeText(input.title) || `Акция ${index + 1}`,
    subtitle: normalizeText(input.subtitle) || "",
    imageUrl: normalizeText(input.imageUrl) || "",
    details: normalizeText(input.details) || "",
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
      home: {
        logoText: normalizeText(homeInput.logoText) || DEFAULT_SITE_CONFIG.home.logoText,
        promos,
        aboutTitle: normalizeText(homeInput.aboutTitle) || DEFAULT_SITE_CONFIG.home.aboutTitle,
        aboutText: normalizeText(homeInput.aboutText) || DEFAULT_SITE_CONFIG.home.aboutText,
        aboutImageUrl: normalizeText(homeInput.aboutImageUrl) || "",
        mapTitle: normalizeText(homeInput.mapTitle) || DEFAULT_SITE_CONFIG.home.mapTitle,
        mapImageUrl: normalizeText(homeInput.mapImageUrl) || "",
        mapLink: normalizeText(homeInput.mapLink) || DEFAULT_SITE_CONFIG.home.mapLink,
        mapCaption: normalizeText(homeInput.mapCaption) || DEFAULT_SITE_CONFIG.home.mapCaption,
        contactsTitle: normalizeText(homeInput.contactsTitle) || DEFAULT_SITE_CONFIG.home.contactsTitle,
        phone: normalizeText(homeInput.phone) || DEFAULT_SITE_CONFIG.home.phone,
        telegramUrl: normalizeText(homeInput.telegramUrl) || "",
        whatsappUrl: normalizeText(homeInput.whatsappUrl) || "",
        email: normalizeText(homeInput.email) || "",
        bookingButtonText:
          normalizeText(homeInput.bookingButtonText) || DEFAULT_SITE_CONFIG.home.bookingButtonText,
      },
      referral: {
        pageTitle: normalizeText(referralInput.pageTitle) || DEFAULT_SITE_CONFIG.referral.pageTitle,
        introText: normalizeText(referralInput.introText) || DEFAULT_SITE_CONFIG.referral.introText,
        participationText:
          normalizeText(referralInput.participationText) || DEFAULT_SITE_CONFIG.referral.participationText,
        friendDiscountRub: Math.max(0, Math.floor(Number(referralInput.friendDiscountRub) || DEFAULT_SITE_CONFIG.referral.friendDiscountRub)),
        bsToRubRate: Math.max(1, Math.floor(Number(referralInput.bsToRubRate) || DEFAULT_SITE_CONFIG.referral.bsToRubRate)),
        rewardColumns,
        levels: referralLevels,
      },
      booking: {
        pageTitle: normalizeText(bookingInput.pageTitle) || DEFAULT_SITE_CONFIG.booking.pageTitle,
        commentPlaceholder: normalizeText(bookingInput.commentPlaceholder) || DEFAULT_SITE_CONFIG.booking.commentPlaceholder,
      },
      shop: {
        teaserTitle: normalizeText(shopInput.teaserTitle) || DEFAULT_SITE_CONFIG.shop.teaserTitle,
        teaserText: normalizeText(shopInput.teaserText) || DEFAULT_SITE_CONFIG.shop.teaserText,
      },
      profile: {
        pageTitle: normalizeText(profileInput.pageTitle) || DEFAULT_SITE_CONFIG.profile.pageTitle,
        historyTitle: normalizeText(profileInput.historyTitle) || DEFAULT_SITE_CONFIG.profile.historyTitle,
      },
    };
  };

  const readStore = async () => {
    try {
      const payload = await fs.readJson(dataFilePath);
      return ensureStoreShape(payload);
    } catch {
      return ensureStoreShape(DEFAULT_STORE);
    }
  };

  const writeStore = async (store) => {
    const nextStore = ensureStoreShape(store);
    await fs.ensureDir(require("path").dirname(dataFilePath));
    await fs.writeJson(dataFilePath, nextStore, { spaces: 2 });
    return nextStore;
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

  const sanitizeUserMeta = (input = {}) => {
    const gender = normalizeText(input.gender).toLowerCase();
    const transactions = Array.isArray(input.transactions)
      ? input.transactions.map(sanitizeTransaction)
      : [];
    const bookingNotificationsEnabled =
      input.bookingNotificationsEnabled === undefined ? true : Boolean(input.bookingNotificationsEnabled);
    return {
      birthDate: sanitizeDateOnly(input.birthDate),
      gender: GENDER_OPTIONS.has(gender) ? gender : "",
      avatarUrl: normalizeText(input.avatarUrl) || "",
      referralCode: normalizeText(input.referralCode) || buildReferralCode(),
      referredByUserId: normalizeText(input.referredByUserId) || null,
      bookingNotificationsEnabled,
      transactions,
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
    const store = await readStore();
    const site = sanitizeSiteSettings(store.site || {});
    store.site = site;
    await writeStore(store);
    return site;
  };

  const updateSiteSettings = async (patch = {}) => {
    const store = await readStore();
    const current = sanitizeSiteSettings(store.site || {});
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
      shop: {
        ...current.shop,
        ...(patch.shop && typeof patch.shop === "object" ? patch.shop : {}),
      },
      profile: {
        ...current.profile,
        ...(patch.profile && typeof patch.profile === "object" ? patch.profile : {}),
      },
    });
    store.site = nextSite;
    await writeStore(store);
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
      const warningCount = countNoShowWarnings(relatedAppointments);
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
    const [store, users, appointmentsRaw, settings] = await Promise.all([
      readStore(),
      prisma.users.findMany(),
      prisma.appointments.findMany(),
      getBotSettings().catch(() => null),
    ]);
    const site = sanitizeSiteSettings(store.site || {});
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
      const fallbackAvatarUrl = normalizeText(
        userMetaById.get(normalizeText(sanitized.counterpartId))?.avatarUrl || "",
      );
      return {
        ...sanitized,
        counterpartAvatarUrl: normalizeText(sanitized.counterpartAvatarUrl) || fallbackAvatarUrl,
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
        counterpartAvatarUrl: normalizeText(recipientMeta.avatarUrl) || "",
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
        counterpartAvatarUrl: normalizeText(senderMeta.avatarUrl) || "",
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

  const buildHomeAppPayload = async (userId) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return null;
    const [user, store, blockedUsers, appointmentsRaw] = await Promise.all([
      prisma.users.findUnique({ where: { id: safeUserId } }),
      readStore(),
      readBlockedUsers(),
      prisma.appointments.findMany(),
    ]);
    if (!user) return null;
    const appointments = appointmentsRaw.map(mapAppointment);
    const relatedAppointments = collectUserAppointments(user, appointments);
    const completedAppointments = relatedAppointments
      .filter((appointment) => appointment?.isConfirmed || isCompletedStatus(appointment?.Status))
      .sort((left, right) => (right?.sortKey || 0) - (left?.sortKey || 0));
    const activeAppointments = relatedAppointments
      .filter((appointment) => appointment?.isActive)
      .sort((left, right) => (left?.sortKey || 0) - (right?.sortKey || 0));
    const warningCount = countNoShowWarnings(relatedAppointments);
    const notices = buildNotices(relatedAppointments);
    const manualBlocked = blockedUsers.has(user.id);
    const isBlocked = manualBlocked || warningCount >= warningBlockThreshold;
    const userMeta = ensureUserMeta(store, user.id);
    const { barberLookup, serviceLookup, barbers, services } = await buildCatalogHelpers();
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
    const site = sanitizeSiteSettings(store.site || {});
    const operations = [
      ...visitHistory.map((visit) => ({
        id: `visit-${visit.id}`,
        type: "visit",
        title: "Р’РёР·РёС‚",
        description: `${visit.barber || "Р‘Р°СЂР±РµСЂ"}${visit.services.length ? `, ${visit.services.join(", ")}` : ""}`,
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
        displayName: normalizeText(user.Name) || normalizePhone(user.Phone || "") || "РљР»РёРµРЅС‚",
        phone: normalizePhone(user.Phone || "") || null,
        telegramId: normalizeText(user.TelegramID) || null,
        preferredBarber: normalizeText(user.Barber) || "",
        birthDate: userMeta.birthDate,
        gender: userMeta.gender,
        avatarUrl: userMeta.avatarUrl,
        bookingNotificationsEnabled: userMeta.bookingNotificationsEnabled !== false,
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
        barbers: (Array.isArray(barbers) ? barbers : [])
          .filter((barber) => barber?.isActive !== false)
          .map((barber) => {
            const servicesCount = (Array.isArray(services) ? services : []).reduce((count, service) => {
              const price = Number(getServicePriceForBarber(service, barber.id));
              return Number.isFinite(price) && price > 0 ? count + 1 : count;
            }, 0);
            const displayName =
              normalizeText(barber.cardTitle) ||
              normalizeText(barber.nickname) ||
              normalizeText(barber.name) ||
              "Р‘Р°СЂР±РµСЂ";
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
              servicesCount,
            };
          }),
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
    applyBsToBookingAppointment,
    refundBsForCancelledAppointment,
    buildHomeAppPayload,
    buildUserInsightsMap,
  };
};

module.exports = {
  createHomeClientStoreService,
};


