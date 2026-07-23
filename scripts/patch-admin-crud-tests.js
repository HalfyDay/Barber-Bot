const fs = require('fs');
let s = fs.readFileSync('tests/adminCrudRoutes.test.js', 'utf8');

// Test 2 (create appointment)
s = s.replace(
  '    [\n      "create",\n      {\n        id: "uuid-1",\n        Barber: "Timur",\n        Service: "Fade",\n        Status: "active",\n        StartAt: "2026-03-18T10:00:00.000Z",\n        UserID: "42",\n      },\n    ],',
  '    [\n      "create",\n      {\n        id: "uuid-1",\n        barber: "Timur",\n        Service: "Fade",\n        status: "active",\n        StartAt: "2026-03-18T10:00:00.000Z",\n        userId: "42",\n      },\n    ],'
);

// Test 3 (staff create own appointment)
s = s.replace(
  '    [\n      "create",\n      {\n        id: "uuid-1",\n        Barber: "Timur",\n        Service: "Fade",\n        Status: "active",\n        StartAt: "2026-03-18T12:00:00.000Z",\n        UserID: "77",\n      },\n    ],',
  '    [\n      "create",\n      {\n        id: "uuid-1",\n        barber: "Timur",\n        Service: "Fade",\n        status: "active",\n        StartAt: "2026-03-18T12:00:00.000Z",\n        userId: "77",\n      },\n    ],'
);

// Test 8 (update appointment)
s = s.replace(
  '  const existing = {\n    id: "appt-1",\n    Barber: "Timur",\n    Service: "Fade",\n    Status: "active",\n    UserID: "42",\n  };',
  '  const existing = {\n    id: "appt-1",\n    barber: "Timur",\n    Service: "Fade",\n    status: "active",\n    userId: "42",\n  };'
);
s = s.replace(
  '    ["update", { id: "appt-1" }, { Status: "done", UserID: "77" }],',
  '    ["update", { id: "appt-1" }, { status: "done", userId: "77" }],'
);

// Test 9 (staff update own appointment)
s = s.replace(
  '  const existing = {\n    id: "appt-1",\n    Barber: "Timur",\n    Service: "Fade",\n    Status: "active",\n    StartAt: "2026-03-18T10:00:00.000Z",\n    UserID: "42",\n  };',
  '  const existing = {\n    id: "appt-1",\n    barber: "Timur",\n    Service: "Fade",\n    status: "active",\n    StartAt: "2026-03-18T10:00:00.000Z",\n    userId: "42",\n  };'
);
s = s.replace(
  '    [\n      "update",\n      { id: "appt-1" },\n      {\n        Barber: "Timur",\n        Service: "Buzz",\n        Status: "confirmed",\n      },\n    ],',
  '    [\n      "update",\n      { id: "appt-1" },\n      {\n        barber: "Timur",\n        Service: "Buzz",\n        status: "confirmed",\n      },\n    ],'
);

fs.writeFileSync('tests/adminCrudRoutes.test.js', s, 'utf8');
console.log('adminCrudRoutes.test.js patched successfully');
