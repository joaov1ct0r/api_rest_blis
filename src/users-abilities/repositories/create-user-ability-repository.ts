import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { ICreateUsersAbilitiesDTO } from '@users-abilities/dtos/create-users-abilities-dto';

export interface ICreateUserAbilityRepository {
  execute(dto: ICreateUsersAbilitiesDTO): Promise<UsersAbilities>;
}

export class CreateUserAbilityRepository
  extends PrismaProvider
  implements ICreateUserAbilityRepository
{
  public async execute(dto: ICreateUsersAbilitiesDTO): Promise<UsersAbilities> {
    const createdUserAbility = await this.prisma.usersAbilities.create({
      data: dto,
    });

    return createdUserAbility;
  }
}
