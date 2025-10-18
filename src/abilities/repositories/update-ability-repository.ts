import { Abilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface IUpdateAbilityRepository {
  execute(active: boolean, id: string): Promise<Abilities>;
}

export class UpdateAbilityRepository
  extends PrismaProvider
  implements IUpdateAbilityRepository
{
  public async execute(active: boolean, id: string): Promise<Abilities> {
    const updatedAbility = await this.prisma.abilities.update({
      data: { active },
      where: { id },
    });

    return updatedAbility;
  }
}
