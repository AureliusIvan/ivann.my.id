import dotenv from 'dotenv';
import path from 'path';
import compression from 'compression';
// import morgan from "morgan";
import express from 'express';
import {AppRouter} from './routes/routes';
import {connectDB} from './data/mongo-database.config';
import {ExpressApp} from './config/express.config';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const APP_PORT: string | number = process.env.PORT || 4000;

connectDB().then(r => console.log(r)).catch(e => console.log(e));

const Middleware = [
  express.json,
  compression
];

const app: express.Application = new ExpressApp(
    Middleware,
    AppRouter
).getApp();

// app.use(morgan('dev'));

app.listen(APP_PORT,
    () => {
      console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
    }
);