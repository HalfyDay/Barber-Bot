const buildVerificationSummaryMarkdown = (report, title = "PostgreSQL Import Verification Summary") => {
  const lines = [
    `# ${title}`,
    "",
    `Generated at: ${report.generatedAt || new Date().toISOString()}`,
    "",
    "## Status",
    `- matchesBundle: ${report.readiness?.matchesBundle ? "yes" : "no"}`,
    "",
    "## Count Checks",
  ];

  for (const [tableName, entry] of Object.entries(report.counts || {})) {
    lines.push(
      `- ${tableName}: expected=${entry.expected}, actual=${entry.actual}, matches=${entry.matches ? "yes" : "no"}`,
    );
  }

  lines.push("", "## Issue Checks");
  for (const [issueName, entry] of Object.entries(report.issues || {})) {
    lines.push(
      `- ${issueName}: expected=${entry.expected}, actual=${entry.actual}, matches=${entry.matches ? "yes" : "no"}`,
    );
  }

  lines.push("", "## Count Mismatches");
  if (report.readiness?.countMismatches?.length) {
    for (const item of report.readiness.countMismatches) {
      lines.push(`- ${item.table}: expected=${item.expected}, actual=${item.actual}`);
    }
  } else {
    lines.push("- none");
  }

  lines.push("", "## Issue Mismatches");
  if (report.readiness?.issueMismatches?.length) {
    for (const item of report.readiness.issueMismatches) {
      lines.push(`- ${item.issue}: expected=${item.expected}, actual=${item.actual}`);
    }
  } else {
    lines.push("- none");
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
};

module.exports = {
  buildVerificationSummaryMarkdown,
};
