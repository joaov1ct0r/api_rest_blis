import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface IFindUsersAbilitiesByIdRepository {
  execute(id: string): Promise<UsersAbilities | null>;
}

export class FindUsersAbilitiesByIdRepository
  extends PrismaProvider
  implements IFindUsersAbilitiesByIdRepository
{
  public async execute(id: string): Promise<UsersAbilities | null> {
    const usersAbilities = await this.prisma.usersAbilities.findUnique({
      where: { id },
    });

    return usersAbilities;
  }
}
