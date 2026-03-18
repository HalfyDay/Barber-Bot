const createBookingUtilityService = ({
  normalizeText,
  canonicalizeKey,
  toWindows1251Mojibake = (value) => value,
  getTimeZoneParts,
  formatDateOnly,
  timeZone,
  statusActive,
  statusDone,
  statusCancelled,
  statusNoShow,
  supportedAppointmentStatuses,
  numericFields,
  booleanFields,
}) => {
  const statusCanonicalMap = new Map();
  const registerStatusAlias = (alias, canonical) => {
    [alias, toWindows1251Mojibake(alias)].forEach((candidate) => {
      const normalized = canonicalizeKey(candidate);
      if (normalized) {
        statusCanonicalMap.set(normalized, canonical);
      }
    });
  };

  [
    [
      statusActive,
      [
        "Активная",
        "Актив",
        "active",
        "Подтверждена",
        "Подтверждено",
        "В работе",
        "В обработке",
        "Новая запись",
        "pending",
        "wait",
        "waiting",
        "processing",
      ],
    ],
    [
      statusDone,
      ["Выполнена", "done", "complete", "completed", "finished", "Завершена", "Готово"],
    ],
    [
      statusCancelled,
      ["Отмена", "cancel", "canceled", "cancelled", "Отменено", "Отменена"],
    ],
    [
      statusNoShow,
      ["Неявка", "no show", "no-show", "noshow", "missed", "Не пришёл", "Не пришел"],
    ],
  ].forEach(([canonical, aliases]) => {
    aliases.forEach((alias) => registerStatusAlias(alias, canonical));
  });

  const normalizeAppointmentStatus = (status) => {
    const normalized = canonicalizeKey(status);
    if (!normalized) {
      return statusActive;
    }
    return statusCanonicalMap.get(normalized) || statusActive;
  };

  const resolveSupportedStatus = (status) => {
    const normalized = canonicalizeKey(status);
    if (!normalized) return null;
    return (
      supportedAppointmentStatuses.find(
        (candidate) => canonicalizeKey(candidate) === normalized,
      ) || null
    );
  };

  const toTelegramIdNumber = (value) => {
    const text = normalizeText(value);
    if (!text) return null;
    const parsed = Number(text);
    if (!Number.isFinite(parsed)) return null;
    return parsed;
  };

  const coercePayload = (tableName, payload) => {
    const numericList = numericFields[tableName] || [];
    const booleanList = booleanFields[tableName] || [];
    numericList.forEach((field) => {
      if (payload[field] === undefined) return;
      if (payload[field] === null || payload[field] === "") {
        payload[field] = null;
        return;
      }
      const parsed = Number(payload[field]);
      payload[field] = Number.isNaN(parsed) ? null : parsed;
    });
    booleanList.forEach((field) => {
      if (payload[field] === undefined) return;
      const value = payload[field];
      payload[field] =
        value === true || value === "true" || value === 1 || value === "1";
    });
    return payload;
  };

  const appointmentDomainErrorMap = {
    INVALID_BARBER: { status: 400, error: "Укажите барбера." },
    INVALID_DATE: { status: 400, error: "Некорректная дата." },
    INVALID_TIME_RANGE: { status: 400, error: "Некорректный интервал времени." },
    LIMIT_REACHED: { status: 409, error: "Достигнут лимит активных записей." },
    NO_SCHEDULE: { status: 409, error: "На выбранную дату у барбера нет расписания." },
    OUTSIDE_WORKING_HOURS: {
      status: 409,
      error: "Время выходит за рабочий диапазон барбера.",
    },
    LEAD_TIME: {
      status: 409,
      error: "Это время недоступно из-за ограничения minLeadHours.",
    },
    SLOT_TAKEN: { status: 409, error: "Слот уже занят. Выберите другое время." },
  };

  const respondWithAppointmentDomainError = (res, error) => {
    const code = normalizeText(error?.code || error?.message);
    if (!code) {
      return false;
    }
    const payload = appointmentDomainErrorMap[code];
    if (!payload) {
      return false;
    }
    res.status(payload.status).json({ error: payload.error });
    return true;
  };

  const buildDateWindow = (maxDaysAhead) => {
    const now = new Date();
    const zonedParts = getTimeZoneParts(now, timeZone);
    const startAnchor =
      zonedParts?.year && zonedParts?.month && zonedParts?.day
        ? new Date(
            Date.UTC(
              Number(zonedParts.year),
              Number(zonedParts.month) - 1,
              Number(zonedParts.day),
              12,
              0,
              0,
            ),
          )
        : new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Array.from({ length: maxDaysAhead })
      .map((_, offset) => {
        const current = new Date(startAnchor.getTime() + offset * 24 * 60 * 60 * 1000);
        const key = formatDateOnly(current);
        return { date: current, key };
      })
      .filter((entry) => entry.key);
  };

  return {
    normalizeAppointmentStatus,
    resolveSupportedStatus,
    toTelegramIdNumber,
    coercePayload,
    respondWithAppointmentDomainError,
    buildDateWindow,
  };
};

module.exports = {
  createBookingUtilityService,
};
