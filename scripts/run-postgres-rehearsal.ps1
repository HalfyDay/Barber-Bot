param(
  [string]$DatabaseUrl = $env:POSTGRES_DATABASE_URL,
  [string]$InitSql = "docs/reports/postgres-target-init.sql",
  [string]$ImportSql = "docs/reports/server-postgres-import-sanitized.sql",
  [string]$Bundle = "docs/reports/server-postgres-export-bundle-sanitized.json",
  [string]$BaseUrl = "http://127.0.0.1:3000",
  [string]$HealthPath = "/api/health",
  [string]$OwnerLogin = $env:APP_SMOKE_OWNER_LOGIN,
  [string]$OwnerPassword = $env:APP_SMOKE_OWNER_PASSWORD,
  [string]$HomePhone = $env:APP_SMOKE_HOME_PHONE,
  [string]$HomePassword = $env:APP_SMOKE_HOME_PASSWORD,
  [switch]$StartApp
)

function Invoke-NpmCommand {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments,
    [Parameter(Mandatory = $true)]
    [string]$FailureMessage
  )

  & npm.cmd @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw $FailureMessage
  }
}

function Wait-AppReady {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url,
    [int]$TimeoutSeconds = 60
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  while ((Get-Date) -lt $deadline) {
    try {
      $response = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec 5
      if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500) {
        return
      }
    } catch {
      Start-Sleep -Seconds 2
      continue
    }
    Start-Sleep -Seconds 2
  }

  throw "Application did not become ready at $Url within $TimeoutSeconds seconds."
}

if (-not $DatabaseUrl) {
  throw "POSTGRES_DATABASE_URL is required."
}

$previousRuntime = $env:PRISMA_RUNTIME
$previousPostgresUrl = $env:POSTGRES_DATABASE_URL
$serverProcess = $null

try {
  $env:PRISMA_RUNTIME = "postgres"
  $env:POSTGRES_DATABASE_URL = $DatabaseUrl

  Write-Host "[1/4] Generating Prisma client for postgres runtime..."
  Invoke-NpmCommand -Arguments @("run", "prisma:generate:runtime") -FailureMessage "Prisma runtime client generation failed."

  Write-Host "[2/4] Running PostgreSQL smoke preflight..."
  Invoke-NpmCommand -Arguments @(
    "run", "db:smoke-preflight", "--",
    "--database-url", $DatabaseUrl,
    "--init-sql", $InitSql,
    "--import-sql", $ImportSql,
    "--bundle", $Bundle
  ) -FailureMessage "PostgreSQL smoke preflight failed."

  Write-Host "[3/4] Running PostgreSQL smoke import verification..."
  Invoke-NpmCommand -Arguments @(
    "run", "db:smoke-run", "--",
    "--database-url", $DatabaseUrl,
    "--init-sql", $InitSql,
    "--import-sql", $ImportSql,
    "--bundle", $Bundle
  ) -FailureMessage "PostgreSQL smoke import failed."

  if ($StartApp) {
    $healthUrl = "{0}{1}" -f $BaseUrl.TrimEnd("/"), ($(if ($HealthPath.StartsWith("/")) { $HealthPath } else { "/$HealthPath" }))

    Write-Host "[4/4] Starting app in postgres runtime and running HTTP smoke..."
    $serverProcess = Start-Process -FilePath "node" -ArgumentList "server.js" -PassThru -WorkingDirectory (Get-Location)
    Wait-AppReady -Url $healthUrl

    $appSmokeArgs = @(
      "-File", "scripts/run-app-smoke.ps1",
      "-BaseUrl", $BaseUrl,
      "-HealthPath", $HealthPath
    )
    if ($OwnerLogin) {
      $appSmokeArgs += @("-OwnerLogin", $OwnerLogin)
    }
    if ($OwnerPassword) {
      $appSmokeArgs += @("-OwnerPassword", $OwnerPassword)
    }
    if ($HomePhone) {
      $appSmokeArgs += @("-HomePhone", $HomePhone)
    }
    if ($HomePassword) {
      $appSmokeArgs += @("-HomePassword", $HomePassword)
    }

    & powershell @appSmokeArgs
    if ($LASTEXITCODE -ne 0) {
      throw "Application HTTP smoke failed."
    }
  } else {
    Write-Host "[4/4] App smoke skipped. Use -StartApp to run HTTP smoke after import."
  }

  Write-Host "PostgreSQL rehearsal completed."
} finally {
  if ($serverProcess -and -not $serverProcess.HasExited) {
    Stop-Process -Id $serverProcess.Id -Force -ErrorAction SilentlyContinue
  }

  if ($null -eq $previousRuntime) {
    Remove-Item Env:PRISMA_RUNTIME -ErrorAction SilentlyContinue
  } else {
    $env:PRISMA_RUNTIME = $previousRuntime
  }

  if ($null -eq $previousPostgresUrl) {
    Remove-Item Env:POSTGRES_DATABASE_URL -ErrorAction SilentlyContinue
  } else {
    $env:POSTGRES_DATABASE_URL = $previousPostgresUrl
  }
}
