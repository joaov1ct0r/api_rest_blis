import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { IUpdateAbilityService } from '@abilities/services/update-ability-service';

export class UpdateAbilityController extends BaseController {
  private updateAbilityService: IUpdateAbilityService;

  constructor(updateAbilityService: IUpdateAbilityService) {
    super();
    this.updateAbilityService = updateAbilityService;
  }

  public async execute(req: Request, res: Response) {
    await this.updateAbilityService.execute(req.body);

    return res.status(204).send();
  }
}
