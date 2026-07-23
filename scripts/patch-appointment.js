const fs = require('fs');
let s = fs.readFileSync('services/appointmentService.js', 'utf8');

const replacements = [
  // getWorkingHoursForBarberDate
  ['where: { Barber: barberName, Date: dateKey },', 'where: { barber: barberName, date: dateKey },'],
  ['select: { Week: true },', 'select: { week: true },'],
  ['return parseWorkingRange(schedule?.Week);', 'return parseWorkingRange(schedule?.week);'],

  // getBusyIntervalsForBarberDate
  ['const where = { Barber: barberName, Date: dateKey };', 'const where = { barber: barberName, date: dateKey };'],
  ['select: { Time: true, Status: true },', 'select: { time: true, status: true },'],
  ['if (!isSlotBlockingStatus(row?.Status)) return acc;', 'if (!isSlotBlockingStatus(row?.status)) return acc;'],
  ['const parsed = parseWorkingRange(row?.Time);', 'const parsed = parseWorkingRange(row?.time);'],

  // countHomeUserActiveAppointments
  ['select: { Status: true },', 'select: { status: true },'],
  ['(isActiveStatus(row?.Status)', '(isActiveStatus(row?.status)'],

  // validateActiveAppointment and validateAppointmentRecord
  ['normalizeText(appointment?.Barber);', 'normalizeText(appointment?.barber ?? appointment?.Barber);'],
  ['normalizeText(appointment?.Date);', 'normalizeText(appointment?.date ?? appointment?.Date);'],
  ['normalizeText(appointment?.Time);', 'normalizeText(appointment?.time ?? appointment?.Time);'],
  ['!isActiveStatus(appointment?.Status)', '!isActiveStatus(appointment?.status ?? appointment?.Status)'],

  // createHomeAppointment
  ['UserID: homeUser.id,', 'userId: homeUser.id,'],
  ['CustomerName: homeUser.displayName || homeUser.phone || "Клиент",', 'customerName: homeUser.displayName || homeUser.phone || "Клиент",'],
  ['Phone: homeUser.phone || null,', 'phone: homeUser.phone || null,'],
  ['Barber: barber.name,', 'barber: barber.name,'],
  ['Date: dateKey,', 'date: dateKey,'],
  ['Time: `${startLabel} - ${endLabel}`,', 'time: `${startLabel} - ${endLabel}`,'],
  ['Status: activeStatus,', 'status: activeStatus,'],
  ['Services: selectedServices.map((service) => service.name).join(", "),', 'services: selectedServices.map((service) => service.name).join(", "),'],
  ['Reminder2hClientSent: false,', 'reminder2hClientSent: false,'],
  ['Reminder2hBarberSent: false,', 'reminder2hBarberSent: false,'],
  ['Comment: comment || null,', 'comment: comment || null,'],
  ['CoverBs: coverBs || null,', 'coverBs: coverBs || null,'],
  ['DiscountRub: discountRub || null,', 'discountRub: discountRub || null,'],
];

for (const [search, replace] of replacements) {
  if (s.indexOf(search) === -1) {
    console.error(`WARNING: Could not find "${search}" in appointmentService.js`);
  } else {
    s = s.replace(search, replace);
  }
}

fs.writeFileSync('services/appointmentService.js', s, 'utf8');
console.log('appointmentService.js patched successfully');
