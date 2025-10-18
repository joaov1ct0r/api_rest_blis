import express, { type Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { authController } from '@auth/factories/index';
import { createUserController } from '@users/factories/index';
import { createUserDocumentsController } from '@documents/factories/index';
import { upload } from '@utils/multer-config';
import { authorization } from '@middlewares/authorization';
import { createUsersAbilitiesController } from '@users-abilities/factories/index';

export const userRouter: Router = express.Router();

userRouter.post(
  '/',
  ZodValidation.createUser,
  createUserController.execute.bind(createUserController),
);

userRouter.post(
  '/login',
  ZodValidation.authUser,
  authController.execute.bind(authController),
);

userRouter.post(
  '/documents',
  authorization.execute,
  upload.single('document'),
  ZodValidation.createUserDocuments,
  createUserDocumentsController.execute.bind(createUserDocumentsController),
);

userRouter.post(
  '/abilities',
  authorization.execute,
  ZodValidation.createUsersAbilities,
  createUsersAbilitiesController.execute.bind(createUsersAbilitiesController),
);
