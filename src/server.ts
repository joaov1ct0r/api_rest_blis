import express, { Express } from 'express';
import { env } from '@utils/env-config';
import cors from 'cors';
import helmet from 'helmet';
import { ErrorHandler } from '@middlewares/error-handler';
import { userRouter } from '@users/routes/user-routes';

const app: Express = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.HOST, credentials: true }));
app.use(helmet());

app.use('/users', userRouter);

app.use(ErrorHandler.execute);

export { app };
