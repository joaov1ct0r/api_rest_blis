import { env } from '@utils/env-config';
import { app } from '@src/server';

const server = app.listen(env.PORT, () => {
  console.log(
    `Server ${env.NODE_ENV} running on http://${env.HOST}:${env.PORT}`,
  );
});

const onCloseSignal = () => {
  server.close(() => {
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
