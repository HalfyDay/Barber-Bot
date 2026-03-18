const createLegacyCrudGuard = ({
  legacyTableRoutes = {
    Appointments: "/api/appointments",
    Barbers: "/api/barbers",
    Schedules: "/api/schedules",
    Services: "/api/services/full",
  },
  normalizeText = (value) => (value ?? "").toString().trim(),
} = {}) => {
  const routeMap = new Map(
    Object.entries(legacyTableRoutes).map(([tableName, route]) => [
      normalizeText(tableName),
      normalizeText(route),
    ]),
  );

  const getRedirectRoute = (tableName) => routeMap.get(normalizeText(tableName)) || null;

  const ensureTableAllowed = (tableName) => {
    const safeTableName = normalizeText(tableName);
    const targetRoute = getRedirectRoute(safeTableName);
    if (!targetRoute) return null;
    const error = new Error(
      `Для ${safeTableName} используйте ${targetRoute} вместо устаревшего маршрута.`,
    );
    error.code = "LEGACY_ROUTE_DISABLED";
    error.status = 410;
    error.tableName = safeTableName;
    error.targetRoute = targetRoute;
    return error;
  };

  return {
    getRedirectRoute,
    ensureTableAllowed,
  };
};

module.exports = {
  createLegacyCrudGuard,
};
