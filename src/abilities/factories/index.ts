import { CreateAbilityService } from '@abilities/services/create-ability-service';
import { CreateAbilityController } from '@abilities/controllers/create-ability-controller';
import { CreateAbilityRepository } from '@abilities/repositories/create-ability-repository';
import { UpdateAbilityRepository } from '../repositories/update-ability-repository';
import { UpdateAbilityService } from '../services/update-ability-service';
import { UpdateAbilityController } from '../controllers/update-ability-controller';

const createAbilityRepository = new CreateAbilityRepository();

const createAbilityService = new CreateAbilityService(createAbilityRepository);

const createAbilityController = new CreateAbilityController(
  createAbilityService,
);

const updateAbilityRepository = new UpdateAbilityRepository();

const updateAbilityService = new UpdateAbilityService(updateAbilityRepository);

const updateAbilityController = new UpdateAbilityController(
  updateAbilityService,
);

export { createAbilityController, updateAbilityController };
