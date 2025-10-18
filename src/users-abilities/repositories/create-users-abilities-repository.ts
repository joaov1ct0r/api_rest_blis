import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { ICreateUsersAbilitiesDTO } from '@src/users-abilities/dtos/create-users-abilities-dto';

export interface ICreateUsersAbilitiesRepository {
  execute(dto: ICreateUsersAbilitiesDTO): Promise<UsersAbilities>;
}

export class CreateUserAbilityRepository
  extends PrismaProvider
  implements ICreateUsersAbilitiesRepository
{
  public async execute(dto: ICreateUsersAbilitiesDTO): Promise<UsersAbilities> {
    const createdUsersAbilities = await this.prisma.usersAbilities.create({
      data: dto,
    });

    return createdUsersAbilities;
  }
}
