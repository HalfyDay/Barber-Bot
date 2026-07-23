/**
 * City CRUD routes — manages per-city separation within a business.
 *
 * GET    /api/cities            — list all cities (staff/owner)
 * POST   /api/cities            — create city (owner)
 * PUT    /api/cities/:id        — update city (owner)
 * DELETE /api/cities/:id        — delete city (owner)
 * GET    /api/cities/settings   — get citiesEnabled flag and defaultCityId from SiteSettings
 * PUT    /api/cities/settings   — update citiesEnabled flag and defaultCityId
 *
 * Public (no auth required):
 * GET    /api/home/cities       — list active cities for client site
 */
const registerCityRoutes = ({
  app,
  authenticateToken,
  prisma,
  randomUUID,
  normalizeText,
  isOwnerRequest,
  getSiteSettings,
  updateSiteSettings,
  invalidateCitiesCache = () => {},
}) => {
  // ── Helpers ──────────────────────────────────────────────────────────────

  const buildCityPayload = (body = {}) => ({
    name: normalizeText(body.name || ''),
    slug: normalizeText(body.slug || '') || null,
    isActive: body.isActive !== false,
    orderIndex: Number.isFinite(Number(body.orderIndex)) ? Number(body.orderIndex) : 0,
  });

  const ensureCitiesTableExists = async () => {
    try {
      await prisma.$queryRaw`SELECT 1 FROM "Cities" LIMIT 1`;
      return true;
    } catch {
      // Table doesn't exist yet — migrations pending
      return false;
    }
  };

  // ── GET /api/home/cities — public endpoint for client site ──────────────
  app.get('/api/home/cities', async (req, res) => {
    try {
      const tableExists = await ensureCitiesTableExists();
      if (!tableExists) return res.json([]);
      const cities = await prisma.cities.findMany({
        where: { isActive: true },
        select: { id: true, name: true, slug: true, orderIndex: true },
        orderBy: [{ orderIndex: 'asc' }, { name: 'asc' }],
      });
      return res.json(cities);
    } catch (error) {
      console.error('[cities] Public list error:', error.message);
      return res.json([]);
    }
  });

  // ── GET /api/cities — list all cities (authenticated) ───────────────────
  app.get('/api/cities', authenticateToken, async (req, res) => {
    try {
      const tableExists = await ensureCitiesTableExists();
      if (!tableExists) return res.json([]);
      const cities = await prisma.cities.findMany({
        orderBy: [{ orderIndex: 'asc' }, { name: 'asc' }],
      });
      return res.json(cities);
    } catch (error) {
      console.error('[cities] List error:', error.message);
      return res.status(500).json({ error: 'Ошибка загрузки городов.' });
    }
  });

  // ── GET /api/cities/settings — get citiesEnabled from SiteSettings ───────
  app.get('/api/cities/settings', authenticateToken, async (req, res) => {
    try {
      // getSiteSettings() returns the payload object directly (not wrapped in {payload:...})
      const siteSettings = await getSiteSettings();
      return res.json({
        citiesEnabled: siteSettings?.cities?.enabled === true,
        defaultCityId: siteSettings?.cities?.defaultCityId || null,
      });
    } catch (error) {
      console.error('[cities] Settings get error:', error.message);
      return res.status(500).json({ error: 'Ошибка загрузки настроек городов.' });
    }
  });

  // ── PUT /api/cities/settings — update citiesEnabled ──────────────────────
  app.put('/api/cities/settings', authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: 'Только владелец может изменять настройки городов.' });
    }
    try {
      const { citiesEnabled, defaultCityId } = req.body || {};
      // getSiteSettings() returns the payload object directly
      const current = await getSiteSettings();
      const nextCities = {
        ...(current?.cities || {}),
        enabled: citiesEnabled === true,
        defaultCityId: defaultCityId || current?.cities?.defaultCityId || null,
      };
      await updateSiteSettings({ cities: nextCities });
      invalidateCitiesCache();
      return res.json({ ok: true, citiesEnabled: citiesEnabled === true, defaultCityId: nextCities.defaultCityId });
    } catch (error) {
      console.error('[cities] Settings update error:', error.message);
      return res.status(500).json({ error: 'Ошибка обновления настроек городов.' });
    }
  });

  // ── POST /api/cities — create city ───────────────────────────────────────
  app.post('/api/cities', authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: 'Только владелец может создавать города.' });
    }
    try {
      const { name } = req.body || {};
      if (!normalizeText(name)) {
        return res.status(400).json({ error: 'Название города обязательно.' });
      }
      const payload = buildCityPayload(req.body);
      const city = await prisma.cities.create({
        data: { id: randomUUID(), ...payload, updatedAt: new Date() },
      });
      return res.status(201).json(city);
    } catch (error) {
      console.error('[cities] Create error:', error.message);
      return res.status(500).json({ error: 'Ошибка создания города.' });
    }
  });

  // ── PUT /api/cities/:id — update city ────────────────────────────────────
  app.put('/api/cities/:id', authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: 'Только владелец может редактировать города.' });
    }
    try {
      const { id } = req.params;
      const existing = await prisma.cities.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: 'Город не найден.' });
      const payload = buildCityPayload({ ...existing, ...req.body });
      const updated = await prisma.cities.update({
        where: { id },
        data: { ...payload, updatedAt: new Date() },
      });
      return res.json(updated);
    } catch (error) {
      console.error('[cities] Update error:', error.message);
      return res.status(500).json({ error: 'Ошибка обновления города.' });
    }
  });

  // ── DELETE /api/cities/:id — delete city ─────────────────────────────────
  app.delete('/api/cities/:id', authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: 'Только владелец может удалять города.' });
    }
    try {
      const { id } = req.params;
      const existing = await prisma.cities.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ error: 'Город не найден.' });

      // Check if any barbers are still assigned to this city
      const barbersCount = await prisma.barbers.count({ where: { cityId: id } });
      if (barbersCount > 0) {
        return res.status(409).json({
          error: `Нельзя удалить город: в нём ${barbersCount} сотрудник(ов). Сначала переназначьте их.`,
        });
      }

      await prisma.cities.delete({ where: { id } });
      return res.json({ ok: true });
    } catch (error) {
      console.error('[cities] Delete error:', error.message);
      return res.status(500).json({ error: 'Ошибка удаления города.' });
    }
  });

  // ── POST /api/cities/migrate-default — migrate existing data to a city ──
  // Called when citiesEnabled is first turned on to assign existing records to the default city
  // pass reset: true to first clear all cityId assignments, then reassign
  app.post('/api/cities/migrate-default', authenticateToken, async (req, res) => {
    if (!isOwnerRequest(req)) {
      return res.status(403).json({ error: 'Только владелец может выполнять миграцию данных.' });
    }
    try {
      const { cityId, reset } = req.body || {};
      if (!cityId) return res.status(400).json({ error: 'cityId обязателен.' });
      const city = await prisma.cities.findUnique({ where: { id: cityId } });
      if (!city) return res.status(404).json({ error: 'Город не найден.' });

      // If reset mode: first clear all cityId assignments
      if (reset) {
        const clearData = { cityId: null };
        await Promise.all([
          prisma.barbers.updateMany({ where: {}, data: clearData }),
          prisma.services.updateMany({ where: {}, data: clearData }),
          prisma.positions.updateMany({ where: {}, data: clearData }),
          prisma.shopCategories.updateMany({ where: {}, data: clearData }),
          prisma.shopProducts.updateMany({ where: {}, data: clearData }),
          prisma.shopOrders.updateMany({ where: {}, data: clearData }),
          prisma.appointments.updateMany({ where: {}, data: clearData }),
          prisma.schedules.updateMany({ where: {}, data: clearData }),
        ]);
      }

      // Assign all records without cityId to the default city
      const nullOrEmpty = { OR: [{ cityId: null }, { cityId: '' }] };
      const [barbers, services, positions, shopCats, shopProds, shopOrders] = await Promise.all([
        prisma.barbers.updateMany({ where: nullOrEmpty, data: { cityId } }),
        prisma.services.updateMany({ where: nullOrEmpty, data: { cityId } }),
        prisma.positions.updateMany({ where: nullOrEmpty, data: { cityId } }),
        prisma.shopCategories.updateMany({ where: nullOrEmpty, data: { cityId } }),
        prisma.shopProducts.updateMany({ where: nullOrEmpty, data: { cityId } }),
        prisma.shopOrders.updateMany({ where: nullOrEmpty, data: { cityId } }),
      ]);

      // For Appointments and Schedules: propagate cityId from their linked barbers
      const allBarbers = await prisma.barbers.findMany({ where: { cityId: { not: null } }, select: { id: true, name: true, cityId: true } });
      let appointmentsUpdated = 0;
      let schedulesUpdated = 0;
      for (const barber of allBarbers) {
        if (!barber.cityId) continue;
        const [aptRes, schRes] = await Promise.all([
          prisma.appointments.updateMany({
            where: { barber: barber.name, ...nullOrEmpty },
            data: { cityId: barber.cityId },
          }),
          prisma.schedules.updateMany({
            where: { barber: barber.name, ...nullOrEmpty },
            data: { cityId: barber.cityId },
          }),
        ]);
        appointmentsUpdated += aptRes.count || 0;
        schedulesUpdated += schRes.count || 0;
      }

      // Save defaultCityId to SiteSettings
      // getSiteSettings() returns the payload object directly (not wrapped in {payload:...})
      const current = await getSiteSettings();
      const nextCities = {
        ...(current?.cities || {}),
        enabled: true,
        defaultCityId: cityId,
      };
      await updateSiteSettings({ cities: nextCities });
      invalidateCitiesCache();

      return res.json({
        ok: true,
        migrated: {
          barbers: barbers.count,
          services: services.count,
          positions: positions.count,
          shopCategories: shopCats.count,
          shopProducts: shopProds.count,
          shopOrders: shopOrders.count,
          appointments: appointmentsUpdated,
          schedules: schedulesUpdated,
        },
      });
    } catch (error) {
      console.error('[cities] Migration error:', error.message);
      return res.status(500).json({ error: 'Ошибка миграции данных.', details: error.message });
    }
  });
};

module.exports = { registerCityRoutes };
