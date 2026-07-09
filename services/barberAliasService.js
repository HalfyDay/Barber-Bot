const createBarberAliasService = ({
  prisma,
  canonicalizeKey,
  randomUUID,
}) => {
  const barberAliases = new Map();
  const barberAliasLookup = new Map();

  const loadBarberAliases = async () => {
    // Clear existing data
    barberAliases.clear();
    barberAliasLookup.clear();
    try {
      const rows = await prisma.barberAliases.findMany({
        select: { barberId: true, alias: true },
      });
      for (const row of rows) {
        if (!row.barberId || !row.alias) continue;
        if (!canonicalizeKey(row.alias)) continue;
        const existing = barberAliases.get(row.barberId) || [];
        existing.push(row.alias);
        barberAliases.set(row.barberId, existing);
      }
    } catch {
      // Empty maps are fine
    }
    // Rebuild lookup
    for (const [barberId, aliases] of barberAliases) {
      for (const alias of aliases) {
        const normalized = canonicalizeKey(alias);
        if (normalized) {
          barberAliasLookup.set(normalized, barberId);
        }
      }
    }
  };

  const loadBarberAliasesFromDisk = loadBarberAliases;

  const persistBarberAliases = async () => {
    // No-op: aliases are persisted immediately in registerBarberAlias
  };

  const registerBarberAlias = async (barberId, alias) => {
    const normalized = canonicalizeKey(alias);
    if (!barberId || !normalized) return;
    const existing = barberAliases.get(barberId) || [];
    const hasAlias = existing.some(
      (entry) => canonicalizeKey(entry) === normalized,
    );
    if (hasAlias) {
      barberAliasLookup.set(normalized, barberId);
      return;
    }
    // Persist to database
    try {
      await prisma.barberAliases.create({
        data: {
          id: randomUUID(),
          barberId,
          alias,
          createdAt: new Date(),
        },
      });
    } catch (error) {
      console.warn('[barber-alias] Failed to persist alias:', error?.message);
    }
    const next = [...existing, alias];
    barberAliases.set(barberId, next);
    barberAliasLookup.set(normalized, barberId);
  };

  const getBarberAliases = () => barberAliases;
  const getBarberAliasLookup = () => barberAliasLookup;
  const setBarberAliasLookup = (lookup) => {
    barberAliasLookup.clear();
    if (lookup instanceof Map) {
      for (const [k, v] of lookup) {
        barberAliasLookup.set(k, v);
      }
    }
  };

  return {
    loadBarberAliasesFromDisk,
    persistBarberAliases,
    registerBarberAlias,
    getBarberAliases,
    getBarberAliasLookup,
    setBarberAliasLookup,
  };
};

module.exports = {
  createBarberAliasService,
};
