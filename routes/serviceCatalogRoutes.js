const registerServiceCatalogRoutes = ({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  isOwnerRequest,
  isStaffIdentity,
  normalizeText,
  getServiceCatalog,
  getBarbers,
  filterBarbersForIdentity,
  filterServicesForIdentity,
}) => {
  const upsertServiceWithPrices = async (serviceId, payload) => {
    const { prices = {}, ...serviceData } = payload;
    let savedService;
    await prisma.$transaction(async (tx) => {
      const baseData = {
        name: serviceData.name,
        description: serviceData.description || "",
        category: serviceData.category || null,
        duration: Number(serviceData.duration) || 0,
        isActive: serviceData.isActive !== false,
        orderIndex: Number(serviceData.orderIndex) || 0,
      };
      if (serviceId) {
        savedService = await tx.services.update({
          where: { id: serviceId },
          data: baseData,
        });
      } else {
        savedService = await tx.services.create({
          data: { id: randomUUID(), ...baseData },
        });
      }
      await tx.servicePrices.deleteMany({
        where: { serviceId: savedService.id },
      });
      const entries = Object.entries(prices)
        .filter(
          ([, value]) =>
            value !== null && value !== "" && !Number.isNaN(Number(value)),
        )
        .map(([barberId, value]) => ({
          id: randomUUID(),
          serviceId: savedService.id,
          barberId,
          price: Number(value),
        }));
      if (entries.length) {
        await tx.servicePrices.createMany({ data: entries });
      }
    });
    return savedService;
  };

  app.get("/api/services/full", authenticateToken, async (req, res) => {
    try {
      const services = await getServiceCatalog(true, req.identity);
      const barbers = filterBarbersForIdentity(
        await getBarbers({ includeInactive: true }),
        req.identity,
      );
      res.json({ services, barbers });
    } catch (error) {
      console.error("Services fetch error:", error);
      res.status(500).json({ error: "Не удалось получить список услуг." });
    }
  });

  app.post("/api/services/full", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для создания услуг." });
    }
    try {
      await upsertServiceWithPrices(null, req.body || {});
      const services = await getServiceCatalog(true);
      res.status(201).json({ services });
    } catch (error) {
      console.error("Create service error:", error);
      res.status(500).json({ error: "Не удалось создать услугу." });
    }
  });

  app.put("/api/services/full/:id", authenticateToken, async (req, res) => {
    const isOwner = isOwnerRequest(req);
    const isStaff = isStaffIdentity(req.identity);

    if (!isOwner && !isStaff) {
      return res.status(403).json({ error: "Недостаточно прав для изменения услуг." });
    }

    if (isOwner) {
      try {
        await upsertServiceWithPrices(req.params.id, req.body || {});
        const services = await getServiceCatalog(true);
        return res.json({ services });
      } catch (error) {
        console.error("Update service error:", error);
        return res.status(500).json({ error: "Не удалось обновить услугу." });
      }
    }

    const staffBarberId = req.identity?.barberId;
    if (!staffBarberId) {
      return res
        .status(403)
        .json({ error: "Профиль сотрудника не привязан к барберу." });
    }

    const payload = req.body || {};
    const pricesInput = payload.prices || {};
    const hasOwnPrice =
      Object.prototype.hasOwnProperty.call(pricesInput, staffBarberId) ||
      Object.prototype.hasOwnProperty.call(pricesInput, String(staffBarberId));

    if (!hasOwnPrice) {
      return res.status(400).json({ error: "Передайте цену для своего профиля." });
    }

    const rawValue = pricesInput[staffBarberId] ?? pricesInput[String(staffBarberId)];
    let normalizedPrice = null;
    if (!(rawValue === "" || rawValue === null)) {
      const numeric = Number(rawValue);
      if (!Number.isFinite(numeric) || numeric < 0) {
        return res.status(400).json({ error: "Некорректное значение цены." });
      }
      normalizedPrice = numeric;
    }

    try {
      await prisma.$transaction(async (tx) => {
        const existingService = await tx.services.findUnique({
          where: { id: req.params.id },
          select: { id: true },
        });
        if (!existingService) {
          throw new Error("SERVICE_NOT_FOUND");
        }

        if (normalizedPrice === null) {
          await tx.servicePrices.deleteMany({
            where: { serviceId: existingService.id, barberId: staffBarberId },
          });
        } else {
          await tx.servicePrices.upsert({
            where: {
              serviceId_barberId: {
                serviceId: existingService.id,
                barberId: staffBarberId,
              },
            },
            update: { price: normalizedPrice },
            create: {
              id: randomUUID(),
              serviceId: existingService.id,
              barberId: staffBarberId,
              price: normalizedPrice,
            },
          });
        }
      });

      const services = filterServicesForIdentity(
        await getServiceCatalog(true),
        req.identity,
      );
      return res.json({ services });
    } catch (error) {
      if (error.message === "SERVICE_NOT_FOUND") {
        return res.status(404).json({ error: "Услуга не найдена." });
      }
      console.error("Staff service price update error:", error);
      return res.status(500).json({ error: "Не удалось обновить услугу." });
    }
  });

  app.post("/api/services/full/reorder", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "РќРµРґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РїСЂР°РІ РґР»СЏ РёР·РјРµРЅРµРЅРёСЏ РїРѕСЂСЏРґРєР° СѓСЃР»СѓРі." });
    }
    const orderedIds = Array.isArray(req.body?.orderedIds) ? req.body.orderedIds : [];
    try {
      const existingServices = await prisma.services.findMany({
        select: { id: true, orderIndex: true },
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });
      const knownIds = new Set(existingServices.map((service) => service.id));
      const uniqueIds = orderedIds
        .map((value) => normalizeText(value))
        .filter((value, index, values) => value && knownIds.has(value) && values.indexOf(value) === index);
      const remainingIds = existingServices
        .map((service) => service.id)
        .filter((id) => !uniqueIds.includes(id));
      const finalOrder = [...uniqueIds, ...remainingIds];
      await prisma.$transaction(
        finalOrder.map((id, index) =>
          prisma.services.update({
            where: { id },
            data: { orderIndex: index },
          }),
        ),
      );
      const services = await getServiceCatalog(true);
      return res.json({ services });
    } catch (error) {
      console.error("Reorder services error:", error);
      return res.status(500).json({ error: "РќРµ СѓРґР°Р»РѕСЃСЊ РёР·РјРµРЅРёС‚СЊ РїРѕСЂСЏРґРѕРє СѓСЃР»СѓРі." });
    }
  });

  app.delete("/api/services/full/:id", authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: "Недостаточно прав для удаления услуг." });
    }
    try {
      await prisma.$transaction([
        prisma.servicePrices.deleteMany({ where: { serviceId: req.params.id } }),
        prisma.services.delete({ where: { id: req.params.id } }),
      ]);
      const services = await getServiceCatalog(true);
      res.json({ services });
    } catch (error) {
      console.error("Delete service error:", error);
      res.status(500).json({ error: "Не удалось удалить услугу." });
    }
  });
};

module.exports = {
  registerServiceCatalogRoutes,
};
