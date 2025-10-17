#!/bin/bash

echo "Removing old containers..."
docker compose down
docker system prune --all --volumes --force
echo "OK!"

echo "Starting new containers..."
docker compose up -d
echo "OK!"

echo "Checking for missing migrations..."
npx prisma migrate dev
echo "OK!"

echo "Starting API..."
npx ts-node-dev --transpile-only -r tsconfig-paths/register src/index.ts
echo "OK!"
