const fs = require('fs');
let c = fs.readFileSync('crm-source/43-shop-view.js', 'utf8');

// Remove # from order numbers - all patterns
c = c.replace(/Заказ #\{/g, 'Заказ {');
c = c.replace(/>#\{/g, '>{');
c = c.replace(/>#\$/g, '>$');

fs.writeFileSync('crm-source/43-shop-view.js', c, 'utf8');
console.log('Done');
