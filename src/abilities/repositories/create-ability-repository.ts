import { Abilities } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';

export interface ICreateAbilityDTO {
  name: string;
}

export interface ICreateAbilityRepository {
  execute(dto: ICreateAbilityDTO): Promise<Abilities>;
}

export class CreateAbilityRepository
  extends PrismaProvider
  implements ICreateAbilityRepository
{
  public async execute(dto: ICreateAbilityDTO): Promise<Abilities> {
    const createdAbility = await this.prisma.abilities.create({ data: dto });

    return createdAbility;
  }
}
