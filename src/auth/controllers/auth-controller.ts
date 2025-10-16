import { Request, Response } from 'express';
import { IAuthService } from '@auth/services/auth-service';
import { BaseController } from '@src/controllers/base-controller';
import { ICreateJWTTokenService } from '@auth/services/create-jwt-token-service';

export class AuthController extends BaseController {
  private authService: IAuthService;
  private createJwtTokenService: ICreateJWTTokenService;

  constructor(
    authService: IAuthService,
    createJwtTokenService: ICreateJWTTokenService,
  ) {
    super();
    this.authService = authService;
    this.createJwtTokenService = createJwtTokenService;
  }

  public async execute(req: Request, res: Response) {
    const user = await this.authService.execute(req.body);
    const { token } = this.createJwtTokenService.execute(user.id);

    res.setHeader('authorization', `Bearer ${token}`);

    return res.status(201).json({
      token,
      status: 201,
      resource: user,
      message: 'Autenticação realizada com sucesso!',
    });
  }
}
