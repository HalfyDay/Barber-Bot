const path = require("path");
const { spawnSync } = require("child_process");

const rootDir = __dirname;
const buildScript = path.join(rootDir, "scripts", "buildSourceBundle.js");
const sourceRoot = "server-source";
const manifestPath = path.join(sourceRoot, "manifest.json");
const outputPath = "server.generated.js";

const buildResult = spawnSync(
  process.execPath,
  [buildScript, sourceRoot, manifestPath, outputPath],
  {
    cwd: rootDir,
    stdio: "inherit",
  },
);

if (buildResult.status !== 0) {
  process.exit(buildResult.status || 1);
}

require("./server.generated.js");
