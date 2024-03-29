#!/bin/bash

# Initialize all service dependencies

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
  echo "Error: Node.js is not installed. Please install Node.js before running this script."
  exit 1
fi

# Install pnpm (if not already installed)
if ! command -v pnpm &> /dev/null
then
  echo "pnpm is not found. Installing pnpm..."
  curl -sL https://pnpm.io/install.sh | sh
fi

# Install dependencies for client and server directories
echo "Installing dependencies..."
cd client && pnpm install
echo "Node Modules for client installed succesfully!"
cd ..
cd server && pnpm install
echo "Node Modules for client installed succesfully!"

echo "Dependencies installed successfully."

# build docker images
# make sure docker service running
SERVICE_NAME="docker.service"

# Check if Docker service is running
# if ! docker service ps $SERVICE_NAME >/dev/null 2>&1; then
#   echo "Error Docker service '$SERVICE_NAME' is not running."
#   exit 1
# else
#   echo "Docker service '$SERVICE_NAME' is running."
# fi
docker-compose up -d
