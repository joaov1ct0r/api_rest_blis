import { Users } from 'generated/prisma';
import { PrismaProvider } from '@utils/prisma-provider';
import { ICreateUserDTO } from '@users/dtos/create-user-dto';

export interface ICreateUserRepository {
  execute(userDTO: ICreateUserDTO): Promise<Users>;
}

export class CreateUserRepository
  extends PrismaProvider
  implements ICreateUserRepository
{
  public async execute(userDTO: ICreateUserDTO): Promise<Users> {
    const createdUser = await this.prisma.users.create({ data: userDTO });

    return createdUser;
  }
}
