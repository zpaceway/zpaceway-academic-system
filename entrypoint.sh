#!/bin/sh

# Check if the APP_NAME environment variable is set
if [ -z "$APP_NAME" ]; then
  echo "Error: APP_NAME environment variable not set"
  exit 1
fi

# Construct the path to the application's main file
APP_PATH="dist/apps/${APP_NAME}/main.js"

# Check if the file exists
if [ -f "$APP_PATH" ]; then
  # Run the application
  node "$APP_PATH"
else
  # Error if the application does not exist
  echo "Error: Application '${APP_NAME}' not found at ${APP_PATH}"
  exit 1
fi
