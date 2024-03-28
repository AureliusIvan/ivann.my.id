// init test server

import dotenv from 'dotenv';
import { connectDB } from '../../src/data/database.config';
import { initScheduledJobs } from './src/crons/cron';
import compression from 'compression';
import { AppRouter } from './src/routes/routes';
import { ExpressApp } from './src/config/express.config';
import { rabbitMQConnection } from './src/config/rabbitmq.config';
import { SocketIO } from './src/config/socket-io.config';

const bodyParser = require('body-parser')

const APP_PORT = process.env.PORT || 4000;

dotenv.config();

// start service
connectDB();
rabbitMQConnection.connect();
new SocketIO();

const Middleware = [
  compression(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];


const initTestServer = new ExpressApp(
  Middleware,
  AppRouter
).getApp();

initTestServer.listen(APP_PORT, () => {
  console.log(`[server]: Test server running at  http://localhost:${APP_PORT}`);
});

export { initTestServer };