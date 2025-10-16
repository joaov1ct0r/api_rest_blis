import { CreateUserController } from '@users/controllers/create-user-controller';
import { CreateUserService } from '@users/services/create-user-service';
import { CreateUserRepository } from '@users/repositories/create-user-repository';
import { FindUserByEmailRepository } from '@users/repositories/find-user-by-email-repository';

const findUserByEmailRepository = new FindUserByEmailRepository();
const createUserRepository = new CreateUserRepository();

const createUserService = new CreateUserService(
  findUserByEmailRepository,
  createUserRepository,
);

const createUserController = new CreateUserController(createUserService);

export { createUserController };
