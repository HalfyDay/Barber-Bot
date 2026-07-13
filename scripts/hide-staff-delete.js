const fs = require('fs');
let c = fs.readFileSync('crm-source/10-dashboard.js', 'utf8');

// Replace inProgress condition blocks that contain delete buttons
// Pattern: {inProgress ? ( ... onDeleteAppointment ... ) : null}
// Change to: {inProgress && !isStaffView ? ( ... onDeleteAppointment ... ) : null}

// Count occurrences
const count = (c.match(/\{inProgress \? \(/g) || []).length;
console.log('Found', count, 'inProgress blocks');

// Replace - but only the ones that contain delete buttons
// We need to be careful to only replace the right ones
// Let's find the exact pattern

const lines = c.split('\n');
let changes = 0;

for (let i = 0; i < lines.length; i++) {
  // Look for lines with {inProgress ? ( that are followed by delete button logic
  if (lines[i].includes('{inProgress ? (') || lines[i].includes('{inProgress ?(')) {
    // Check if the next ~30 lines contain onDeleteAppointment
    const block = lines.slice(i, i + 40).join('\n');
    if (block.includes('onDeleteAppointment')) {
      lines[i] = lines[i].replace('{inProgress ? (', '{inProgress && !isStaffView ? (').replace('{inProgress ?(', '{inProgress && !isStaffView ?(');
      changes++;
    }
  }
}

if (changes > 0) {
  fs.writeFileSync('crm-source/10-dashboard.js', lines.join('\n'), 'utf8');
  console.log('Modified', changes, 'blocks');
} else {
  console.log('No changes made');
}
