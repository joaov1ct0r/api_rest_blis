import { UsersAbilities } from 'generated/prisma';
import { UsersAbilitiesDTO } from '@users-abilities/dtos/users-abilities-dto';

export class UsersAbilitiesMapper {
  static toDTO(entity: UsersAbilities): UsersAbilitiesDTO {
    return new UsersAbilitiesDTO(entity);
  }
}
