const fs = require('fs');
let c = fs.readFileSync('crm-source/42-tables-workspace.js', 'utf8');

// Replace onDelete={handleDelete} in ClientsList with role check
c = c.replace(
  /onDelete=\{handleDelete\}/g,
  'onDelete={role !== ROLE_STAFF ? handleDelete : null}'
);

fs.writeFileSync('crm-source/42-tables-workspace.js', c, 'utf8');
console.log('Done');
