import { PrismaProvider } from '@utils/prisma-provider';
import { Users } from 'generated/prisma';

export interface IFindUserByEmailRepository {
  execute(email: string): Promise<Users | null>;
}

export class FindUserByEmailRepository
  extends PrismaProvider
  implements IFindUserByEmailRepository
{
  public async execute(email: string): Promise<Users | null> {
    const user: Users | null = await this.prisma.users.findFirst({
      where: { email },
    });

    return user;
  }
}
