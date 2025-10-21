import express, { Router } from 'express';
import { getIpStackController } from '@ip-stack/factories/index';

export const ipStackRoutes: Router = express.Router();

ipStackRoutes.get('/', getIpStackController.execute.bind(getIpStackController));
