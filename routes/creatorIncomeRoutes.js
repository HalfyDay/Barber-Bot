const { randomUUID } = require("crypto");

const registerCreatorIncomeRoutes = ({
  app,
  prisma,
  authService,
}) => {
  const requireCreator = (req, res, next) => {
    if (req.identity?.role !== "creator") {
      return res.status(403).json({ error: "Доступ запрещен. Требуются права Создателя." });
    }
    next();
  };

  // List income records with optional filters
  app.get("/api/creator/income", authService.authenticateToken, requireCreator, async (req, res) => {
    try {
      const { businessId, from, to } = req.query;
      const where = {};
      if (businessId) where.businessId = businessId;
      if (from || to) {
        where.date = {};
        if (from) where.date.gte = from;
        if (to) where.date.lte = to;
      }
      const records = await prisma.creatorIncome.findMany({
        where,
        include: { business: { select: { id: true, name: true } } },
        orderBy: { date: "desc" },
      });
      res.json(records);
    } catch (error) {
      console.error("Creator list income error:", error);
      res.status(500).json({ error: "Не удалось загрузить доходы." });
    }
  });

  // Summary: total by business + monthly totals
  app.get("/api/creator/income/summary", authService.authenticateToken, requireCreator, async (req, res) => {
    try {
      const records = await prisma.creatorIncome.findMany({
        include: { business: { select: { id: true, name: true } } },
      });

      const byBusiness = {};
      const byMonth = {};
      let total = 0;

      for (const r of records) {
        total += r.amount;
        const bName = r.business?.name || "Неизвестно";
        byBusiness[bName] = (byBusiness[bName] || 0) + r.amount;
        const month = r.date ? r.date.substring(0, 7) : "Неизвестно";
        byMonth[month] = (byMonth[month] || 0) + r.amount;
      }

      const byBusinessArr = Object.entries(byBusiness)
        .map(([name, amount]) => ({ name, amount }))
        .sort((a, b) => b.amount - a.amount);

      const byMonthArr = Object.entries(byMonth)
        .map(([month, amount]) => ({ month, amount }))
        .sort((a, b) => a.month.localeCompare(b.month));

      res.json({ total, byBusiness: byBusinessArr, byMonth: byMonthArr });
    } catch (error) {
      console.error("Creator income summary error:", error);
      res.status(500).json({ error: "Не удалось загрузить сводку доходов." });
    }
  });

  // Create income record
  app.post("/api/creator/income", authService.authenticateToken, requireCreator, async (req, res) => {
    const { businessId, amount, date, periodStart, periodEnd, note } = req.body || {};
    if (!businessId || amount == null || !date) {
      return res.status(400).json({ error: "Организация, сумма и дата обязательны." });
    }
    const parsedAmount = parseFloat(amount);
    if (!Number.isFinite(parsedAmount) || parsedAmount < 0) {
      return res.status(400).json({ error: "Сумма должна быть положительным числом." });
    }
    try {
      const business = await prisma.businesses.findUnique({ where: { id: businessId } });
      if (!business) {
        return res.status(404).json({ error: "Организация не найдена." });
      }
      const record = await prisma.creatorIncome.create({
        data: {
          id: randomUUID(),
          businessId,
          amount: parsedAmount,
          date,
          periodStart: periodStart || null,
          periodEnd: periodEnd || null,
          note: note || null,
        },
        include: { business: { select: { id: true, name: true } } },
      });
      res.status(201).json(record);
    } catch (error) {
      console.error("Creator create income error:", error);
      res.status(500).json({ error: "Не удалось создать запись дохода." });
    }
  });

  // Update income record
  app.put("/api/creator/income/:id", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    const { businessId, amount, date, periodStart, periodEnd, note } = req.body || {};
    try {
      const existing = await prisma.creatorIncome.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Запись не найдена." });
      }
      const data = {};
      if (businessId !== undefined) data.businessId = businessId;
      if (amount !== undefined) {
        const parsed = parseFloat(amount);
        if (!Number.isFinite(parsed) || parsed < 0) {
          return res.status(400).json({ error: "Сумма должна быть положительным числом." });
        }
        data.amount = parsed;
      }
      if (date !== undefined) data.date = date;
      if (periodStart !== undefined) data.periodStart = periodStart || null;
      if (periodEnd !== undefined) data.periodEnd = periodEnd || null;
      if (note !== undefined) data.note = note || null;

      const updated = await prisma.creatorIncome.update({
        where: { id },
        data,
        include: { business: { select: { id: true, name: true } } },
      });
      res.json(updated);
    } catch (error) {
      console.error("Creator update income error:", error);
      res.status(500).json({ error: "Не удалось обновить запись дохода." });
    }
  });

  // Delete income record
  app.delete("/api/creator/income/:id", authService.authenticateToken, requireCreator, async (req, res) => {
    const { id } = req.params;
    try {
      const existing = await prisma.creatorIncome.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: "Запись не найдена." });
      }
      await prisma.creatorIncome.delete({ where: { id } });
      res.status(204).send();
    } catch (error) {
      console.error("Creator delete income error:", error);
      res.status(500).json({ error: "Не удалось удалить запись дохода." });
    }
  });
};

module.exports = { registerCreatorIncomeRoutes };
