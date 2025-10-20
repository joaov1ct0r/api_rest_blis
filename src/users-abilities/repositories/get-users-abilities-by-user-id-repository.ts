import { PrismaProvider } from '@utils/prisma-provider';
import { IUsersAbilitiesManyDTO } from '@users-abilities/dtos/users-abilities-many-dto';
import { IGetUsersAbilitiesByUserIdDTO } from '@users-abilities/dtos/get-users-abilities-by-user-id-dto';

export interface IGetUsersAbilitiesByUserIdRepository {
  execute(
    dto: IGetUsersAbilitiesByUserIdDTO,
  ): Promise<IUsersAbilitiesManyDTO[]>;
}

export class GetUsersAbilitiesByUserIdRepository
  extends PrismaProvider
  implements IGetUsersAbilitiesByUserIdRepository
{
  public async execute({
    user_id,
    pageSize,
    skipAmount,
  }: IGetUsersAbilitiesByUserIdDTO): Promise<IUsersAbilitiesManyDTO[]> {
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
