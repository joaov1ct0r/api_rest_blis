import { CreateUserDocumentsService } from '@documents/services/create-user-documents-service';
import { CreateUserDocumentsController } from '@documents/controllers/create-user-documents-controller';
import { CreateUserDocumentsRepository } from '@documents/repositories/create-user-documents-repository';

const createUserDocumentsRepository = new CreateUserDocumentsRepository();

const createUserDocumentsService = new CreateUserDocumentsService(
  createUserDocumentsRepository,
);

const createUserDocumentsController = new CreateUserDocumentsController(
  createUserDocumentsService,
);

export { createUserDocumentsController };
