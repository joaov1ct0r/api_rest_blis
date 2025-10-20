import { findAbilityByIdRepository } from '@abilities/factories/index';
import { CreateUsersAbilitiesService } from '@users-abilities/services/create-users-abilities-service';
import { CreateUsersAbilitiesController } from '@users-abilities/controllers/create-users-abilities-controller';
import { CreateUsersAbilitiesRepository } from '@users-abilities/repositories/create-users-abilities-repository';
import { FindUsersAbilitiesByIdRepository } from '@users-abilities/repositories/find-users-abilities-by-id-repository';
import { DeleteUsersAbilitiesByIdRepository } from '@users-abilities/repositories/delete-users-abilities-by-id-repository';
import { DeleteUsersAbilitiesService } from '@users-abilities/services/delete-users-abilities-service';
import { DeleteUsersAbilitiesController } from '@users-abilities/controllers/delete-users-abilities-controller';
import { GetUsersAbilitiesByUserIdRepository } from '@users-abilities/repositories/get-users-abilities-by-user-id-repository';
import { GetUsersAbilitiesService } from '@users-abilities/services/get-users-abilities-service';
import { GetUsersAbilitiesController } from '@users-abilities/controllers/get-users-abilities-controller';

const createUsersAbilitiesRepository = new CreateUsersAbilitiesRepository();
const findUsersAbilitiesByIdRepository = new FindUsersAbilitiesByIdRepository();
const deleteUsersAbilitiesByIdRepository =
  new DeleteUsersAbilitiesByIdRepository();
const getUsersAbilitiesByUserIdRepository =
  new GetUsersAbilitiesByUserIdRepository();

const createUsersAbilitiesService = new CreateUsersAbilitiesService(
  findAbilityByIdRepository,
  createUsersAbilitiesRepository,
);
const deleteUsersAbilitiesService = new DeleteUsersAbilitiesService(
  findUsersAbilitiesByIdRepository,
  deleteUsersAbilitiesByIdRepository,
);
const getUsersAbilitiesService = new GetUsersAbilitiesService(
  getUsersAbilitiesByUserIdRepository,
);

const createUsersAbilitiesController = new CreateUsersAbilitiesController(
  createUsersAbilitiesService,
);
const deleteUsersAbilitiesController = new DeleteUsersAbilitiesController(
  deleteUsersAbilitiesService,
);
const getUsersAbilitiesController = new GetUsersAbilitiesController(
  getUsersAbilitiesService,
);

export {
  createUsersAbilitiesController,
  deleteUsersAbilitiesController,
  getUsersAbilitiesController,
};
