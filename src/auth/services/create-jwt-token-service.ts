import jwt from 'jsonwebtoken';
import { env } from '@utils/env-config';
import { BaseService } from '@src/services/base-service';
import { ICreateJWTTokenDTO } from '@auth/dtos/create-jwt-token-dto';

export interface ICreateJWTTokenService {
  execute(userId: string): ICreateJWTTokenDTO;
}

export class CreateJWTTokenService
  extends BaseService
  implements ICreateJWTTokenService
{
  public execute(userId: string): ICreateJWTTokenDTO {
    const payload = { userId };

    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60, // expira em 1 hora
    });

    return { payload, token };
  }
}
