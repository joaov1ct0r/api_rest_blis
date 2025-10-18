import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { ICreateUserAbilityDTO } from '@src/users-abilities/dtos/create-user-ability-dto';

export interface ICreateUserAbilityRepository {
  execute(dto: ICreateUserAbilityDTO): Promise<UsersAbilities>;
}

export class CreateUserAbilityRepository
  extends PrismaProvider
  implements ICreateUserAbilityRepository
{
  public async execute(dto: ICreateUserAbilityDTO): Promise<UsersAbilities> {
    const createdUserAbility = await this.prisma.usersAbilities.create({
      data: dto,
    });

    return createdUserAbility;
  }
}
