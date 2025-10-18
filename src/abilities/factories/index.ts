import { CreateAbilityService } from '@abilities/services/create-ability-service';
import { CreateAbilityController } from '@abilities/controllers/create-ability-controller';
import { CreateAbilityRepository } from '@abilities/repositories/create-ability-repository';
import { UpdateAbilityRepository } from '@abilities/repositories/update-ability-repository';
import { UpdateAbilityService } from '@abilities/services/update-ability-service';
import { UpdateAbilityController } from '@abilities/controllers/update-ability-controller';
import { FindAbilityByIdRepository } from '@abilities/repositories/find-ability-by-id-repository';

const createAbilityRepository = new CreateAbilityRepository();
const updateAbilityRepository = new UpdateAbilityRepository();
const findAbilityByIdRepository = new FindAbilityByIdRepository();

const createAbilityService = new CreateAbilityService(createAbilityRepository);
const updateAbilityService = new UpdateAbilityService(updateAbilityRepository);

const createAbilityController = new CreateAbilityController(
  createAbilityService,
);
const updateAbilityController = new UpdateAbilityController(
  updateAbilityService,
);

export {
  createAbilityController,
  updateAbilityController,
  findAbilityByIdRepository,
};
