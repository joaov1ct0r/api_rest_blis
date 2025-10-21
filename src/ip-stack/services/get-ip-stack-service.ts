import { AxiosInstance } from 'axios';
import { env } from '@utils/env-config';
import { BaseService } from '@src/services/base-service';
import { IIpStackDTO } from '@ip-stack/dtos/ip-stack-dto';

export interface IGetIpStackService {
  execute(): Promise<IIpStackDTO>;
}

export class GetIpStackService
  extends BaseService
  implements IGetIpStackService
{
  private ipStackInstance: AxiosInstance;

  constructor(ipStackInstance: AxiosInstance) {
    super();
    this.ipStackInstance = ipStackInstance;
  }

  public async execute() {
    const response = await this.ipStackInstance.get(
      `/check?access_key=${env.IP_STACK_ACCESS_KEY}`,
    );

    return response.data;
  }
}
