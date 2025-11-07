/**
 * fix-users.js
 * Автоматическая чистка/нормализация проблемных полей в таблице Users.
 *
 * - Делает бэкап dev.db -> dev.db.backup.TIMESTAMP.db
 * - Ищет проблемные TelegramID / LastNameChanged / Barber и пытается их безопасно привести
 * - Логирует изменения в fix-users.report.txt
 *
 * Запуск:
 *   node fix-users.js
 *
 * ВАЖНО: скрипт старается быть безопасным, но всегда держите резервную копию.
 */

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const SRC = path.resolve(__dirname, 'dev.db');
if (!fs.existsSync(SRC)) {
  console.error('Файл dev.db не найден в текущей папке:', SRC);
  process.exit(1);
}
const BACKUP = path.resolve(__dirname, `dev.db.backup.${new Date().toISOString().replace(/[:.]/g,'-')}.db`);
fs.copyFileSync(SRC, BACKUP);
console.log('Создан бэкап:', BACKUP);

const db = new Database(SRC);

// допустимые значения Barber (текст в БД — русские названия с emoji, как в @map)
const ALLOWED_BARBERS = new Set(['Тимур🐼','Владимир😎','Алина💖','Алексей🦐']);

function tryToParseDateToISO(s) {
  if (!s) return null;
  const raw = String(s).trim();

  // 1) Если уже ISO-ish -> вернуть как есть (или привести к полноценному ISO)
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
    // Если содержит только дату -> добавить T00:00:00Z
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw + 'T00:00:00Z';
    // Попытка преобразовать через Date
    const dt = new Date(raw);
    if (!isNaN(dt.getTime())) return dt.toISOString();
    return null;
  }

  // 2) Формат DD.MM.YYYY
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(raw)) {
    const [d,m,y] = raw.split('.');
    return `${y}-${m}-${d}T00:00:00Z`;
  }

  // 3) Попытка парсинга JS Date для распространённых форматов
  const dt = new Date(raw);
  if (!isNaN(dt.getTime())) return dt.toISOString();

  // не удалось
  return null;
}

function normalizeTelegramId(val) {
  if (val === null || val === undefined) return null;
  const s = String(val).trim();
  if (s.length === 0) return null;
  // Удаляем все не-цифры
  const digits = s.replace(/\D/g, '');
  if (digits.length === 0) return null;
  // Telegram IDs обычно в пределах signed 64-bit; лучше проверить длину, но просто вернём число как строку целого
  // Вернём как строку, но в БД будет числовой тип (INTEGER)
  // Если число слишком длинное — оставим NULL (маловероятно)
  if (digits.length > 18) {
    // безопаснее: оставить NULL и логировать
    return null;
  }
  return BigInt(digits).toString(); // string of integer, compatible with INTEGER storage
}

// Сбор отчёта
const reportLines = [];
reportLines.push(`fix-users report - ${new Date().toISOString()}`);
reportLines.push(`Source DB: ${SRC}`);
reportLines.push(`Backup created at: ${BACKUP}`);
reportLines.push('---');

const users = db.prepare('SELECT * FROM Users').all();
reportLines.push(`Total users found: ${users.length}`);

const updates = [];
for (const u of users) {
  const orig = { id: u.id, TelegramID: u.TelegramID, LastNameChanged: u.LastNameChanged, Barber: u.Barber };
  let changed = false;
  const newValues = {};

  // TelegramID
  const normalizedTG = normalizeTelegramId(u.TelegramID);
  // compare as strings (null vs '12345')
  if ( (normalizedTG === null && (u.TelegramID !== null && u.TelegramID !== undefined && String(u.TelegramID).trim() !== '')) ||
       (normalizedTG !== null && String(u.TelegramID).trim() !== String(normalizedTG)) ) {
    newValues.TelegramID = normalizedTG;
    changed = true;
  }

  // LastNameChanged -> ISO or null
  const normalizedDate = tryToParseDateToISO(u.LastNameChanged);
  // if original is falsy and normalizedDate is null -> no change
  if (normalizedDate !== null) {
    // if parsed ISO differs from stored string -> update
    if (String(u.LastNameChanged || '').trim() !== String(normalizedDate)) {
      newValues.LastNameChanged = normalizedDate;
      changed = true;
    }
  } else {
    // если есть непустое значение, которое мы не смогли распарсить — обнулим (NULL), чтобы Prisma не падал
    if (u.LastNameChanged !== null && u.LastNameChanged !== undefined && String(u.LastNameChanged).trim() !== '') {
      newValues.LastNameChanged = null;
      changed = true;
    }
  }

  // Barber — оставить только допустимые значения, иначе NULL
  if (u.Barber !== null && u.Barber !== undefined && String(u.Barber).trim() !== '') {
    if (!ALLOWED_BARBERS.has(u.Barber)) {
      newValues.Barber = null;
      changed = true;
    }
  }

  if (changed) updates.push({ id: u.id, newValues, orig });
}

// Выполнение обновлений в транзакции
if (updates.length === 0) {
  reportLines.push('No updates necessary — проблемных записей не найдено.');
} else {
  reportLines.push(`Updating ${updates.length} user(s).`);
  const tx = db.transaction((rows) => {
    const stmt = db.prepare('UPDATE Users SET TelegramID = @TelegramID, LastNameChanged = @LastNameChanged, Barber = @Barber WHERE id = @id');
    for (const r of rows) {
      // подготовим параметры, подставив существующие значения если не меняем
      const param = {
        id: r.id,
        TelegramID: r.newValues.TelegramID !== undefined ? r.newValues.TelegramID : r.orig.TelegramID,
        LastNameChanged: r.newValues.LastNameChanged !== undefined ? r.newValues.LastNameChanged : r.orig.LastNameChanged,
        Barber: r.newValues.Barber !== undefined ? r.newValues.Barber : r.orig.Barber
      };
      stmt.run(param);
      reportLines.push(`User ${r.id} updated. Orig: ${JSON.stringify(r.orig)} -> New partial: ${JSON.stringify(r.newValues)}`);
    }
  });

  try {
    tx(updates);
    reportLines.push('All updates applied successfully.');
  } catch (e) {
    reportLines.push('ERROR while applying updates: ' + String(e));
  }
}

// Завершение
const reportPath = path.resolve(__dirname, 'fix-users.report.txt');
fs.writeFileSync(reportPath, reportLines.join('\n'), 'utf8');
console.log('Готово. Отчёт записан в', reportPath);
console.log('Рекомендация: после проверки отчёта запустите `npx prisma generate` и затем повторите ваш Prisma-запрос.');
db.close();
