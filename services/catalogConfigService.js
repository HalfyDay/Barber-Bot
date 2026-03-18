const createCatalogConfigService = ({
  prisma,
  randomUUID,
  normalizeText,
  canonicalizeKey,
  normalizeAppointmentStatus,
  DEFAULT_BOT_DESCRIPTION,
  DEFAULT_ABOUT_TEXT,
  RESERVED_COST_FIELDS,
  buildBarberLookup,
  resolveBarberIdFromLookup,
  filterServicesForIdentity,
  registerBarberAlias,
  sanitizeCommissionRates,
  onBarberLookupRefresh = () => {},
  logger = console,
}) => {
  const ensureBootstrapData = async () => {
    const [settingsCount] = await Promise.all([
      prisma.botSettings.count(),
      prisma.barbers.count(),
    ]);
    if (!settingsCount) {
      await prisma.botSettings.create({
        data: {
          id: randomUUID(),
          botDescription: DEFAULT_BOT_DESCRIPTION,
          aboutText: DEFAULT_ABOUT_TEXT,
          isBotEnabled: true,
          bookingLimit: 2,
          minLeadHours: 2,
          maxDaysAhead: 14,
          lastSyncSource: "bootstrap",
          botToken: "",
        },
      });
    }
  };

  const normalizeStoredAppointmentStatuses = async () => {
    const rows = await prisma.appointments.findMany({
      select: { id: true, Status: true },
    });
    const updates = rows
      .map((row) => {
        const nextStatus = normalizeAppointmentStatus(row.Status);
        const currentStatus = normalizeText(row.Status);
        if (currentStatus === nextStatus) {
          return null;
        }
        return { id: row.id, Status: nextStatus };
      })
      .filter(Boolean);
    for (const update of updates) {
      await prisma.appointments.update({
        where: { id: update.id },
        data: { Status: update.Status },
      });
    }
    return { updated: updates.length, total: rows.length };
  };

  const getBarbers = async ({ includeInactive = false } = {}) => {
    const where = includeInactive ? {} : { isActive: true };
    const barbers = await prisma.barbers.findMany({
      where,
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      include: { position: true },
    });
    onBarberLookupRefresh(buildBarberLookup(barbers), barbers);
    return barbers;
  };

  const seedServicesFromCost = async () => {
    const servicesCount = await prisma.services.count();
    if (servicesCount) return;
    const costRows = await prisma.cost.findMany();
    if (!costRows.length) return;
    const barbers = await prisma.barbers.findMany();
    const barberLookup = buildBarberLookup(barbers);
    await prisma.$transaction(async (tx) => {
      for (const [index, row] of costRows.entries()) {
        const durationMatch = normalizeText(row.Dlitelnost).match(/(\d+)/);
        const duration = durationMatch ? Number(durationMatch[1]) : 0;
        const service = await tx.services.create({
          data: {
            id: randomUUID(),
            name: row.Uslugi || `Услуга #${index + 1}`,
            description: "",
            category: null,
            duration,
            orderIndex: index,
            isActive: true,
          },
        });
        const priceRecords = [];
        for (const [fieldName, priceValue] of Object.entries(row)) {
          if (RESERVED_COST_FIELDS.has(fieldName)) continue;
          if (
            priceValue === null ||
            priceValue === undefined ||
            priceValue === ""
          ) {
            continue;
          }
          const barberId = resolveBarberIdFromLookup(barberLookup, fieldName);
          const parsedPrice = Number(priceValue);
          if (!barberId || Number.isNaN(parsedPrice)) continue;
          priceRecords.push({
            id: randomUUID(),
            serviceId: service.id,
            barberId,
            price: parsedPrice,
          });
        }
        if (priceRecords.length) {
          await tx.servicePrices.createMany({ data: priceRecords });
        }
      }
    });
  };

  const propagateBarberRename = async ({ barberId, oldName, newName }) => {
    if (!oldName || !newName) return;
    if (canonicalizeKey(oldName) === canonicalizeKey(newName)) return;
    try {
      await prisma.$transaction([
        prisma.appointments.updateMany({
          where: { Barber: oldName },
          data: { Barber: newName },
        }),
        prisma.users.updateMany({
          where: { Barber: oldName },
          data: { Barber: newName },
        }),
      ]);
    } catch (error) {
      logger.error("Barber rename propagation failed:", error);
    }
    try {
      await registerBarberAlias(barberId, oldName);
    } catch (aliasError) {
      logger.error("Barber alias store update failed:", aliasError);
    }
    try {
      await getBarbers({ includeInactive: true });
    } catch (refreshError) {
      logger.error("Barber lookup refresh failed:", refreshError);
    }
  };

  const ensureBotSettingsRecord = async () => {
    let record = await prisma.botSettings.findFirst();
    if (record) return record;
    await ensureBootstrapData();
    await sanitizeCommissionRates();
    record = await prisma.botSettings.findFirst();
    if (record) return record;
    record = await prisma.botSettings.create({
      data: {
        id: randomUUID(),
        botDescription: DEFAULT_BOT_DESCRIPTION,
        aboutText: DEFAULT_ABOUT_TEXT,
        isBotEnabled: true,
        bookingLimit: 2,
        minLeadHours: 2,
        maxDaysAhead: 14,
        lastSyncSource: "site",
        botToken: "",
      },
    });
    return record;
  };

  const getBotSettings = async () => ensureBotSettingsRecord();

  const getServiceCatalog = async (includeInactive = true, identity = null) => {
    const where = includeInactive ? {} : { isActive: true };
    let services = await prisma.services.findMany({
      where,
      orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
    });
    if (!services.length) {
      services = (await prisma.cost.findMany()).map((row, index) => ({
        id: row.id,
        name: row.Uslugi || `Услуга #${index + 1}`,
        description: "",
        category: null,
        duration: Number(normalizeText(row.Dlitelnost).match(/(\d+)/)?.[1] ?? 0),
        isActive: true,
        orderIndex: index,
        legacy: true,
      }));
    }
    const prices = await prisma.servicePrices.findMany();
    const priceMap = new Map(
      prices.map((price) => [`${price.serviceId}:${price.barberId}`, price.price]),
    );
    const barbers = await getBarbers({ includeInactive: true });
    const mapped = services.map((service) => ({
      ...service,
      prices: barbers.reduce((acc, barber) => {
        const key = `${service.id}:${barber.id}`;
        acc[barber.id] = priceMap.has(key) ? priceMap.get(key) : null;
        return acc;
      }, {}),
    }));
    return filterServicesForIdentity(mapped, identity);
  };

  const getHomeBookingSettings = async () => {
    const settings = await getBotSettings();
    const bookingLimit = Math.max(1, Number(settings?.bookingLimit) || 2);
    const minLeadHours = Math.max(1, Number(settings?.minLeadHours) || 2);
    const maxDaysAhead = Math.max(1, Math.min(30, Number(settings?.maxDaysAhead) || 14));
    return { bookingLimit, minLeadHours, maxDaysAhead };
  };

  return {
    ensureBootstrapData,
    normalizeStoredAppointmentStatuses,
    seedServicesFromCost,
    getBarbers,
    propagateBarberRename,
    ensureBotSettingsRecord,
    getBotSettings,
    getServiceCatalog,
    getHomeBookingSettings,
  };
};

module.exports = {
  createCatalogConfigService,
};
