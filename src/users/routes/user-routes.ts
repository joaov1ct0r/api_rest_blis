import express, { type Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { createUserController } from '@users/singletons/index';

export const userRouter: Router = express.Router();

userRouter.post('/', ZodValidation.createUser, createUserController.execute);

userRouter.post('/login', () => {});

userRouter.post('/documents', () => {});
