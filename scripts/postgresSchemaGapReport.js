#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    schemaPath: "prisma/schema.sqlite.legacy.prisma",
    bundlePath: null,
    writePath: null,
    title: "PostgreSQL Schema Gap Report",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--schema") {
      args.schemaPath = argv[index + 1] || args.schemaPath;
      index += 1;
      continue;
    }
    if (token === "--bundle") {
      args.bundlePath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--title") {
      args.title = argv[index + 1] || args.title;
      index += 1;
    }
  }
  return args;
};

const parsePrismaSchema = (schemaText) => {
  const providerMatch = schemaText.match(/datasource\s+\w+\s*\{[\s\S]*?provider\s*=\s*"([^"]+)"/m);
  const urlMatch = schemaText.match(/datasource\s+\w+\s*\{[\s\S]*?url\s*=\s*([^\n]+)/m);
  const modelNames = [...schemaText.matchAll(/model\s+(\w+)\s*\{/g)].map((match) => match[1]);

  return {
    provider: providerMatch ? providerMatch[1] : null,
    url: urlMatch ? urlMatch[1].trim() : null,
    models: modelNames,
  };
};

const buildSchemaGapReport = ({ schema, bundle, title }) => {
  const prismaModels = new Set(schema.models || []);
  const bundleTables = bundle.importOrder || [];
  const missingTables = bundleTables.filter((tableName) => !prismaModels.has(tableName));
  const blockers = [];

  if (schema.provider !== "postgresql") {
    blockers.push(`Datasource provider is ${schema.provider || "unknown"}, expected postgresql.`);
  }
  if ((schema.url || "").includes("file:")) {
    blockers.push("Datasource url is still SQLite file-based.");
  }
  if (missingTables.length) {
    blockers.push(`Prisma schema is missing import tables: ${missingTables.join(", ")}.`);
  }

  const lines = [
    `# ${title}`,
    "",
    `Generated at: ${new Date().toISOString()}`,
    "",
    "## Current Prisma State",
    `- Provider: ${schema.provider || "unknown"}`,
    `- URL: ${schema.url || "unknown"}`,
    `- Models: ${(schema.models || []).length}`,
    "",
    "## Import Tables",
    ...bundleTables.map((tableName) => `- ${tableName}`),
    "",
    "## Missing Prisma Models",
    ...(missingTables.length ? missingTables.map((tableName) => `- ${tableName}`) : ["- none"]),
    "",
    "## Blockers",
    ...(blockers.length ? blockers.map((item) => `- ${item}`) : ["- none"]),
  ];

  return `${lines.join("\n")}\n`;
};

const main = () => {
  const { schemaPath, bundlePath, writePath, title } = parseArgs();
  if (!bundlePath) {
    throw new Error("Usage: node scripts/postgresSchemaGapReport.js --bundle <bundle.json> [--schema prisma/schema.sqlite.legacy.prisma] [--write report.md]");
  }

  const schemaText = fs.readFileSync(path.resolve(process.cwd(), schemaPath), "utf8");
  const bundle = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), bundlePath), "utf8"));
  const payload = buildSchemaGapReport({
    schema: parsePrismaSchema(schemaText),
    bundle,
    title,
  });

  if (writePath) {
    const resolved = path.resolve(process.cwd(), writePath);
    fs.mkdirSync(path.dirname(resolved), { recursive: true });
    fs.writeFileSync(resolved, payload, "utf8");
    console.log(`Schema gap report written to ${resolved}`);
    return;
  }

  process.stdout.write(payload);
};

if (require.main === module) {
  main();
}

module.exports = {
  buildSchemaGapReport,
  parseArgs,
  parsePrismaSchema,
};
