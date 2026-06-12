const { Client } = require("pg");
require("dotenv").config();

const targetSubdomain = process.argv[2];
if (!targetSubdomain) {
  console.error("Usage: node scripts/migratePublicToTenant.js <subdomain>");
  process.exit(1);
}

const main = async () => {
  const connectionString = process.env.POSTGRES_DATABASE_URL;
  let cleanUrl = connectionString;
  if (connectionString.includes("?")) {
    cleanUrl = connectionString.split("?")[0];
  }
  
  const client = new Client({ connectionString: cleanUrl });
  await client.connect();
  
  try {
    // 1. Get the business metadata
    const busRes = await client.query('SELECT * FROM "public"."Businesses" WHERE "subdomain" = $1', [targetSubdomain]);
    if (busRes.rows.length === 0) {
      throw new Error(`Business with subdomain "${targetSubdomain}" not found in public.Businesses.`);
    }
    const business = busRes.rows[0];
    const schema = business.dbSchema;
    console.log(`Migrating data from public to schema: ${schema}...`);

    // 2. Define tables in order of dependencies (parent first)
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
      console.log(`Copying table: ${table}...`);
      // Get data from public
      const dataRes = await client.query(`SELECT * FROM "public"."${table}"`);
      if (dataRes.rows.length === 0) {
        console.log(`Table ${table} in public is empty, skipping.`);
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
      console.log(`Copied ${dataRes.rows.length} rows to "${schema}"."${table}".`);
    }

    // 3. Clean up public schema tables
    console.log("Cleaning up public schema tables...");
    for (const table of [...tables].reverse()) {
      await client.query(`TRUNCATE TABLE "public"."${table}" CASCADE`);
    }

    console.log(`Migration completed successfully! BrotherShop data is now isolated in schema: ${schema}`);
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await client.end();
  }
};

main();
