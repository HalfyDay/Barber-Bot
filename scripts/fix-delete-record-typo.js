const fs = require('fs');
let s = fs.readFileSync('routes/adminCrudRoutes.js', 'utf8');

// Replace all 'delete record.xxx' with 'delete result.xxx' in mapPrismaAppointmentToFrontend
s = s.replace(/delete record\.customerName/g, 'delete result.customerName');
s = s.replace(/delete record\.phone/g, 'delete result.phone');
s = s.replace(/delete record\.barber/g, 'delete result.barber');
s = s.replace(/delete record\.date/g, 'delete result.date');
s = s.replace(/delete record\.time/g, 'delete result.time');
s = s.replace(/delete record\.status/g, 'delete result.status');
s = s.replace(/delete record\.services/g, 'delete result.services');
s = s.replace(/delete record\.userId/g, 'delete result.userId');
s = s.replace(/delete record\.comment/g, 'delete result.comment');
s = s.replace(/delete record\.coverBs/g, 'delete result.coverBs');
s = s.replace(/delete record\.discountRub/g, 'delete result.discountRub');
s = s.replace(/delete record\.reminder2hClientSent/g, 'delete result.reminder2hClientSent');
s = s.replace(/delete record\.reminder2hBarberSent/g, 'delete result.reminder2hBarberSent');

fs.writeFileSync('routes/adminCrudRoutes.js', s, 'utf8');
console.log('Fixed delete record typo in routes/adminCrudRoutes.js');
