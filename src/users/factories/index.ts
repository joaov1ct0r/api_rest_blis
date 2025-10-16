import { CreateUserService } from '@users/services/create-user-service';
import { CreateUserController } from '@users/controllers/create-user-controller';
import { CreateUserRepository } from '@users/repositories/create-user-repository';
import { findUserByEmailRepository } from '@src/common/factories/repositories/index';

const createUserRepository = new CreateUserRepository();

const createUserService = new CreateUserService(
  findUserByEmailRepository,
  createUserRepository,
);

const createUserController = new CreateUserController(createUserService);

export { createUserController };
