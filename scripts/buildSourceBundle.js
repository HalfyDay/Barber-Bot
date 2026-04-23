const fs = require("fs");
const path = require("path");

const [, , sourceRootArg, manifestArg, outputArg] = process.argv;

if (!sourceRootArg || !manifestArg || !outputArg) {
  console.error(
    "Usage: node scripts/buildSourceBundle.js <sourceRoot> <manifestFile> <outputFile>",
  );
  process.exit(1);
}

const sourceRoot = path.resolve(process.cwd(), sourceRootArg);
const manifestPath = path.resolve(process.cwd(), manifestArg);
const outputPath = path.resolve(process.cwd(), outputArg);

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
if (!Array.isArray(manifest) || !manifest.length) {
  console.error(`Manifest ${manifestPath} must be a non-empty JSON array.`);
  process.exit(1);
}

const contents = manifest.map((relativePath) => {
  const absolutePath = path.resolve(sourceRoot, relativePath);
  const fileContents = fs
    .readFileSync(absolutePath, "utf8")
    .replace(/^\uFEFF/, "")
    .replace(/\r\n/g, "\n")
    .trimEnd();
  return `// --- ${relativePath} ---\n${fileContents}`;
});

fs.writeFileSync(outputPath, `${contents.join("\n\n")}\n`, "utf8");
console.log(
  `[build-source-bundle] Wrote ${path.relative(process.cwd(), outputPath)} from ${manifest.length} source files.`,
);
