import cors from 'cors';
import helmet from 'helmet';
import { env } from '@utils/env-config';
import express, { Express, NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@utils/swagger-config';
import { userRouter } from '@users/routes/user-routes';
import { abilitiesRouter } from '@abilities/routes/ability-routes';
import { ErrorHandler } from '@middlewares/error-handler';
import swaggerDocument from '../swagger.json';

const app: Express = express();

const errorHandler = new ErrorHandler();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.HOST, credentials: true }));
app.use(helmet());

app.use('/users', userRouter);
app.use('/abilities', abilitiesRouter);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerSpec),
);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  errorHandler.execute(error, req, res, next);
});

export { app };
