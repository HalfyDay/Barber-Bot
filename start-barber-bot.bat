@echo off
setlocal
title BarberShop npm start

set "DESKTOP=%USERPROFILE%\Desktop"
set "TARGET="

for %%D in ("Barber Bot" "Barber-Bot") do (
  if exist "%DESKTOP%\%%~D" (
    set "TARGET=%DESKTOP%\%%~D"
    goto :found
  )
)

echo Barber Bot project folder not found on Desktop.
echo Expected "%DESKTOP%\Barber Bot" or "%DESKTOP%\Barber-Bot".
pause
exit /b 1

:found
echo Running npm start in "%TARGET%"...
cd /d "%TARGET%"
npm start
endlocal
