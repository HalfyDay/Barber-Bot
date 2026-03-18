param(
  [string]$SourcePath = "D:\Download\1BS\postgresql-portable",
  [string]$TargetPath = ".local\postgresql-portable"
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$resolvedTarget = Join-Path $projectRoot $TargetPath

if (-not (Test-Path $SourcePath)) {
  throw "Source portable PostgreSQL path not found: $SourcePath"
}

if (-not (Get-Command robocopy.exe -ErrorAction SilentlyContinue)) {
  throw "robocopy.exe is required on Windows."
}

New-Item -ItemType Directory -Force -Path $resolvedTarget | Out-Null

Write-Host "Copying portable PostgreSQL into project-local path..."
Write-Host "Source: $SourcePath"
Write-Host "Target: $resolvedTarget"

& robocopy.exe $SourcePath $resolvedTarget /E /R:1 /W:1 /NFL /NDL /NJH /NJS /NP
$exitCode = $LASTEXITCODE

if ($exitCode -gt 7) {
  throw "robocopy failed with exit code $exitCode"
}

Write-Host "Portable PostgreSQL copied into project-local path."
Write-Host "You can now use:"
Write-Host "  npm run postgres:portable:status"
Write-Host "  npm run postgres:portable:start"
Write-Host "  npm run postgres:portable:stop"
