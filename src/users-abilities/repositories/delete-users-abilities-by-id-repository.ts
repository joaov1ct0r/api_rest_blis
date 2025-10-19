import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface IDeleteUsersAbilitiesByIdRepository {
  execute(id: string): Promise<UsersAbilities>;
}

export class DeleteUsersAbilitiesByIdRepository
  extends PrismaProvider
  implements IDeleteUsersAbilitiesByIdRepository
{
  public async execute(id: string): Promise<UsersAbilities> {
    const deletedUsersAbilities = await this.prisma.usersAbilities.delete({
      where: { id },
    });

    return deletedUsersAbilities;
  }
}
