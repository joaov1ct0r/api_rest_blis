#!/bin/bash

echo "Removing old containers... \n"
docker compose down

echo "Starting new containers... \n"
docker compose up -d

echo "Starting API... \n"
npx ts-node src/server.ts
