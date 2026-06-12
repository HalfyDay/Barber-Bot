const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
require("dotenv").config();

const main = async () => {
  const connectionString = process.env.POSTGRES_DATABASE_URL;
  let cleanUrl = connectionString;
  if (connectionString.includes("?")) {
    cleanUrl = connectionString.split("?")[0];
  }
  
  const client = new Client({ connectionString: cleanUrl });
  await client.connect();
  
  try {
    const subdomain = "brothershop";
    const schema = "tenant_brothershop";
    const name = "BrotherShop";
    const customDomain = "brothershop.website";
    const customCrmDomain = "panel.brothershop.website";
    
    // 1. Create schema if not exists
    console.log(`1. Creating schema: ${schema}...`);
    await client.query(`CREATE SCHEMA IF NOT EXISTS "${schema}";`);
    
    // 2. Run template SQL
    console.log(`2. Initializing tables in schema: ${schema}...`);
    const sqlFilePath = path.join(__dirname, "..", "prisma", "tenant_template.sql");
    if (!fs.existsSync(sqlFilePath)) {
      throw new Error(`Template SQL not found at ${sqlFilePath}`);
    }
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8");
    await client.query(`SET search_path TO "${schema}";`);
    await client.query(sqlContent);
    
    // 3. Register business in public.Businesses
    console.log(`3. Registering business in public.Businesses...`);
    const checkRes = await client.query('SELECT * FROM "public"."Businesses" WHERE "subdomain" = $1', [subdomain]);
    let businessId;
    if (checkRes.rows.length > 0) {
      businessId = checkRes.rows[0].id;
      console.log(`Business already registered with ID: ${businessId}`);
    } else {
      businessId = randomUUID();
      const insertBizQuery = `
        INSERT INTO "public"."Businesses" 
        ("id", "name", "subdomain", "customDomain", "customCrmDomain", "dbSchema", "isActive", "createdAt", "updatedAt") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
      `;
      await client.query(insertBizQuery, [businessId, name, subdomain, customDomain, customCrmDomain, schema, true]);
      console.log(`Business registered successfully with ID: ${businessId}`);
    }
    
    // 4. Migrate data from public to tenant
    console.log(`4. Copying data from public to schema: ${schema}...`);
    const tables = [
      "Positions",
      "Barbers",
      "Services",
      "ServicePrices",
      "Users",
      "Appointments",
      "Schedules",
      "Cost",
      "BotSettings",
      "BotMessages",
      "SiteSettings",
      "HomeUserMeta",
      "TelegramAuthRequests"
    ];

    for (const table of tables) {
      console.log(`  Copying table: ${table}...`);
      // Get data from public
      const dataRes = await client.query(`SELECT * FROM "public"."${table}"`);
      if (dataRes.rows.length === 0) {
        console.log(`    Table ${table} in public is empty, skipping.`);
        continue;
      }
      
      // Clear target table
      await client.query(`TRUNCATE TABLE "${schema}"."${table}" CASCADE`);
      
      // Get column names
      const cols = dataRes.fields.map(f => `"${f.name}"`).join(", ");
      
      // Insert rows into target
      for (const row of dataRes.rows) {
        const values = Object.values(row);
        const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
        const insertQuery = `INSERT INTO "${schema}"."${table}" (${cols}) VALUES (${placeholders})`;
        await client.query(insertQuery, values);
      }
      console.log(`    Copied ${dataRes.rows.length} rows to "${schema}"."${table}".`);
    }

    // 5. Clean up public schema tables
    console.log("5. Cleaning up public schema tables...");
    for (const table of [...tables].reverse()) {
      await client.query(`TRUNCATE TABLE "public"."${table}" CASCADE`);
    }
    
    console.log(`Migration and restoration completed successfully!`);
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await client.end();
  }
};

main();
