#!/bin/bash

echo "Removing old containers..."
docker compose down
docker system prune --all --volumes --force
echo "OK!"

echo "Starting new containers..."
docker compose up -d
echo "OK!"

echo "Waiting for MySQL to be ready..."
until docker exec db_blis mysqladmin ping -h"localhost" --silent; do
  sleep 2
done
echo "MySQL ready!"

retries=5
until npx prisma migrate dev || [ $retries -le 0 ]; do
  echo "Prisma migrate failed, retrying..."
  retries=$((retries - 1))
  sleep 3
done


echo "Starting API..."
npx ts-node-dev --transpile-only -r tsconfig-paths/register src/index.ts
echo "OK!"
