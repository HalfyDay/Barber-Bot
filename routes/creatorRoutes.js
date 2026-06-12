const { randomUUID } = require("crypto");
const { getTenantPrismaClient, createTenantSchema } = require("../services/prismaRuntime");

const transliterate = (text) => {
  const rus = "а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я".split(" ");
  const eng = "a b v g d e yo zh z i y k l m n o p r s t u f kh ts ch sh shch - y - e yu ya".split(" ");
  return text.toString().toLowerCase()
    .split("")
    .map(char => {
      const idx = rus.indexOf(char);
      return idx !== -1 ? eng[idx] : char;
    })
    .join("");
};

const registerCreatorRoutes = ({
  app,
  prisma,
  authService,
  resolveUserIdentity,
  creatorAccount,
}) => {
  // Security middleware to ensure only the creator has access
  const requireCreator = (req, res, next) => {
    if (req.identity?.role !== "creator") {
      return res.status(403).json({ error: "Доступ запрещен. Требуются права Создателя." });
    }
    next();
  };

  // 1. Get all businesses (global schema)
  app.get("/api/creator/businesses", authService.authenticateToken, requireCreator, async (req, res) => {
    try {
      // prisma Proxy points to public schema when no tenant context is active
      const businesses = await prisma.businesses.findMany({
        orderBy: { name: "asc" },
      });
      res.json(businesses);
    } catch (error) {
      console.error("Creator list businesses error:", error);
      res.status(500).json({ error: "Не удалось загрузить список организаций." });
    }
  });

  // 2. Register a new business (creates schema, runs DDL, saves record)
  app.post("/api/creator/businesses", authService.authenticateToken, requireCreator, async (req, res) => {
    const { name, subdomain, customDomain, customCrmDomain } = req.body || {};
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Название обязательно для заполнения." });
    }

    let resolvedSubdomain = subdomain ? subdomain.trim() : "";
    if (!resolvedSubdomain && customDomain) {
      resolvedSubdomain = customDomain.split(".")[0];
    }
    if (!resolvedSubdomain) {
      resolvedSubdomain = transliterate(name);
    }

    const cleanSubdomain = resolvedSubdomain.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!cleanSubdomain) {
      return res.status(400).json({ error: "Недопустимый поддомен." });
    }

    const dbSchema = `tenant_${cleanSubdomain}`;
    const businessId = randomUUID();

    try {
      // Check if subdomain already exists
      const existing = await prisma.businesses.findFirst({
        where: {
          OR: [
            { subdomain: cleanSubdomain },
            { dbSchema },
          ],
        },
      });

      if (existing) {
        return res.status(400).json({ error: "Организация с таким поддоменом уже существует." });
      }

      console.log(`[creator] Creating schema ${dbSchema} for business: ${name}...`);
      
      // Create PostgreSQL schema and initialize tables from template
      await createTenantSchema(dbSchema);

      // Save business metadata to global schema
      const business = await prisma.businesses.create({
        data: {
          id: businessId,
          name: name.trim(),
          subdomain: cleanSubdomain,
          customDomain: customDomain ? customDomain.trim().toLowerCase() : null,
          customCrmDomain: customCrmDomain ? customCrmDomain.trim().toLowerCase() : null,
          dbSchema,
          isActive: true,
        },
      });

      res.status(201).json(business);
    } catch (error) {
      console.error("Creator create business error:", error);
      res.status(500).json({ error: `Не удалось создать организацию: ${error.message || error}` });
    }
  });

  // 2a. Update business metadata
  app.put("/api/creator/businesses/:id", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    const { name, subdomain, customDomain, customCrmDomain, isActive } = req.body || {};
    try {
      const existing = await prisma.businesses.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const data = {};
      if (name !== undefined) data.name = name.trim();
      if (customDomain !== undefined) data.customDomain = customDomain ? customDomain.trim().toLowerCase() : null;
      if (customCrmDomain !== undefined) data.customCrmDomain = customCrmDomain ? customCrmDomain.trim().toLowerCase() : null;
      if (isActive !== undefined) data.isActive = Boolean(isActive);

      if (subdomain !== undefined && subdomain.trim().toLowerCase() !== existing.subdomain) {
        const cleanSubdomain = subdomain.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
        if (cleanSubdomain) {
          const taken = await prisma.businesses.findFirst({
            where: { subdomain: cleanSubdomain, NOT: { id } },
          });
          if (taken) {
            return res.status(400).json({ error: "Этот поддомен уже занят другой организацией." });
          }
          data.subdomain = cleanSubdomain;
        }
      }

      const updated = await prisma.businesses.update({
        where: { id },
        data,
      });
      res.json(updated);
    } catch (error) {
      console.error("Creator update business error:", error);
      res.status(500).json({ error: "Не удалось обновить организацию." });
    }
  });

  // 2b. Delete business (drops PostgreSQL schema and metadata, requires password check)
  app.post("/api/creator/businesses/:id/delete", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    const { password } = req.body || {};

    if (!password || password !== creatorAccount?.password) {
      return res.status(400).json({ error: "Неверный пароль Создателя." });
    }

    try {
      const business = await prisma.businesses.findUnique({ where: { id } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      console.log(`[creator] Deleting business ${business.name} and dropping schema ${business.dbSchema}...`);

      // 1. Drop schema from PostgreSQL
      try {
        await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${business.dbSchema}" CASCADE;`);
      } catch (schemaError) {
        console.error(`Failed to drop schema ${business.dbSchema}:`, schemaError);
      }

      // 2. Delete business metadata
      await prisma.businesses.delete({ where: { id } });

      res.json({ success: true });
    } catch (error) {
      console.error("Creator delete business error:", error);
      res.status(500).json({ error: "Не удалось удалить организацию." });
    }
  });

  // 3. Get employees (Barbers) for a specific business
  app.get("/api/creator/businesses/:id/barbers", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    try {
      const business = await prisma.businesses.findUnique({ where: { id } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const tenantPrisma = getTenantPrismaClient(business.dbSchema);
      const barbers = await tenantPrisma.barbers.findMany({
        orderBy: [{ orderIndex: "asc" }, { name: "asc" }],
      });

      res.json(barbers);
    } catch (error) {
      console.error("Creator list barbers error:", error);
      res.status(500).json({ error: "Не удалось получить список сотрудников." });
    }
  });

  // 4. Create an employee (Barber) in a specific business
  app.post("/api/creator/businesses/:id/barbers", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    const { name, login, phone, password, role } = req.body || {};

    if (!name || !login || !password) {
      return res.status(400).json({ error: "Имя, логин и пароль обязательны." });
    }

    try {
      const business = await prisma.businesses.findUnique({ where: { id } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const tenantPrisma = getTenantPrismaClient(business.dbSchema);

      // Check if login is already used in this business
      const existing = await tenantPrisma.barbers.findFirst({
        where: { login: login.trim() },
      });
      if (existing) {
        return res.status(400).json({ error: "Сотрудник с таким логином уже существует в этой организации." });
      }

      const barber = await tenantPrisma.barbers.create({
        data: {
          id: randomUUID(),
          name: name.trim(),
          login: login.trim(),
          phone: phone ? phone.trim() : null,
          password: password.trim(),
          role: role === "owner" ? "owner" : "staff",
          isActive: true,
        },
      });

      res.status(201).json(barber);
    } catch (error) {
      console.error("Creator create barber error:", error);
      res.status(500).json({ error: "Не удалось создать сотрудника." });
    }
  });

  // 5. Update an employee in a specific business
  app.put("/api/creator/businesses/:businessId/barbers/:barberId", authService.authenticateToken, requireCreator, async (req, res) => {
    const { businessId, barberId } = req.params;
    const { name, login, phone, password, role, isActive } = req.body || {};

    try {
      const business = await prisma.businesses.findUnique({ where: { id: businessId } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const tenantPrisma = getTenantPrismaClient(business.dbSchema);

      const data = {};
      if (name !== undefined) data.name = name.trim();
      if (login !== undefined) data.login = login.trim();
      if (phone !== undefined) data.phone = phone ? phone.trim() : null;
      if (password !== undefined) data.password = password.trim();
      if (role !== undefined) data.role = role === "owner" ? "owner" : "staff";
      if (isActive !== undefined) data.isActive = Boolean(isActive);

      const updated = await tenantPrisma.barbers.update({
        where: { id: barberId },
        data,
      });

      res.json(updated);
    } catch (error) {
      console.error("Creator update barber error:", error);
      res.status(500).json({ error: "Не удалось обновить данные сотрудника." });
    }
  });

  // 6. Delete an employee in a specific business
  app.delete("/api/creator/businesses/:businessId/barbers/:barberId", authService.authenticateToken, requireCreator, async (req, res) => {
    const { businessId, barberId } = req.params;

    try {
      const business = await prisma.businesses.findUnique({ where: { id: businessId } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const tenantPrisma = getTenantPrismaClient(business.dbSchema);
      await tenantPrisma.barbers.delete({ where: { id: barberId } });

      res.status(204).send();
    } catch (error) {
      console.error("Creator delete barber error:", error);
      res.status(500).json({ error: "Не удалось удалить сотрудника." });
    }
  });

  // 7. Impersonate an employee (generates JWT worker session for creator)
  app.post("/api/creator/impersonate", authService.authenticateToken, requireCreator, async (req, res) => {
    const { businessId, barberId } = req.body || {};

    if (!businessId || !barberId) {
      return res.status(400).json({ error: "Идентификатор организации и сотрудника обязательны." });
    }

    try {
      const business = await prisma.businesses.findUnique({ where: { id: businessId } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }

      const tenantPrisma = getTenantPrismaClient(business.dbSchema);
      const barber = await tenantPrisma.barbers.findUnique({
        where: { id: barberId },
      });

      if (!barber) {
        return res.status(404).json({ error: "Сотрудник не найден в этой организации." });
      }

      // Construct identity exactly as resolveUserIdentity would, but with impersonation flag and specific businessId
      const identity = resolveUserIdentity({
        username: barber.phone || barber.login,
        login: barber.login,
        barberId: barber.id,
        barberName: barber.name,
        role: barber.role,
        businessId: business.id,
        impersonatedBy: "creator", // Flag for client/auditing purposes
      });

      const token = authService.signSessionToken(identity);

      res.json({
        success: true,
        token,
        username: identity.username,
        displayName: identity.barberName,
        barberId: identity.barberId,
        role: identity.role,
        barberName: identity.barberName,
        phone: barber.phone || null,
        businessId: business.id,
        businessName: business.name,
        isImpersonated: true,
      });
    } catch (error) {
      console.error("Creator impersonation error:", error);
      res.status(500).json({ error: "Не удалось выполнить вход от имени сотрудника." });
    }
  });
};

module.exports = {
  registerCreatorRoutes,
};
