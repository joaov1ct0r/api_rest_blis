import bcrypt from 'bcrypt';
import { IAuthDTO } from '@auth/dtos/auth-dto';
import { IUserDTO } from '@users/dtos/user-dto';
import { BaseService } from '@src/services/base-service';
import { UserMapper } from '@src/users/mappers/user-mapper';
import { IFindUserByEmailRepository } from '@users/repositories/find-user-by-email-repository';

export interface IAuthService {
  execute(authDTO: IAuthDTO): Promise<IUserDTO>;
}

export class AuthService extends BaseService implements IAuthService {
  private findUserByEmailRepository: IFindUserByEmailRepository;

  constructor(findUserByEmailRepository: IFindUserByEmailRepository) {
    super();
    this.findUserByEmailRepository = findUserByEmailRepository;
  }

  public async execute({ email, password }: IAuthDTO): Promise<IUserDTO> {
    const user = await this.findUserByEmailRepository.execute(email);

    const userWasntFound = user === null;

    if (userWasntFound) {
      throw this.badRequest('Usuário não encontrado!');
    }

    const isPasswordsMatching = bcrypt.compareSync(password, user.password);

    const passwordsIsntMatching = isPasswordsMatching === false;

    if (passwordsIsntMatching) {
      throw this.forbidden('Falha na autenticação!');
    }

    return UserMapper.execute(user);
  }
}
