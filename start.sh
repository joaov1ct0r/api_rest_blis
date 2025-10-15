#!/bin/bash

echo "Removing old containers... \n"
docker compose down
docker system prune --all --volumes --force

echo "Starting new containers... \n"
docker compose up -d

echo "Starting API... \n"
npx ts-node src/server.ts
