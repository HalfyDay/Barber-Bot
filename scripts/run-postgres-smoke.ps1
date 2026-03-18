param(
  [string]$DatabaseUrl = $env:POSTGRES_DATABASE_URL,
  [string]$InitSql = "docs/reports/postgres-target-init.sql",
  [string]$ImportSql = "docs/reports/server-postgres-import-sanitized.sql",
  [string]$Bundle = "docs/reports/server-postgres-export-bundle-sanitized.json"
)

if (-not $DatabaseUrl) {
  throw "POSTGRES_DATABASE_URL is required."
}

Write-Host "[1/2] Running PostgreSQL smoke preflight..."
npm run db:smoke-preflight -- --database-url $DatabaseUrl --init-sql $InitSql --import-sql $ImportSql --bundle $Bundle
if ($LASTEXITCODE -ne 0) {
  throw "Preflight failed."
}

Write-Host "[2/2] Running PostgreSQL smoke migration..."
npm run db:smoke-run -- --database-url $DatabaseUrl --init-sql $InitSql --import-sql $ImportSql --bundle $Bundle
if ($LASTEXITCODE -ne 0) {
  throw "Smoke migration failed."
}

Write-Host "PostgreSQL smoke flow completed."
