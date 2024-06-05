import express, {Application} from 'express';
import bodyParser from "body-parser";
import morgan from "morgan";
import {config as env} from "dotenv";

env();

class ExpressApp {
    private readonly app: Application;

    constructor(
        middleware: any[] = [],
        router: any = null) {
        this.app = express();
        this.initMiddleware(middleware);
        this.initRoutes(router);
    }

    public getApp(): Application {
        return this.app;
    }

    public initMiddleware(middleware: any): void {
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static('public'));
        this.app.use(morgan('dev'));
        middleware.forEach((m: any) => {
            this.app.use(m());
        });

    }

    private initRoutes = (router: any) => {
        this.app.use('/api', router)
        this.app.use('/storage', express.static('storage'));
    }
}

export {ExpressApp};