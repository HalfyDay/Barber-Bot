const createBarberAliasService = ({
  fs,
  path,
  barberAliasFile,
  canonicalizeKey,
}) => {
  let barberAliases = new Map();
  let barberAliasLookup = new Map();

  const loadBarberAliasesFromDisk = () => {
    try {
      const payload = fs.readJsonSync(barberAliasFile);
      if (payload && typeof payload === "object") {
        barberAliases = new Map(
          Object.entries(payload).map(([barberId, aliases]) => [
            barberId,
            Array.isArray(aliases)
              ? aliases.filter((alias) => canonicalizeKey(alias))
              : [],
          ]),
        );
      } else {
        barberAliases = new Map();
      }
    } catch {
      barberAliases = new Map();
    }
  };

  const persistBarberAliases = async () => {
    const serializable = {};
    barberAliases.forEach((aliases, barberId) => {
      if (aliases && aliases.length) {
        serializable[barberId] = aliases;
      }
    });
    await fs.ensureDir(path.dirname(barberAliasFile));
    await fs.writeJson(barberAliasFile, serializable, { spaces: 2 });
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
    const next = [...existing, alias];
    barberAliases.set(barberId, next);
    barberAliasLookup.set(normalized, barberId);
    await persistBarberAliases();
  };

  const getBarberAliases = () => barberAliases;
  const getBarberAliasLookup = () => barberAliasLookup;
  const setBarberAliasLookup = (lookup) => {
    barberAliasLookup = lookup instanceof Map ? lookup : new Map();
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
