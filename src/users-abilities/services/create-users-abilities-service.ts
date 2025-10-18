import { BaseService } from '@src/services/base-service';
import { ICreateUsersAbilitiesDTO } from '@users-abilities/dtos/create-users-abilities-dto';
import { UsersAbilitiesMapper } from '@users-abilities/mappers/users-abilities-mapper';
import { ICreateUsersAbilitiesRepository } from '@users-abilities/repositories/create-users-abilities-repository';
import {
  UsersAbilitiesDTO,
  IUsersAbilitiesDTO,
} from '@users-abilities/dtos/users-abilities-dto';
import { IFindAbilityByIdRepository } from '@abilities/repositories/find-ability-by-id-repository';

export interface ICreateUsersAbilitiesService {
  execute(dto: ICreateUsersAbilitiesDTO): Promise<IUsersAbilitiesDTO>;
}

export class CreateUserAbilityService
  extends BaseService
  implements ICreateUsersAbilitiesService
{
  private findAbilityByIdRepository: IFindAbilityByIdRepository;
  private createUsersAbilitiesRepository: ICreateUsersAbilitiesRepository;

  constructor(
    findAbilityByIdRepository: IFindAbilityByIdRepository,
    createUsersAbilitiesRepository: ICreateUsersAbilitiesRepository,
  ) {
    super();
    this.findAbilityByIdRepository = findAbilityByIdRepository;
    this.createUsersAbilitiesRepository = createUsersAbilitiesRepository;
  }

  public async execute(
    dto: ICreateUsersAbilitiesDTO,
  ): Promise<UsersAbilitiesDTO> {
    const ability = await this.findAbilityByIdRepository.execute(
      dto.ability_id,
    );

    const abilityIsNotRegistered = ability === null;

    if (abilityIsNotRegistered) {
      throw this.badRequest('Habilidade não encontrada!');
    }

    const abilityIsNotActive = ability.active === false;

    if (abilityIsNotActive) {
      throw this.badRequest('Habilidade não está disponível!');
    }

    const createdUserAbility =
      await this.createUsersAbilitiesRepository.execute(dto);

    return UsersAbilitiesMapper.toDTO(createdUserAbility);
  }
}
