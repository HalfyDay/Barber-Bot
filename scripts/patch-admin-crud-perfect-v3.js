const fs = require('fs');

console.log('Restoring routes/adminCrudRoutes.js from git...');
require('child_process').execSync('git checkout routes/adminCrudRoutes.js');

let s = fs.readFileSync('routes/adminCrudRoutes.js', 'utf8');

const frontendToPrisma = `
function mapFrontendAppointmentToPrisma(payload) {
  const result = { ...payload };
  if ('CustomerName' in payload) { result.customerName = payload.CustomerName; delete result.CustomerName; }
  if ('Phone' in payload) { result.phone = payload.Phone; delete result.Phone; }
  if ('Barber' in payload) { result.barber = payload.Barber; delete result.Barber; }
  if ('Date' in payload) { result.date = payload.Date; delete result.Date; }
  if ('Time' in payload) { result.time = payload.Time; delete result.Time; }
  if ('Status' in payload) { result.status = payload.Status; delete result.Status; }
  if ('Services' in payload) { result.services = payload.Services; delete result.Services; }
  if ('UserID' in payload) { result.userId = payload.UserID; delete result.UserID; }
  if ('Comment' in payload) { result.comment = payload.Comment; delete result.Comment; }
  if ('CoverBs' in payload) { result.coverBs = payload.CoverBs; delete result.CoverBs; }
  if ('DiscountRub' in payload) { result.discountRub = payload.DiscountRub; delete result.DiscountRub; }
  if ('Reminder2hClientSent' in payload) { result.reminder2hClientSent = payload.Reminder2hClientSent; delete result.Reminder2hClientSent; }
  if ('Reminder2hBarberSent' in payload) { result.reminder2hBarberSent = payload.Reminder2hBarberSent; delete result.Reminder2hBarberSent; }
  return result;
}

function mapPrismaAppointmentToFrontend(record) {
  if (!record) return record;
  const result = { ...record };
  if ('customerName' in record) { result.CustomerName = record.customerName; delete result.customerName; }
  if ('phone' in record) { result.Phone = record.phone; delete result.phone; }
  if ('barber' in record) { result.Barber = record.barber; delete result.barber; }
  if ('date' in record) { result.Date = record.date; delete result.date; }
  if ('time' in record) { result.Time = record.time; delete result.time; }
  if ('status' in record) { result.Status = record.status; delete result.status; }
  if ('services' in record) { result.Services = record.services; delete result.services; }
  if ('userId' in record) { result.UserID = record.userId; delete result.userId; }
  if ('comment' in record) { result.Comment = record.comment; delete result.comment; }
  if ('coverBs' in record) { result.CoverBs = record.coverBs; delete result.coverBs; }
  if ('discountRub' in record) { result.DiscountRub = record.discountRub; delete result.discountRub; }
  if ('reminder2hClientSent' in record) { result.Reminder2hClientSent = record.reminder2hClientSent; delete result.reminder2hClientSent; }
  if ('reminder2hBarberSent' in record) { result.Reminder2hBarberSent = record.reminder2hBarberSent; delete record.reminder2hBarberSent; }
  return result;
}
`;

if (!s.includes('mapFrontendAppointmentToPrisma')) {
  s = s.replace('const registerAdminCrudRoutes =', frontendToPrisma + '\nconst registerAdminCrudRoutes =');
}

// 1. GET /api/appointments
s = s.replace(
  '      if (modelName === "appointments") {\n        const records = await prisma[modelName].findMany(queryArgs);\n        if (req.query.csv) {\n          return res.send(appointmentsToCSV(records));\n        }\n        return res.json(filterAppointmentsForIdentity(records, req.identity).map(mapAppointment));\n      }',
  '      if (modelName === "appointments") {\n        let records = await prisma[modelName].findMany(queryArgs);\n        records = records.map(mapPrismaAppointmentToFrontend);\n        if (req.query.csv) {\n          return res.send(appointmentsToCSV(records));\n        }\n        return res.json(filterAppointmentsForIdentity(records, req.identity).map(mapAppointment));\n      }'
);

// 2. POST /api/appointments
s = s.replace(
  '    const payload = coercePayload("Appointments", { ...req.body });\n    if (isStaffIdentity(req.identity)) {\n      const staffBarber = getIdentityBarberName(req.identity);\n      if (!staffBarber) {\n        return res.status(400).json({\n          error: "В профиле сотрудника не указано имя барбера.",\n        });\n      }\n      payload.Barber = staffBarber;\n    }\n    payload.Status = normalizeAppointmentStatus(payload.Status);\n    if (!normalizeText(payload.Barber)) {\n      return res.status(400).json({ error: "Для записи нужно указать барбера." });\n    }\n    if (payload.UserID !== undefined) {\n      payload.UserID = payload.UserID === null || payload.UserID === "" ? null : String(payload.UserID);\n    }\n    try {\n      try {\n        await appointmentService.validateAppointmentRecord(payload, {\n          allowMissingSchedule: true,\n          allowOutsideWorkingHours: true,\n          allowBusySlot: true,\n        });\n      } catch (error) {\n        if (respondWithAppointmentDomainError(res, error)) {\n          return;\n        }\n        throw error;\n      }\n      const record = await prisma.appointments.create({\n        data: { id: randomUUID(), ...payload },\n      });\n      res.status(201).json(record);',
  '    const rawPayload = coercePayload("Appointments", { ...req.body });\n    if (isStaffIdentity(req.identity)) {\n      const staffBarber = getIdentityBarberName(req.identity);\n      if (!staffBarber) {\n        return res.status(400).json({\n          error: "В профиле сотрудника не указано имя барбера.",\n        });\n      }\n      rawPayload.Barber = staffBarber;\n    }\n    rawPayload.Status = normalizeAppointmentStatus(rawPayload.Status);\n    if (!normalizeText(rawPayload.Barber)) {\n      return res.status(400).json({ error: "Для записи нужно указать барбера." });\n    }\n    if (rawPayload.UserID !== undefined) {\n      rawPayload.UserID = rawPayload.UserID === null || rawPayload.UserID === "" ? null : String(rawPayload.UserID);\n    }\n    try {\n      try {\n        await appointmentService.validateAppointmentRecord(rawPayload, {\n          allowMissingSchedule: true,\n          allowOutsideWorkingHours: true,\n          allowBusySlot: true,\n        });\n      } catch (error) {\n        if (respondWithAppointmentDomainError(res, error)) {\n          return;\n        }\n        throw error;\n      }\n      const payload = mapFrontendAppointmentToPrisma(rawPayload);\n      const record = await prisma.appointments.create({\n        data: { id: randomUUID(), ...payload },\n      });\n      const recordFrontend = mapPrismaAppointmentToFrontend(record);\n      res.status(201).json(recordFrontend);'
);

s = s.replace(
  '      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(record);\n      if (ownerUserId && normalizeText(record.Status) === "Активная") {\n        await homePushService?.sendNotificationToUser?.(\n          ownerUserId,\n          {\n            title: "Запись создана",\n            body: `${normalizeText(record.Date)} · ${normalizeText(record.Time)}`,\n            tag: `brothershop-admin-booking-create-${normalizeText(record.id)}`,',
  '      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(recordFrontend);\n      if (ownerUserId && normalizeText(recordFrontend.Status) === "Активная") {\n        await homePushService?.sendNotificationToUser?.(\n          ownerUserId,\n          {\n            title: "Запись создана",\n            body: `${normalizeText(recordFrontend.Date)} · ${normalizeText(recordFrontend.Time)}`,\n            tag: `brothershop-admin-booking-create-${normalizeText(recordFrontend.id)}`,'
);

// 3. PUT /api/appointments/:id
s = s.replace(
  '    const data = coercePayload("Appointments", { ...req.body });\n    if (data.UserID !== undefined) {\n      data.UserID = data.UserID === null || data.UserID === "" ? null : String(data.UserID);\n    }\n    if (data.Status !== undefined) {\n      data.Status = normalizeAppointmentStatus(data.Status);\n    }\n    try {\n      const existing = await prisma.appointments.findUnique({ where: { id } });\n      if (!existing) {\n        return res.status(404).json({ error: "Запись не найдена." });\n      }\n      if (isStaff) {\n        const staffBarberName = getIdentityBarberName(req.identity);\n        if (!staffBarberName) {\n          return res.status(400).json({\n            error: "В профиле сотрудника не указано имя барбера.",\n          });\n        }\n        if (!matchesIdentityBarber(existing.Barber, req.identity)) {\n          return res.status(403).json({\n            error: "Недостаточно прав для изменения этой записи.",\n          });\n        }\n        data.Barber = staffBarberName;\n      }\n      const nextAppointment = { ...existing, ...data, id };\n      try {\n        await appointmentService.validateAppointmentRecord(nextAppointment, {\n          excludeAppointmentId: id,\n          allowMissingSchedule: true,\n          allowOutsideWorkingHours: true,\n          allowBusySlot: true,\n        });\n      } catch (error) {\n        if (respondWithAppointmentDomainError(res, error)) {\n          return;\n        }\n        throw error;\n      }\n      const updated = await prisma.appointments.update({ where: { id }, data });\n      res.json(updated);',
  '    const rawData = coercePayload("Appointments", { ...req.body });\n    if (rawData.UserID !== undefined) {\n      rawData.UserID = rawData.UserID === null || rawData.UserID === "" ? null : String(rawData.UserID);\n    }\n    if (rawData.Status !== undefined) {\n      rawData.Status = normalizeAppointmentStatus(rawData.Status);\n    }\n    try {\n      let existing = await prisma.appointments.findUnique({ where: { id } });\n      if (!existing) {\n        return res.status(404).json({ error: "Запись не найдена." });\n      }\n      existing = mapPrismaAppointmentToFrontend(existing);\n      if (isStaff) {\n        const staffBarberName = getIdentityBarberName(req.identity);\n        if (!staffBarberName) {\n          return res.status(400).json({\n            error: "В профиле сотрудника не указано имя барбера.",\n          });\n        }\n        if (!matchesIdentityBarber(existing.Barber, req.identity)) {\n          return res.status(403).json({\n            error: "Недостаточно прав для изменения этой записи.",\n          });\n        }\n        rawData.Barber = staffBarberName;\n      }\n      const nextAppointment = { ...existing, ...rawData, id };\n      try {\n        await appointmentService.validateAppointmentRecord(nextAppointment, {\n          excludeAppointmentId: id,\n          allowMissingSchedule: true,\n          allowOutsideWorkingHours: true,\n          allowBusySlot: true,\n        });\n      } catch (error) {\n        if (respondWithAppointmentDomainError(res, error)) {\n          return;\n        }\n        throw error;\n      }\n      const prismaData = mapFrontendAppointmentToPrisma(rawData);\n      let updated = await prisma.appointments.update({ where: { id }, data: prismaData });\n      updated = mapPrismaAppointmentToFrontend(updated);\n      res.json(updated);'
);

// 4. Schedules casing fixes (since we restored routes/adminCrudRoutes.js from git, we must reapply these)
s = s.replace('where: { Date: { lt: staleKey } },', 'where: { date: { lt: staleKey } },');
s = s.replace('where: { Date: { gte: todayKey } },', 'where: { date: { gte: todayKey } },');
s = s.replace('if (schedule.Barber && schedule.Date)', 'if (schedule.barber && schedule.date)');
s = s.replace('acc.set(`${schedule.Barber}-${schedule.Date}`, schedule);', 'acc.set(`${schedule.barber}-${schedule.date}`, schedule);');
s = s.replace('new Set(allSchedules.map((item) => item.Barber).filter(Boolean)),', 'new Set(allSchedules.map((item) => item.barber).filter(Boolean)),');
s = s.replace('Week: existing?.Week || "",', 'Week: existing?.week || "",');

s = s.replace('where: { Barber, Date: date },', 'where: { barber: Barber, date: date },');
s = s.replace('data: { Week: week },', 'data: { week: week },');
s = s.replace('Barber,\n              Week: week,\n              DayOfWeek: data.DayOfWeek,\n              Date: date,', 'barber: Barber,\n              week: week,\n              dayOfWeek: data.DayOfWeek,\n              date: date,');

fs.writeFileSync('routes/adminCrudRoutes.js', s, 'utf8');
console.log('Finished applying clean mapped patches to adminCrudRoutes.js');
