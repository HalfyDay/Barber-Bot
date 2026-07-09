const Database = require('better-sqlite3');
const db = new Database('C:/Users/HalfDay/.local/share/mimocode/mimocode.db', { readonly: true });

// Get recent sessions for this project (exclude checkpoint-writer subagents)
const recentSessions = db.prepare(
  "SELECT s.id, s.title, s.time_created FROM session s WHERE s.project_id = ? AND s.title NOT LIKE 'checkpoint-writer%' ORDER BY s.time_created DESC LIMIT 15"
).all('3d4c4a28-df02-4d16-a0af-655a6e58b0b2');

console.log("=== RECENT SESSIONS (non-checkpoint-writer) ===");
for (const s of recentSessions) {
  console.log(`\n[${new Date(s.time_created).toISOString()}] ${s.id}: ${s.title}`);
}

// For each session, get user messages
console.log("\n\n=== USER MESSAGES (recent sessions) ===");
for (const s of recentSessions) {
  const msgs = db.prepare(
    "SELECT json_extract(m.data, '$.role') as role, json_extract(m.data, '$.content') as content FROM message m WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'user' ORDER BY m.time_created"
  ).all(s.id);
  
  if (msgs.length > 0) {
    console.log(`\n--- ${s.title} ---`);
    for (const m of msgs) {
      if (m.content) {
        console.log(`[user]: ${m.content.substring(0, 500)}`);
      }
    }
  }
}

// Search for durable facts - assistant text with key patterns
console.log("\n\n=== ASSISTANT TEXT WITH DECISIONS/FACTS ===");
for (const s of recentSessions.slice(0, 8)) {
  const parts = db.prepare(
    "SELECT substr(json_extract(p.data, '$.text'), 1, 600) as text FROM message m JOIN part p ON p.message_id = m.id WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'text' AND (json_extract(p.data, '$.text') LIKE '%commit%' OR json_extract(p.data, '$.text') LIKE '%deploy%' OR json_extract(p.data, '$.text') LIKE '%restart%' OR json_extract(p.data, '$.text') LIKE '%backup%' OR json_extract(p.data, '$.text') LIKE '%CreatorIncome%' OR json_extract(p.data, '$.text') LIKE '%reorder%' OR json_extract(p.data, '$.text') LIKE '%prisma%generate%') ORDER BY m.time_created LIMIT 3"
  ).all(s.id);
  
  if (parts.length > 0) {
    console.log(`\n--- ${s.title} ---`);
    for (const p of parts) {
      if (p.text) console.log(`[assistant]: ${p.text}`);
    }
  }
}

// Check for specific patterns: backup retention, creator income deployment
console.log("\n\n=== SPECIFIC PATTERNS ===");
const patterns = ['BACKUP_RETENTION', 'CreatorIncome', 'backup.*10', 'backup.*retention'];
for (const pattern of patterns) {
  const rows = db.prepare(
    "SELECT s.title, substr(json_extract(m.data, '$.content'), 1, 500) as content FROM message m JOIN session s ON m.session_id = s.id WHERE s.project_id = ? AND json_extract(m.data, '$.role') = 'user' AND json_extract(m.data, '$.content') LIKE ? ORDER BY m.time_created DESC LIMIT 3"
  ).all('3d4c4a28-df02-4d16-a0af-655a6e58b0b2', `%${pattern}%`);
  
  if (rows.length > 0) {
    console.log(`\nPattern "${pattern}":`);
    for (const r of rows) {
      console.log(`  [${r.title}]: ${r.content}`);
    }
  }
}

db.close();
