import { instance } from '@ip-stack/api/api';
import { GetIpStackService } from '@ip-stack/services/get-ip-stack-service';
import { GetIpStackController } from '@ip-stack/controllers/get-ip-stack-controller';

const getIpStackService = new GetIpStackService(instance);

const getIpStackController = new GetIpStackController(getIpStackService);

export { getIpStackController };
