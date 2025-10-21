import path from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';
import { PrismaClient } from 'generated/prisma';

export class PrismaProvider {
  protected readonly prisma: PrismaClient;
  private readonly mysql_data_path: string = path.resolve(
    __dirname,
    '..',
    '..',
    'mysql_data',
  );

  constructor() {
    if (!existsSync) {
      mkdirSync(this.mysql_data_path);
    }

    this.prisma = new PrismaClient();

    (async () => {
      await this.connectWithRetry();
    })();
  }

  private async connectWithRetry(retries = 5, delay = 3000): Promise<void> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await this.prisma.$connect();
        console.log('✅ Connected to database');
        return;
      } catch (err) {
        console.error(
          `❌ Prisma connection failed (attempt ${attempt}/${retries})`,
        );
        if (attempt === retries) {
          console.error('🚨 All retry attempts failed');
          throw err;
        }
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  }
}

export const prismaProvider = new PrismaProvider();
