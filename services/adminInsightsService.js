const createAdminInsightsService = ({
  prisma,
  getBarbers,
  getServiceCatalog,
  readBlockedUsers,
  writeBlockedUsers,
  requestRealtimePush,
  parseDateFilter,
  getDefaultRevenueRange,
  formatDateOnly,
  normalizeText,
  buildBarberNameLookup,
  buildServiceLookup,
  getServicePriceForBarber,
  splitServiceList,
  isCompletedStatus,
  canonicalizeKey,
  mapAppointment,
  countAppointmentWarnings,
  warningBlockThreshold,
}) => {
  const buildRevenueSummary = async ({ requestedBarberId, start, end }) => {
    const defaultRange = getDefaultRevenueRange();
    let startDate = parseDateFilter(start, defaultRange.start);
    let endDate = parseDateFilter(end, defaultRange.end);
    if (startDate.getTime() > endDate.getTime()) {
      [startDate, endDate] = [endDate, startDate];
    }
    const startKey = formatDateOnly(startDate);
    const endKey = formatDateOnly(endDate);
    const [barbersList, servicesCatalog, appointments] = await Promise.all([
      getBarbers({ includeInactive: true }),
      getServiceCatalog(true),
      prisma.appointments.findMany({
        where: {
          Date: {
            gte: startKey,
            lte: endKey,
          },
        },
      }),
    ]);
    const targetBarber =
      requestedBarberId &&
      barbersList.find((barber) => normalizeText(barber.id) === requestedBarberId);
    const barberFilterId = targetBarber ? targetBarber.id : null;
    const barberLookup = buildBarberNameLookup(barbersList);
    const serviceLookup = buildServiceLookup(servicesCatalog);
    const summaryMap = new Map();
    const timelineMap = new Map();
    let totalGross = 0;
    let totalCommission = 0;

    appointments.forEach((appointment) => {
      if (!isCompletedStatus(appointment.Status)) return;
      const barber = barberLookup.get(canonicalizeKey(appointment.Barber));
      if (!barber) return;
      if (barberFilterId && barber.id !== barberFilterId) return;
      const serviceNames = splitServiceList(appointment.Services);
      if (!serviceNames.length) return;
      let appointmentGross = 0;
      serviceNames.forEach((serviceName) => {
        const service = serviceLookup.get(canonicalizeKey(serviceName));
        const price = getServicePriceForBarber(service, barber.id);
        if (price === null || price === undefined) return;
        const numericPrice = Number(price);
        if (!Number.isFinite(numericPrice) || numericPrice <= 0) return;
        appointmentGross += numericPrice;
      });
      if (!appointmentGross) return;
      const commissionRate = Number(barber.position?.commissionRate ?? 0);
      const commissionValue = appointmentGross * (commissionRate / 100);
      totalGross += appointmentGross;
      totalCommission += commissionValue;
      const existing = summaryMap.get(barber.id) || {
        id: barber.id,
        name: barber.name,
        color: barber.color,
        commissionRate,
        appointments: 0,
        gross: 0,
        commission: 0,
      };
      existing.appointments += 1;
      existing.gross += appointmentGross;
      existing.commission += commissionValue;
      summaryMap.set(barber.id, existing);
      const dateKey = appointment.Date || startKey;
      const timelineEntry = timelineMap.get(dateKey) || {
        date: dateKey,
        gross: 0,
        commission: 0,
      };
      timelineEntry.gross += appointmentGross;
      timelineEntry.commission += commissionValue;
      timelineMap.set(dateKey, timelineEntry);
    });

    return {
      start: startKey,
      end: endKey,
      barberId: barberFilterId,
      targetBarber,
      totalGross,
      totalCommission,
      totalNet: totalGross - totalCommission,
      items: Array.from(summaryMap.values())
        .map((item) => ({
          ...item,
          net: item.gross - item.commission,
        }))
        .sort((a, b) => b.gross - a.gross),
      timeline: Array.from(timelineMap.values()).sort((a, b) =>
        a.date.localeCompare(b.date),
      ),
    };
  };

  const buildUserProfile = async (name) => {
    const user = await prisma.users.findFirst({ where: { Name: name } });
    if (!user) {
      return null;
    }
    const blockedUsers = await readBlockedUsers();
    const appointmentsRaw = await prisma.appointments.findMany({
      where: { CustomerName: name },
    });
    const appointments = appointmentsRaw
      .map(mapAppointment)
      .sort((a, b) => b.sortKey - a.sortKey);
    const warningCount = countAppointmentWarnings(appointments);
    const manualBlocked = blockedUsers.has(user.id);
    const isBlocked = manualBlocked || warningCount >= warningBlockThreshold;
    return {
      user: { ...user, warningCount, manualBlocked, isBlocked },
      appointments,
      warningCount,
      manualBlocked,
      isBlocked,
    };
  };

  const toggleUserBlock = async ({ id, shouldBlock }) => {
    const user = await prisma.users.findUnique({ where: { id } });
    if (!user) {
      return null;
    }
    const blockedUsers = await readBlockedUsers();
    if (shouldBlock) {
      blockedUsers.add(id);
    } else {
      blockedUsers.delete(id);
    }
    await writeBlockedUsers(blockedUsers);
    const relatedAppointments = await prisma.appointments.findMany({
      where: {
        OR: [
          { UserID: id },
          { CustomerName: user.Name || undefined },
          { Phone: user.Phone || undefined },
        ],
      },
    });
    const warnings = countAppointmentWarnings(
      relatedAppointments.map(mapAppointment),
    );
    const manualBlocked = blockedUsers.has(id);
    const blocked = manualBlocked || warnings >= warningBlockThreshold;
    requestRealtimePush(true);
    return {
      success: true,
      blocked,
      manualBlocked,
      warnings,
    };
  };

  return {
    buildRevenueSummary,
    buildUserProfile,
    toggleUserBlock,
  };
};

module.exports = {
  createAdminInsightsService,
};
