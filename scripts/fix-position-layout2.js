const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'crm-source', '32-revenue-view.js');
let content = fs.readFileSync(filePath, 'utf8');

// ============================================================
// FIX 1: ServiceMaxPricesEditor — fixed-width label for alignment
// ============================================================

const oldServiceLabel = '                <span className="flex-1 text-sm text-slate-300 truncate">{service.name}</span>';
const newServiceLabel = '                <span className="min-w-32 text-sm text-slate-300 truncate">{service.name}</span>';

if (content.includes(oldServiceLabel)) {
  content = content.replace(oldServiceLabel, newServiceLabel);
  console.log('✅ Fixed ServiceMaxPricesEditor label: min-w-32');
} else {
  console.log('⚠️  Could not find ServiceMaxPricesEditor label');
}

// ============================================================
// FIX 2: Sub-level fields — single column + fixed-width labels
// ============================================================

const oldSubGrid = `                            <div className="border-t border-white/5 p-3 space-y-2">
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

const newSubFields = `                            <div className="border-t border-white/5 p-3 space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="min-w-32 text-xs text-slate-300">Доля %</span>
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
                                <span className="min-w-32 text-xs text-slate-300">Возвращ. %</span>
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
                                <span className="min-w-32 text-xs text-slate-300">Объём</span>
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

if (content.includes(oldSubGrid)) {
  content = content.replace(oldSubGrid, newSubFields);
  console.log('✅ Fixed sub-level fields: single column + min-w-32 labels');
} else {
  console.log('⚠️  Could not find old sub-level grid');
}

// ============================================================
// FIX 3: Parent-level fields — single column + fixed-width labels
// ============================================================

const oldParentGrid = `                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
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

const newParentFields = `                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="min-w-32 text-xs font-medium text-[var(--crm-muted)]">Доля мастера, %</span>
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
                            <span className="min-w-32 text-xs font-medium text-[var(--crm-muted)]">Возвращаемость, %</span>
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
                            <span className="min-w-32 text-xs font-medium text-[var(--crm-muted)]">Объем клиентов</span>
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

if (content.includes(oldParentGrid)) {
  content = content.replace(oldParentGrid, newParentFields);
  console.log('✅ Fixed parent-level fields: single column + min-w-32 labels');
} else {
  console.log('⚠️  Could not find old parent-level grid');
}

// ============================================================
// FIX 4: New position form — single column + fixed-width labels
// ============================================================

const oldNewPosGrid = `          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
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

const newNewPosFields = `          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="min-w-32 text-sm font-medium text-slate-300">Доля мастера, %</span>
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
              <span className="min-w-32 text-sm font-medium text-slate-300">Возвращаемость, %</span>
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
              <span className="min-w-32 text-sm font-medium text-slate-300">Объем клиентов</span>
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

if (content.includes(oldNewPosGrid)) {
  content = content.replace(oldNewPosGrid, newNewPosFields);
  console.log('✅ Fixed new position form: single column + min-w-32 labels');
} else {
  console.log('⚠️  Could not find old new-position grid');
}

// ============================================================
// FIX 5: Sub-level delete button — icon on mobile, text on desktop
// ============================================================

const oldDeleteBtn = `                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDeleteSubLevel(child); }}
                                disabled={savingKey === child.id}
                                className="crm-danger-btn px-3 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                Удалить
                              </button>`;

const newDeleteBtn = `                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDeleteSubLevel(child); }}
                                disabled={savingKey === child.id}
                                className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--crm-error-container)]/18 text-[color:var(--crm-error)] transition hover:bg-[color:var(--crm-error-container)]/28 disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label={\`Удалить подуровень \${child.name}\`}
                              >
                                <IconTrash className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); handleDeleteSubLevel(child); }}
                                disabled={savingKey === child.id}
                                className="hidden md:inline-flex crm-danger-btn px-3 py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                Удалить
                              </button>`;

if (content.includes(oldDeleteBtn)) {
  content = content.replace(oldDeleteBtn, newDeleteBtn);
  console.log('✅ Fixed sub-level delete: icon on mobile, text on desktop');
} else {
  console.log('⚠️  Could not find old sub-level delete button');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ File saved');
