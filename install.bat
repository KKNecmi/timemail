@echo off
echo [🔧] Installing dependencies...
npm install

IF EXIST .env (
  echo [ℹ️] .env already exists. Skipping creation.
) ELSE (
  echo [📄] Creating .env file with template...

  (
    echo SMTP_USER=youremail@gmail.com
    echo SMTP_PASS=app-password
    echo.
    echo ### STEPS HOW TO GET MAIL PASSWORD
    echo ### 
    echo ### ~1 ENABLE TWO-FACTOR AUTHENTICATION ~ https://myaccount.google.com/security
    echo ### 
    echo ### ~2 Go To App Password Generator ~ https://myaccount.google.com/apppasswords
    echo ###
    echo ### ~3 Appname = Mail & SpecialAppname = You Can Name What Ever You Want
    echo ###
    echo ### ~4 The Password will be on your screen
  ) > .env

  echo [✅] .env file created.
)

pause
