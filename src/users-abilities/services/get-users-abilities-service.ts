import { IUsersAbilitiesManyDTO } from '@users-abilities/dtos/users-abilities-many-dto';
import { IGetUsersAbilitiesByUserIdDTO } from '@users-abilities/dtos/get-users-abilities-by-user-id-dto';
import { BaseService } from '@src/services/base-service';
import { IGetUsersAbilitiesByUserIdRepository } from '../repositories/get-users-abilities-by-user-id-repository';
import { UsersAbilitiesMapper } from '../mappers/users-abilities-mapper';

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
    pageSize = 20,
    skipAmount = 0,
    pageNumber = 1,
  }: IGetUsersAbilitiesByUserIdDTO): Promise<IUsersAbilitiesManyDTO[]> {
    const usersAbilities =
      await this.getUsersAbilitiesByUserIdRepository.execute({
        user_id,
        skipAmount: skipAmount ? skipAmount : (pageNumber - 1) * pageSize,
        pageSize,
        pageNumber,
      });

    return usersAbilities.map((usersAbilities) =>
      UsersAbilitiesMapper.manyExecute(usersAbilities),
    );
  }
}
