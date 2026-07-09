const Database = require('better-sqlite3');
const db = new Database('C:/Users/HalfDay/.local/share/mimocode/mimocode.db', { readonly: true });

// Get non-checkpoint-writer sessions for this project
const rows = db.prepare("SELECT s.id as sid, s.title, s.time_created FROM session s WHERE s.project_id = ? ORDER BY s.time_created DESC").all('3d4c4a28-df02-4d16-a0af-655a6e58b0b2');
const relevant = rows.filter(r => !r.title.startsWith('checkpoint-writer'));
console.log("=== RELEVANT SESSIONS ===");
console.log(JSON.stringify(relevant.map(r => ({...r, time: new Date(r.time_created).toISOString()})), null, 2));

// For each relevant session, search user messages for rule-like statements
console.log("\n=== USER MESSAGES WITH RULES/DECISIONS ===");
for (const s of relevant) {
  const userMsgs = db.prepare(`SELECT m.id, m.time_created, json_extract(m.data, '$.role') as role, json_extract(m.data, '$.content') as content FROM message m WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'user'`).all(s.sid);
  for (const m of userMsgs) {
    if (m.content && (m.content.includes('\u0432\u0441\u0435\u0433\u0434\u0430') || m.content.includes('\u043d\u0438\u043a\u043e\u0433\u0434\u0430') || m.content.includes('\u0437\u0430\u043f\u043e\u043c\u043d\u0438') || m.content.includes('\u0440\u0435\u0448\u0438\u043b') || m.content.includes('\u0440\u0435\u0448\u0438\u043b\u0438') || m.content.includes('\u043d\u0443\u0436\u043d\u043e') || m.content.includes('\u043b\u0443\u0447\u0448\u0435'))) {
      console.log(`\n[${new Date(m.time_created).toISOString()}] Session: ${s.title}`);
      console.log(m.content.substring(0, 500));
    }
  }
}

// Check for error patterns
console.log("\n=== ASSISTANT ERRORS/FIXES ===");
for (const s of relevant.slice(0, 5)) {
  const assistantParts = db.prepare(`SELECT p.time_created, substr(json_extract(p.data, '$.tool'), 1, 50) as tool, substr(json_extract(p.data, '$.state.output'), 1, 300) as output FROM message m JOIN part p ON p.message_id = m.id WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'tool' AND json_extract(p.data, '$.state.output') LIKE '%Error%' ORDER BY m.time_created`).all(s.sid);
  if (assistantParts.length > 0) {
    console.log(`\nSession: ${s.title}`);
    for (const p of assistantParts) {
      console.log(`  [${new Date(p.time_created).toISOString()}] Tool: ${p.tool}`);
      console.log(`  Output: ${p.output}`);
    }
  }
}

db.close();
