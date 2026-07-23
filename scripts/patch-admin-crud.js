const fs = require('fs');
let s = fs.readFileSync('routes/adminCrudRoutes.js', 'utf8');

// Reset routes/adminCrudRoutes.js to git state first if we want, or we can just run git checkout then apply.
// Actually, let's just restore git state and write a fresh patch script to be safe.
// To avoid checkout issues, let's run git checkout routes/adminCrudRoutes.js via node or shell.
console.log('Restoring adminCrudRoutes.js from git...');
require('child_process').execSync('git checkout routes/adminCrudRoutes.js');

s = fs.readFileSync('routes/adminCrudRoutes.js', 'utf8');

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
  if ('phone' in record) { result.Phone = record.phone; delete record.phone; }
  if ('barber' in record) { result.Barber = record.barber; delete record.barber; }
  if ('date' in record) { result.Date = record.date; delete record.date; }
  if ('time' in record) { result.Time = record.time; delete record.time; }
  if ('status' in record) { result.Status = record.status; delete record.status; }
  if ('services' in record) { result.Services = record.services; delete record.services; }
  if ('userId' in record) { result.UserID = record.userId; delete record.userId; }
  if ('comment' in record) { result.Comment = record.comment; delete record.comment; }
  if ('coverBs' in record) { result.CoverBs = record.coverBs; delete record.coverBs; }
  if ('discountRub' in record) { result.DiscountRub = record.discountRub; delete record.discountRub; }
  if ('reminder2hClientSent' in record) { result.Reminder2hClientSent = record.reminder2hClientSent; delete record.reminder2hClientSent; }
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
  '    const payload = coercePayload("Appointments", { ...req.body });',
  '    const rawPayload = coercePayload("Appointments", { ...req.body });\n    const payload = mapFrontendAppointmentToPrisma(rawPayload);'
);

s = s.replace(
  '    if (isStaffIdentity(req.identity)) {\n      const staffBarber = getIdentityBarberName(req.identity);\n      if (!staffBarber) {\n        return res.status(400).json({\n          error: "В профиле сотрудника не указано имя барбера.",\n        });\n      }\n      payload.Barber = staffBarber;\n    }\n    payload.Status = normalizeAppointmentStatus(payload.Status);\n    if (!normalizeText(payload.Barber)) {\n      return res.status(400).json({ error: "Для записи нужно указать барбера." });\n    }\n    if (payload.UserID !== undefined) {\n      payload.UserID = payload.UserID === null || payload.UserID === "" ? null : String(payload.UserID);\n    }',
  '    if (isStaffIdentity(req.identity)) {\n      const staffBarber = getIdentityBarberName(req.identity);\n      if (!staffBarber) {\n        return res.status(400).json({\n          error: "В профиле сотрудника не указано имя барбера.",\n        });\n      }\n      payload.barber = staffBarber;\n    }\n    payload.status = normalizeAppointmentStatus(payload.status);\n    if (!normalizeText(payload.barber)) {\n      return res.status(400).json({ error: "Для записи нужно указать барбера." });\n    }\n    if (payload.userId !== undefined) {\n      payload.userId = payload.userId === null || payload.userId === "" ? null : String(payload.userId);\n    }'
);

s = s.replace(
  '        await appointmentService.validateAppointmentRecord(payload, {',
  '        await appointmentService.validateAppointmentRecord(rawPayload, {'
);

s = s.replace(
  '      const record = await prisma.appointments.create({\n        data: { id: randomUUID(), ...payload },\n      });\n      res.status(201).json(record);\n      requestRealtimePush(true);\n      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(record);\n      if (ownerUserId && normalizeText(record.Status) === "Активная") {\n        await homePushService?.sendNotificationToUser?.(\n          ownerUserId,\n          {\n            title: "Запись создана",\n            body: `${normalizeText(record.Date)} · ${normalizeText(record.Time)}`',
  '      const record = await prisma.appointments.create({\n        data: { id: randomUUID(), ...payload },\n      });\n      const recordFrontend = mapPrismaAppointmentToFrontend(record);\n      res.status(201).json(recordFrontend);\n      requestRealtimePush(true);\n      const ownerUserId = await homePushService?.resolveUserIdForAppointment?.(recordFrontend);\n      if (ownerUserId && normalizeText(recordFrontend.Status) === "Активная") {\n        await homePushService?.sendNotificationToUser?.(\n          ownerUserId,\n          {\n            title: "Запись создана",\n            body: `${normalizeText(recordFrontend.Date)} · ${normalizeText(recordFrontend.Time)}`'
);

s = s.replace(
  '            tag: `brothershop-admin-booking-create-${normalizeText(record.id)}`,',
  '            tag: `brothershop-admin-booking-create-${normalizeText(recordFrontend.id)}`,'
);

// 3. PUT /api/appointments/:id
s = s.replace(
  '    const data = coercePayload("Appointments", { ...req.body });',
  '    const rawData = coercePayload("Appointments", { ...req.body });\n    const data = mapFrontendAppointmentToPrisma(rawData);'
);

s = s.replace(
  '    if (data.UserID !== undefined) {\n      data.UserID = data.UserID === null || data.UserID === "" ? null : String(data.UserID);\n    }\n    if (data.Status !== undefined) {\n      data.Status = normalizeAppointmentStatus(data.Status);\n    }\n    try {\n      const existing = await prisma.appointments.findUnique({ where: { id } });',
  '    if (data.userId !== undefined) {\n      data.userId = data.userId === null || data.userId === "" ? null : String(data.userId);\n    }\n    if (data.status !== undefined) {\n      data.status = normalizeAppointmentStatus(data.status);\n    }\n    try {\n      let existing = await prisma.appointments.findUnique({ where: { id } });\n      if (existing) existing = mapPrismaAppointmentToFrontend(existing);'
);

s = s.replace(
  '        if (!matchesIdentityBarber(existing.Barber, req.identity)) {',
  '        if (!matchesIdentityBarber(existing.Barber, req.identity)) {\n          // wait, existing is already mapped to frontend, so existing.Barber works!'
);

s = s.replace(
  '        data.Barber = staffBarberName;',
  '        data.barber = staffBarberName;'
);

s = s.replace(
  '      const nextAppointment = { ...existing, ...data, id };',
  '      const nextAppointment = { ...existing, ...rawData, id };'
);

s = s.replace(
  '      const updated = await prisma.appointments.update({ where: { id }, data });',
  '      const prismaData = mapFrontendAppointmentToPrisma(data);\n      let updated = await prisma.appointments.update({ where: { id }, data: prismaData });\n      updated = mapPrismaAppointmentToFrontend(updated);'
);

fs.writeFileSync('routes/adminCrudRoutes.js', s, 'utf8');
console.log('adminCrudRoutes.js patched cleanly');
