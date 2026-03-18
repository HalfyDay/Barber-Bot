const fs = require("fs");
const path = require("path");

const DEFAULT_DATABASE_URL_TEMPLATE = "postgresql://postgres:postgres@127.0.0.1:5432/barber_bot?schema=public";
const DEFAULT_APP_BASE_URL_TEMPLATE = "http://127.0.0.1:3000";

const resolveArtifact = (targetPath) => {
  const resolvedPath = path.resolve(process.cwd(), targetPath);
  const exists = fs.existsSync(resolvedPath);
  return {
    path: resolvedPath,
    exists,
    sizeBytes: exists ? fs.statSync(resolvedPath).size : 0,
  };
};

const readJsonFile = (targetPath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), targetPath), "utf8"));

const readTextFile = (targetPath) => fs.readFileSync(path.resolve(process.cwd(), targetPath), "utf8");

const readOptionalJsonFile = (targetPath) => {
  const resolved = path.resolve(process.cwd(), targetPath);
  if (!fs.existsSync(resolved)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(resolved, "utf8"));
};

const parseSchemaGapBlockers = (markdown) => {
  const lines = String(markdown || "").split(/\r?\n/);
  const blockers = [];
  let inBlockersSection = false;

  for (const line of lines) {
    if (/^##\s+/i.test(line)) {
      inBlockersSection = /^##\s+Blockers/i.test(line);
      continue;
    }
    if (!inBlockersSection) {
      continue;
    }
    const match = line.match(/^- (.+)$/);
    if (!match) {
      continue;
    }
    const value = match[1].trim();
    if (/^none$/i.test(value)) {
      return [];
    }
    blockers.push(value);
  }

  return blockers;
};

const buildCommands = ({
  databaseUrlTemplate = DEFAULT_DATABASE_URL_TEMPLATE,
  appBaseUrlTemplate = DEFAULT_APP_BASE_URL_TEMPLATE,
  initSqlPath,
  importSqlPath,
  bundlePath,
}) => ({
  preflight: `npm run db:smoke-preflight -- --database-url "${databaseUrlTemplate}" --init-sql ${initSqlPath} --import-sql ${importSqlPath} --bundle ${bundlePath}`,
  applyInit: `npm run db:apply-sql -- --database-url "${databaseUrlTemplate}" --file ${initSqlPath}`,
  applyImport: `npm run db:apply-sql -- --database-url "${databaseUrlTemplate}" --file ${importSqlPath}`,
  verifyImport: `npm run db:verify-import -- --database-url "${databaseUrlTemplate}" --bundle ${bundlePath} --write docs/reports/postgres-import-verification.json`,
  smokeRun: `npm run db:smoke-run -- --database-url "${databaseUrlTemplate}" --init-sql ${initSqlPath} --import-sql ${importSqlPath} --bundle ${bundlePath}`,
  powershellSmokeRun: `powershell -File scripts/run-postgres-smoke.ps1 -DatabaseUrl "${databaseUrlTemplate}" -InitSql "${initSqlPath}" -ImportSql "${importSqlPath}" -Bundle "${bundlePath}"`,
  powershellFullRehearsal: `powershell -File scripts/run-postgres-rehearsal.ps1 -DatabaseUrl "${databaseUrlTemplate}" -InitSql "${initSqlPath}" -ImportSql "${importSqlPath}" -Bundle "${bundlePath}" -StartApp`,
  appSmoke: `npm run app:smoke -- --base-url "${appBaseUrlTemplate}" --owner-login "<owner-login>" --owner-password "<owner-password>" --home-phone "<home-phone>" --home-password "<home-password>" --write docs/reports/app-runtime-smoke.json --write-summary docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md`,
  powershellAppSmoke: `powershell -File scripts/run-app-smoke.ps1 -BaseUrl "${appBaseUrlTemplate}" -OwnerLogin "<owner-login>" -OwnerPassword "<owner-password>" -HomePhone "<home-phone>" -HomePassword "<home-password>" -WriteJson "docs/reports/app-runtime-smoke.json" -WriteSummary "docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md"`,
});

const buildCutoverPacket = ({
  label = "server",
  inventoryPath,
  duplicatesPath,
  cleanupPath,
  backlogPath,
  initSqlPath,
  importSqlPath,
  bundlePath,
  schemaGapPath,
  sanitizationPath = null,
  databaseUrlTemplate = DEFAULT_DATABASE_URL_TEMPLATE,
  appBaseUrlTemplate = DEFAULT_APP_BASE_URL_TEMPLATE,
}) => {
  const inventory = readJsonFile(inventoryPath);
  const duplicates = readJsonFile(duplicatesPath);
  const cleanup = readJsonFile(cleanupPath);
  const schemaGapMarkdown = readTextFile(schemaGapPath);
  const schemaBlockers = parseSchemaGapBlockers(schemaGapMarkdown);
  const sanitization = sanitizationPath ? readOptionalJsonFile(sanitizationPath) : null;
  const sanitizationConflicts = sanitization?.summary?.conflictingDuplicateGroups || 0;

  return {
    generatedAt: new Date().toISOString(),
    label,
    counts: inventory.counts || {},
    issues: inventory.issues || {},
    readiness: {
      duplicatePhones: Array.isArray(duplicates.duplicatePhones) ? duplicates.duplicatePhones.length : 0,
      duplicateTelegramIds: Array.isArray(duplicates.duplicateTelegramIds) ? duplicates.duplicateTelegramIds.length : 0,
      appointmentsMissingUserReference: cleanup.summary?.appointmentsMissingUserReference || 0,
      incompleteSchedules: cleanup.summary?.incompleteSchedules || 0,
      removedExactDuplicateRows: sanitization?.summary?.removedExactDuplicateRows || 0,
      conflictingDuplicateGroups: sanitizationConflicts,
      schemaBlockers,
      readyForSmokeMigration: schemaBlockers.length === 0 && sanitizationConflicts === 0,
    },
    cleanupBacklogPath: path.resolve(process.cwd(), backlogPath),
    artifacts: {
      inventory: resolveArtifact(inventoryPath),
      duplicates: resolveArtifact(duplicatesPath),
      cleanup: resolveArtifact(cleanupPath),
      backlog: resolveArtifact(backlogPath),
      initSql: resolveArtifact(initSqlPath),
      importSql: resolveArtifact(importSqlPath),
      bundle: resolveArtifact(bundlePath),
      schemaGap: resolveArtifact(schemaGapPath),
      sanitization: sanitizationPath ? resolveArtifact(sanitizationPath) : null,
    },
    commands: buildCommands({
      databaseUrlTemplate,
      appBaseUrlTemplate,
      initSqlPath,
      importSqlPath,
      bundlePath,
    }),
  };
};

const formatExists = (entry) => (entry.exists ? "yes" : "no");

const buildCutoverRunbookMarkdown = (packet, title = "PostgreSQL Cutover Runbook") => {
  const artifacts = Object.entries(packet.artifacts)
    .filter(([, artifact]) => Boolean(artifact))
    .map(([name, artifact]) => `- ${name}: exists=${formatExists(artifact)}, sizeBytes=${artifact.sizeBytes}, path=${artifact.path}`)
    .join("\n");
  const schemaBlockers = packet.readiness.schemaBlockers.length
    ? packet.readiness.schemaBlockers.map((entry) => `- ${entry}`).join("\n")
    : "- none";

  return `# ${title}

Generated at: ${packet.generatedAt}

## Current Readiness
- Label: ${packet.label}
- Users: ${packet.counts.Users || 0}
- Appointments: ${packet.counts.Appointments || 0}
- Schedules: ${packet.counts.Schedules || 0}
- Duplicate phones: ${packet.readiness.duplicatePhones}
- Duplicate Telegram IDs: ${packet.readiness.duplicateTelegramIds}
- Appointments without UserID: ${packet.readiness.appointmentsMissingUserReference}
- Incomplete schedules: ${packet.readiness.incompleteSchedules}
- Removed exact duplicate rows in bundle: ${packet.readiness.removedExactDuplicateRows}
- Conflicting duplicate groups in bundle: ${packet.readiness.conflictingDuplicateGroups}
- Ready for smoke migration: ${packet.readiness.readyForSmokeMigration ? "yes" : "no"}

## Schema Blockers
${schemaBlockers}

## Artifact Checklist
${artifacts}

## Pre-Cutover Checklist
1. Take a fresh read-only copy of the current production SQLite file.
2. Re-run inventory, duplicates, cleanup and export bundle against that final snapshot.
3. Confirm the final reports still match the expected cleanup scope.
4. Freeze writes briefly before the final import window.
5. Keep the previous SQLite snapshot untouched until the stabilization window passes.

## Smoke Rehearsal Commands
\`\`\`powershell
${packet.commands.preflight}
${packet.commands.smokeRun}
${packet.commands.powershellFullRehearsal}
\`\`\`

## Manual Cutover Commands
\`\`\`powershell
${packet.commands.applyInit}
${packet.commands.applyImport}
${packet.commands.verifyImport}
\`\`\`

## Post-Cutover Application Smoke Commands
\`\`\`powershell
${packet.commands.appSmoke}
${packet.commands.powershellAppSmoke}
\`\`\`

## Application Smoke Checklist
- Owner login
- CRM appointments list
- Site booking create
- Bot booking create
- Bot cancellation
- Staff schedule update
- Reminder path check

## Rollback Plan
1. Stop the application processes.
2. Restore the previous SQLite-based configuration.
3. Point runtime env back to the SQLite datasource.
4. Start the app with the preserved SQLite snapshot.
5. Re-run the same smoke checklist on SQLite.

## Supporting Reports
- Cleanup backlog: ${packet.cleanupBacklogPath}
`;
};

module.exports = {
  DEFAULT_DATABASE_URL_TEMPLATE,
  DEFAULT_APP_BASE_URL_TEMPLATE,
  buildCommands,
  buildCutoverPacket,
  buildCutoverRunbookMarkdown,
  parseSchemaGapBlockers,
  readOptionalJsonFile,
  readJsonFile,
  readTextFile,
  resolveArtifact,
};
