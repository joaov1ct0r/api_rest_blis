import { BaseService } from '@src/services/base-service';
import { IAbilityDTO } from '@abilities/dtos/ability-dto';
import { AbilityMapper } from '@abilities/mappers/ability-mapper';
import { ICreateAbilityDTO } from '@abilities/dtos/create-ability-dto';
import { ICreateAbilityRepository } from '@abilities/repositories/create-ability-repository';

export interface ICreateAbilityService {
  execute(dto: ICreateAbilityDTO): Promise<IAbilityDTO>;
}

export class CreateAbilityService
  extends BaseService
  implements ICreateAbilityService
{
  private createAbilityRepository: ICreateAbilityRepository;

  constructor(createAbilityRepository: ICreateAbilityRepository) {
    super();
    this.createAbilityRepository = createAbilityRepository;
  }

  public async execute(dto: ICreateAbilityDTO): Promise<IAbilityDTO> {
    const createdAbility = await this.createAbilityRepository.execute(dto);

    return AbilityMapper.execute(createdAbility);
  }
}
