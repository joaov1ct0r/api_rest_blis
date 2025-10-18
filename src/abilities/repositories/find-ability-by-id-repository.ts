import { Abilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface IFindAbilityByIdRepository {
  execute(id: string): Promise<Abilities | null>;
}

export class FindAbilityByIdRepository
  extends PrismaProvider
  implements IFindAbilityByIdRepository
{
  public async execute(id: string): Promise<Abilities | null> {
    const ability = await this.prisma.abilities.findUnique({ where: { id } });

    return ability;
  }
}
