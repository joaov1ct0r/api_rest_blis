import express, { Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { authorization } from '@middlewares/authorization';
import { createAbilityController } from '@abilities/factories/index';

export const abilitiesRouter: Router = express.Router();

abilitiesRouter.post(
  '/',
  authorization.execute,
  ZodValidation.createAbility,
  createAbilityController.execute.bind(createAbilityController),
);
