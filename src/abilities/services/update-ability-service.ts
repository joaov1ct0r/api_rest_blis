import { BaseService } from '@src/services/base-service';
import { IAbilityDTO } from '@abilities/dtos/ability-dto';
import { AbilityMapper } from '@abilities/mappers/ability-mapper';
import { IUpdateAbilityDTO } from '@abilities/dtos/update-ability-dto';
import { IUpdateAbilityRepository } from '@abilities/repositories/update-ability-repository';

export interface IUpdateAbilityService {
  execute(dto: IUpdateAbilityDTO): Promise<IAbilityDTO>;
}

export class UpdateAbilityService
  extends BaseService
  implements IUpdateAbilityService
{
  private updateAbilityRepository: IUpdateAbilityRepository;

  constructor(updateAbilityRepository: IUpdateAbilityRepository) {
    super();
    this.updateAbilityRepository = updateAbilityRepository;
  }

  public async execute(dto: IUpdateAbilityDTO): Promise<IAbilityDTO> {
    const updatedAbility = await this.updateAbilityRepository.execute(
      dto.active,
      dto.id,
    );

    return AbilityMapper.execute(updatedAbility);
  }
}
