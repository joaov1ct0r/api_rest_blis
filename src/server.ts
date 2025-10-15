import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from '@middlewares/error-handler';
import { userRouter } from '@users/routes/user-routes';

const app: Express = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'localhost', credentials: true }));
app.use(helmet());

app.use('/users', userRouter);

app.use(errorHandler);

export { app };
