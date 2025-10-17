import express, { Router } from 'express';
import { ZodValidation } from '@utils/zod-validation';
import { createAbilityController } from '@abilities/factories/index';

export const abilitiesRouter: Router = express.Router();

abilitiesRouter.post(
  '/',
  ZodValidation.createAbility,
  createAbilityController.execute.bind(createAbilityController),
);
