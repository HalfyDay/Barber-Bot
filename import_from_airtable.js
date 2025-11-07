require('dotenv').config();
const axios = require('axios');
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- КОНФИГУРАЦИЯ ---
const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.BASE_ID;
const DB_PATH = process.env.DB_PATH || path.join(process.cwd(), 'prisma', 'dev.db');

if (!API_KEY || !BASE_ID) {
  console.error("Пожалуйста, установите переменные AIRTABLE_API_KEY и BASE_ID в вашем .env файле.");
  process.exit(1);
}

const META_URL = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`;
const REST_BASE = `https://api.airtable.com/v0/${BASE_ID}`;

const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${API_KEY}` },
  timeout: 30000,
});

// --- Модели Prisma, которые нужно добавить вручную ---
const MANUAL_MODELS = `
model AuditLog {
  id         String   @id @default(uuid())
  timestamp  DateTime @default(now())
  user       String
  action     String
  tableName  String
  recordId   String
  changes    String
}
`;

// ---- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ----

function quoteIdent(name) {
  return `"${String(name).replace(/"/g, '""')}"`;
}

function mapAirtableTypeToSqlType(fieldType) {
  switch (fieldType) {
    case 'number':
    case 'percent':
    case 'rating':
    case 'currency':
      return 'REAL';
    case 'integer':
    case 'count':
    case 'checkbox':
      return 'INTEGER';
    default:
      return 'TEXT';
  }
}

function mapAirtableTypeToPrismaType(fieldType) {
  switch (fieldType) {
    case 'dateTime':
    case 'createdTime':
    case 'lastModifiedTime':
      return 'DateTime';
    case 'date':
      return 'String';
    case 'number':
    case 'percent':
    case 'rating':
    case 'currency':
      return 'Float';
    case 'integer':
    case 'count':
      return 'Int';
    case 'checkbox':
      return 'Boolean';
    default:
      return 'String';
  }
}

const cyrillicToLatinMap = { 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya' };

function sanitizeForPrisma(name) {
  const transliterated = name.split('').map(char => cyrillicToLatinMap[char] || char).join('');
  let sanitized = transliterated.replace(/\s+/g, '_');
  sanitized = sanitized.replace(/[^a-zA-Z0-9_]/g, '');
  if (/^[0-9]/.test(sanitized)) sanitized = 'field_' + sanitized;
  if (sanitized.length === 0) return 'field_' + Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return sanitized;
}

function generatePrismaSchema(meta, dbPath) {
  const prismaDir = path.dirname(dbPath);
  const schemaPath = path.join(prismaDir, 'schema.prisma');
  const relativeDbPath = path.relative(prismaDir, dbPath).replace(/\\/g, '/');

  const datasource = `datasource db {\n  provider = "sqlite"\n  url      = "file:./${relativeDbPath}"\n}`;
  const generator = `generator client {\n  provider = "prisma-client-js"\n}`;

  const models = meta.tables.map(table => {
    if (!table.fields || table.fields.length === 0) return '';
    const modelName = sanitizeForPrisma(table.name);
    const fields = table.fields.map(field => {
      const fieldName = sanitizeForPrisma(field.name);
      const prismaType = mapAirtableTypeToPrismaType(field.type);
      return `  ${fieldName.padEnd(20)} ${prismaType}?    @map("${field.name}")`;
    }).join('\n');
    return `model ${modelName} {\n  id                  String    @id\n${fields}\n\n  @@map("${table.name}")\n}`;
  }).join('\n');

  const schemaContent = `${datasource}\n\n${generator}\n\n${models}\n${MANUAL_MODELS}`;
  fs.writeFileSync(schemaPath, schemaContent, 'utf8');
  console.log(`✅ Схема Prisma успешно сохранена в: ${schemaPath}`);
}

async function fetchMetadata() {
  try {
    const res = await axiosInstance.get(META_URL);
    return res.data;
  } catch (err) {
    console.error("❌ Ошибка при получении metadata:", err.message);
    if (err.response) console.error("Ответ сервера:", JSON.stringify(err.response.data, null, 2));
    throw err;
  }
}

async function fetchAllRecords(tableName) {
  const rows = [];
  let offset = undefined;
  while (true) {
    try {
      const res = await axiosInstance.get(`/${encodeURIComponent(tableName)}`, {
        baseURL: REST_BASE,
        params: { pageSize: 100, offset }
      });
      rows.push(...res.data.records);
      if (res.data.offset) {
        offset = res.data.offset;
      } else {
        break;
      }
    } catch (err) {
      console.error(`❌ Ошибка при получении записей таблицы ${tableName}:`, err.message);
      if (err.response) console.error("Ответ сервера:", JSON.stringify(err.response.data, null, 2));
      throw err;
    }
  }
  return rows;
}

function normalizeValueForInsert(val) {
  if (val === undefined || val === null) return null;
  const t = typeof val;
  if (t === 'boolean') return val ? 1 : 0;
  if (t === 'object') return JSON.stringify(val);
  return val;
}

function ensureDbDir(dbPath) {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("📁 Создана директория для БД:", dir);
  }
}

// ---- ОСНОВНОЙ СКРИПТ ----
(async () => {
  try {
    console.log("🚀 Запуск импорта из Airtable в SQLite...");
    ensureDbDir(DB_PATH);

    // --- ИЗМЕНЕНИЕ: Принудительное удаление старой БД для чистого старта ---
    console.log("\n[1/5] Очистка старой базы данных (если существует)...");
    const dbWalPath = DB_PATH + '-wal';
    const dbShmPath = DB_PATH + '-shm';

    if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);
    if (fs.existsSync(dbWalPath)) fs.unlinkSync(dbWalPath);
    if (fs.existsSync(dbShmPath)) fs.unlinkSync(dbShmPath);
    console.log("✅ Очистка завершена.");


    console.log("\n[2/5] Получаем метаданные из Airtable...");
    const meta = await fetchMetadata();
    if (!meta.tables || !meta.tables.length) {
      console.error("❌ В базе Airtable не найдено таблиц.");
      process.exit(1);
    }
    console.log(`✅ Получена структура для ${meta.tables.length} таблиц.`);

    console.log("\n[3/5] Генерируем schema.prisma...");
    generatePrismaSchema(meta, DB_PATH);

    console.log("\n[4/5] Создаем и синхронизируем базу данных с помощью Prisma...");
    try {
      // Используем `migrate dev` для надежного создания БД
      execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });
      console.log("✅ База данных успешно создана и синхронизирована.");
    } catch (e) {
      console.error("❌ Ошибка при выполнении `prisma migrate dev`. Убедитесь, что Prisma установлена (`npm install prisma`).");
      throw e;
    }
   
    console.log("\n[5/5] Наполняем базу данных данными из Airtable...");
    const db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');

    for (const t of meta.tables) {
      const tableName = t.name;
      console.log(`\n -> Таблица: "${tableName}"`);

      const fields = t.fields || [];
      if (fields.length === 0) {
        console.log("   (пропущено, нет полей)");
        continue;
      }

      const records = await fetchAllRecords(tableName);
      console.log(`   Получено записей: ${records.length}`);
      if (records.length === 0) continue;

      const colNames = ['id', ...fields.map(f => f.name)];
      const placeholders = colNames.map(() => '?').join(',');
      const insertStmt = db.prepare(`INSERT OR IGNORE INTO ${quoteIdent(tableName)} (${colNames.map(quoteIdent).join(',')}) VALUES (${placeholders})`);

      const insertMany = db.transaction((rows) => {
        for (const r of rows) {
          const values = [r.id, ...fields.map(f => normalizeValueForInsert(r.fields[f.name]))];
          insertStmt.run(values);
        }
      });

      insertMany(records);
      console.log(`   Данные успешно вставлены.`);
    }

    db.close();
   
    console.log("\n\n🎉 Все готово! Запускаем генерацию Prisma Client...");
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log("✅ Prisma Client успешно сгенерирован.");
    console.log("\nТеперь вы можете запустить сервер: `node server.js`");

  } catch (err) {
    console.error("\n❌ Произошла критическая ошибка:", err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
