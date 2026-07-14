const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'crm-source', '20-barbers.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the flatMap logic for position options
const oldLogic = `...sortedPositions.flatMap((position) => {
                          const parentOpt = {
                            value: position.id,
                            label: \`\${position.name}\${typeof position.masterSharePercent === 'number' ? \` · \${formatPercent(position.masterSharePercent)}\` : ''}\`,
                          };
                          const children = Array.isArray(position.children) && position.children.length > 0
                            ? [...position.children]
                                .sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0))
                                .map((child) => ({
                                  value: child.id,
                                  label: \`  └ \${child.name}\${typeof child.masterSharePercent === 'number' ? \` · \${formatPercent(child.masterSharePercent)}\` : ''}\`,
                                }))
                            : [];
                          return [parentOpt, ...children];
                        }),`;

const newLogic = `...sortedPositions.flatMap((position) => {
                          const hasChildren = Array.isArray(position.children) && position.children.length > 0;
                          if (hasChildren) {
                            return position.children
                              .sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0))
                              .map((child) => ({
                                value: child.id,
                                label: \`\${child.name}\${typeof child.masterSharePercent === 'number' ? \` · \${formatPercent(child.masterSharePercent)}\` : ''}\`,
                              }));
                          }
                          return [{
                            value: position.id,
                            label: \`\${position.name}\${typeof position.masterSharePercent === 'number' ? \` · \${formatPercent(position.masterSharePercent)}\` : ''}\`,
                          }];
                        }),`;

if (content.includes(oldLogic)) {
  content = content.replace(oldLogic, newLogic);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ Fixed position select: parent levels with children are now hidden');
} else {
  console.log('⚠️  Could not find old logic - trying alternative match');
  // Try without exact whitespace
  const altOld = `...sortedPositions.flatMap((position) => {`;
  if (content.includes(altOld)) {
    console.log('  Found alternative, using regex...');
    const regex = /\.\.\.sortedPositions\.flatMap\(\(position\) => \{[\s\S]*?return \[parentOpt, \.\.\.children\];[\s\S]*?\}\),/;
    const match = content.match(regex);
    if (match) {
      const replacement = `...sortedPositions.flatMap((position) => {
                          const hasChildren = Array.isArray(position.children) && position.children.length > 0;
                          if (hasChildren) {
                            return position.children
                              .sort((a, b) => (Number(a?.orderIndex) || 0) - (Number(b?.orderIndex) || 0))
                              .map((child) => ({
                                value: child.id,
                                label: \`\${child.name}\${typeof child.masterSharePercent === 'number' ? \` · \${formatPercent(child.masterSharePercent)}\` : ''}\`,
                              }));
                          }
                          return [{
                            value: position.id,
                            label: \`\${position.name}\${typeof position.masterSharePercent === 'number' ? \` · \${formatPercent(position.masterSharePercent)}\` : ''}\`,
                          }];
                        }),`;
      content = content.replace(match[0], replacement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('✅ Fixed position select with regex');
    }
  }
}
