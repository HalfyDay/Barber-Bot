const createHomeDataService = ({
  prisma,
  fs,
  path,
  BLOCKLIST_FILE,
  HOME_AUTH_COLUMNS,
  HOME_USER_SELECT,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  randomUUID,
}) => {
  void HOME_AUTH_COLUMNS;

  const ensureUsersHomeAuthColumns = async () => true;

  const readBlockedUsers = async () => {
    try {
      const rows = await prisma.blockedUsers.findMany({
        select: { userId: true },
      });
      return new Set(rows.map((r) => r.userId).filter(Boolean));
    } catch {
      return new Set();
    }
  };

  const writeBlockedUsers = async (blockedSet) => {
    const list = Array.from(blockedSet).map(String);
    // Replace all blocked users with current set
    await prisma.blockedUsers.deleteMany();
    if (list.length) {
      await prisma.blockedUsers.createMany({
        data: list.map((userId) => ({
          id: randomUUID(),
          userId,
          blockedAt: new Date(),
        })),
      });
    }
  };

  const shouldHydrateUserNameFromHome = (name, phone) => {
    const safeName = normalizeText(name);
    if (!safeName) return true;
    const safePhone = normalizePhone(phone);
    if (!safePhone) return false;
    return canonicalizeKey(safeName) === canonicalizeKey(safePhone);
  };

  const findAnyUserByPhone = async (phone) => {
    const safePhone = normalizePhone(phone);
    if (!safePhone) return null;
    const users = await prisma.users.findMany({
      where: { Phone: { not: null } },
      select: {
        id: true,
        Name: true,
        Phone: true,
        LastNameChanged: true,
        homePhoneChangedAt: true,
      },
    });
    return users.find((row) => normalizePhone(row?.Phone || "") === safePhone) || null;
  };

  const findHomeUserByPhone = async (phone) => {
    const safePhone = normalizePhone(phone);
    if (!safePhone) return null;
    const users = await prisma.users.findMany({
      where: { Phone: { not: null } },
      select: HOME_USER_SELECT,
    });
    const matches = users.filter((row) => normalizePhone(row.Phone || "") === safePhone);
    if (!matches.length) return null;
    return (
      matches.find(
        (row) =>
          row.homeIsActive !== false &&
          normalizeText(row.homePasswordHash) &&
          normalizeText(row.homePasswordSalt),
      ) || matches[0]
    );
  };

  const findHomeUserById = async (userId) => {
    const safeUserId = normalizeText(userId);
    if (!safeUserId) return null;
    const row = await prisma.users.findUnique({
      where: { id: safeUserId },
      select: HOME_USER_SELECT,
    });
    if (!row) return null;
    if (row.homeIsActive === false) return null;
    if (!normalizeText(row.homePasswordHash) || !normalizeText(row.homePasswordSalt)) {
      return null;
    }
    return row;
  };

  return {
    ensureUsersHomeAuthColumns,
    readBlockedUsers,
    writeBlockedUsers,
    shouldHydrateUserNameFromHome,
    findAnyUserByPhone,
    findHomeUserByPhone,
    findHomeUserById,
  };
};

module.exports = {
  createHomeDataService,
};
