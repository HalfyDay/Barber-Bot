param(
  [switch]$SkipGenerate
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$serverEntryPath = Join-Path $projectRoot "server.js"

function Stop-ExistingProjectNodeServer {
  $nodeProcesses = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue
  foreach ($process in ($nodeProcesses | Where-Object { $_.CommandLine })) {
    $commandLine = [string]$process.CommandLine
    if ($commandLine -notmatch [regex]::Escape("server.js")) {
      continue
    }
    if ($process.ProcessId -eq $PID) {
      continue
    }
    Write-Host "Stopping existing local app process (PID $($process.ProcessId))..."
    Stop-Process -Id $process.ProcessId -Force -ErrorAction Stop
    Start-Sleep -Milliseconds 800
  }
}

Push-Location $projectRoot
try {
  Stop-ExistingProjectNodeServer

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
