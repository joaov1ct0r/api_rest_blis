import { findAbilityByIdRepository } from '@abilities/factories/index';
import { CreateUsersAbilitiesService } from '@users-abilities/services/create-users-abilities-service';
import { CreateUsersAbilitiesController } from '@users-abilities/controllers/create-users-abilities-controller';
import { CreateUsersAbilitiesRepository } from '@users-abilities/repositories/create-users-abilities-repository';

const createUsersAbilitiesRepository = new CreateUsersAbilitiesRepository();

const createUsersAbilitiesService = new CreateUsersAbilitiesService(
  findAbilityByIdRepository,
  createUsersAbilitiesRepository,
);

const createUsersAbilitiesController = new CreateUsersAbilitiesController(
  createUsersAbilitiesService,
);

export { createUsersAbilitiesController };
