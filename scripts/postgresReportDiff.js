#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = { left: null, right: null, writePath: null };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--left") {
      args.left = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--right") {
      args.right = argv[index + 1] || null;
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

const readJson = (targetPath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), targetPath), "utf8"));

const diffNumericMap = (left = {}, right = {}) => {
  const keys = Array.from(new Set([...Object.keys(left), ...Object.keys(right)])).sort();
  return keys.map((key) => ({
    key,
    left: left[key] ?? null,
    right: right[key] ?? null,
    delta:
      typeof left[key] === "number" && typeof right[key] === "number"
        ? right[key] - left[key]
        : null,
  }));
};

const main = () => {
  const { left, right, writePath } = parseArgs();
  if (!left || !right) {
    throw new Error("Usage: node scripts/postgresReportDiff.js --left <left.json> --right <right.json> [--write <out.json>]");
  }

  const leftReport = readJson(left);
  const rightReport = readJson(right);

  const payload = {
    generatedAt: new Date().toISOString(),
    left: {
      path: path.resolve(process.cwd(), left),
      label: leftReport?.source?.label || null,
      sqlitePath: leftReport?.source?.sqlitePath || null,
    },
    right: {
      path: path.resolve(process.cwd(), right),
      label: rightReport?.source?.label || null,
      sqlitePath: rightReport?.source?.sqlitePath || null,
    },
    counts: diffNumericMap(leftReport.counts || leftReport.rowCounts, rightReport.counts || rightReport.rowCounts),
    issues: diffNumericMap(leftReport.issues, rightReport.issues),
  };

  if (writePath) {
    const resolved = path.resolve(process.cwd(), writePath);
    fs.mkdirSync(path.dirname(resolved), { recursive: true });
    fs.writeFileSync(resolved, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    console.log(`Diff report written to ${resolved}`);
    return;
  }

  console.log(JSON.stringify(payload, null, 2));
};

main();
