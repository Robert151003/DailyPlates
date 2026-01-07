@echo off
REM ==========================================
REM Bulletproof Deploy Script for Windows
REM ==========================================

REM --- Safety check ---
IF NOT EXIST ".git" (
    echo .git not found! Exiting...
    pause
    exit /b
)

REM --- Set branch ---
SET BRANCH=deploy

REM --- Save this script's name ---
SET SCRIPT=%~nx0

REM --- Stage script to avoid checkout errors ---
git add "%SCRIPT%" 2>nul
git commit -m "Save deploy script" -q 2>nul

REM --- Check if deploy branch exists ---
git show-ref --verify --quiet refs/heads/%BRANCH%
IF ERRORLEVEL 1 (
    echo Branch %BRANCH% does not exist. Creating...
    git checkout -b %BRANCH%
) ELSE (
    echo Switching to existing branch %BRANCH%
    git checkout %BRANCH%
)

REM --- Delete everything except whitelist and all .bat files ---
for /f "delims=" %%i in ('dir /b /a') do (
    if /I not "%%i"==".git" if /I not "%%i"==".gitignore" if /I not "%%i"==".htaccess" if /I not "%%i"=="out" (
        echo %%i | findstr /i "\.bat$" >nul
        IF ERRORLEVEL 1 (
            rmdir /s /q "%%i" 2>nul
            del /q "%%i" 2>nul
        )
    )
)

REM --- Move contents of out/ to repo root ---
if exist out (
    xcopy out\* . /E /I /H /Y >nul
    rmdir /s /q out
)

REM --- Add changes ---
git add .

REM --- Commit only if there are changes ---
git diff --cached --quiet
IF ERRORLEVEL 1 (
    git commit -m "Deploy build output only"
) ELSE (
    echo No changes to commit.
)

REM --- Push to remote ---
git push -u origin %BRANCH%

echo.
echo ===============================
echo Deploy branch updated successfully!
echo ===============================
echo.
pause
