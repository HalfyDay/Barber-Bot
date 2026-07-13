const fs = require('fs');
let c = fs.readFileSync('crm-source/10-dashboard.js', 'utf8');

// Find the overdue delete button and wrap with !isStaffView
// Pattern: the button with aria-label="Удалить запись" that's NOT already wrapped

const lines = c.split('\n');
let changes = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('aria-label="Удалить запись"') && lines[i].includes('title="Удалить запись"')) {
    // Find the opening <button tag
    let buttonStart = i;
    while (buttonStart > 0 && !lines[buttonStart].trim().startsWith('<button')) {
      buttonStart--;
    }
    
    // Find the closing </button> tag
    let buttonEnd = i;
    while (buttonEnd < lines.length && !lines[buttonEnd].trim().startsWith('</button>')) {
      buttonEnd++;
    }
    
    // Check if already wrapped with isStaffView
    const prevLine = buttonStart > 0 ? lines[buttonStart - 1] : '';
    if (prevLine.includes('isStaffView')) {
      console.log('Already wrapped at line', buttonStart + 1);
      continue;
    }
    
    // Get indentation
    const indent = lines[buttonStart].match(/^(\s*)/)?.[1] || '';
    
    // Wrap with !isStaffView
    lines[buttonStart] = indent + '{!isStaffView && (' + lines[buttonStart].trim();
    lines[buttonEnd] = lines[buttonEnd] + ')}';
    
    changes++;
    console.log('Wrapped delete button at lines', buttonStart + 1, '-', buttonEnd + 1);
  }
}

if (changes > 0) {
  fs.writeFileSync('crm-source/10-dashboard.js', lines.join('\n'), 'utf8');
  console.log('Total changes:', changes);
} else {
  console.log('No changes made');
}
