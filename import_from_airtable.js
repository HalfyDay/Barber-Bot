require("dotenv").config();
const axios = require("axios");
const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
// ---  ---
const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.BASE_ID;
const DB_PATH =
  process.env.DB_PATH || path.join(process.cwd(), "prisma", "dev.db");
if (!API_KEY || !BASE_ID) {
  console.error(",   AIRTABLE_API_KEY  BASE_ID   .env .");
  process.exit(1);
}
const META_URL = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`;
const REST_BASE = `https://api.airtable.com/v0/${BASE_ID}`;
const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${API_KEY}` },
  timeout: 30000,
});
// ---  Prisma,     ---
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
// ----   ----
function quoteIdent(name) {
  return `"${String(name).replace(/"/g, '""')}"`;
}
function mapAirtableTypeToSqlType(fieldType) {
  switch (fieldType) {
    case "number":
    case "percent":
    case "rating":
    case "currency":
      return "REAL";
    case "integer":
    case "count":
    case "checkbox":
      return "INTEGER";
    default:
      return "TEXT";
  }
}
function mapAirtableTypeToPrismaType(fieldType) {
  switch (fieldType) {
    case "dateTime":
    case "createdTime":
    case "lastModifiedTime":
      return "DateTime";
    case "date":
      return "String";
    case "number":
    case "percent":
    case "rating":
    case "currency":
      return "Float";
    case "integer":
    case "count":
      return "Int";
    case "checkbox":
      return "Boolean";
    default:
      return "String";
  }
}
const cyrillicToLatinMap = {
  "": "a",
  "": "b",
  "": "v",
  "": "g",
  "": "d",
  "": "e",
  "": "yo",
  "": "zh",
  "": "z",
  "": "i",
  "": "y",
  "": "k",
  "": "l",
  "": "m",
  "": "n",
  "": "o",
  "": "p",
  "": "r",
  "": "s",
  "": "t",
  "": "u",
  "": "f",
  "": "h",
  "": "ts",
  "": "ch",
  "": "sh",
  "": "sch",
  "": "",
  "": "y",
  "": "",
  "": "e",
  "": "yu",
  "": "ya",
  "": "A",
  "": "B",
  "": "V",
  "": "G",
  "": "D",
  "": "E",
  "": "Yo",
  "": "Zh",
  "": "Z",
  "": "I",
  "": "Y",
  "": "K",
  "": "L",
  "": "M",
  "": "N",
  "": "O",
  "": "P",
  "": "R",
  "": "S",
  "": "T",
  "": "U",
  "": "F",
  "": "H",
  "": "Ts",
  "": "Ch",
  "": "Sh",
  "": "Sch",
  "": "",
  "": "Y",
  "": "",
  "": "E",
  "": "Yu",
  "": "Ya",
};
function sanitizeForPrisma(name) {
  const transliterated = name
    .split("")
    .map((char) => cyrillicToLatinMap[char] || char)
    .join("");
  let sanitized = transliterated.replace(/\s+/g, "_");
  sanitized = sanitized.replace(/[^a-zA-Z0-9_]/g, "");
  if (/^[0-9]/.test(sanitized)) sanitized = "field_" + sanitized;
  if (sanitized.length === 0)
    return (
      "field_" +
      Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0)
    );
  return sanitized;
}
function generatePrismaSchema(meta, dbPath) {
  const prismaDir = path.dirname(dbPath);
  const schemaPath = path.join(prismaDir, "schema.prisma");
  const relativeDbPath = path.relative(prismaDir, dbPath).replace(/\\/g, "/");
  const datasource = `datasource db {\n  provider = "sqlite"\n  url      = "file:./${relativeDbPath}"\n}`;
  const generator = `generator client {\n  provider = "prisma-client-js"\n}`;
  const models = meta.tables
    .map((table) => {
      if (!table.fields || table.fields.length === 0) return "";
      const modelName = sanitizeForPrisma(table.name);
      const fields = table.fields
        .map((field) => {
          const fieldName = sanitizeForPrisma(field.name);
          const prismaType = mapAirtableTypeToPrismaType(field.type);
          return `  ${fieldName.padEnd(20)} ${prismaType}?    @map("${field.name}")`;
        })
        .join("\n");
      return `model ${modelName} {\n  id                  String    @id\n${fields}\n\n  @@map("${table.name}")\n}`;
    })
    .join("\n");
  const schemaContent = `${datasource}\n\n${generator}\n\n${models}\n${MANUAL_MODELS}`;
  fs.writeFileSync(schemaPath, schemaContent, "utf8");
  console.log(`  Prisma   : ${schemaPath}`);
}
async function fetchMetadata() {
  try {
    const res = await axiosInstance.get(META_URL);
    return res.data;
  } catch (err) {
    console.error("    metadata:", err.message);
    if (err.response)
      console.error(" :", JSON.stringify(err.response.data, null, 2));
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
        params: { pageSize: 100, offset },
      });
      rows.push(...res.data.records);
      if (res.data.offset) {
        offset = res.data.offset;
      } else {
        break;
      }
    } catch (err) {
      console.error(`      ${tableName}:`, err.message);
      if (err.response)
        console.error(" :", JSON.stringify(err.response.data, null, 2));
      throw err;
    }
  }
  return rows;
}
function normalizeValueForInsert(val) {
  if (val === undefined || val === null) return null;
  const t = typeof val;
  if (t === "boolean") return val ? 1 : 0;
  if (t === "object") return JSON.stringify(val);
  return val;
}
function ensureDbDir(dbPath) {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("    :", dir);
  }
}
// ----   ----
(async () => {
  try {
    console.log("    Airtable  SQLite...");
    ensureDbDir(DB_PATH);
    // --- :        ---
    console.log("\n[1/5]     ( )...");
    const dbWalPath = DB_PATH + "-wal";
    const dbShmPath = DB_PATH + "-shm";
    if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);
    if (fs.existsSync(dbWalPath)) fs.unlinkSync(dbWalPath);
    if (fs.existsSync(dbShmPath)) fs.unlinkSync(dbShmPath);
    console.log("  .");
    console.log("\n[2/5]    Airtable...");
    const meta = await fetchMetadata();
    if (!meta.tables || !meta.tables.length) {
      console.error("   Airtable   .");
      process.exit(1);
    }
    console.log(`    ${meta.tables.length} .`);
    console.log("\n[3/5]  schema.prisma...");
    generatePrismaSchema(meta, DB_PATH);
    console.log("\n[4/5]        Prisma...");
    try {
      //  `migrate dev`
      execSync("npx prisma migrate dev --name init", { stdio: "inherit" });
      console.log("      .");
    } catch (e) {
      console.error(
        "    `prisma migrate dev`. ,  Prisma  (`npm install prisma`).",
      );
      throw e;
    }
    console.log("\n[5/5]      Airtable...");
    const db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    for (const t of meta.tables) {
      const tableName = t.name;
      console.log(`\n -> : "${tableName}"`);
      const fields = t.fields || [];
      if (fields.length === 0) {
        console.log("   (,  )");
        continue;
      }
      const records = await fetchAllRecords(tableName);
      console.log(`    : ${records.length}`);
      if (records.length === 0) continue;
      const colNames = ["id", ...fields.map((f) => f.name)];
      const placeholders = colNames.map(() => "?").join(",");
      const insertStmt = db.prepare(
        `INSERT OR IGNORE INTO ${quoteIdent(tableName)} (${colNames.map(quoteIdent).join(",")}) VALUES (${placeholders})`,
      );
      const insertMany = db.transaction((rows) => {
        for (const r of rows) {
          const values = [
            r.id,
            ...fields.map((f) => normalizeValueForInsert(r.fields[f.name])),
          ];
          insertStmt.run(values);
        }
      });
      insertMany(records);
      console.log(`     .`);
    }
    db.close();
    console.log("\n\n  !   Prisma Client...");
    execSync("npx prisma generate", { stdio: "inherit" });
    console.log(" Prisma Client  .");
    console.log("\n    : `node server.js`");
  } catch (err) {
    console.error("\n   :", err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
