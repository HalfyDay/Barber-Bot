const fs = require('fs');

const filePath = 'crm-source/32-revenue-view.js';
const helpersPath = 'scripts/zzz-helpers-raw.js';
const levelViewPath = 'scripts/zzz-level-view-raw.js';

const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find PositionsView end (look for the closing }; before LevelView)
let positionsEnd = -1;
let levelViewStart = -1;
let levelViewEnd = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const LevelView = (') && levelViewStart === -1) {
    levelViewStart = i;
  }
  if (lines[i].includes('const PRESETS = [') && levelViewEnd === -1) {
    levelViewEnd = i - 1; // line before PRESETS
  }
}

// Find the last }; before LevelView (end of PositionsView)
for (let i = levelViewStart - 1; i >= 0; i--) {
  if (lines[i].trim() === '};') {
    positionsEnd = i;
    break;
  }
}

console.log('PositionsView ends at line:', positionsEnd + 1);
console.log('LevelView starts at line:', levelViewStart + 1);
console.log('LevelView ends at line:', levelViewEnd + 1);

if (positionsEnd === -1 || levelViewStart === -1 || levelViewEnd === -1) {
  console.error('Could not find boundaries!');
  process.exit(1);
}

// Read the helper and new LevelView content
const helpers = fs.readFileSync(helpersPath, 'utf8');
const newLevelView = fs.readFileSync(levelViewPath, 'utf8');

// Build new file: everything before LevelView + helpers + new LevelView + everything after LevelView
const before = lines.slice(0, levelViewStart).join('\n');
const after = lines.slice(levelViewEnd + 1).join('\n');

const newContent = before + '\n' + helpers + '\n' + newLevelView + '\n' + after;

fs.writeFileSync(filePath, newContent, 'utf8');

// Verify
const newLines = newContent.split('\n');
const hasPositions = newLines.some(l => l.includes('const PositionsView = ('));
const hasRevenue = newLines.some(l => l.includes('const RevenueView = ('));
const hasLevel = newLines.some(l => l.includes('const LevelView = ('));
const hasZzz = newLines.some(l => l.includes('const ZzzGlowBar'));

console.log('New file lines:', newLines.length);
console.log('PositionsView present:', hasPositions);
console.log('RevenueView present:', hasRevenue);
console.log('LevelView present:', hasLevel);
console.log('ZZZ helpers present:', hasZzz);
