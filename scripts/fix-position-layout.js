const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'crm-source', '32-revenue-view.js');
let content = fs.readFileSync(filePath, 'utf8');

// ============================================================
// FIX 1: Sub-level fields — match service price size + 2-col grid
// ============================================================

const oldSubFields = `                            <div className="border-t border-white/5 p-3 space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="flex-1 text-xs text-slate-300">Доля %</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.masterSharePercent}
                                  onChange={(event) => handleDraftChange(child.id, 'masterSharePercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-20 px-2 py-1 text-white text-xs text-right"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="flex-1 text-xs text-slate-300">Возвращ. %</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={childDraft.targetReturnPercent}
                                  onChange={(event) => handleDraftChange(child.id, 'targetReturnPercent', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-20 px-2 py-1 text-white text-xs text-right"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="flex-1 text-xs text-slate-300">Объём</span>
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={childDraft.requiredClientVolume}
                                  onChange={(event) => handleDraftChange(child.id, 'requiredClientVolume', event.target.value)}
                                  onFocus={(e) => e.target.select()}
                                  placeholder="0"
                                  className="w-20 px-2 py-1 text-white text-xs text-right"
                                />
                              </div>`;

const newSubFields = `                            <div className="border-t border-white/5 p-3 space-y-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300 whitespace-nowrap">Доля %</span>
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
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300 whitespace-nowrap">Возвращ. %</span>
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
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300 whitespace-nowrap">Объём</span>
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
                              </div>
                              </div>`;

if (content.includes(oldSubFields)) {
  content = content.replace(oldSubFields, newSubFields);
  console.log('✅ Fixed sub-level fields: w-24 inputs + 2-col grid + compact labels');
} else {
  console.log('⚠️  Could not find old sub-level fields');
}

// ============================================================
// FIX 2: Parent-level fields (no sub-levels) — 2-col grid + compact labels
// ============================================================

const oldParentFields = `                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="flex-1 text-xs font-medium text-[var(--crm-muted)]">Доля мастера, %</span>
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
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="flex-1 text-xs font-medium text-[var(--crm-muted)]">Возвращаемость, %</span>
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
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="flex-1 text-xs font-medium text-[var(--crm-muted)]">Объем клиентов</span>
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
                          </div>
                        </div>`;

const newParentFields = `                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[var(--crm-muted)] whitespace-nowrap">Доля мастера, %</span>
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
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[var(--crm-muted)] whitespace-nowrap">Возвращаемость, %</span>
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
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[var(--crm-muted)] whitespace-nowrap">Объем клиентов</span>
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
                          </div>
                        </div>`;

if (content.includes(oldParentFields)) {
  content = content.replace(oldParentFields, newParentFields);
  console.log('✅ Fixed parent-level fields: 2-col grid + compact labels');
} else {
  console.log('⚠️  Could not find old parent-level fields');
}

// ============================================================
// FIX 3: New position form — 2-col grid + compact labels
// ============================================================

const oldNewPosFields = `          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex-1 text-sm font-medium text-slate-300">Доля мастера, %</span>
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
            </div>
            <div className="flex items-center gap-2">
              <span className="flex-1 text-sm font-medium text-slate-300">Возвращаемость, %</span>
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
            </div>
            <div className="flex items-center gap-2">
              <span className="flex-1 text-sm font-medium text-slate-300">Объем клиентов</span>
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
            </div>
          </div>`;

const newNewPosFields = `          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">Доля мастера, %</span>
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
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">Возвращаемость, %</span>
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
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">Объем клиентов</span>
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
            </div>
          </div>`;

if (content.includes(oldNewPosFields)) {
  content = content.replace(oldNewPosFields, newNewPosFields);
  console.log('✅ Fixed new position form: 2-col grid + compact labels');
} else {
  console.log('⚠️  Could not find old new-position fields');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ File saved');
