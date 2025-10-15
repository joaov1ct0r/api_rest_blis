import { PrismaProvider } from '@src/utils/prisma-provider';
import { Users } from 'generated/prisma';

export interface ICreateUserRepository {
  execute(userDTO: CreateUserDTO): Promise<Users>;
}

export interface CreateUserDTO {
  name: string;
  birthdate: Date;
  email: string;
  password: string;
}

export class CreateUserRepository
  extends PrismaProvider
  implements ICreateUserRepository
{
  public async execute(userDTO: CreateUserDTO): Promise<Users> {
    const createdUser = await this.prisma.users.create({ data: userDTO });

    return createdUser;
  }
}
