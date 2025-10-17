import { CreateAbilityService } from '@abilities/services/create-ability-service';
import { CreateAbilityController } from '@abilities/controllers/create-ability-controller';
import { CreateAbilityRepository } from '@abilities/repositories/create-ability-repository';

const createAbilityRepository = new CreateAbilityRepository();

const createAbilityService = new CreateAbilityService(createAbilityRepository);

const createAbilityController = new CreateAbilityController(
  createAbilityService,
);

export { createAbilityController };
