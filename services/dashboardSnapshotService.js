const createDashboardSnapshotService = ({
  prisma,
  getBarbers,
  getServiceCatalog,
  getBotSettings,
  listBackups,
  readBlockedUsers,
  mapAppointment,
  formatDateOnly,
  splitActiveAppointments,
  normalizePhone,
  normalizeText,
  countAppointmentWarnings,
  countBlockedClientsFromAppointments,
  buildServiceLookup,
  getServicePriceForBarber,
  splitServiceList,
  filterAppointmentsForIdentity,
  filterBarbersForIdentity,
  isStaffIdentity,
  matchesIdentityBarber,
  isCompletedStatus,
  canonicalizeKey,
  getWarningCutoffDate,
  warningBlockThreshold,
  botRuntime,
  buildUserInsightsMap,
}) => {
  const buildClientRows = (users, appointments, manualBlockedSet = new Set()) => {
    const now = new Date();
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    const warningCutoff = getWarningCutoffDate();
    const clients = [];
    const appointmentsByUser = new Map();
    appointments.forEach((appt) => {
      if (appt.UserID) {
        const list = appointmentsByUser.get(appt.UserID) || [];
        list.push(appt);
        appointmentsByUser.set(appt.UserID, list);
      }
    });
    users.forEach((user) => {
      const normalizedPhone = normalizePhone(user.Phone);
      const relatedAppointments = (appointmentsByUser.get(user.id) || []).concat(
        appointments.filter((appt) => {
          if (appt.UserID && appt.UserID === user.id) return false;
          if (normalizedPhone && appt.normalizedPhone === normalizedPhone) return true;
          if (
            user.Name &&
            appt.CustomerName &&
            normalizeText(user.Name) === normalizeText(appt.CustomerName)
          ) {
            return true;
          }
          return false;
        }),
      );
      const active = relatedAppointments.filter((appt) => appt.isActive);
      const confirmed = relatedAppointments.filter((appt) => appt.isConfirmed);
      const confirmedYear = confirmed.filter(
        (appt) => appt.startDateTime && new Date(appt.startDateTime) >= yearAgo,
      );
      const lastConfirmed = confirmed.sort((a, b) => b.sortKey - a.sortKey)[0];
      const warningCount = countAppointmentWarnings(relatedAppointments, warningCutoff);
      const manualBlocked = manualBlockedSet.has(user.id);
      const isBlocked = manualBlocked || warningCount >= warningBlockThreshold;
      clients.push({
        id: user.id,
        name: user.Name || "Без имени",
        phone: user.Phone || "",
        normalizedPhone,
        telegramId: user.TelegramID || null,
        preferredBarber: user.Barber || null,
        warningCount,
        manualBlocked,
        isBlocked,
        activeAppointments: active.length,
        confirmedHaircutsYear: confirmedYear.length,
        totalConfirmed: confirmed.length,
        lastHaircutDate: lastConfirmed?.Date || null,
        lastHaircutTime: lastConfirmed?.Time || null,
        lastHaircutBarber: lastConfirmed?.Barber || null,
        activeRecords: active.slice(0, 5),
        historyRecords: confirmed.slice(0, 25),
      });
    });
    const orphanAppointments = appointments.filter((appt) => !appt.UserID);
    orphanAppointments.forEach((appt) => {
      const clientId = `appt-${appt.id}`;
      const exists = clients.some(
        (client) =>
          client.id === clientId ||
          (client.normalizedPhone &&
            client.normalizedPhone === appt.normalizedPhone &&
            client.name === (appt.CustomerName || client.name)),
      );
      if (exists) return;
      const confirmedYear =
        appt.isConfirmed &&
        appt.startDateTime &&
        new Date(appt.startDateTime) >= yearAgo
          ? 1
          : 0;
      const warningCount = countAppointmentWarnings([appt], warningCutoff);
      const isBlocked = warningCount >= warningBlockThreshold || appt.isBlocked;
      clients.push({
        id: clientId,
        name: appt.CustomerName || "Без имени",
        phone: appt.Phone || "",
        normalizedPhone: appt.normalizedPhone,
        telegramId: null,
        preferredBarber: appt.Barber || null,
        warningCount,
        manualBlocked: false,
        isBlocked,
        activeAppointments: appt.isActive ? 1 : 0,
        confirmedHaircutsYear: confirmedYear,
        totalConfirmed: appt.isConfirmed ? 1 : 0,
        lastHaircutDate: appt.isConfirmed ? appt.Date : null,
        lastHaircutTime: appt.isConfirmed ? appt.Time : null,
        lastHaircutBarber: appt.isConfirmed ? appt.Barber : null,
        activeRecords: appt.isActive ? [appt] : [],
        historyRecords: appt.isConfirmed ? [appt] : [],
      });
    });
    return clients.sort((a, b) => {
      const aDate = a.lastHaircutDate
        ? new Date(
            `${a.lastHaircutDate}T${(a.lastHaircutTime || "00:00").slice(0, 5)}:00`,
          ).getTime()
        : 0;
      const bDate = b.lastHaircutDate
        ? new Date(
            `${b.lastHaircutDate}T${(b.lastHaircutTime || "00:00").slice(0, 5)}:00`,
          ).getTime()
        : 0;
      return bDate - aDate;
    });
  };

  const buildDashboardSnapshot = async (identity = null) => {
    const [
      appointmentsRaw,
      users,
      barbers,
      services,
      settings,
      backups,
      blockedUsers,
    ] = await Promise.all([
      prisma.appointments.findMany(),
      prisma.users.findMany(),
      getBarbers({ includeInactive: true }),
      getServiceCatalog(true, identity),
      getBotSettings(),
      listBackups(),
      readBlockedUsers(),
    ]);
    const appointments = appointmentsRaw.map(mapAppointment);
    const insightsMap = buildUserInsightsMap
      ? await buildUserInsightsMap(users, appointments, blockedUsers)
      : new Map();
    const now = new Date();
    const todayKey = formatDateOnly(now);
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    const activeBuckets = splitActiveAppointments(appointments, now);
    const activeAppointments = activeBuckets.active;
    const upcoming = activeBuckets.upcoming;
    const overdue = activeBuckets.overdue;
    const history = appointments
      .filter((appt) => !appt.isActive && appt.sortKey)
      .sort((a, b) => b.sortKey - a.sortKey)
      .slice(0, 400);
    const confirmedYear = appointments.filter(
      (appt) =>
        appt.isConfirmed &&
        appt.startDateTime &&
        new Date(appt.startDateTime) >= yearAgo,
    ).length;
    const todaysAppointments = upcoming.filter(
      (appt) => appt.Date === todayKey,
    ).length;
    const clients = buildClientRows(users, appointments, blockedUsers).map((client) => {
      const extra = insightsMap.get(client.id) || {};
      return { ...client, ...extra };
    });
    const blockedClients = clients.filter((client) => client.isBlocked).length;
    const stats = {
      totalUsers: users.length,
      activeAppointments: activeAppointments.length,
      upcomingAppointments: upcoming.length,
      overdueAppointments: overdue.length,
      todaysAppointments,
      confirmedYear,
      blockedClients,
      earningsMonth: null,
      positionName: null,
    };
    const snapshot = {
      stats,
      appointments: { active: activeAppointments, upcoming, overdue, history },
      clients,
      barbers,
      services,
      bot: {
        settings,
        status: botRuntime,
      },
      backups: backups.slice(0, 20),
    };
    if (isStaffIdentity(identity)) {
      const staffAppointments = filterAppointmentsForIdentity(
        appointments,
        identity,
      );
      const staffActiveBuckets = splitActiveAppointments(staffAppointments, now);
      const staffActive = staffActiveBuckets.active;
      const staffUpcoming = staffActiveBuckets.upcoming;
      const staffOverdue = staffActiveBuckets.overdue;
      const staffHistory = staffAppointments
        .filter((appt) => !appt.isActive && appt.sortKey)
        .sort((a, b) => b.sortKey - a.sortKey)
        .slice(0, 400);
      const staffConfirmedYear = staffAppointments.filter(
        (appt) =>
          appt.isConfirmed &&
          appt.startDateTime &&
          new Date(appt.startDateTime) >= yearAgo,
      ).length;
      const staffTodays = staffUpcoming.filter(
        (appt) => appt.Date === todayKey,
      ).length;
      const staffBlocked = countBlockedClientsFromAppointments(
        staffAppointments,
        blockedUsers,
      );
      const staffUsers = users.filter((user) =>
        matchesIdentityBarber(user.Barber, identity),
      );
      const staffBarber =
        barbers.find(
          (barber) =>
            barber.id &&
            identity?.barberId &&
            String(barber.id) === String(identity.barberId),
        ) || null;
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthStartKey = formatDateOnly(monthStart);
      const serviceLookup = buildServiceLookup(services);
      let staffMonthlyGross = 0;
      let staffMonthlyCommission = 0;
      staffAppointments.forEach((appt) => {
        if (!isCompletedStatus(appt.Status)) return;
        if (!appt.Date || appt.Date < monthStartKey) return;
        const serviceNames = splitServiceList(appt.Services);
        if (!serviceNames.length) return;
        let appointmentGross = 0;
        serviceNames.forEach((serviceName) => {
          const service = serviceLookup.get(canonicalizeKey(serviceName));
          if (!service) return;
          const price = getServicePriceForBarber(
            service,
            staffBarber?.id || identity?.barberId,
          );
          const numericPrice = Number(price);
          if (!Number.isFinite(numericPrice) || numericPrice <= 0) return;
          appointmentGross += numericPrice;
        });
        if (!appointmentGross) return;
        const commissionRate = Number(
          staffBarber?.position?.commissionRate ?? 0,
        );
        const commissionValue = appointmentGross * (commissionRate / 100);
        staffMonthlyGross += appointmentGross;
        staffMonthlyCommission += commissionValue;
      });
      const staffPositionName = normalizeText(
        staffBarber?.position?.name || staffBarber?.position?.title || "",
      );
      return {
        stats: {
          totalUsers: staffUsers.length,
          activeAppointments: staffActive.length,
          upcomingAppointments: staffUpcoming.length,
          overdueAppointments: staffOverdue.length,
          todaysAppointments: staffTodays,
          confirmedYear: staffConfirmedYear,
          blockedClients: staffBlocked,
          earningsMonth: Math.round(staffMonthlyGross - staffMonthlyCommission),
          positionName: staffPositionName || null,
        },
        appointments: {
          active: staffActive,
          upcoming: staffUpcoming,
          overdue: staffOverdue,
          history: staffHistory,
        },
        clients,
        barbers: filterBarbersForIdentity(barbers, identity),
        services,
        bot: {
          settings,
          status: botRuntime,
        },
        backups: [],
      };
    }
    return snapshot;
  };

  const buildRealtimeAppointmentsPayload = async () => {
    const [appointmentsRaw, usersCount, blockedUsers] = await Promise.all([
      prisma.appointments.findMany(),
      prisma.users.count(),
      readBlockedUsers(),
    ]);
    const mapped = appointmentsRaw.map(mapAppointment);
    const now = new Date();
    const todayKey = formatDateOnly(now);
    const yearAgo = new Date(now);
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    const activeBuckets = splitActiveAppointments(mapped, now);
    const active = activeBuckets.active;
    const upcoming = activeBuckets.upcoming.slice(0, 60);
    const overdue = activeBuckets.overdue.slice(0, 60);
    const confirmedYear = mapped.filter(
      (appt) =>
        appt.isConfirmed &&
        appt.startDateTime &&
        new Date(appt.startDateTime) >= yearAgo,
    ).length;
    const todaysAppointments = upcoming.filter(
      (appt) => appt.Date === todayKey,
    ).length;
    const blockedClients = countBlockedClientsFromAppointments(
      mapped,
      blockedUsers,
    );
    return {
      appointmentsRaw,
      active: active.slice(0, 120),
      upcoming,
      overdue,
      stats: {
        totalUsers: usersCount,
        activeAppointments: active.length,
        upcomingAppointments: activeBuckets.upcoming.length,
        overdueAppointments: activeBuckets.overdue.length,
        todaysAppointments,
        confirmedYear,
        blockedClients,
      },
      updatedAt: new Date().toISOString(),
    };
  };

  return {
    buildClientRows,
    buildDashboardSnapshot,
    buildRealtimeAppointmentsPayload,
  };
};

module.exports = {
  createDashboardSnapshotService,
};
