const createLegacyHomeUsersMigrationService = ({
  SqliteDatabase = null,
  LEGACY_HOME_USERS_DB_PATH,
  prisma,
  fs,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  HOME_USER_SELECT,
} = {}) => {
  const getSqliteDatabaseClass = () => {
    if (SqliteDatabase) return SqliteDatabase;
    return require("better-sqlite3");
  };

  const shouldHydrateUserNameFromHome = (name, phone) => {
    const safeName = normalizeText(name);
    if (!safeName) return true;
    const safePhone = normalizePhone(phone);
    if (!safePhone) return false;
    return canonicalizeKey(safeName) === canonicalizeKey(safePhone);
  };

  const readLegacyHomeUsers = () => {
    if (!fs.existsSync(LEGACY_HOME_USERS_DB_PATH)) return [];
    let db = null;
    try {
      const DatabaseClass = getSqliteDatabaseClass();
      db = new DatabaseClass(LEGACY_HOME_USERS_DB_PATH, {
        readonly: true,
        fileMustExist: true,
      });
      const tableExists = db
        .prepare(
          "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'home_users' LIMIT 1",
        )
        .get();
      if (!tableExists) return [];
      return db
        .prepare(
          `SELECT id, phone, display_name, password_hash, password_salt, is_active, created_at, updated_at, last_login_at
           FROM home_users`,
        )
        .all();
    } catch (error) {
      console.warn("Legacy home users read warning:", error?.message || error);
      return [];
    } finally {
      if (db) {
        try {
          db.close();
        } catch {
          // ignore
        }
      }
    }
  };

  const migrateLegacyHomeUsersToUsers = async () => {
    const legacyUsers = readLegacyHomeUsers();
    if (!legacyUsers.length) {
      return { created: 0, updated: 0, total: 0 };
    }
    const users = await prisma.users.findMany({ select: HOME_USER_SELECT });
    const usersById = new Map();
    const usersByPhone = new Map();
    users.forEach((row) => {
      const safeId = normalizeText(row.id);
      if (safeId) usersById.set(safeId, row);
      const safePhone = normalizePhone(row.Phone || "");
      if (safePhone && !usersByPhone.has(safePhone)) {
        usersByPhone.set(safePhone, row);
      }
    });
    let created = 0;
    let updated = 0;
    for (const legacy of legacyUsers) {
      const legacyId = normalizeText(legacy?.id);
      const legacyPhone = normalizePhone(legacy?.phone || "");
      const legacyHash = normalizeText(legacy?.password_hash);
      const legacySalt = normalizeText(legacy?.password_salt);
      if (!legacyId || !legacyPhone || !legacyHash || !legacySalt) continue;
      const legacyDisplayName = normalizeText(legacy?.display_name) || legacyPhone;
      const legacyActive = Number(legacy?.is_active) === 1;
      const existing = usersById.get(legacyId) || usersByPhone.get(legacyPhone);
      if (existing) {
        const patch = {};
        if (!normalizePhone(existing.Phone || "")) patch.Phone = legacyPhone;
        if (legacyDisplayName && shouldHydrateUserNameFromHome(existing.Name, existing.Phone)) {
          patch.Name = legacyDisplayName;
        }
        if (!normalizeText(existing.homePasswordHash)) {
          patch.homePasswordHash = legacyHash;
        }
        if (!normalizeText(existing.homePasswordSalt)) {
          patch.homePasswordSalt = legacySalt;
        }
        if (!normalizeText(existing.homeCreatedAt) && normalizeText(legacy?.created_at)) {
          patch.homeCreatedAt = normalizeText(legacy.created_at);
        }
        if (
          normalizeText(legacy?.updated_at) &&
          (!normalizeText(existing.homeUpdatedAt) ||
            normalizeText(legacy.updated_at) > normalizeText(existing.homeUpdatedAt))
        ) {
          patch.homeUpdatedAt = normalizeText(legacy.updated_at);
        }
        if (
          normalizeText(legacy?.last_login_at) &&
          (!normalizeText(existing.homeLastLoginAt) ||
            normalizeText(legacy.last_login_at) > normalizeText(existing.homeLastLoginAt))
        ) {
          patch.homeLastLoginAt = normalizeText(legacy.last_login_at);
        }
        if (existing.homeIsActive !== legacyActive) {
          patch.homeIsActive = legacyActive;
        }
        if (Object.keys(patch).length) {
          const next = await prisma.users.update({
            where: { id: existing.id },
            data: patch,
            select: HOME_USER_SELECT,
          });
          updated += 1;
          usersById.set(normalizeText(next.id), next);
          const nextPhone = normalizePhone(next.Phone || "");
          if (nextPhone) usersByPhone.set(nextPhone, next);
        }
        continue;
      }
      const createdUser = await prisma.users.create({
        data: {
          id: legacyId,
          Name: legacyDisplayName,
          Phone: legacyPhone,
          TelegramID: null,
          Barber: null,
          homePasswordHash: legacyHash,
          homePasswordSalt: legacySalt,
          homeIsActive: legacyActive,
          homeCreatedAt: normalizeText(legacy?.created_at) || new Date().toISOString(),
          homeUpdatedAt:
            normalizeText(legacy?.updated_at) ||
            normalizeText(legacy?.created_at) ||
            new Date().toISOString(),
          homeLastLoginAt: normalizeText(legacy?.last_login_at) || null,
        },
        select: HOME_USER_SELECT,
      });
      created += 1;
      usersById.set(normalizeText(createdUser.id), createdUser);
      const createdPhone = normalizePhone(createdUser.Phone || "");
      if (createdPhone) usersByPhone.set(createdPhone, createdUser);
    }
    return { created, updated, total: legacyUsers.length };
  };

  return {
    migrateLegacyHomeUsersToUsers,
    readLegacyHomeUsers,
    shouldHydrateUserNameFromHome,
  };
};

module.exports = {
  createLegacyHomeUsersMigrationService,
};
