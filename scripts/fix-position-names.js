const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'crm-source', '32-revenue-view.js');
let content = fs.readFileSync(filePath, 'utf8');

let count = 0;
function rep(old, label) {
  if (content.includes(old)) {
    content = content.replace(old, typeof label === 'function' ? label() : label);
    count++;
    console.log(`  ✅ ${label}`);
  } else {
    console.log(`  ⚠️  NOT FOUND: ${old.substring(0, 60)}...`);
  }
}

console.log('\n=== FIX ALIGNMENT: min-w-32 → w-44 ===');
content = content.replace(/min-w-32/g, 'w-44');
console.log('  ✅ All min-w-32 → w-44\n');

// ============================================================
// SUB-LEVEL FIELDS (order: Количество клиентов, Возвратность, Процент барбера)
// ============================================================
console.log('=== SUB-LEVEL FIELDS ===');

// Current order: Доля, Возвращ, Объём
// Target order: Количество клиентов, Возвратность клиентов, Процент барбера

// Swap Доля and Возвращ blocks (move Доля after Возвращ)
const subDоляBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Доля %</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.masterSharePercent}
                                  onChange={(event) => handleDraftChange(child.id, 'masterSharePercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

const subВозвратBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Возвращ. %</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.targetReturnPercent}
                                  onChange={(event) => handleDraftChange(child.id, 'targetReturnPercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

const subОбъемBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Объём</span>
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={childDraft.requiredClientVolume}
                                  onChange={(event) => handleDraftChange(child.id, 'requiredClientVolume', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

// New blocks in order: Объём→Количество клиентов, Возвращ→Возвратность, Доля→Процент барбера
const subNewОбъемBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Количество клиентов</span>
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={childDraft.requiredClientVolume}
                                  onChange={(event) => handleDraftChange(child.id, 'requiredClientVolume', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

const subNewВозвратBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Возвратность клиентов</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.targetReturnPercent}
                                  onChange={(event) => handleDraftChange(child.id, 'targetReturnPercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

const subNewДоляBlock = `                              <div className="flex items-center gap-2">
                                <span className="w-44 text-xs text-slate-300">Процент барбера</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.masterSharePercent}
                                  onChange={(event) => handleDraftChange(child.id, 'masterSharePercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-24 px-2 py-1 text-white text-sm text-right"
                                />
                              </div>`;

// Replace all 3 sub-level blocks at once
const oldSubAll = subDоляBlock + '\n' + subВозвратBlock + '\n' + subОбъемBlock;
const newSubAll = subNewОбъемBlock + '\n' + subNewВозвратBlock + '\n' + subNewДоляBlock;

if (content.includes(oldSubAll)) {
  content = content.replace(oldSubAll, newSubAll);
  count++;
  console.log('  ✅ Sub-level: reordered + renamed (3 fields)');
} else {
  console.log('  ⚠️  Could not find all 3 sub-level blocks together');
}

// ============================================================
// PARENT-LEVEL FIELDS (order: Количество клиентов, Возвратность, Процент барбера)
// ============================================================
console.log('\n=== PARENT-LEVEL FIELDS ===');

const parentDоляBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Доля мастера, %</span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.masterSharePercent}
                              onChange={(event) => handleDraftChange(position.id, 'masterSharePercent', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const parentВозвратBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Возвращаемость, %</span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.targetReturnPercent}
                              onChange={(event) => handleDraftChange(position.id, 'targetReturnPercent', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const parentОбъемBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Объем клиентов</span>
                            <input
                              type="number"
                              min="0"
                              step="1"
                              value={draft.requiredClientVolume}
                              onChange={(event) => handleDraftChange(position.id, 'requiredClientVolume', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const parentNewОбъемBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Количество клиентов</span>
                            <input
                              type="number"
                              min="0"
                              step="1"
                              value={draft.requiredClientVolume}
                              onChange={(event) => handleDraftChange(position.id, 'requiredClientVolume', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const parentNewВозвратBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Возвратность клиентов</span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.targetReturnPercent}
                              onChange={(event) => handleDraftChange(position.id, 'targetReturnPercent', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const parentNewДоляBlock = `                          <div className="flex items-center gap-2">
                            <span className="w-44 text-xs font-medium text-[var(--crm-muted)]">Процент барбера</span>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.masterSharePercent}
                              onChange={(event) => handleDraftChange(position.id, 'masterSharePercent', event.target.value)}
                              onFocus={(e) => e.target.select()}
                              placeholder="0"
                              className="w-24 px-2 py-1 text-white text-sm text-right"
                            />
                          </div>`;

const oldParentAll = parentDоляBlock + '\n' + parentВозвратBlock + '\n' + parentОбъемBlock;
const newParentAll = parentNewОбъемBlock + '\n' + parentNewВозвратBlock + '\n' + parentNewДоляBlock;

if (content.includes(oldParentAll)) {
  content = content.replace(oldParentAll, newParentAll);
  count++;
  console.log('  ✅ Parent-level: reordered + renamed (3 fields)');
} else {
  console.log('  ⚠️  Could not find all 3 parent-level blocks together');
}

// ============================================================
// NEW POSITION FORM (order: Количество клиентов, Возвратность, Процент барбера)
// ============================================================
console.log('\n=== NEW POSITION FORM ===');

const newPosDоляBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Доля мастера, %</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.masterSharePercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, masterSharePercent: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const newPosВозвратBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Возвращаемость, %</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.targetReturnPercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, targetReturnPercent: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const newPosОбъемBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Объем клиентов</span>
              <input
                type="number"
                min="0"
                step="1"
                value={newPosition.requiredClientVolume}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, requiredClientVolume: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const newPosNewОбъемBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Количество клиентов</span>
              <input
                type="number"
                min="0"
                step="1"
                value={newPosition.requiredClientVolume}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, requiredClientVolume: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const newPosNewВозвратBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Возвратность клиентов</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.targetReturnPercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, targetReturnPercent: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const newPosNewДоляBlock = `            <div className="flex items-center gap-2">
              <span className="w-44 text-sm font-medium text-slate-300">Процент барбера</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.masterSharePercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, masterSharePercent: event.target.value }))}
                onFocus={(e) => e.target.select()}
                placeholder="0"
                className="w-24 px-2 py-1 text-white text-sm text-right"
              />
            </div>`;

const oldNewPosAll = newPosDоляBlock + '\n' + newPosВозвратBlock + '\n' + newPosОбъемBlock;
const newNewPosAll = newPosNewОбъемBlock + '\n' + newPosNewВозвратBlock + '\n' + newPosNewДоляBlock;

if (content.includes(oldNewPosAll)) {
  content = content.replace(oldNewPosAll, newNewPosAll);
  count++;
  console.log('  ✅ New position form: reordered + renamed (3 fields)');
} else {
  console.log('  ⚠️  Could not find all 3 new-position blocks together');
}

// ============================================================
// LEVEL VIEW: ZzzStatBlock labels
// ============================================================
console.log('\n=== LEVEL VIEW STAT BLOCKS ===');

rep('label="Доля мастера"', 'label="Процент барбера"');
rep('label="Возвращаемость"', 'label="Возвратность клиентов"');
rep('label="Объем клиентов"', 'label="Количество клиентов"');

// ============================================================
// LEVEL VIEW: Radar chart labels
// ============================================================
console.log('\n=== LEVEL VIEW RADAR CHART ===');

rep("{ label: 'ДОЛЯ'", "{ label: 'ПРОЦЕНТ'");
rep("{ label: 'ВОЗВРАТ'", "{ label: 'ВОЗВРАТН.'");

// ============================================================
// LEVEL VIEW: GlowBar labels
// ============================================================
console.log('\n=== LEVEL VIEW GLOWBARS ===');

rep('label="Клиенты" showPercent', 'label="Кол-во клиентов" showPercent');
rep('label="Возвращаемость" showPercent', 'label="Возвратность" showPercent');

// ============================================================
// LEVEL VIEW: Comparison table labels
// ============================================================
console.log('\n=== LEVEL VIEW COMPARISON TABLE ===');

rep("{ label: 'Клиенты',", "{ label: 'Кол-во клиентов',");
rep("{ label: 'Возвращаемость',", "{ label: 'Возвратность',");

// ============================================================
// LEVEL VIEW: Progress labels in expanded section
// ============================================================
console.log('\n=== LEVEL VIEW PROGRESS LABELS ===');

rep('>Возвращаемость:</span>', '>Возвратность:</span>');

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n✅ Done — ${count} replacements, file saved`);
