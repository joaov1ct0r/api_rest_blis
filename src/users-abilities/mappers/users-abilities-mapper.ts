import { UsersAbilities } from 'generated/prisma';
import { UsersAbilitiesDTO } from '@users-abilities/dtos/users-abilities-dto';
import {
  IUsersAbilitiesManyDTO,
  UsersAbilitiesManyDTO,
} from '@users-abilities/dtos/users-abilities-many-dto';

export class UsersAbilitiesMapper {
  static execute(entity: UsersAbilities): UsersAbilitiesDTO {
    return new UsersAbilitiesDTO(entity);
  }

  static manyExecute(entity: IUsersAbilitiesManyDTO): UsersAbilitiesManyDTO {
    return new UsersAbilitiesManyDTO(entity);
  }
}
