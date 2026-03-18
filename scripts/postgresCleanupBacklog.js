#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const normalizeText = (value) => (value ?? "").toString().trim();

const parseArgs = (argv = process.argv.slice(2)) => {
  const args = {
    duplicatesPath: null,
    cleanupPath: null,
    inventoryPath: null,
    writePath: null,
    title: "PostgreSQL Cleanup Backlog",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--duplicates") {
      args.duplicatesPath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--cleanup") {
      args.cleanupPath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--inventory") {
      args.inventoryPath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--write") {
      args.writePath = argv[index + 1] || null;
      index += 1;
      continue;
    }
    if (token === "--title") {
      args.title = argv[index + 1] || args.title;
      index += 1;
    }
  }
  return args;
};

const readJson = (targetPath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), targetPath), "utf8"));

const formatList = (items, fallback = "none") => {
  if (!items.length) return `- ${fallback}`;
  return items.map((item) => `- ${item}`).join("\n");
};

const buildCleanupBacklog = ({ inventory, cleanup, duplicates, title }) => {
  const duplicatePhoneItems = (duplicates.duplicatePhones || []).map((group) => {
    const users = (group.users || []).map((user) => `${user.id} (${normalizeText(user.Phone) || "no-phone"})`);
    return `${group.key}: ${users.join(", ")}`;
  });
  const duplicateTelegramItems = (duplicates.duplicateTelegramIds || []).map((group) => {
    const users = (group.users || []).map((user) => `${user.id} (${normalizeText(user.Phone) || "no-phone"})`);
    return `${group.key}: ${users.join(", ")}`;
  });

  const appointmentsWithoutUser = cleanup.appointmentsMissingUserReference || [];
  const appointmentsWithoutPhone = appointmentsWithoutUser.filter((row) => !normalizeText(row.normalizedPhone));
  const appointmentsWithPhoneNoMatch = appointmentsWithoutUser.filter(
    (row) => normalizeText(row.normalizedPhone) && !(row.matchingUsersByPhone || []).length,
  );
  const appointmentsWithSingleMatch = appointmentsWithoutUser.filter((row) => row.suggestedUserId);

  const lines = [
    `# ${title}`,
    "",
    `Generated at: ${inventory.generatedAt || cleanup.generatedAt || new Date().toISOString()}`,
    "",
    "## Summary",
    `- Duplicate phones: ${duplicatePhoneItems.length}`,
    `- Duplicate Telegram IDs: ${duplicateTelegramItems.length}`,
    `- Appointments without UserID: ${appointmentsWithoutUser.length}`,
    `- Appointments without UserID and without phone: ${appointmentsWithoutPhone.length}`,
    `- Appointments without UserID but with phone and no user match: ${appointmentsWithPhoneNoMatch.length}`,
    `- Appointments without UserID with single candidate user: ${appointmentsWithSingleMatch.length}`,
    `- Incomplete schedules: ${(cleanup.incompleteSchedules || []).length}`,
    "",
    "## Production Cleanup Order",
    "1. Resolve duplicate user identities before any PostgreSQL import.",
    "2. Decide how to handle orphan appointments without UserID.",
    "3. Remove or archive broken schedule rows without Barber/Date.",
    "4. Re-run inventory, duplicates, cleanup and export bundle after cleanup.",
    "",
    "## Duplicate Phones",
    formatList(duplicatePhoneItems),
    "",
    "## Duplicate Telegram IDs",
    formatList(duplicateTelegramItems),
    "",
    "## Appointments Without UserID",
    `- Total: ${appointmentsWithoutUser.length}`,
    `- Without phone: ${appointmentsWithoutPhone.length}`,
    `- With phone but no matching user: ${appointmentsWithPhoneNoMatch.length}`,
    `- With single candidate user: ${appointmentsWithSingleMatch.length}`,
    "",
    "### Single-match candidates",
    formatList(
      appointmentsWithSingleMatch.map(
        (row) => `${row.id}: ${row.normalizedPhone} -> ${row.suggestedUserId}`,
      ),
    ),
    "",
    "### Phone present but no user match",
    formatList(
      appointmentsWithPhoneNoMatch.map(
        (row) => `${row.id}: ${row.normalizedPhone} (${row.customerName || "no-name"})`,
      ),
    ),
    "",
    "## Incomplete Schedules",
    formatList(
      (cleanup.incompleteSchedules || []).map(
        (row) => `${row.id}: barber=${row.barber || "null"}, date=${row.date || "null"}, week=${row.week || "null"}`,
      ),
    ),
    "",
    "## Import Readiness",
    `- duplicateActiveSlots: ${inventory.issues?.duplicateActiveSlots || 0}`,
    `- servicePricesMissingBarber: ${inventory.issues?.servicePricesMissingBarber || 0}`,
    `- servicePricesMissingService: ${inventory.issues?.servicePricesMissingService || 0}`,
  ];

  return `${lines.join("\n")}\n`;
};

const main = () => {
  const { duplicatesPath, cleanupPath, inventoryPath, writePath, title } = parseArgs();
  if (!duplicatesPath || !cleanupPath || !inventoryPath) {
    throw new Error("Usage: node scripts/postgresCleanupBacklog.js --inventory <path> --duplicates <path> --cleanup <path> [--write <path>] [--title <title>]");
  }

  const inventory = readJson(inventoryPath);
  const cleanup = readJson(cleanupPath);
  const duplicates = readJson(duplicatesPath);
  const payload = buildCleanupBacklog({
    inventory,
    cleanup,
    duplicates,
    title,
  });

  if (writePath) {
    const resolved = path.resolve(process.cwd(), writePath);
    fs.mkdirSync(path.dirname(resolved), { recursive: true });
    fs.writeFileSync(resolved, payload, "utf8");
    console.log(`Cleanup backlog written to ${resolved}`);
    return;
  }

  process.stdout.write(payload);
};

if (require.main === module) {
  main();
}

module.exports = {
  buildCleanupBacklog,
  parseArgs,
};
