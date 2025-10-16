import { BaseController } from '@controllers/base-controller';
import { Request, Response } from 'express';
import { ICreateUserService } from '../services/create-user-service';

export class CreateUserController extends BaseController {
  private createUserService: ICreateUserService;

  constructor(createUserService: ICreateUserService) {
    super();
    this.createUserService = createUserService;
  }
  public async execute(req: Request, res: Response): Promise<Response> {
    const createdUser = await this.createUserService.execute(req.body);

    return res.status(201).json({ resource: createdUser, status: 201 });
  }
}
