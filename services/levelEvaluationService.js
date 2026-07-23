const createLevelEvaluationService = ({
  prisma,
  normalizeText,
  canonicalizeKey,
  normalizeAppointmentStatus,
  isCompletedStatus,
  statusDone,
  randomUUID,
  logger = console,
}) => {
  // ── Build flat ordered list of all levels ──
  // Parent (no children) → single entry
  // Parent (with children) → children sorted by orderIndex
  const getLevelProgression = (positions) => {
    const roots = positions
      .filter((p) => !p.parentId)
      .sort((a, b) => (Number(a.orderIndex) || 0) - (Number(b.orderIndex) || 0));

    const flat = [];
    for (const root of roots) {
      if (root.children && root.children.length > 0) {
        const kids = [...root.children].sort(
          (a, b) => (Number(a.orderIndex) || 0) - (Number(b.orderIndex) || 0),
        );
        flat.push(...kids);
      } else {
        flat.push(root);
      }
    }
    return flat;
  };

  const getNextLevel = (positions, currentPosId) => {
    const flat = getLevelProgression(positions);
    const idx = flat.findIndex((p) => p.id === currentPosId);
    return idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
  };

  const getPrevLevel = (positions, currentPosId) => {
    const flat = getLevelProgression(positions);
    const idx = flat.findIndex((p) => p.id === currentPosId);
    return idx > 0 ? flat[idx - 1] : null;
  };

  // ── Calculate barber's monthly metrics ──
  const calculateBarberMonthlyMetrics = async (barberName, month) => {
    // month = "YYYY-MM"
    const monthStart = `${month}-01`;
    // Last day of month: go to next month day 01, minus 1 day
    const [y, m] = month.split('-').map(Number);
    const nextMonth = m === 12 ? `${y + 1}-01-01` : `${y}-${String(m + 1).padStart(2, '0')}-01`;
    const lastDay = new Date(new Date(nextMonth).getTime() - 86400000);
    const monthEnd = `${lastDay.getFullYear()}-${String(lastDay.getMonth() + 1).padStart(2, '0')}-${String(lastDay.getDate()).padStart(2, '0')}`;

    const appointmentsRaw = await prisma.appointments.findMany({
      where: {
        date: { gte: monthStart, lte: monthEnd },
      },
    });
    const appointments = appointmentsRaw.map(mapAppointment);

    // Filter to this barber's completed appointments
    const barberAppts = appointments.filter((a) => {
      if (!isCompletedStatus(a.Status)) return false;
      return normalizeText(a.Barber) === normalizeText(barberName);
    });

    // Count unique clients by UserID/Phone/CustomerName
    const clientVisits = new Map();
    for (const a of barberAppts) {
      const key = normalizeText(a.UserID || a.Phone || a.CustomerName);
      if (key) clientVisits.set(key, (clientVisits.get(key) || 0) + 1);
    }

    const actualClientVolume = clientVisits.size;
    const actualRetainedClients = [...clientVisits.values()].filter((c) => c >= 2).length;
    const actualReturnPercent =
      actualClientVolume > 0 ? (actualRetainedClients / actualClientVolume) * 100 : 0;

    return { actualClientVolume, actualRetainedClients, actualReturnPercent };
  };

  // ── Check if metrics meet a position's requirements ──
  const checkRequirements = (metrics, position) => {
    const reqVolume = Number(position.requiredClientVolume) || 0;
    const reqRetained = Number(position.requiredRetainedClients) || 0;
    const reqReturn = Number(position.targetReturnPercent) || 0;

    return (
      metrics.actualClientVolume >= reqVolume &&
      metrics.actualRetainedClients >= reqRetained &&
      metrics.actualReturnPercent >= reqReturn - 0.001 // float tolerance
    );
  };

  // ── Evaluate a single barber for a given month ──
  const evaluateBarberMonth = async (barberId, barberName, month, positions) => {
    const barber = await prisma.barbers.findUnique({ where: { id: barberId } });
    if (!barber || !barber.positionId) return null;

    const currentPosition = positions.find((p) => p.id === barber.positionId);
    if (!currentPosition) return null;

    const metrics = await calculateBarberMonthlyMetrics(barberName, month);
    const meetsCurrent = checkRequirements(metrics, currentPosition);

    const nextPos = getNextLevel(positions, barber.positionId);
    const meetsNext = nextPos ? checkRequirements(metrics, nextPos) : false;

    const record = {
      id: randomUUID(),
      barberId,
      month,
      actualClientVolume: metrics.actualClientVolume,
      actualRetainedClients: metrics.actualRetainedClients,
      actualReturnPercent: Math.round(metrics.actualReturnPercent * 100) / 100,
      meetsCurrentRequirements: meetsCurrent,
      meetsNextRequirements: meetsNext,
      currentPositionId: barber.positionId,
      nextPositionId: nextPos ? nextPos.id : null,
      evaluatedAt: new Date(),
    };

    await prisma.barberLevelHistory.upsert({
      where: { barberId_month: { barberId, month } },
      create: record,
      update: {
        actualClientVolume: record.actualClientVolume,
        actualRetainedClients: record.actualRetainedClients,
        actualReturnPercent: record.actualReturnPercent,
        meetsCurrentRequirements: record.meetsCurrentRequirements,
        meetsNextRequirements: record.meetsNextRequirements,
        currentPositionId: record.currentPositionId,
        nextPositionId: record.nextPositionId,
        evaluatedAt: record.evaluatedAt,
      },
    });

    return record;
  };

  // ── Evaluate all active barbers for a month ──
  const evaluateAllBarbers = async (month) => {
    const [barbersList, positionsRaw] = await Promise.all([
      prisma.barbers.findMany({ where: { isActive: true }, include: { position: true } }),
      prisma.positions.findMany({ include: { children: true } }),
    ]);

    const positions = positionsRaw.map((p) => ({
      ...p,
      children: p.children || [],
    }));

    let evaluated = 0;
    for (const barber of barbersList) {
      if (!barber.positionId) continue;
      try {
        await evaluateBarberMonth(barber.id, barber.name, month, positions);
        evaluated++;
      } catch (e) {
        logger.error(`[level] Error evaluating ${barber.name}: ${e.message}`);
      }
    }
    logger.log(`[level] Evaluated ${evaluated} barbers for ${month}`);
    return { evaluated };
  };

  // ── Check and apply level changes (promotions/demotions) ──
  const checkAndApplyLevelChanges = async () => {
    const [barbersList, positionsRaw] = await Promise.all([
      prisma.barbers.findMany({
        where: { isActive: true, positionId: { not: null } },
        include: { position: true },
      }),
      prisma.positions.findMany({ include: { children: true } }),
    ]);

    const positions = positionsRaw.map((p) => ({
      ...p,
      children: p.children || [],
    }));

    const changes = [];

    for (const barber of barbersList) {
      if (!barber.positionId) continue;

      // Check promotion: last 2 months both have meetsNext = true
      const recent2 = await prisma.barberLevelHistory.findMany({
        where: { barberId: barber.id },
        orderBy: { month: 'desc' },
        take: 2,
      });

      if (
        recent2.length >= 2 &&
        recent2.every((r) => r.meetsNextRequirements) &&
        recent2[0].nextPositionId
      ) {
        const nextPos = positions.find((p) => p.id === recent2[0].nextPositionId);
        if (nextPos) {
          await prisma.barbers.update({
            where: { id: barber.id },
            data: { positionId: recent2[0].nextPositionId },
          });
          changes.push({
            barber: barber.name,
            from: barber.position?.name,
            to: nextPos.name,
            type: 'promotion',
          });
          logger.log(`[level] ${barber.name} PROMOTED: ${barber.position?.name} → ${nextPos.name}`);
          continue;
        }
      }

      // Check demotion: last 3 months all have meetsCurrent = false
      const recent3 = await prisma.barberLevelHistory.findMany({
        where: { barberId: barber.id },
        orderBy: { month: 'desc' },
        take: 3,
      });

      if (recent3.length >= 3 && recent3.every((r) => !r.meetsCurrentRequirements)) {
        const prevPos = getPrevLevel(positions, barber.positionId);
        if (prevPos) {
          await prisma.barbers.update({
            where: { id: barber.id },
            data: { positionId: prevPos.id },
          });
          changes.push({
            barber: barber.name,
            from: barber.position?.name,
            to: prevPos.name,
            type: 'demotion',
          });
          logger.log(`[level] ${barber.name} DEMOTED: ${barber.position?.name} → ${prevPos.name}`);
        }
      }
    }

    return changes;
  };

  // ── Get progress data for a barber ──
  const getBarberProgress = async (barberId) => {
    const barber = await prisma.barbers.findUnique({ where: { id: barberId } });
    if (!barber || !barber.positionId) return null;

    const positionsRaw = await prisma.positions.findMany({ include: { children: true } });
    const positions = positionsRaw.map((p) => ({ ...p, children: p.children || [] }));

    const currentPosition = positions.find((p) => p.id === barber.positionId);
    if (!currentPosition) return null;

    const nextPos = getNextLevel(positions, barber.positionId);
    const history = await prisma.barberLevelHistory.findMany({
      where: { barberId },
      orderBy: { month: 'desc' },
      take: 6,
    });

    // Count consecutive months meeting next level requirements
    let consecutiveMetNext = 0;
    for (const h of history) {
      if (h.meetsNextRequirements) consecutiveMetNext++;
      else break;
    }

    // Count consecutive months NOT meeting current level requirements
    let consecutiveFailedCurrent = 0;
    for (const h of history) {
      if (!h.meetsCurrentRequirements) consecutiveFailedCurrent++;
      else break;
    }

    // ── Countdown ──
    const now = new Date();
    const nextEval = new Date(now.getFullYear(), now.getMonth() + 1, 1, 3, 30);
    const msUntilEval = nextEval.getTime() - now.getTime();
    const daysUntilEval = Math.max(0, Math.ceil(msUntilEval / 86400000));

    let promotionDaysLeft = null;
    if (consecutiveMetNext > 0 && consecutiveMetNext < 2) {
      promotionDaysLeft = daysUntilEval;
    } else if (consecutiveMetNext >= 2) {
      promotionDaysLeft = 0;
    }

    let demotionDaysLeft = null;
    if (consecutiveFailedCurrent > 0 && consecutiveFailedCurrent < 3) {
      demotionDaysLeft = daysUntilEval;
    } else if (consecutiveFailedCurrent >= 3) {
      demotionDaysLeft = 0;
    }

    // ── Live metrics for current month ──
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    let liveMetrics = null;
    try {
      const metrics = await calculateBarberMonthlyMetrics(barber.name, currentMonth);
      liveMetrics = {
        ...metrics,
        meetsCurrentNow: checkRequirements(metrics, currentPosition),
        meetsNextNow: nextPos ? checkRequirements(metrics, nextPos) : false,
      };
    } catch {
      liveMetrics = { actualClientVolume: 0, actualRetainedClients: 0, actualReturnPercent: 0, meetsCurrentNow: false, meetsNextNow: false };
    }

    // ── Ranking among same-level barbers ──
    let ranking = null;
    try {
      const sameLevelBarbers = await prisma.barbers.findMany({
        where: { positionId: barber.positionId, isActive: true },
        select: { id: true, name: true },
      });
      if (sameLevelBarbers.length > 1) {
        const scores = [];
        for (const b of sameLevelBarbers) {
          try {
            const m = await calculateBarberMonthlyMetrics(b.name, currentMonth);
            const score = (m.actualClientVolume || 0) + (m.actualRetainedClients || 0) * 2 + (m.actualReturnPercent || 0) * 0.1;
            scores.push({ id: b.id, name: b.name, score: Math.round(score * 10) / 10 });
          } catch {
            scores.push({ id: b.id, name: b.name, score: 0 });
          }
        }
        scores.sort((a, b) => b.score - a.score);
        ranking = {
          position: scores.findIndex((s) => s.id === barber.id) + 1,
          total: sameLevelBarbers.length,
          scores: scores.slice(0, 5),
        };
      } else if (sameLevelBarbers.length === 1) {
        ranking = { position: 1, total: 1, scores: [{ id: barber.id, name: barber.name, score: 0 }] };
      }
    } catch {
      ranking = null;
    }

    return {
      currentPosition,
      nextPosition: nextPos,
      history: history.slice(0, 6),
      promotionProgress: {
        monthsMet: consecutiveMetNext,
        monthsRequired: 2,
        ready: consecutiveMetNext >= 2,
      },
      demotionRisk: {
        monthsFailed: consecutiveFailedCurrent,
        monthsThreshold: 3,
        atRisk: consecutiveFailedCurrent >= 2,
        ready: consecutiveFailedCurrent >= 3,
      },
      countdown: {
        daysUntilEvaluation: daysUntilEval,
        nextEvaluationDate: `${nextEval.getFullYear()}-${String(nextEval.getMonth() + 1).padStart(2, '0')}-${String(nextEval.getDate()).padStart(2, '0')}`,
        promotionDaysLeft,
        demotionDaysLeft,
      },
      liveMetrics,
      ranking,
    };
  };

  return {
    getLevelProgression,
    getNextLevel,
    getPrevLevel,
    calculateBarberMonthlyMetrics,
    checkRequirements,
    evaluateBarberMonth,
    evaluateAllBarbers,
    checkAndApplyLevelChanges,
    getBarberProgress,
  };
};

module.exports = { createLevelEvaluationService };
