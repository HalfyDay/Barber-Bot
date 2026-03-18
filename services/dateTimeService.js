const createDateTimeService = ({
  normalizeText,
  timeZone,
}) => {
  const sanitizeTimeToken = (value) => {
    const match = normalizeText(value).match(/(\d{1,2}):(\d{2})/);
    if (!match) return "";
    return `${match[1].padStart(2, "0")}:${match[2]}`;
  };

  const parseTimeRangeParts = (value) => {
    const safe = normalizeText(value).replace(/[\u2014\u2013]/g, "-");
    if (!safe) return { start: "", end: "" };
    const [startRaw, endRaw = ""] = safe.split("-").map((part) => sanitizeTimeToken(part));
    return { start: startRaw, end: endRaw };
  };

  const timeZoneFormatterCache = new Map();
  const getTimeZoneFormatter = (zone = timeZone) => {
    const cacheKey = zone || "default";
    if (!timeZoneFormatterCache.has(cacheKey)) {
      timeZoneFormatterCache.set(
        cacheKey,
        new Intl.DateTimeFormat("en-CA", {
          timeZone: zone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }
    return timeZoneFormatterCache.get(cacheKey);
  };

  const getTimeZoneParts = (dateObj, zone = timeZone) => {
    const formatter = getTimeZoneFormatter(zone);
    return formatter.formatToParts(dateObj).reduce((acc, part) => {
      if (part.type !== "literal") {
        acc[part.type] = part.value;
      }
      return acc;
    }, {});
  };

  const getTimeZoneOffsetMs = (dateObj, zone = timeZone) => {
    const parts = getTimeZoneParts(dateObj, zone);
    const asUtc = Date.UTC(
      Number(parts.year || 0),
      Number(parts.month || 1) - 1,
      Number(parts.day || 1),
      Number(parts.hour || 0),
      Number(parts.minute || 0),
      Number(parts.second || 0),
    );
    return asUtc - dateObj.getTime();
  };

  const parseZonedDateTime = (dateStr, timeToken, zone = timeZone) => {
    const safeDate = normalizeText(dateStr).slice(0, 10);
    const safeTime = sanitizeTimeToken(timeToken) || "00:00";
    const dateMatch = safeDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const timeMatch = safeTime.match(/^(\d{2}):(\d{2})$/);
    if (!dateMatch || !timeMatch) return null;
    const year = Number(dateMatch[1]);
    const month = Number(dateMatch[2]);
    const day = Number(dateMatch[3]);
    const hours = Number(timeMatch[1]);
    const minutes = Number(timeMatch[2]);
    const utcMillis = Date.UTC(year, month - 1, day, hours, minutes, 0);
    let candidate = new Date(utcMillis);
    try {
      let offsetMs = getTimeZoneOffsetMs(candidate, zone);
      candidate = new Date(utcMillis - offsetMs);
      const adjustedOffsetMs = getTimeZoneOffsetMs(candidate, zone);
      if (adjustedOffsetMs !== offsetMs) {
        candidate = new Date(utcMillis - adjustedOffsetMs);
      }
      return Number.isNaN(candidate.getTime()) ? null : candidate;
    } catch {
      const fallback = new Date(`${safeDate}T${safeTime}:00`);
      return Number.isNaN(fallback.getTime()) ? null : fallback;
    }
  };

  const parseDateTime = (dateStr, timeRange) => {
    if (!dateStr) return null;
    const timeStart = parseTimeRangeParts(timeRange).start || "00:00";
    return parseZonedDateTime(dateStr, timeStart);
  };

  const parseAppointmentEndDateTime = (dateStr, timeRange) => {
    const startDate = parseDateTime(dateStr, timeRange);
    if (!startDate) return null;
    const { start, end } = parseTimeRangeParts(timeRange);
    const endToken = end || start;
    if (!endToken) return startDate;
    let parsed = parseZonedDateTime(dateStr, endToken);
    if (!parsed) return startDate;
    if (end && start && end <= start) {
      parsed = new Date(parsed.getTime() + 24 * 60 * 60 * 1000);
    }
    return parsed.getTime() >= startDate.getTime() ? parsed : startDate;
  };

  const formatDateOnly = (dateObj) => {
    if (!(dateObj instanceof Date)) return "";
    try {
      const parts = getTimeZoneParts(dateObj, timeZone);
      if (parts.year && parts.month && parts.day) {
        return `${parts.year}-${parts.month}-${parts.day}`;
      }
    } catch {}
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const parseDateFilter = (value, fallbackDate) => {
    const normalized = normalizeText(value);
    if (!normalized) return new Date(fallbackDate);
    const parsed = new Date(`${normalized}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return new Date(fallbackDate);
    return parsed;
  };

  return {
    parseTimeRangeParts,
    getTimeZoneParts,
    parseZonedDateTime,
    parseDateTime,
    parseAppointmentEndDateTime,
    formatDateOnly,
    parseDateFilter,
  };
};

module.exports = {
  createDateTimeService,
};
