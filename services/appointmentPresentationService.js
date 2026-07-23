const createAppointmentPresentationService = ({
  parseDateTime,
  parseAppointmentEndDateTime,
  normalizeAppointmentStatus,
  isConfirmedStatus,
  isActiveStatus,
  isBlockedStatus,
  normalizePhone,
  normalizeText,
  warningLookbackDays,
  warningBlockThreshold,
}) => {
  const mapAppointment = (record) => {
    if (!record) return record;
    const DateVal = record.date ?? record.Date;
    const TimeVal = record.time ?? record.Time;
    const StatusVal = record.status ?? record.Status;
    const PhoneVal = record.phone ?? record.Phone;
    const BarberVal = record.barber ?? record.Barber;
    const CustomerNameVal = record.customerName ?? record.CustomerName;
    const ServicesVal = record.services ?? record.Services;
    const UserIDVal = record.userId ?? record.UserID;
    const CommentVal = record.comment ?? record.Comment;
    const CoverBsVal = record.coverBs ?? record.CoverBs;
    const DiscountRubVal = record.discountRub ?? record.DiscountRub;
    const Reminder2hClientSentVal = record.reminder2hClientSent ?? record.Reminder2hClientSent;
    const Reminder2hBarberSentVal = record.reminder2hBarberSent ?? record.Reminder2hBarberSent;

    const startDate = parseDateTime(DateVal, TimeVal);
    const endDate = parseAppointmentEndDateTime(DateVal, TimeVal);
    const canonicalStatus = normalizeAppointmentStatus(StatusVal);
    return {
      ...record,
      id: record.id,
      CustomerName: CustomerNameVal,
      Phone: PhoneVal,
      Barber: BarberVal,
      Date: DateVal,
      Time: TimeVal,
      Services: ServicesVal,
      UserID: UserIDVal,
      Comment: CommentVal,
      CoverBs: CoverBsVal,
      DiscountRub: DiscountRubVal,
      Reminder2hClientSent: Reminder2hClientSentVal,
      Reminder2hBarberSent: Reminder2hBarberSentVal,
      cityId: record.cityId ?? record.cityId,
      Status: canonicalStatus,
      startDateTime: startDate ? startDate.toISOString() : null,
      endDateTime: endDate ? endDate.toISOString() : null,
      sortKey: startDate ? startDate.getTime() : 0,
      isConfirmed: isConfirmedStatus(canonicalStatus),
      isActive: isActiveStatus(canonicalStatus),
      isBlocked: isBlockedStatus(canonicalStatus),
      normalizedPhone: normalizePhone(PhoneVal),
    };
  };

  const getWarningCutoffDate = () => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - warningLookbackDays);
    return cutoff;
  };

  const getAppointmentDate = (appt) => {
    if (appt?.startDateTime) {
      const parsed = new Date(appt.startDateTime);
      if (!Number.isNaN(parsed.getTime())) return parsed;
    }
    if (appt?.Date) {
      const parsed = new Date(`${appt.Date}T00:00:00`);
      if (!Number.isNaN(parsed.getTime())) return parsed;
    }
    return null;
  };

  const countAppointmentWarnings = (appointments = [], cutoff = null) => {
    const threshold = cutoff || getWarningCutoffDate();
    return appointments.reduce((total, appt) => {
      if (!appt?.isBlocked) return total;
      const apptDate = getAppointmentDate(appt);
      if (apptDate && apptDate < threshold) return total;
      return total + 1;
    }, 0);
  };

  const countBlockedClientsFromAppointments = (
    appointments = [],
    manualBlockedSet = new Set(),
  ) => {
    const cutoff = getWarningCutoffDate();
    const warningTotals = new Map();
    appointments.forEach((appt) => {
      if (!appt) return;
      const key =
        appt.UserID ||
        appt.normalizedPhone ||
        normalizeText(appt.CustomerName || "") ||
        appt.id;
      if (!key) return;
      if (!appt.isBlocked) return;
      const apptDate = getAppointmentDate(appt);
      if (apptDate && apptDate < cutoff) return;
      const prev = warningTotals.get(key) || 0;
      warningTotals.set(key, prev + 1);
    });
    manualBlockedSet.forEach((key) => {
      if (!key) return;
      warningTotals.set(String(key), warningBlockThreshold);
    });
    let blocked = 0;
    warningTotals.forEach((count) => {
      if (count >= warningBlockThreshold) blocked += 1;
    });
    return blocked;
  };

  const splitActiveAppointments = (appointments = [], now = new Date()) => {
    const upcoming = [];
    const overdue = [];
    appointments.forEach((appt) => {
      if (!appt?.isActive) return;
      const endDate = appt?.endDateTime ? new Date(appt.endDateTime) : null;
      if (endDate && !Number.isNaN(endDate.getTime()) && endDate.getTime() < now.getTime()) {
        overdue.push(appt);
        return;
      }
      upcoming.push(appt);
    });
    upcoming.sort((a, b) => a.sortKey - b.sortKey);
    overdue.sort((a, b) => b.sortKey - a.sortKey);
    return {
      active: [...upcoming, ...overdue],
      upcoming,
      overdue,
    };
  };

  return {
    mapAppointment,
    getWarningCutoffDate,
    countAppointmentWarnings,
    countBlockedClientsFromAppointments,
    splitActiveAppointments,
  };
};

module.exports = {
  createAppointmentPresentationService,
};
