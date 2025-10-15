import { PrismaClient } from 'generated/prisma';

export class PrismaProvider {
  protected readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();

    this.main().catch(async (e) => {
      console.error(e);
      await this.prisma.$disconnect();
      process.exit(1);
    });
  }

  private async main() {
    this.prisma.$connect();
  }
}

export const prismaProvider = new PrismaProvider();
