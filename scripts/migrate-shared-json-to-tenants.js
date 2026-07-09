#!/usr/bin/env node

/**
 * Migration script: Move shared JSON data into per-tenant database tables.
 * 
 * This script reads data from shared JSON files and inserts them into
 * the corresponding per-tenant tables (BlockedUsers, BarberAliases, BotMenu).
 * 
 * Usage: node scripts/migrate-shared-json-to-tenants.js
 */

const fs = require("fs-extra");
const path = require("path");
const { Client } = require("pg");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(PROJECT_ROOT, "data");

const BLOCKED_USERS_FILE = path.join(DATA_DIR, "blocked-users.json");
const BARBER_ALIASES_FILE = path.join(DATA_DIR, "barber-aliases.json");
const BOT_MENU_FILE = path.join(DATA_DIR, "bot-menu.json");

async function getConnectionString() {
  const connectionString = process.env.POSTGRES_DATABASE_URL;
  if (!connectionString) {
    throw new Error("POSTGRES_DATABASE_URL environment variable is not set");
  }
  return connectionString;
}

async function getTenantSchemas(client) {
  const result = await client.query(
    'SELECT "id", "name", "dbSchema" FROM public."Businesses" WHERE "isActive" = true ORDER BY "name" ASC'
  );
  return result.rows;
}

async function migrateBlockedUsers(client, schema) {
  console.log(`  [blocked-users] Migrating to schema: ${schema}`);
  
  let data;
  try {
    data = await fs.readJson(BLOCKED_USERS_FILE);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`  [blocked-users] No file found, skipping`);
      return 0;
    }
    throw error;
  }
  
  const list = Array.isArray(data) ? data : data?.blocked || [];
  const userIds = list.filter(Boolean).map(String);
  
  if (!userIds.length) {
    console.log(`  [blocked-users] No blocked users to migrate`);
    return 0;
  }
  
  let count = 0;
  for (const userId of userIds) {
    try {
      await client.query(
        `INSERT INTO "${schema}"."BlockedUsers" ("id", "userId", "blockedAt")
         VALUES ($1, $2, $3)
         ON CONFLICT ("userId") DO NOTHING`,
        [
          `migrated-${userId}`,
          userId,
          new Date().toISOString(),
        ]
      );
      count++;
    } catch (error) {
      console.warn(`  [blocked-users] Failed to migrate user ${userId}: ${error.message}`);
    }
  }
  
  console.log(`  [blocked-users] Migrated ${count} blocked users`);
  return count;
}

async function migrateBarberAliases(client, schema) {
  console.log(`  [barber-aliases] Migrating to schema: ${schema}`);
  
  let data;
  try {
    data = await fs.readJson(BARBER_ALIASES_FILE);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`  [barber-aliases] No file found, skipping`);
      return 0;
    }
    throw error;
  }
  
  if (!data || typeof data !== "object") {
    console.log(`  [barber-aliases] No aliases to migrate`);
    return 0;
  }
  
  let count = 0;
  for (const [barberId, aliases] of Object.entries(data)) {
    if (!Array.isArray(aliases)) continue;
    for (const alias of aliases) {
      if (!alias) continue;
      try {
        await client.query(
          `INSERT INTO "${schema}"."BarberAliases" ("id", "barberId", "alias", "createdAt")
           VALUES ($1, $2, $3, $4)
           ON CONFLICT ("barberId", "alias") DO NOTHING`,
          [
            `migrated-${barberId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            barberId,
            alias,
            new Date().toISOString(),
          ]
        );
        count++;
      } catch (error) {
        console.warn(`  [barber-aliases] Failed to migrate alias ${barberId}->${alias}: ${error.message}`);
      }
    }
  }
  
  console.log(`  [barber-aliases] Migrated ${count} aliases`);
  return count;
}

async function migrateBotMenu(client, schema) {
  console.log(`  [bot-menu] Migrating to schema: ${schema}`);
  
  let data;
  try {
    data = await fs.readJson(BOT_MENU_FILE);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`  [bot-menu] No file found, using defaults`);
      data = {
        version: 1,
        updatedAt: new Date().toISOString(),
        screens: [
          {
            id: "main",
            title: "Главное меню",
            message: "Добро пожаловать! Выберите действие.",
            imageUrl: "",
            buttons: [
              { id: "book", label: "Записаться", type: "service", targetScreenId: "services", row: 0, order: 0 },
              { id: "myAppointments", label: "Мои записи", type: "userAppointments", targetScreenId: "appointments", row: 0, order: 1 },
              { id: "profile", label: "Профиль", type: "profile", targetScreenId: "profile", row: 1, order: 0 },
              { id: "about", label: "О нас", type: "description", targetScreenId: "about", row: 1, order: 1 },
            ],
          },
        ],
      };
    } else {
      throw error;
    }
  }
  
  try {
    await client.query(
      `INSERT INTO "${schema}"."BotMenu" ("id", "payload", "updatedAt")
       VALUES ($1, $2, $3)
       ON CONFLICT ("id") DO UPDATE SET "payload" = $2, "updatedAt" = $3`,
      [
        "default",
        JSON.stringify(data),
        new Date().toISOString(),
      ]
    );
    console.log(`  [bot-menu] Migrated bot menu`);
    return 1;
  } catch (error) {
    console.warn(`  [bot-menu] Failed to migrate bot menu: ${error.message}`);
    return 0;
  }
}

async function main() {
  console.log("=== Migrate Shared JSON to Per-Tenant Tables ===\n");
  
  const connectionString = await getConnectionString();
  
  // Parse connection string to get clean URL
  let cleanUrl = connectionString;
  try {
    const parsedUrl = new URL(connectionString);
    parsedUrl.search = "";
    cleanUrl = parsedUrl.toString();
  } catch (e) {
    if (connectionString.includes("?")) {
      cleanUrl = connectionString.split("?")[0];
    }
  }
  
  const client = new Client({ connectionString: cleanUrl });
  await client.connect();
  
  try {
    const tenants = await getTenantSchemas(client);
    
    if (!tenants.length) {
      console.log("No active tenants found. Nothing to migrate.");
      return;
    }
    
    console.log(`Found ${tenants.length} active tenant(s):`);
    tenants.forEach((t) => console.log(`  - ${t.name} (${t.dbSchema})`));
    console.log("");
    
    let totalBlocked = 0;
    let totalAliases = 0;
    let totalMenus = 0;
    
    for (const tenant of tenants) {
      console.log(`Processing tenant: ${tenant.name} (${tenant.dbSchema})`);
      
      try {
        totalBlocked += await migrateBlockedUsers(client, tenant.dbSchema);
        totalAliases += await migrateBarberAliases(client, tenant.dbSchema);
        totalMenus += await migrateBotMenu(client, tenant.dbSchema);
      } catch (error) {
        console.error(`  Error processing tenant ${tenant.name}: ${error.message}`);
      }
      
      console.log("");
    }
    
    console.log("=== Migration Summary ===");
    console.log(`Tenants processed: ${tenants.length}`);
    console.log(`Blocked users migrated: ${totalBlocked}`);
    console.log(`Barber aliases migrated: ${totalAliases}`);
    console.log(`Bot menus migrated: ${totalMenus}`);
    console.log("\nMigration completed successfully!");
    
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
