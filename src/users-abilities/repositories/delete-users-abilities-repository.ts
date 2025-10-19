import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface IDeleteUsersAbilitiesRepository {
  execute(id: string): Promise<UsersAbilities>;
}

export class DeleteUsersAbilitiesRepository
  extends PrismaProvider
  implements IDeleteUsersAbilitiesRepository
{
  public async execute(id: string): Promise<UsersAbilities> {
    const deletedUsersAbilities = await this.prisma.usersAbilities.delete({
      where: { id },
    });

    return deletedUsersAbilities;
  }
}
