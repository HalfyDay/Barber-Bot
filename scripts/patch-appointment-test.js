const fs = require('fs');
let s = fs.readFileSync('tests/appointmentService.test.js', 'utf8');

const replacements = [
  // Prisma mock update
  ['if (where?.Barber && where?.Date)', 'if (where?.barber && where?.date)'],
  ['return { Week: scheduleWeek };', 'return { week: scheduleWeek };'],
  ['if (where?.Barber && row.Barber !== where.Barber)', 'if (where?.barber && row.barber !== where.barber)'],
  ['if (where?.Date && row.Date !== where.Date)', 'if (where?.date && row.date !== where.date)'],
  ['if (where?.UserID && row.UserID !== where.UserID)', 'if (where?.userId && row.userId !== where.userId)'],
  ['if (where?.id?.not && row.id === where.id.not)', 'if (where?.id?.not && row.id === where.id.not)'], // no change, just context

  // mock data fields (row.Barber -> row.barber) inside tests
  ['Barber: "Alex",', 'barber: "Alex",'],
  ['Date: dateKey,', 'date: dateKey,'],
  ['Time: "10:00 - 11:00",', 'time: "10:00 - 11:00",'],
  ['Time: "12:00 - 13:00",', 'time: "12:00 - 13:00",'],
  ['Time: "invalid",', 'time: "invalid",'],
  ['Status: "Активная",', 'status: "Активная",'],
  ['Status: "Отмена",', 'status: "Отмена",'],
  ['UserID: "user-2",', 'userId: "user-2",'],
  ['Date: "bad-date",', 'date: "bad-date",'],

  // Assertions in createHomeAppointment test
  ['assert.equal(created.Barber, "Alex");', 'assert.equal(created.barber, "Alex");'],
  ['assert.equal(created.Time, "10:00 - 11:00");', 'assert.equal(created.time, "10:00 - 11:00");'],
  ['assert.equal(created.Services, "Haircut");', 'assert.equal(created.services, "Haircut");'],
  ['assert.equal(created.Reminder2hClientSent, false);', 'assert.equal(created.reminder2hClientSent, false);'],
  ['assert.equal(created.Reminder2hBarberSent, false);', 'assert.equal(created.reminder2hBarberSent, false);'],
];

for (const [search, replace] of replacements) {
  s = s.split(search).join(replace); // global replacement
}

fs.writeFileSync('tests/appointmentService.test.js', s, 'utf8');
console.log('appointmentService.test.js patched successfully');
