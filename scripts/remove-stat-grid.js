const fs = require('fs');
let content = fs.readFileSync('crm-source/20-barbers.js', 'utf8');

const needle = '<div className="grid grid-cols-4 gap-2 rounded-lg bg-[color:var(--crm-surface-3)] p-2 text-center">';
const gridStart = content.indexOf(needle);
if (gridStart === -1) { console.log('Grid not found'); process.exit(1); }

// Find the opening tag end
const tagEnd = content.indexOf('>', gridStart) + 1;

// Count nesting to find closing </div>
let depth = 1;
let i = tagEnd;
while (i < content.length && depth > 0) {
  const nextOpen = content.indexOf('<div', i);
  const nextClose = content.indexOf('</div>', i);
  if (nextClose === -1) break;
  if (nextOpen !== -1 && nextOpen < nextClose) {
    depth++;
    i = nextOpen + 4;
  } else {
    depth--;
    if (depth === 0) {
      const gridEnd = nextClose + 6;
      // Remove trailing newlines
      let removeEnd = gridEnd;
      while (removeEnd < content.length && (content[removeEnd] === '\n' || content[removeEnd] === '\r')) removeEnd++;
      content = content.substring(0, gridStart) + content.substring(removeEnd);
      fs.writeFileSync('crm-source/20-barbers.js', content, 'utf8');
      console.log('Done. Removed grid from position', gridStart, 'to', removeEnd);
      process.exit(0);
    }
    i = nextClose + 6;
  }
}
console.log('Could not find matching closing div');
process.exit(1);
