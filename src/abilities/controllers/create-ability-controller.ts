import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { ICreateAbilityService } from '@abilities/services/create-ability-service';

export class CreateAbilityController extends BaseController {
  private createAbilityService: ICreateAbilityService;

  constructor(createAbilityService: ICreateAbilityService) {
    super();
    this.createAbilityService = createAbilityService;
  }

  public async execute(req: Request, res: Response) {
    const createdAbility = await this.createAbilityService.execute(req.body);

    return res.status(201).json({
      status: 201,
      message: 'Habilidade criada com sucesso!',
      resource: createdAbility,
    });
  }
}
