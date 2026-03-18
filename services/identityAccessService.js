const createIdentityAccessService = ({
  normalizeText,
  canonicalizeKey,
  roleOwner,
  roleCreator,
  roleStaff,
  resolveBarberIdFromLookup,
  getBarberAliasLookup = () => new Map(),
}) => {
  const normalizeRole = (value) => {
    if (value === roleCreator) return roleCreator;
    if (value === roleStaff) return roleStaff;
    return roleOwner;
  };

  const resolveUserIdentity = (payload = {}) => ({
    username: payload.username || payload.login || null,
    role: normalizeRole(payload.role),
    barberId: payload.barberId || payload.id || null,
    barberName: normalizeText(
      payload.barberName || payload.displayName || payload.name || "",
    ),
  });

  const resolveRequestIdentity = (req) =>
    req?.identity ? req.identity : resolveUserIdentity(req?.user || {});

  const isOwnerIdentity = (identity) => identity?.role === roleOwner;
  const isCreatorIdentity = (identity) => identity?.role === roleCreator;
  const hasOwnerAccess = (identity) =>
    isOwnerIdentity(identity) || isCreatorIdentity(identity);
  const isOwnerRequest = (req) => hasOwnerAccess(resolveRequestIdentity(req));
  const staffOwnsValue = (identity, value) =>
    identity?.barberName &&
    canonicalizeKey(value) === canonicalizeKey(identity.barberName);

  const requireOwner = (req, res, next) => {
    if (!isOwnerRequest(req)) {
      return res
        .status(403)
        .json({ error: "Недостаточно прав для выполнения действия." });
    }
    return next();
  };

  const isStaffIdentity = (identity) => identity?.role === roleStaff;
  const getIdentityBarberName = (identity) =>
    normalizeText(identity?.barberName || identity?.username || "");
  const getIdentityBarberKey = (identity) =>
    canonicalizeKey(getIdentityBarberName(identity));

  const matchesIdentityBarber = (value, identity) => {
    if (!isStaffIdentity(identity)) return true;
    const normalizedValue = canonicalizeKey(value);
    const target = getIdentityBarberKey(identity);
    if (target && normalizedValue && normalizedValue === target) {
      return true;
    }
    if (identity?.barberId && normalizedValue) {
      const resolvedId = resolveBarberIdFromLookup(
        getBarberAliasLookup(),
        normalizedValue,
      );
      if (resolvedId && resolvedId === identity.barberId) {
        return true;
      }
    }
    return false;
  };

  const filterAppointmentsForIdentity = (rows = [], identity) => {
    if (!isStaffIdentity(identity)) return rows;
    return rows.filter((row) => matchesIdentityBarber(row.Barber, identity));
  };

  const filterBarbersForIdentity = (barbers = [], identity) => {
    if (!isStaffIdentity(identity)) return barbers;
    if (!identity?.barberId) return [];
    return barbers.filter((barber) => barber.id === identity.barberId);
  };

  const filterServicesForIdentity = (services = [], identity) => {
    if (!isStaffIdentity(identity) || !identity?.barberId) return services;
    const staffBarberId = identity.barberId;
    return services.map((service) => ({
      ...service,
      prices: { [staffBarberId]: service.prices?.[staffBarberId] ?? null },
    }));
  };

  return {
    normalizeRole,
    resolveUserIdentity,
    resolveRequestIdentity,
    isOwnerIdentity,
    isCreatorIdentity,
    hasOwnerAccess,
    isOwnerRequest,
    staffOwnsValue,
    requireOwner,
    isStaffIdentity,
    getIdentityBarberName,
    getIdentityBarberKey,
    matchesIdentityBarber,
    filterAppointmentsForIdentity,
    filterBarbersForIdentity,
    filterServicesForIdentity,
  };
};

module.exports = {
  createIdentityAccessService,
};
