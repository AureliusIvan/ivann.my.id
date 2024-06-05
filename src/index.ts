import dotenv from 'dotenv';
import {connectDB} from './data/mongo-database.config';
import compression from 'compression';
import {AppRouter} from './routes/routes';
import {ExpressApp} from './config/express.config';
import path from 'path';
import express from 'express';
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

dotenv.config({path: path.resolve(__dirname, '../.env')});
const APP_PORT: string | number = process.env.PORT || 4000;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

connectDB();
const Middleware = [
    express.json,
    compression,
    bodyParser.json,
    bodyParser.urlencoded
];

const app: express.Application = new ExpressApp(
    Middleware,
    AppRouter
).getApp();

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.listen(APP_PORT,
    () => {
        console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
    });
