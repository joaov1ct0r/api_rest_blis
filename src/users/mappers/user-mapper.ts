import { Users } from 'generated/prisma';
import { IUserDTO, UserDTO } from '@users/dtos/user-dto';

export class UserMapper {
  static execute({
    id,
    name,
    birthdate,
    email,
    createdAt,
    updatedAt,
  }: Users): IUserDTO {
    const userDTO = new UserDTO({
      id,
      name,
      birthdate: birthdate.toISOString(),
      email,
      created_at: createdAt.toISOString(),
      updated_at: updatedAt.toISOString(),
    });

    return userDTO;
  }
}
