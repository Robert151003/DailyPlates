@echo off
REM ==========================================
REM Deploy script for Windows (CMD)
REM ==========================================

REM Safety check: confirm .git exists
IF NOT EXIST ".git" (
    echo .git not found! Exiting...
    pause
    exit /b
)

REM Set branch name
SET BRANCH=deploy

REM Check if branch exists
git show-ref --verify --quiet refs/heads/%BRANCH%
IF ERRORLEVEL 1 (
    echo Branch %BRANCH% does not exist. Creating...
    git checkout -b %BRANCH%
) ELSE (
    echo Switching to existing branch %BRANCH%
    git checkout %BRANCH%
)

REM Delete everything except whitelist + deploy.bat
for /f "delims=" %%i in ('dir /b /a') do (
    if /I not "%%i"==".git" if /I not "%%i"==".gitignore" if /I not "%%i"==".htaccess" if /I not "%%i"=="out" if /I not "%%i"=="deploy" (
        rmdir /s /q "%%i" 2>nul
        del /q "%%i" 2>nul
    )
)

REM Move contents of out/ to repo root
if exist out (
    xcopy out\* . /E /I /H /Y >nul
    rmdir /s /q out
)

REM Add, commit, and push
git add .
git commit -m "Deploy build output only"
git push -u origin %BRANCH%

echo Deploy branch updated successfully!
pause
