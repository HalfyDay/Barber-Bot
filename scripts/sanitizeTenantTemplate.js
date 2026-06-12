const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "..", "prisma", "tenant_template.sql");

if (!fs.existsSync(templatePath)) {
  console.error(`Template not found at: ${templatePath}`);
  process.exit(1);
}

let sql = fs.readFileSync(templatePath, "utf8");

// Remove public schema creation
sql = sql.replace(/-- CreateSchema\r?\nCREATE SCHEMA IF NOT EXISTS "public";\r?\n/g, "");

// Remove "public". prefix from everything
sql = sql.replace(/"public"\./g, "");

fs.writeFileSync(templatePath, sql, "utf8");
console.log("tenant_template.sql sanitized successfully.");
