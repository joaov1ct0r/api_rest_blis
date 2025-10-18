import { Abilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { IUpdateAbilityDTO } from '@abilities/dtos/update-ability-dto';

export interface IUpdateAbilityRepository {
  execute(dto: IUpdateAbilityDTO, id: string): Promise<Abilities>;
}

export class UpdateAbilityRepository
  extends PrismaProvider
  implements IUpdateAbilityRepository
{
  public async execute(dto: IUpdateAbilityDTO, id: string): Promise<Abilities> {
    const updatedAbility = await this.prisma.abilities.update({
      data: dto,
      where: { id },
    });

    return updatedAbility;
  }
}
