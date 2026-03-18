const buildCheckLine = (entry) =>
  `- ${entry.name}: ${entry.ok ? "ok" : "failed"}${
    entry.status !== null && entry.status !== undefined ? `, status=${entry.status}` : ""
  }${entry.durationMs !== null && entry.durationMs !== undefined ? `, durationMs=${entry.durationMs}` : ""}`;

const buildAppRuntimeSmokeSummaryMarkdown = (
  report,
  title = "Application Runtime Smoke Summary",
) => {
  const checks = Array.isArray(report?.checks) ? report.checks : [];
  const checkLines = checks.length ? checks.map(buildCheckLine).join("\n") : "- none";

  return `# ${title}

Generated at: ${report?.generatedAt || "unknown"}

## Status
- Base URL: ${report?.baseUrl || "unknown"}
- Overall result: ${report?.ok ? "ok" : "failed"}
- Checks: ${checks.length}

## Checks
${checkLines}
`;
};

module.exports = {
  buildAppRuntimeSmokeSummaryMarkdown,
};
