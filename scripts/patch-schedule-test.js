/**
 * Fix mojibake in schedulePersistence.test.js using Buffer-level replacement.
 * The mojibake pattern for "Иван" in UTF-8: d0 a0 c2 98 d0 a0 d0 86 d0 a0 c2 b0 d0 a0 d0 85
 * Actual UTF-8 for "Иван": d0 98 d0 b2 d0 b0 d0 bd
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join('tests', 'schedulePersistence.test.js');

// Read as buffer to do binary replacement
let buf = fs.readFileSync(filePath);

// Hex patterns (mojibake -> correct UTF-8)
// "Иван" mojibake: d0a0 c298 d0a0 d086 d0a0 c2b0 d0a0 d085
// Correct UTF-8:   d098 d0b2 d0b0 d0bd
const swaps = [
  // Иван
  ['d0a0c298d0a0d086d0a0c2b0d0a0d085', 'd098d0b2d0b0d0bd'],
];

// Check line 144 and 221 hex patterns
let s = buf.toString('utf8');
const lines = s.split('\n');
const l144 = lines[143];
const idx = l144.indexOf('name:');
const fragment = Buffer.from(l144.slice(idx, idx+30));
console.log('Line 144 fragment hex:', fragment.toString('hex'));

const l221 = lines[220];
const idx2 = l221.indexOf('name:');
const fragment2 = Buffer.from(l221.slice(idx2, idx2+30));
console.log('Line 221 fragment hex:', fragment2.toString('hex'));

// Now do direct string replacement using the actual characters
// Get the actual chars in the mojibake string for name field at line 144
const nameStart = l144.indexOf('"', idx + 7) + 1;
const nameEnd = l144.indexOf('"', nameStart);
const mojibakeName = l144.slice(nameStart, nameEnd);
console.log('Mojibake "Ivan":', JSON.stringify(mojibakeName), 'len:', mojibakeName.length);

const nameStart2 = l221.indexOf('"', idx2 + 7) + 1;
const nameEnd2 = l221.indexOf('"', nameStart2);
const mojibakeName2 = l221.slice(nameStart2, nameEnd2);
console.log('Mojibake "Timur":', JSON.stringify(mojibakeName2), 'len:', mojibakeName2.length);

// Replace all occurrences of these mojibake strings throughout the file
s = s.split(mojibakeName).join('\u0418\u0432\u0430\u043d');
s = s.split(mojibakeName2).join('\u0422\u0438\u043c\u0443\u0440');

// Check line 144 is now fixed
const newLines = s.split('\n');
console.log('Fixed line 144:', JSON.stringify(newLines[143]));
console.log('Fixed line 221:', JSON.stringify(newLines[220]));

fs.writeFileSync(filePath, s, 'utf8');
console.log('Done!');
