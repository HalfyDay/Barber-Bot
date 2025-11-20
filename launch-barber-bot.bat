@echo off
setlocal
title BarberShop Launcher

set "DESKTOP=%USERPROFILE%\Desktop"
set "TARGET="

for %%D in ("Barber Bot" "Barber-Bot") do (
  if exist "%DESKTOP%\%%~D\server.js" (
    set "TARGET=%DESKTOP%\%%~D"
    goto :found
  )
)

echo Barber Bot project folder not found on Desktop.
echo Expected "%DESKTOP%\Barber Bot" or "%DESKTOP%\Barber-Bot".
pause
exit /b 1

:found
echo Starting Barber Bot from "%TARGET%" via npm start...
start "Barber Bot CRM" /D "%TARGET%" cmd /k "npm start"
echo Launched. Server output stays in the new window; you can close this one.

endlocal
