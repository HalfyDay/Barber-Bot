const cloneRow = (row) => JSON.parse(JSON.stringify(row));

const stableSerialize = (value) => {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableSerialize(entry)).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableSerialize(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
};

const sanitizeTableRows = (tableName, rows) => {
  if (!Array.isArray(rows) || !rows.length) {
    return {
      rows: Array.isArray(rows) ? rows : [],
      report: {
        tableName,
        sourceRowCount: Array.isArray(rows) ? rows.length : 0,
        sanitizedRowCount: Array.isArray(rows) ? rows.length : 0,
        removedExactDuplicateRows: 0,
        duplicateIdGroups: 0,
        conflictingDuplicateGroups: 0,
        duplicateIds: [],
        conflictingDuplicateIds: [],
      },
    };
  }

  const sanitizedRows = [];
  const rowsById = new Map();
  const duplicateIds = [];
  const conflictingDuplicateIds = [];
  let removedExactDuplicateRows = 0;

  for (const row of rows) {
    const id = row?.id || null;
    if (!id) {
      sanitizedRows.push(cloneRow(row));
      continue;
    }

    const normalizedRow = stableSerialize(row);
    const existing = rowsById.get(id);
    if (!existing) {
      const copy = cloneRow(row);
      rowsById.set(id, {
        row: copy,
        normalizedRow,
        count: 1,
      });
      sanitizedRows.push(copy);
      continue;
    }

    existing.count += 1;

    if (existing.normalizedRow === normalizedRow) {
      removedExactDuplicateRows += 1;
      continue;
    }

    conflictingDuplicateIds.push({
      id,
      count: existing.count,
      firstRow: existing.row,
      conflictingRow: cloneRow(row),
    });
  }

  for (const [id, meta] of rowsById.entries()) {
    if (meta.count > 1) {
      duplicateIds.push({
        id,
        count: meta.count,
      });
    }
  }

  return {
    rows: sanitizedRows,
    report: {
      tableName,
      sourceRowCount: rows.length,
      sanitizedRowCount: sanitizedRows.length,
      removedExactDuplicateRows,
      duplicateIdGroups: duplicateIds.length,
      conflictingDuplicateGroups: conflictingDuplicateIds.length,
      duplicateIds,
      conflictingDuplicateIds,
    },
  };
};

const sanitizeBundle = (bundle) => {
  const tables = {};
  const tableReports = {};
  const rowCounts = { ...(bundle?.rowCounts || {}) };
  let removedExactDuplicateRows = 0;
  let conflictingDuplicateGroups = 0;

  for (const [tableName, rows] of Object.entries(bundle?.tables || {})) {
    const sanitized = sanitizeTableRows(tableName, rows);
    tables[tableName] = sanitized.rows;
    tableReports[tableName] = sanitized.report;
    rowCounts[tableName] = sanitized.report.sanitizedRowCount;
    removedExactDuplicateRows += sanitized.report.removedExactDuplicateRows;
    conflictingDuplicateGroups += sanitized.report.conflictingDuplicateGroups;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    source: bundle?.source || null,
    summary: {
      removedExactDuplicateRows,
      conflictingDuplicateGroups,
      safeToImport: conflictingDuplicateGroups === 0,
    },
    tables: tableReports,
  };

  return {
    bundle: {
      ...bundle,
      rowCounts,
      tables,
      sanitization: {
        report,
      },
    },
    report,
  };
};

module.exports = {
  sanitizeBundle,
  sanitizeTableRows,
  stableSerialize,
};
