#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    schemaPath: "prisma/schema.postgresql.prisma",
    writePath: null,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--schema") {
      args.schemaPath = argv[index + 1] || args.schemaPath;
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || null;
      index += 1;
    }
  }
  return args;
};

const buildPrismaDiffArgs = (schemaPath) => [
  "prisma",
  "migrate",
  "diff",
  "--from-empty",
  "--to-schema-datamodel",
  schemaPath,
  "--script",
];

const quoteShellArg = (value) => {
  const text = String(value);
  if (process.platform === "win32") {
    return `"${text.replace(/"/g, '\\"')}"`;
  }
  return `'${text.replace(/'/g, `'\\''`)}'`;
};

const generateInitSql = ({ schemaPath, cwd = process.cwd() }) => {
  const resolvedSchema = path.resolve(cwd, schemaPath);
  const command =
    process.platform === "win32"
      ? `npx prisma migrate diff --from-empty --to-schema-datamodel ${quoteShellArg(resolvedSchema)} --script`
      : `npx prisma migrate diff --from-empty --to-schema-datamodel ${quoteShellArg(resolvedSchema)} --script`;
  const result = spawnSync(command, {
    cwd,
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
    shell: true,
  });
  if (result.status !== 0) {
    throw new Error(
      (result.stderr || result.stdout || "Failed to generate PostgreSQL init SQL.").trim(),
    );
  }
  return result.stdout;
};

const main = () => {
  const { schemaPath, writePath } = parseArgs();
  const sql = generateInitSql({ schemaPath });
  if (writePath) {
    const resolved = path.resolve(process.cwd(), writePath);
    fs.mkdirSync(path.dirname(resolved), { recursive: true });
    fs.writeFileSync(resolved, sql, "utf8");
    console.log(`PostgreSQL init SQL written to ${resolved}`);
    return;
  }
  process.stdout.write(sql);
};

if (require.main === module) {
  main();
}

module.exports = {
  buildPrismaDiffArgs,
  generateInitSql,
  parseArgs,
  quoteShellArg,
};
