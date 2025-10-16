import dayjs from 'dayjs';
import bcrypt from 'bcrypt';
import { env } from '@utils/env-config';
import { IUserDTO } from '@users/dtos/user-dto';
import { BaseService } from '@services/base-service';
import { UserMapper } from '@users/mappers/user-mapper';
import { ICreateUserDTO } from '@users/dtos/create-user-dto';
import { IFindUserByEmailRepository } from '@users/repositories/find-user-by-email-repository';
import { ICreateUserRepository } from '@users/repositories/create-user-repository';

export interface ICreateUserService {
  execute(userDTO: ICreateUserDTO): Promise<IUserDTO>;
}

export class CreateUserService
  extends BaseService
  implements ICreateUserService
{
  private findUserByEmailRepository: IFindUserByEmailRepository;
  private createUserRepository: ICreateUserRepository;

  constructor(
    findUserByEmailRepository: IFindUserByEmailRepository,
    createUserRepository: ICreateUserRepository,
  ) {
    super();
    this.findUserByEmailRepository = findUserByEmailRepository;
    this.createUserRepository = createUserRepository;
  }

  public async execute(userDTO: ICreateUserDTO): Promise<IUserDTO> {
    const isEmailRegistered = await this.findUserByEmailRepository.execute(
      userDTO.email,
    );

    const emailIsNotAvailable = isEmailRegistered !== null;

    if (emailIsNotAvailable) {
      throw this.badRequest('Email não disponível!');
    }

    userDTO.birthdate = dayjs(userDTO.birthdate).toISOString();

    userDTO.password = bcrypt.hashSync(userDTO.password, env.HASH_SALT);

    const user = await this.createUserRepository.execute(userDTO);

    return UserMapper.execute(user);
  }
}
