import { UsersAbilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { IGetUsersAbilitiesByUserIdDTO } from '@users-abilities/dtos/get-users-abilities-by-user-id-dto';

export interface IGetUsersAbilitiesByUserIdRepository {
  execute(dto: IGetUsersAbilitiesByUserIdDTO): Promise<UsersAbilities[]>;
}

export class GetUsersAbilitiesByUserIdRepository
  extends PrismaProvider
  implements IGetUsersAbilitiesByUserIdRepository
{
  public async execute({
    user_id,
    pageSize,
    skipAmount,
  }: IGetUsersAbilitiesByUserIdDTO): Promise<UsersAbilities[]> {
    const usersAbilities = await this.prisma.usersAbilities.findMany({
      where: { user_id },
      include: { abilities: true, user: true },
      orderBy: { createdAt: 'desc' },
      take: pageSize,
      skip: skipAmount,
    });

    return usersAbilities;
  }
}
