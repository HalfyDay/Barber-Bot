#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const { buildBundleImportSql } = require("./lib/postgresSqlEmitter");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    bundlePath: null,
    writePath: null,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--bundle") {
      args.bundlePath = argv[index + 1] || null;
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

const main = () => {
  const { bundlePath, writePath } = parseArgs();
  if (!bundlePath) {
    throw new Error("Usage: node scripts/postgresBundleToSql.js --bundle <bundle.json> [--write <file.sql>]");
  }

  const resolvedBundle = path.resolve(process.cwd(), bundlePath);
  const bundle = JSON.parse(fs.readFileSync(resolvedBundle, "utf8"));
  const sql = buildBundleImportSql(bundle);

  if (writePath) {
    const resolvedWritePath = path.resolve(process.cwd(), writePath);
    fs.mkdirSync(path.dirname(resolvedWritePath), { recursive: true });
    fs.writeFileSync(resolvedWritePath, sql, "utf8");
    console.log(`Import SQL written to ${resolvedWritePath}`);
    return;
  }

  process.stdout.write(sql);
};

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
};
