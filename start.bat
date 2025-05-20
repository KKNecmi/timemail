@echo off
cd /d "%~dp0"
start /min "" cmd /c "npm run start"
start /min "" cmd /c "npm run mail"
timeout /t 1 >nul
start http://localhost:3000/main.html
