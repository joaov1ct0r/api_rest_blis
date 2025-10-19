import { findAbilityByIdRepository } from '@abilities/factories/index';
import { CreateUsersAbilitiesService } from '@users-abilities/services/create-users-abilities-service';
import { CreateUsersAbilitiesController } from '@users-abilities/controllers/create-users-abilities-controller';
import { CreateUsersAbilitiesRepository } from '@users-abilities/repositories/create-users-abilities-repository';
import { FindUsersAbilitiesByIdRepository } from '@users-abilities/repositories/find-users-abilities-by-id-repository';
import { DeleteUsersAbilitiesByIdRepository } from '@users-abilities/repositories/delete-users-abilities-by-id-repository';
import { DeleteUsersAbilitiesService } from '@users-abilities/services/delete-users-abilities-service';
import { DeleteUsersAbilitiesController } from '../controllers/delete-users-abilities-controller';

const createUsersAbilitiesRepository = new CreateUsersAbilitiesRepository();
const findUsersAbilitiesByIdRepository = new FindUsersAbilitiesByIdRepository();
const deleteUsersAbilitiesByIdRepository =
  new DeleteUsersAbilitiesByIdRepository();

const createUsersAbilitiesService = new CreateUsersAbilitiesService(
  findAbilityByIdRepository,
  createUsersAbilitiesRepository,
);

const deleteUsersAbilitiesService = new DeleteUsersAbilitiesService(
  findUsersAbilitiesByIdRepository,
  deleteUsersAbilitiesByIdRepository,
);

const createUsersAbilitiesController = new CreateUsersAbilitiesController(
  createUsersAbilitiesService,
);

const deleteUsersAbilitiesController = new DeleteUsersAbilitiesController(
  deleteUsersAbilitiesService,
);

export { createUsersAbilitiesController, deleteUsersAbilitiesController };
