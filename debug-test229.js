const { registerAdminCrudRoutes } = require('./routes/adminCrudRoutes');
const { createAppMock, createResponseMock } = require('./tests/routeTestUtils');

const normalizeText = (value) => (value ?? '').toString().trim();
const dateOffsetKey = (offsetDays = 0) => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offsetDays);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

async function runTest() {
  const todayKey = dateOffsetKey(0);
  const existingRecord = {
    id: 'sched-uuid-1',
    barber: 'Иван',
    date: todayKey,
    week: '10:00-18:00',
    dayOfWeek: 'Понедельник',
  };

  const app = createAppMock();
  registerAdminCrudRoutes({
    app,
    authenticateToken: (_req, _res, next) => next && next(),
    prisma: {
      schedules: {
        async findMany(args) {
          console.log('findMany args:', args);
          if (args?.where?.date?.gte === todayKey) {
            return [existingRecord];
          }
          return [];
        },
        async deleteMany() { return {}; },
        async findFirst() { return null; }
      }
    },
    getBarbers: async () => [{ id: 'b1', name: 'Иван' }],
    normalizeText,
    isStaffIdentity: () => false,
  });

  const handler = app.getRoute('GET', '/api/schedules');
  const res = createResponseMock();
  await handler({ identity: { username: 'owner' } }, res);

  const board = res.body;
  const ivanToday = board.find((slot) => slot.Barber === 'Иван' && slot.Date === todayKey);
  console.log('ivanToday:', ivanToday);
}
runTest();
