import express, { Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { authorization } from '@middlewares/authorization';
import {
  createAbilityController,
  updateAbilityController,
} from '@abilities/factories/index';

export const abilitiesRouter: Router = express.Router();

abilitiesRouter.post(
  '/',
  authorization.execute,
  ZodValidation.createAbility,
  createAbilityController.execute.bind(createAbilityController),
);

abilitiesRouter.put(
  '/',
  authorization.execute,
  ZodValidation.updateAbility,
  updateAbilityController.execute.bind(updateAbilityController),
);
