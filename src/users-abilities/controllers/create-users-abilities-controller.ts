import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { ICreateUsersAbilitiesService } from '@users-abilities/services/create-users-abilities-service';

export class CreateUsersAbilitiesController extends BaseController {
  private createUsersAbilitiesService: ICreateUsersAbilitiesService;

  constructor(createUsersAbilitiesService: ICreateUsersAbilitiesService) {
    super();
    this.createUsersAbilitiesService = createUsersAbilitiesService;
  }

  public async execute(req: Request, res: Response) {
    const createdUsersAbilities =
      await this.createUsersAbilitiesService.execute(req.body);

    return res.status(201).json({
      status: 201,
      message: 'Habilidade adicionada ao usuário com sucesso!',
      resource: createdUsersAbilities,
    });
  }
}
