import { UsersAbilities } from 'generated/prisma';
import { UsersAbilitiesDTO } from '@users-abilities/dtos/users-abilities-dto';
import { UserMapper } from '@users/mappers/user-mapper';
import { AbilityMapper } from '@abilities/mappers/ability-mapper';
import {
  IUsersAbilitiesManyDTO,
  UsersAbilitiesManyDTO,
} from '@users-abilities/dtos/users-abilities-many-dto';

export class UsersAbilitiesMapper {
  static execute(entity: UsersAbilities): UsersAbilitiesDTO {
    return new UsersAbilitiesDTO(entity);
  }

  static manyExecute(entity: IUsersAbilitiesManyDTO): UsersAbilitiesManyDTO {
    const abilities = AbilityMapper.execute(entity.abilities);
    const user = UserMapper.execute({
      ...entity.user,
      password: '',
    });
    return new UsersAbilitiesManyDTO({ ...entity, abilities, user });
  }
}
