const fs = require('fs');
let s = fs.readFileSync('routes/adminCrudRoutes.js', 'utf8');

// BuildScheduleBoard fixes
s = s.replace('where: { Date: { lt: staleKey } },', 'where: { date: { lt: staleKey } },');
s = s.replace('where: { Date: { gte: todayKey } },', 'where: { date: { gte: todayKey } },');
s = s.replace('if (schedule.Barber && schedule.Date)', 'if (schedule.barber && schedule.date)');
s = s.replace('acc.set(`${schedule.Barber}-${schedule.Date}`, schedule);', 'acc.set(`${schedule.barber}-${schedule.date}`, schedule);');
s = s.replace('new Set(allSchedules.map((item) => item.Barber).filter(Boolean)),', 'new Set(allSchedules.map((item) => item.barber).filter(Boolean)),');
s = s.replace('Week: existing?.Week || "",', 'Week: existing?.week || "",');

// PUT /api/schedules/:id fixes
s = s.replace('where: { Barber, Date: date },', 'where: { barber: Barber, date: date },');
s = s.replace('data: { Week: week },', 'data: { week: week },');
s = s.replace('Barber,\n              Week: week,\n              DayOfWeek: data.DayOfWeek,\n              Date: date,', 'barber: Barber,\n              week: week,\n              dayOfWeek: data.DayOfWeek,\n              date: date,');

// Wait! Does schedules model also have cityId? Yes, schedules has cityId.
// In the PUT schedules endpoint, let's also store the barber's cityId if cities are enabled.
// Wait, we need to lookup the barber's cityId first?
// Let's check what Barbers table has. Barbers table has cityId.
// Let's see if we should get the barber's cityId.
// Yes:
// const barberRecord = await prisma.barbers.findFirst({ where: { name: Barber } });
// const cityId = barberRecord?.cityId || null;
// Let's check if the existing schedule PUT endpoint can add cityId.
// Actually, let's look at the PUT schedules endpoint more closely.

fs.writeFileSync('routes/adminCrudRoutes.js', s, 'utf8');
console.log('schedules casing in routes/adminCrudRoutes.js patched successfully');
