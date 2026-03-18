#!/usr/bin/env node

require("dotenv").config();

const path = require("path");
const { exec } = require("child_process");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    schemaPath: "prisma/schema.postgresql.prisma",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--schema") {
      args.schemaPath = argv[index + 1] || args.schemaPath;
      index += 1;
    }
  }

  return args;
};

const buildGenerateArgs = (schemaPath) => [
  "prisma",
  "generate",
  "--schema",
  schemaPath,
];

const quoteShellArg = (value) => {
  const stringValue = String(value);
  if (!/[ \t"]/u.test(stringValue)) {
    return stringValue;
  }
  return `"${stringValue.replace(/"/g, '\\"')}"`;
};

const buildGenerateCommand = (schemaPath) =>
  `npx prisma generate --schema ${quoteShellArg(schemaPath)}`;

const runGenerate = (schemaPath) =>
  new Promise((resolve, reject) => {
    exec(buildGenerateCommand(schemaPath), { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
        return;
      }
      resolve({ stdout, stderr });
    });
  });

const main = async () => {
  const { schemaPath } = parseArgs();
  const resolvedSchemaPath = path.resolve(process.cwd(), schemaPath);
  await runGenerate(resolvedSchemaPath);
  console.log(`PostgreSQL Prisma client generated from ${resolvedSchemaPath}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  buildGenerateCommand,
  buildGenerateArgs,
  parseArgs,
  quoteShellArg,
  runGenerate,
};
