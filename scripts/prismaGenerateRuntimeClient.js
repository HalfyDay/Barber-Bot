#!/usr/bin/env node

require("dotenv").config();

const path = require("path");
const { exec } = require("child_process");

const { getPrismaRuntimeConfig } = require("../services/prismaRuntime");

const quoteShellArg = (value) => {
  const stringValue = String(value);
  if (!/[ \t"]/u.test(stringValue)) {
    return stringValue;
  }
  return `"${stringValue.replace(/"/g, '\\"')}"`;
};

const buildGenerateCommand = (env = process.env) => {
  const config = getPrismaRuntimeConfig(env);
  return `npx prisma generate --schema ${quoteShellArg(config.schemaPath)}`;
};

const runGenerate = (env = process.env) =>
  new Promise((resolve, reject) => {
    exec(buildGenerateCommand(env), { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
        return;
      }
      resolve({ stdout, stderr });
    });
  });

const main = async () => {
  const config = getPrismaRuntimeConfig(process.env);
  await runGenerate(process.env);
  console.log(`Prisma client generated for runtime=${config.runtime} from ${path.resolve(config.schemaPath)}`);
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  buildGenerateCommand,
  quoteShellArg,
  runGenerate,
};
