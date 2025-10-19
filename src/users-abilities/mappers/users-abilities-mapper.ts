import { UsersAbilities } from 'generated/prisma';
import { UsersAbilitiesDTO } from '@users-abilities/dtos/users-abilities-dto';

export class UsersAbilitiesMapper {
  static execute(entity: UsersAbilities): UsersAbilitiesDTO {
    return new UsersAbilitiesDTO(entity);
  }
}
