#!/bin/bash

echo "Removing old containers... \n"
docker compose down
docker system prune --all --volumes --force
echo "OK! \n"

echo "Starting new containers... \n"
docker compose up -d
echo "OK! \n"

echo "Checking for missing migrations... \n"
npx prisma migrate dev
echo "OK! \n"

echo "Starting API... \n"
npx ts-node-dev -r tsconfig-paths/register src/index.ts
echo "OK! \n"
