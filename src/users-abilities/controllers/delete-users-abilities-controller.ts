import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { IDeleteUsersAbilitiesService } from '@users-abilities/services/delete-users-abilities-service';

export class DeleteUsersAbilitiesController extends BaseController {
  private deleteUsersAbilitiesService: IDeleteUsersAbilitiesService;

  constructor(deleteUsersAbilitiesService: IDeleteUsersAbilitiesService) {
    super();
    this.deleteUsersAbilitiesService = deleteUsersAbilitiesService;
  }

  public async execute(req: Request, res: Response) {
    await this.deleteUsersAbilitiesService.execute(req.body.ids, req.userId!);

    return res.status(204).send();
  }
}
