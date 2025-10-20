import { Users } from 'generated/prisma';
import { IUserDTO, UserDTO } from '@users/dtos/user-dto';

export class UserMapper {
  static execute(entity: Users): IUserDTO {
    const userDTO = new UserDTO(entity);

    return userDTO;
  }
}
