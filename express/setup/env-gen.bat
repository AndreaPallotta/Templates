@ECHO OFF

SET "file=..\.env"

CALL :sub %file%
EXIT /b

:sub
SET "file_name=%~nx1"

FOR /F "tokens=*" %%g IN ('node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"') DO (SET secret=%%g)

IF EXIST %file% (
    ECHO %file_name% already present. Skipping...
) else (
    ECHO %file_name% does not exist. Creating it...
    (
        ECHO PORT=8081
        ECHO HOST="*INSERT HOST IP/NAME OR DELETE IF LOCALHOST*"
        ECHO LOG_LEVEL="*INSERT LOG LEVEL (error, warn, info, http, debug) OR DELETE FOR DEFAULT (debug for dev/warn for prod)"
        ECHO SECRET="%secret%"
    ) > %file%
    ECHO %file_name% created with default content.
)

EXIT /b

