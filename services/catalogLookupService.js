const createCatalogLookupService = ({
  canonicalizeKey,
  normalizeText,
  getBarberAliases = () => new Map(),
}) => {
  const buildBarberLookup = (records = []) => {
    const lookup = new Map();
    records.forEach((barber) => {
      [barber.name, barber.login, barber.nickname].forEach((key) => {
        const normalized = canonicalizeKey(key);
        if (normalized && barber.id && !lookup.has(normalized)) {
          lookup.set(normalized, barber.id);
        }
      });
      const aliasList = getBarberAliases().get(barber.id) || [];
      aliasList.forEach((alias) => {
        const normalizedAlias = canonicalizeKey(alias);
        if (normalizedAlias && barber.id && !lookup.has(normalizedAlias)) {
          lookup.set(normalizedAlias, barber.id);
        }
      });
    });
    return lookup;
  };

  const resolveBarberIdFromLookup = (lookup, key) => {
    const normalized = canonicalizeKey(key);
    return normalized ? lookup.get(normalized) : null;
  };

  const getDefaultRevenueRange = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now);
    return { start, end };
  };

  const splitServiceList = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value
        .map((item) => {
          if (typeof item === "string") return normalizeText(item);
          if (item && typeof item === "object") {
            return normalizeText(item.name || item.title || item.Service || "");
          }
          return "";
        })
        .filter(Boolean);
    }
    const normalized = normalizeText(value);
    if (!normalized) return [];
    if (normalized.startsWith("[") && normalized.endsWith("]")) {
      try {
        const parsed = JSON.parse(normalized);
        if (Array.isArray(parsed)) {
          return splitServiceList(parsed);
        }
      } catch {
        // ignore malformed JSON
      }
    }
    return normalized
      .split(/[,;\n]/)
      .map((item) => normalizeText(item))
      .filter(Boolean);
  };

  const buildServiceLookup = (services = []) => {
    const map = new Map();
    services.forEach((service) => {
      const key = canonicalizeKey(service?.name);
      if (key && !map.has(key)) {
        map.set(key, service);
      }
    });
    return map;
  };

  const getServicePriceForBarber = (service, barberId) => {
    if (!service || !barberId) return null;
    const prices = service.prices || {};
    const direct = prices[barberId] ?? prices[String(barberId)];
    return direct ?? null;
  };

  const buildBarberNameLookup = (barbers = []) => {
    const map = new Map();
    barbers.forEach((barber) => {
      [barber.name, barber.login, barber.nickname].forEach((name) => {
        const key = canonicalizeKey(name);
        if (key && barber && !map.has(key)) {
          map.set(key, barber);
        }
      });
    });
    return map;
  };

  return {
    buildBarberLookup,
    resolveBarberIdFromLookup,
    getDefaultRevenueRange,
    splitServiceList,
    buildServiceLookup,
    getServicePriceForBarber,
    buildBarberNameLookup,
  };
};

module.exports = {
  createCatalogLookupService,
};
