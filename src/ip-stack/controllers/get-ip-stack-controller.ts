import { Request, Response } from 'express';
import { BaseController } from '@src/controllers/base-controller';
import { IGetIpStackService } from '@ip-stack/services/get-ip-stack-service';

export class GetIpStackController extends BaseController {
  private getIpStackService: IGetIpStackService;

  constructor(getIpStackService: IGetIpStackService) {
    super();
    this.getIpStackService = getIpStackService;
  }

  public async execute(req: Request, res: Response) {
    const data = await this.getIpStackService.execute();

    return res.status(200).json({
      status: 200,
      resource: data,
      message: 'Dados obtidos com sucesso!',
    });
  }
}
