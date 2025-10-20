import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { IGetUsersAbilitiesService } from '@users-abilities/services/get-users-abilities-service';

export class GetUsersAbilitiesController extends BaseController {
  private getUsersAbilitiesService: IGetUsersAbilitiesService;

  constructor(getUsersAbilitiesService: IGetUsersAbilitiesService) {
    super();
    this.getUsersAbilitiesService = getUsersAbilitiesService;
  }

  public async execute(req: Request, res: Response) {
    const { pageNumber, pageSize, skipAmount } = req.query;
    const user_id = req.userId;

    const usersAbilities = await this.getUsersAbilitiesService.execute({
      user_id: String(user_id),
      pageSize: Number(pageSize),
      skipAmount: Number(skipAmount),
      pageNumber: Number(pageNumber),
    });

    return res.status(200).json({
      message: 'Habilidades do usuário obtidas com sucesso!',
      status: 200,
      resource: usersAbilities,
    });
  }
}
