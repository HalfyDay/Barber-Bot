#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const { sanitizeBundle } = require("./lib/postgresBundleSanitizer");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    bundlePath: "docs/reports/server-postgres-export-bundle.json",
    writeBundlePath: "docs/reports/server-postgres-export-bundle-sanitized.json",
    writeReportPath: "docs/reports/server-postgres-bundle-sanitization.json",
    failOnConflict: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--bundle") {
      args.bundlePath = argv[index + 1] || args.bundlePath;
      index += 1;
      continue;
    }
    if (token === "--write-bundle") {
      args.writeBundlePath = argv[index + 1] || args.writeBundlePath;
      index += 1;
      continue;
    }
    if (token === "--write-report") {
      args.writeReportPath = argv[index + 1] || args.writeReportPath;
      index += 1;
      continue;
    }
    if (token === "--fail-on-conflict") {
      args.failOnConflict = true;
    }
  }

  return args;
};

const writeJson = (targetPath, payload) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return resolved;
};

const main = async () => {
  const args = parseArgs();
  const bundle = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), args.bundlePath), "utf8"));
  const result = sanitizeBundle(bundle);

  const bundlePath = writeJson(args.writeBundlePath, result.bundle);
  const reportPath = writeJson(args.writeReportPath, result.report);

  console.log(`Sanitized PostgreSQL bundle written to ${bundlePath}`);
  console.log(`Bundle sanitization report written to ${reportPath}`);
  console.log(`safeToImport=${result.report.summary.safeToImport ? "yes" : "no"}`);
  console.log(`removedExactDuplicateRows=${result.report.summary.removedExactDuplicateRows}`);

  if (args.failOnConflict && !result.report.summary.safeToImport) {
    process.exitCode = 1;
  }
};

if (require.main === module) {
  main().catch((error) => {
    console.error(error?.message || error);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
};
