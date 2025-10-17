import { Abilities } from 'generated/prisma';
import { AbilityDTO } from '@abilities/dtos/ability-dto';

export class AbilityMapper {
  static execute({ id, name, active, createdAt, updatedAt }: Abilities) {
    const ability = new AbilityDTO({ id, name, active, createdAt, updatedAt });

    return ability;
  }
}
