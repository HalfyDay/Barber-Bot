const fs = require('fs');
let s = fs.readFileSync('tests/schedulePersistence.test.js', 'utf8');

// The mojibake characters in the file as we saw them in the output:
const mojibakeIvan = 'Р˜РІР°РЅ';
const mojibakeTimur = 'РўРёРјСѓСЂ';
const mojibakeDenis = 'Р”РµРЅРёСЃ';
const mojibakeAleksey = 'РђР»РµРєСЃРµР№';
const mojibakeMon = 'РџРѕРЅРµРґРµР»СЊРЅРёРє';
const mojibakeTue = 'Р’С‚РѕСЂРЅРёРє';
const mojibakeWed = 'РЎСЂРµРґР°';

s = s.split(mojibakeIvan).join('Иван');
s = s.split(mojibakeTimur).join('Тимур');
s = s.split(mojibakeDenis).join('Денис');
s = s.split(mojibakeAleksey).join('Алексей');
s = s.split(mojibakeMon).join('Понедельник');
s = s.split(mojibakeTue).join('Вторник');
s = s.split(mojibakeWed).join('Среда');

// Now apply all the lowercase fixes:
const fixes = [
  // Date: todayKey / yesterdayKey / in3Days in mock objects (indented 4 spaces)
  [/(\s{4})Date: (todayKey|yesterdayKey|in3Days),/g, '$1date: $2,'],
  // Week: "..." in mock returned objects (indented 4 spaces)
  [/(\s{4})Week: "(10:00-18:00|09:00-17:00|11:00-20:00)",/g, '$1week: "$2",'],
  // DayOfWeek -> dayOfWeek
  [/DayOfWeek: "(Понедельник|Вторник|Среда)"/g, 'dayOfWeek: "$1"'],
  // Barber -> barber in mocked objects
  [/Barber: "(Иван|Тимур|Денис|Алексей)"/g, 'barber: "$1"'],

  // args?.where?.Date checks
  [/args\?\.where\?\.Date\?\.gte/g, 'args?.where?.date?.gte'],
  [/args\?\.where\?\.Date\?\.lt/g, 'args?.where?.date?.lt'],
  [/args\?\.where\?\.Date/g, 'args?.where?.date'],
  // deleteMany assertion
  [/deleteManyArgs\[0\]\?\.where\?\.Date/g, 'deleteManyArgs[0]?.where?.date'],
  [/"deleteMany should have a Date\.lt condition"/g, '"deleteMany should have a date.lt condition"'],
  // Inline returned objects (findFirst)
  [/\{ id: "existing-uuid", barber: "([^"]+)", date: (todayKey), Week: "([^"]+)" \}/g,
    '{ id: "existing-uuid", barber: "$1", date: $2, week: "$3" }'],
  
  // create/update call assertions
  [/createCall\[1\]\.Week/g, 'createCall[1].week'],
  [/createCall\[1\]\.Barber/g, 'createCall[1].barber'],
  [/createCall\[1\]\.Date/g, 'createCall[1].date'],
  [/updateCall\[1\]\.data\.Week/g, 'updateCall[1].data.week'],
  [/"Should save new Week value"/g, '"Should save new week value"'],
];

for (const [pattern, replacement] of fixes) {
  s = s.replace(pattern, replacement);
}

// Ensure the request body has upper case Date and Week, and DayOfWeek and Barber
s = s.replace(
  '      body: {\n        barber: "Иван",\n        date: todayKey,\n        dayOfWeek: "Понедельник",\n        week: "10:00-18:00",\n      },\n    },\n    res\n  );\n\n  assert.equal(res.statusCode, 200, "PUT should return 200");\n  assert.equal(res.body.Week',
  '      body: {\n        Barber: "Иван",\n        Date: todayKey,\n        DayOfWeek: "Понедельник",\n        Week: "10:00-18:00",\n      },\n    },\n    res\n  );\n\n  assert.equal(res.statusCode, 200, "PUT should return 200");\n  assert.equal(res.body.week'
);

s = s.replace(
  '      body: {\n        barber: "Иван",\n        date: todayKey,\n        dayOfWeek: "Понедельник",\n        week: "10:00-18:00", // changed from 09:00-17:00\n      },',
  '      body: {\n        Barber: "Иван",\n        Date: todayKey,\n        DayOfWeek: "Понедельник",\n        Week: "10:00-18:00", // changed from 09:00-17:00\n      },'
);

// Res.body assertions in create
s = s.replace(
  '  assert.equal(res.body.Week, "10:00-18:00", "Response should contain the saved Week");\n  assert.equal(res.body.Barber, "Иван", "Response should contain the Barber");\n  assert.equal(res.body.Date, todayKey, "Response should contain the Date");',
  '  assert.equal(res.body.week, "10:00-18:00", "Response should contain the saved week");\n  assert.equal(res.body.barber, "Иван", "Response should contain the barber");\n  assert.equal(res.body.date, todayKey, "Response should contain the date");'
);

fs.writeFileSync('tests/schedulePersistence.test.js', s, 'utf8');
console.log('Fixed file');
