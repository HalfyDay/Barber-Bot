const fs = require('fs');

const filePath = 'server-source/30-runtime-api.js';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find the level-history section (starts with "// ── Level evaluation:")
let sectionStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Level evaluation: monthly cron')) {
    sectionStart = i;
    break;
  }
}

// Find where registerAdminCrudRoutes is called
let insertBefore = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('registerAdminCrudRoutes({')) {
    insertBefore = i;
    break;
  }
}

console.log('Section to move: lines', sectionStart + 1, 'to', lines.length);
console.log('Insert before line:', insertBefore + 1);

if (sectionStart === -1 || insertBefore === -1) {
  console.error('Could not find boundaries!');
  process.exit(1);
}

// Extract the section to move (from sectionStart to end of file)
const section = lines.slice(sectionStart).join('\n');

// Build new file:
// 1. Everything before the section (0 to sectionStart-1)
// 2. The section itself
// 3. A blank line
// 4. Everything from insertBefore to sectionStart-1 (the part we're inserting before)
const beforeSection = lines.slice(0, sectionStart).join('\n');
const beforeInsert = lines.slice(insertBefore, sectionStart).join('\n');

const newContent = beforeSection + '\n' + section + '\n\n' + beforeInsert;

fs.writeFileSync(filePath, newContent, 'utf8');

// Verify
const newLines = newContent.split('\n');
const hasLevelHistory = newLines.some(l => l.includes("app.get('/api/level-history'"));
const hasCrudRoutes = newLines.some(l => l.includes('registerAdminCrudRoutes'));
const levelIdx = newLines.findIndex(l => l.includes("app.get('/api/level-history'"));
const crudIdx = newLines.findIndex(l => l.includes('registerAdminCrudRoutes'));

console.log('New file lines:', newLines.length);
console.log('level-history route at line:', levelIdx + 1);
console.log('registerAdminCrudRoutes at line:', crudIdx + 1);
console.log('Route before catch-all:', levelIdx < crudIdx);
