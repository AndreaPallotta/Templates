#!/bin/bash

file="../.env"
file_name=${file##*/}

secret=$(node -e "console.log(require('crypto').randomBytes(256).toString('base64'));")

if [ -f "$file" ]; then
    echo "$file_name already present. Skipping to the next step..."
else
    echo "$file_name does not exist. Creating it..."
cat << EOT >> $file
PORT=8081
HOST="*INSERT HOST IP/NAME OR DELETE IF LOCALHOST*"
LOG_LEVEL="*INSERT LOG LEVEL (error, warn, info, http, debug) OR DELETE FOR DEFAULT (debug for dev/warn for prod)"
SECRET="$secret"
EOT
    echo "$file_name created with default content."
fi

exit 0

