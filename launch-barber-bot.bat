@echo off
setlocal
title HalfTime Launcher

set "DESKTOP=%USERPROFILE%\Desktop"
set "TARGET="

for %%D in ("Barber Bot" "Barber-Bot") do (
  if exist "%DESKTOP%\%%~D\server.js" (
    set "TARGET=%DESKTOP%\%%~D"
    goto :found
  )
)

echo HalfTime project folder not found on Desktop.
echo Expected "%DESKTOP%\Barber Bot" or "%DESKTOP%\Barber-Bot".
pause
exit /b 1

:found
echo Starting HalfTime from "%TARGET%" via npm start...
start "HalfTime" /D "%TARGET%" cmd /k "npm start"
echo Launched. Server output stays in the new window; you can close this one.

endlocal
