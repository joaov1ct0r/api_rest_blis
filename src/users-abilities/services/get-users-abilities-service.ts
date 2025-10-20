import { BaseService } from '@src/services/base-service';
import { UsersAbilitiesMapper } from '@users-abilities/mappers/users-abilities-mapper';
import { IUsersAbilitiesManyDTO } from '@users-abilities/dtos/users-abilities-many-dto';
import { IGetUsersAbilitiesByUserIdDTO } from '@users-abilities/dtos/get-users-abilities-by-user-id-dto';
import { IGetUsersAbilitiesByUserIdRepository } from '@users-abilities/repositories/get-users-abilities-by-user-id-repository';

export interface IGetUsersAbilitiesService {
  execute(
    dto: IGetUsersAbilitiesByUserIdDTO,
  ): Promise<IUsersAbilitiesManyDTO[]>;
}

export class GetUsersAbilitiesService
  extends BaseService
  implements IGetUsersAbilitiesService
{
  private getUsersAbilitiesByUserIdRepository: IGetUsersAbilitiesByUserIdRepository;

  constructor(
    getUsersAbilitiesByUserIdRepository: IGetUsersAbilitiesByUserIdRepository,
  ) {
    super();
    this.getUsersAbilitiesByUserIdRepository =
      getUsersAbilitiesByUserIdRepository;
  }

  public async execute({
    user_id,
    amount,
    page,
    skipAmount,
  }: IGetUsersAbilitiesByUserIdDTO): Promise<IUsersAbilitiesManyDTO[]> {
    const usersAbilities =
      await this.getUsersAbilitiesByUserIdRepository.execute({
        user_id,
        skipAmount,
        page,
        amount,
      });

    return usersAbilities.map((usersAbilities) =>
      UsersAbilitiesMapper.manyExecute(usersAbilities),
    );
  }
}
