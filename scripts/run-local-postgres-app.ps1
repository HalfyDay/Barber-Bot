param(
  [switch]$SkipGenerate
)

$projectRoot = Split-Path -Parent $PSScriptRoot

Push-Location $projectRoot
try {
  Write-Host "Checking project-local PostgreSQL..."
  npm run postgres:portable:status | Out-Null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Starting project-local PostgreSQL..."
    npm run postgres:portable:start
    if ($LASTEXITCODE -ne 0) {
      throw "Failed to start project-local PostgreSQL."
    }
  }

  $env:PRISMA_RUNTIME = "postgres"

  if (-not $SkipGenerate) {
    Write-Host "Generating Prisma client for postgres runtime..."
    npm run prisma:generate:runtime
    if ($LASTEXITCODE -ne 0) {
      throw "Failed to generate Prisma runtime client."
    }
  }

  Write-Host "Starting application with PostgreSQL runtime..."
  node server.js
}
finally {
  Pop-Location
}
