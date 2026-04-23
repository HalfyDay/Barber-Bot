const normalizeText = (value) => (value ?? "").toString().trim();
const normalizePhone = (phone) => {
  if (!phone) return "";
  const raw = phone.toString().replace(/[^\d+]/g, "");
  if (!raw) return "";
  const digits = raw.startsWith("+") ? raw.replace(/[^\d]/g, "") : raw;
  if (!digits) return "";
  if (digits.length === 10) {
    return `+7${digits}`;
  }
  if (digits.length === 11) {
    if (digits.startsWith("8")) return `+7${digits.slice(1)}`;
    if (digits.startsWith("7")) return `+${digits}`;
  }
  if (digits.startsWith("7")) return `+${digits}`;
  return digits.startsWith("+") ? digits : `+${digits}`;
};
const resolveHomeAssetPath = (value) => {
  const normalized = normalizeText(value);
  if (!normalized) return "";
  if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith("data:")) {
    return normalized;
  }
  const sanitized = normalized.replace(/\\/g, "/").replace(/^\.\/+/, "");
  if (sanitized.startsWith("/")) return sanitized;
  if (sanitized.startsWith("Image/")) return `/${sanitized}`;
  return `/Image/${sanitized}`;
};
const normalizeLogin = (value) => normalizeText(value);
const toLower = (value) => normalizeText(value).toLowerCase();
const canonicalizeKey = (value) => normalizeText(value).toLowerCase();
const isDatabaseCorruptionError = (error) =>
  /database disk image is malformed|sqlite_corrupt|database or disk is full|sqlitedatabasecorrupt|disk i\/o error|sqlite database error|connection terminated unexpectedly|the database system is starting up|too many clients already|could not connect to server|remaining connection slots are reserved|terminating connection due to administrator command|econnrefused/i.test(
    String(error?.message || error || ""),
  );
const buildDatabaseCorruptionMessage = () =>
  "РҐСЂР°РЅРёР»РёС‰Рµ РґР°РЅРЅС‹С… РЅРµРґРѕСЃС‚СѓРїРЅРѕ РёР»Рё РїРѕРІСЂРµР¶РґРµРЅРѕ. РџСЂРѕРІРµСЂСЊС‚Рµ РїРѕРґРєР»СЋС‡РµРЅРёРµ Рє PostgreSQL Рё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚Рµ Р±Р°Р·Сѓ РёР· СЂРµР·РµСЂРІРЅРѕР№ РєРѕРїРёРё.";
const {
  loadBotMenu,
  saveBotMenu,
  buildSafeImageFilename,
  getExistingImageFilename,
  decodeBase64Image,
  ensureUniqueImageName,
  listAvatarImages,
  listMenuImages,
} = createOwnerAssetHelpers({
  fs,
  path,
  BOT_MENU_PATH,
  IMAGE_DIR,
  MENU_IMAGE_DIR,
});
let barberAliases = new Map();
let barberAliasLookup = new Map();
const {
  loadBarberAliasesFromDisk,
  registerBarberAlias,
  getBarberAliases,
  getBarberAliasLookup,
  setBarberAliasLookup,
} = createBarberAliasService({
  fs,
  path,
  barberAliasFile: BARBER_ALIAS_FILE,
  canonicalizeKey,
});
loadBarberAliasesFromDisk();
barberAliases = getBarberAliases();
barberAliasLookup = getBarberAliasLookup();
const STAFF_READ_TABLES = new Set(["Appointments", "Schedules", "Services"]);
const STAFF_WRITE_TABLES = new Set(["Appointments"]);
const STAFF_DELETE_TABLES = new Set(["Appointments"]);
const {
  buildBarberLookup,
  resolveBarberIdFromLookup,
  getDefaultRevenueRange,
  splitServiceList,
  buildServiceLookup,
  getServicePriceForBarber,
  buildBarberNameLookup,
} = createCatalogLookupService({
  canonicalizeKey,
  normalizeText,
  getBarberAliases,
});
const {
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
} = createIdentityAccessService({
  normalizeText,
  canonicalizeKey,
  roleOwner: ROLE_OWNER,
  roleCreator: ROLE_CREATOR,
  roleStaff: ROLE_STAFF,
  resolveBarberIdFromLookup,
  getBarberAliasLookup,
});
const sanitizeCommissionRates = async () => {
  const positions = await prisma.positions.findMany({
    select: { id: true, commissionRate: true },
  });
  for (const position of positions) {
    const rawRate = Number(position?.commissionRate);
    const normalizedRate = Number.isFinite(rawRate)
      ? Math.max(0, Math.min(100, rawRate))
      : 0;
    if (rawRate === normalizedRate) continue;
    await prisma.positions.update({
      where: { id: position.id },
      data: { commissionRate: normalizedRate },
    });
  }
};
const isConfirmedStatus = (status) =>
  normalizeAppointmentStatus(status) === STATUS_DONE;
const isActiveStatus = (status) => normalizeAppointmentStatus(status) === STATUS_ACTIVE;
const isBlockedStatus = (status) => {
  const normalized = normalizeAppointmentStatus(status);
  return normalized === STATUS_CANCELLED || normalized === STATUS_NO_SHOW;
};
const isCompletedStatus = (status) => normalizeAppointmentStatus(status) === STATUS_DONE;
const appointmentService = createAppointmentService({
  prisma,
  timeZone: APP_TIMEZONE,
  randomUUID,
  normalizeText,
  normalizePhone,
  isActiveStatus,
});
const {
  parseTimeRangeParts,
  getTimeZoneParts,
  parseZonedDateTime,
  parseDateTime,
  parseAppointmentEndDateTime,
  formatDateOnly,
  parseDateFilter,
} = createDateTimeService({
  normalizeText,
  timeZone: APP_TIMEZONE,
});
const {
  normalizeAppointmentStatus,
  resolveSupportedStatus,
  toTelegramIdNumber,
  coercePayload,
  respondWithAppointmentDomainError,
  buildDateWindow,
} = createBookingUtilityService({
  normalizeText,
  canonicalizeKey,
  toWindows1251Mojibake,
  getTimeZoneParts,
  formatDateOnly,
  timeZone: APP_TIMEZONE,
  statusActive: STATUS_ACTIVE,
  statusDone: STATUS_DONE,
  statusCancelled: STATUS_CANCELLED,
  statusNoShow: STATUS_NO_SHOW,
  supportedAppointmentStatuses: SUPPORTED_APPOINTMENT_STATUSES,
  numericFields,
  booleanFields,
});
const {
  mapAppointment,
  getWarningCutoffDate,
  countAppointmentWarnings,
  countBlockedClientsFromAppointments,
  splitActiveAppointments,
} = createAppointmentPresentationService({
  parseDateTime,
  parseAppointmentEndDateTime,
  normalizeAppointmentStatus,
  isConfirmedStatus,
  isActiveStatus,
  isBlockedStatus,
  normalizePhone,
  normalizeText,
  warningLookbackDays: WARNING_LOOKBACK_DAYS,
  warningBlockThreshold: WARNING_BLOCK_THRESHOLD,
});
const BLOCKLIST_FILE = path.join(__dirname, "data", "blocked-users.json");
const HOME_AUTH_COLUMNS = [
  { name: "LastNameChanged", ddl: 'ALTER TABLE "Users" ADD COLUMN "LastNameChanged" TEXT' },
  {
    name: "LastHaircutReminderSent",
    ddl: 'ALTER TABLE "Users" ADD COLUMN "LastHaircutReminderSent" TEXT',
  },
  { name: "HomePasswordHash", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePasswordHash" TEXT' },
  { name: "HomePasswordSalt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePasswordSalt" TEXT' },
  { name: "HomeIsActive", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeIsActive" BOOLEAN NOT NULL DEFAULT true' },
  { name: "HomeCreatedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeCreatedAt" TEXT' },
  { name: "HomeUpdatedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeUpdatedAt" TEXT' },
  { name: "HomeLastLoginAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeLastLoginAt" TEXT' },
  { name: "HomePhoneChangedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomePhoneChangedAt" TEXT' },
  { name: "HomeTelegramChangedAt", ddl: 'ALTER TABLE "Users" ADD COLUMN "HomeTelegramChangedAt" TEXT' },
];
const TELEGRAM_AUTH_REQUESTS_TABLE = "TelegramAuthRequests";
const TELEGRAM_AUTH_STATUS_PENDING = "pending";
const TELEGRAM_AUTH_STATUS_COMPLETED = "completed";
const TELEGRAM_AUTH_STATUS_FAILED = "failed";
const TELEGRAM_AUTH_STATUS_EXPIRED = "expired";
const TELEGRAM_AUTH_FLOW_LOGIN = "login";
const TELEGRAM_AUTH_FLOW_PROFILE_LINK = "profile_link";
const HOME_USER_SELECT = {
  id: true,
  Name: true,
  Phone: true,
  homePasswordHash: true,
  homePasswordSalt: true,
  homeIsActive: true,
  homeCreatedAt: true,
  homeUpdatedAt: true,
  homeLastLoginAt: true,
};
const {
  ensureTelegramAuthRequestsTable,
  markExpiredTelegramAuthRequests,
  createTelegramAuthRequest,
  getTelegramAuthRequestById,
  getTelegramAuthRequestByCode,
  updateTelegramAuthRequestById,
  deleteTelegramAuthRequestById,
  ensureUsersHomeAuthColumns,
  readBlockedUsers,
  writeBlockedUsers,
  listUsersWithHaircutReminderState,
  markUserHaircutReminderSent,
  shouldHydrateUserNameFromHome,
  findHomeUserByTelegramId,
  findAnyUserByTelegramId,
  findAnyUserByPhone,
  findHomeUserByPhone,
  findHomeUserById,
} = createHomeDataService({
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
  randomBytes,
  HOME_TELEGRAM_AUTH_TTL_MS,
  TELEGRAM_AUTH_REQUESTS_TABLE,
  TELEGRAM_AUTH_FLOW_LOGIN,
  TELEGRAM_AUTH_STATUS_PENDING,
  TELEGRAM_AUTH_STATUS_COMPLETED,
  TELEGRAM_AUTH_STATUS_FAILED,
  TELEGRAM_AUTH_STATUS_EXPIRED,
});
const { migrateLegacyHomeUsersToUsers } = createLegacyHomeUsersMigrationService({
  LEGACY_HOME_USERS_DB_PATH,
  prisma,
  fs,
  normalizeText,
  normalizePhone,
  canonicalizeKey,
  HOME_USER_SELECT,
});
const legacyCrudGuard = createLegacyCrudGuard({ normalizeText });
const respondWithLegacyCrudBlock = (res, tableName) => {

