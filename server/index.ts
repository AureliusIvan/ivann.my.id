import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import 'module-alias/register';
import { log_error } from './src/utils/log_error';
import { connectDB } from './src/data/database.config';
import { initScheduledJobs } from './src/crons/cron';
import { cloudinary } from './src/config/cloudinary.config';
import compression from 'compression';
import { AppRouter } from './src/routes/routes';
// import { s3 } from './src/config/aws-s3.config';
// cors

// allow cross-origin requests from *

const bodyParser = require('body-parser')

const APP_NAME = process.env.PROJECT_NAME || 'Express';
const APP_PORT: string | number = process.env.PORT || 4000;

const app: Application = express();

// service
dotenv.config(); // load .env file
connectDB(); // connect to database
// initScheduledJobs(); // initialize scheduled jobs

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use('/storage', express.static('storage')); // serve static files


// console.log(cloudinary.config()); // debug

// (async () => {
//   console.log(
//     await s3.listBuckets().promise()
//   );
// })();


// use user router
app.get('/', (req: any, res: any) => {
  res.json({
    message: ` Hi! This is ${APP_NAME} project`,
  });
});

app.use('/api', AppRouter);


try {
  app.listen(APP_PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
  });
}
catch (err) {
  log_error(err);
}
