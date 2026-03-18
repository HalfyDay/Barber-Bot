param(
  [string]$BaseUrl = $env:APP_SMOKE_BASE_URL,
  [string]$HealthPath = $env:APP_SMOKE_HEALTH_PATH,
  [string]$OwnerLogin = $env:APP_SMOKE_OWNER_LOGIN,
  [string]$OwnerPassword = $env:APP_SMOKE_OWNER_PASSWORD,
  [string]$HomePhone = $env:APP_SMOKE_HOME_PHONE,
  [string]$HomePassword = $env:APP_SMOKE_HOME_PASSWORD,
  [string]$WriteJson = "docs/reports/app-runtime-smoke.json",
  [string]$WriteSummary = "docs/reports/APP_RUNTIME_SMOKE_SUMMARY.md"
)

if (-not $BaseUrl) {
  throw "APP_SMOKE_BASE_URL or -BaseUrl is required."
}

$arguments = @("run", "app:smoke", "--", "--base-url", $BaseUrl, "--write", $WriteJson, "--write-summary", $WriteSummary)

if ($HealthPath) {
  $arguments += @("--health-path", $HealthPath)
}
if ($OwnerLogin) {
  $arguments += @("--owner-login", $OwnerLogin)
}
if ($OwnerPassword) {
  $arguments += @("--owner-password", $OwnerPassword)
}
if ($HomePhone) {
  $arguments += @("--home-phone", $HomePhone)
}
if ($HomePassword) {
  $arguments += @("--home-password", $HomePassword)
}

& npm.cmd @arguments
if ($LASTEXITCODE -ne 0) {
  throw "Application smoke failed."
}

Write-Host "Application smoke completed."
