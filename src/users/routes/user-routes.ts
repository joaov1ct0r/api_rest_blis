import express, { type Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { authController } from '@auth/factories/index';
import { createUserController } from '@users/factories/index';

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

userRouter.post('/documents', () => {});
