import cors from 'cors';
import helmet from 'helmet';
import { env } from '@utils/env-config';
import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@utils/swagger-config';
import { userRouter } from '@users/routes/user-routes';
import { ErrorHandler } from '@middlewares/error-handler';
import swaggerDocument from '../swagger.json';

const app: Express = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.HOST, credentials: true }));
app.use(helmet());

app.use('/users', userRouter);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerSpec),
);

app.use(ErrorHandler.execute);

export { app };
