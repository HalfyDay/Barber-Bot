/**
 * cityService.js — helpers for resolving active city context in API requests.
 *
 * Active city resolution order:
 *   1. For staff (role=staff): from JWT token (identity.cityId) — immutable
 *   2. For owner: from X-City-Id header or ?cityId= query param
 *   3. If neither — null (no filter, all data visible)
 */

const createCityService = ({ prisma, getSiteSettings, normalizeText }) => {
  let _citiesEnabledCache = null;
  let _cacheExpiresAt = 0;
  const CACHE_TTL_MS = 30_000; // re-check every 30 seconds

  /**
   * Returns whether the cities feature is enabled for this business.
   * Uses a short-lived cache to avoid hitting DB on every request.
   */
  const isCitiesEnabled = async () => {
    const now = Date.now();
    if (_citiesEnabledCache !== null && now < _cacheExpiresAt) {
      return _citiesEnabledCache;
    }
    try {
      const siteSettings = await getSiteSettings();
      const enabled = siteSettings?.cities?.enabled === true;
      _citiesEnabledCache = enabled;
      _cacheExpiresAt = now + CACHE_TTL_MS;
      return enabled;
    } catch {
      return false;
    }
  };

  /** Invalidate the cache (call after updating site settings) */
  const invalidateCitiesCache = () => {
    _citiesEnabledCache = null;
    _cacheExpiresAt = 0;
  };

  /**
   * Resolve the active cityId from a request.
   *
   * @param {object} req - Express request
   * @param {object} identity - Resolved identity from JWT
   * @returns {string|null} cityId or null
   */
  const resolveRequestCityId = (req, identity) => {
    const role = identity?.role;
    // Staff: city is determined by their profile — from JWT
    if (role === 'staff') {
      return identity?.cityId || null;
    }
    // Owner: can switch cities via header or query param
    const headerCity = normalizeText(req.headers['x-city-id']);
    if (headerCity) return headerCity;
    const queryCity = normalizeText(req.query?.cityId);
    if (queryCity) return queryCity;
    return null;
  };

  /**
   * Get cities list.
   */
  const getCities = async ({ activeOnly = false } = {}) => {
    try {
      const where = activeOnly ? { isActive: true } : {};
      return await prisma.cities.findMany({
        where,
        orderBy: [{ orderIndex: 'asc' }, { name: 'asc' }],
      });
    } catch {
      return [];
    }
  };

  /**
   * Get a city by id.
   */
  const getCityById = async (id) => {
    if (!id) return null;
    try {
      return await prisma.cities.findUnique({ where: { id } });
    } catch {
      return null;
    }
  };

  /**
   * Build a Prisma `where` clause fragment for cityId filtering.
   * If citiesEnabled is false or cityId is null, returns {} (no filter).
   *
   * @param {string|null} cityId
   * @param {boolean} citiesActive
   * @returns {{ cityId?: string }}
   */
  const buildCityFilter = (cityId, citiesActive) => {
    if (!citiesActive || !cityId) return {};
    return { cityId };
  };

  return {
    isCitiesEnabled,
    invalidateCitiesCache,
    resolveRequestCityId,
    getCities,
    getCityById,
    buildCityFilter,
  };
};

module.exports = { createCityService };
