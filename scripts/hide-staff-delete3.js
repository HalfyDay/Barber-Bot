const fs = require('fs');
let c = fs.readFileSync('crm-source/10-dashboard.js', 'utf8');

const lines = c.split('\n');
let changes = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('title="Удалить запись"')) {
    // Find the opening <button tag (go back)
    let buttonStart = i;
    while (buttonStart > 0 && !lines[buttonStart].trim().startsWith('<button')) {
      buttonStart--;
    }
    
    // Find the closing </button> tag (go forward)
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
    
    // Get indentation from button line
    const indent = lines[buttonStart].match(/^(\s*)/)?.[1] || '';
    
    // Wrap with !isStaffView - add opening before button and closing after </button>
    lines[buttonStart] = indent + '{!isStaffView && (\n' + lines[buttonStart];
    lines[buttonEnd + 1] = indent + ')}\n' + (lines[buttonEnd + 1] || '');
    
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
