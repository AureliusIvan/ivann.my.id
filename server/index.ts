import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import 'module-alias/register';
import { userRouter } from './src/routes/user/user.routes';
import { adminRouter } from './src/routes/admin/admin.routes';
import { authRouter } from './src/routes/auth.routes';
import { log_error } from './src/utils/log_error';
import { connectDB } from './src/data/database.config';
import { initScheduledJobs } from './src/crons/cron';
import { cloudinary } from './src/config/cloudinary.config';
import compression from 'compression';


const APP_NAME = process.env.PROJECT_NAME || 'Express';
const APP_PORT: string | number = process.env.PORT || 3000;

const app: Application = express();

// service
dotenv.config(); // load .env file
connectDB(); // connect to database
// initScheduledJobs(); // initialize scheduled jobs

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

console.log(cloudinary.config()); // debug


// use user router
app.get('/', (req: any, res: any) => {
  res.json({ message: ` This is ${APP_NAME} project` });
});
app.use('/api', userRouter);
app.use('/api', authRouter)
app.use('/api/auth', adminRouter);

try {
  app.listen(APP_PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
  });
}
catch (err) {
  log_error(err);
}
