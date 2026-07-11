const path = require("path");
const fs = require("fs");
const { spawnSync } = require("child_process");

const rootDir = __dirname;
const buildScript = path.join(rootDir, "scripts", "buildSourceBundle.js");
const sourceRoot = "server-source";
const manifestPath = path.join(sourceRoot, "manifest.json");
const outputPath = "server.generated.js";
const outputPathFull = path.join(rootDir, outputPath);

// Skip rebuild in cluster workers (primary already built) or if generated file is fresh
const isClusterWorker = process.env.pm_id !== undefined && process.send;
const generatedExists = fs.existsSync(outputPathFull);
const generatedAge = generatedExists ? (Date.now() - fs.statSync(outputPathFull).mtimeMs) : Infinity;
const isFresh = generatedAge < 60000; // less than 60 seconds old

if (!isClusterWorker && !isFresh) {
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
}

require("./server.generated.js");
