const fs = require('fs');
let s = fs.readFileSync('tests/appointmentService.test.js', 'utf8');

const replacements = [
  ['Date: "2026-03-20",', 'date: "2026-03-20",'],
  ['barber: "Alex",', 'barber: "Alex",'], // just in case
];

for (const [search, replace] of replacements) {
  s = s.split(search).join(replace); // global replacement
}

fs.writeFileSync('tests/appointmentService.test.js', s, 'utf8');
console.log('appointmentService.test.js patched successfully again');
