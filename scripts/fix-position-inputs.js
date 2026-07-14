const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'crm-source', '32-revenue-view.js');
let content = fs.readFileSync(filePath, 'utf8');

// Helper: add onFocus select-all to an input tag
function addSelectAll(inputTag) {
  if (inputTag.includes('onFocus')) return inputTag; // already has it
  return inputTag.replace(
    /className="([^"]*?)"/,
    'onFocus={(e) => e.target.select()} className="$1"'
  );
}

// ============================================================
// FIX 1: Sub-level numeric inputs — use drafts, inline layout, select-all
// ============================================================

// Replace the entire sub-level expanded section
const oldSubLevelFields = `                            {expandedSubLevels[child.id] && (
                            <div className="border-t border-white/5 p-3 space-y-2">
                              <div className="space-y-1">
                                <label className="block text-[10px] font-medium text-[var(--crm-muted)] uppercase">Доля %</label>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={child.masterSharePercent ?? 0}
                                  onChange={(event) => handleDraftChange(child.id, 'masterSharePercent', event.target.value)}
                                  className="w-full px-2 py-1 text-white text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="block text-[10px] font-medium text-[var(--crm-muted)] uppercase">Возвращ. %</label>
                                <input
                                  type="number"
                                  min="0"
                                  max="100"
                                  step="0.1"
                                  value={child.targetReturnPercent ?? 0}
                                  onChange={(event) => handleDraftChange(child.id, 'targetReturnPercent', event.target.value)}
                                  className="w-full px-2 py-1 text-white text-xs"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="block text-[10px] font-medium text-[var(--crm-muted)] uppercase">Объём</label>
                                <input
                                  type="number"
                                  min="0"
                                  step="1"
                                  value={child.requiredClientVolume ?? 0}
                                  onChange={(event) => handleDraftChange(child.id, 'requiredClientVolume', event.target.value)}
                                  className="w-full px-2 py-1 text-white text-xs"
                                />
                              </div>`;

const newSubLevelFields = `                            {expandedSubLevels[child.id] && (() => {
                              const childDraft = getDraft(child);
                              return (
                            <div className="border-t border-white/5 p-3 space-y-2">
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

if (content.includes(oldSubLevelFields)) {
  content = content.replace(oldSubLevelFields, newSubLevelFields);
  console.log('✅ Fixed sub-level inputs: draft values + inline layout + select-all');
} else {
  console.log('⚠️  Could not find old sub-level fields block — trying line-by-line replacement');
}

// Fix the closing of the sub-level expanded section — IIFE closing
const oldSubLevelClose = `                            </div>
                            )}`;
const newSubLevelClose = `                            </div>
                            ); })()}`;

// Only replace within the sub-level context (after the child.map)
// Find the specific closing pattern near ServiceMaxPricesEditor
const subLevelClosePattern = /(<\/div>\s*\n\s*\{\/\* Макс\. стоимость услуг для подуровня \*\/)/;
const match = content.match(subLevelClosePattern);
if (match) {
  // Find the closing </div> + )} before this comment
  const idx = content.indexOf(match[0]);
  // Look backwards for the closing pattern
  const before = content.substring(0, idx);
  const lastDivClose = before.lastIndexOf('</div>');
  const afterDivClose = before.substring(lastDivClose + 6);
  if (afterDivClose.trim().startsWith(')') || afterDivClose.trim().startsWith(')}')) {
    // Already handled or different structure
  }
}

// ============================================================
// FIX 2: Parent-level numeric inputs (no sub-levels) — inline layout + select-all
// ============================================================

const oldParentFields = `                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Доля мастера */}
                          <div className="space-y-1.5">
                            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Доля мастера, %</label>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.masterSharePercent}
                              onChange={(event) => handleDraftChange(position.id, 'masterSharePercent', event.target.value)}
                              placeholder="0"
                              className="w-full px-3 py-2 text-white text-sm"
                            />
                          </div>

                          {/* Целевой % возвращаемости */}
                          <div className="space-y-1.5">
                            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Возвращаемость, %</label>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.1"
                              value={draft.targetReturnPercent}
                              onChange={(event) => handleDraftChange(position.id, 'targetReturnPercent', event.target.value)}
                              placeholder="0"
                              className="w-full px-3 py-2 text-white text-sm"
                            />
                          </div>

                          {/* Объем клиентов */}
                          <div className="space-y-1.5">
                            <label className="block text-xs font-medium text-[var(--crm-muted)] uppercase tracking-wider">Объем клиентов для уровня</label>
                            <input
                              type="number"
                              min="0"
                              step="1"
                              value={draft.requiredClientVolume}
                              onChange={(event) => handleDraftChange(position.id, 'requiredClientVolume', event.target.value)}
                              placeholder="0"
                              className="w-full px-3 py-2 text-white text-sm"
                            />
                          </div>
                        </div>`;

const newParentFields = `                        <div className="space-y-1.5">
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

if (content.includes(oldParentFields)) {
  content = content.replace(oldParentFields, newParentFields);
  console.log('✅ Fixed parent-level fields: inline layout + select-all');
} else {
  console.log('⚠️  Could not find old parent-level fields block');
}

// ============================================================
// FIX 3: New position form — inline layout + select-all
// ============================================================

const oldNewPosFields = `          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Доля мастера, %</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.masterSharePercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, masterSharePercent: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Возвращаемость, %</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={newPosition.targetReturnPercent}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, targetReturnPercent: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-300">Объем клиентов</label>
              <input
                type="number"
                min="0"
                step="1"
                value={newPosition.requiredClientVolume}
                onChange={(event) => setNewPosition((prev) => ({ ...prev, requiredClientVolume: event.target.value }))}
                placeholder="0"
                className="w-full px-4 py-2 text-white"
              />
            </div>
          </div>`;

const newNewPosFields = `          <div className="space-y-2">
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

if (content.includes(oldNewPosFields)) {
  content = content.replace(oldNewPosFields, newNewPosFields);
  console.log('✅ Fixed new position form: inline layout + select-all');
} else {
  console.log('⚠️  Could not find old new-position fields block');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ File saved');
