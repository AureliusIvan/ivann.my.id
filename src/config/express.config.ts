// express service  init
import express, { Application, Router } from 'express';
const bodyParser = require('body-parser')
require('dotenv').config();


class ExpressApp {
  private app: Application;
  constructor(middleware: any[] = [], router: any = null) {
    this.app = express();
    this.initMiddleware(middleware);
    this.initRoutes(router);
  }
  public getApp(): Application {
    return this.app;
  }

  // map all middleware here
  public initMiddleware(middleware: any): void {
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));

    // for (const m of middleware) {
    //   this.app.use(m);
    // }
  }

  public setRouter(router: any): void {
    // default route

    this.app.get('/', (req: any, res: any) => {
      res.send('Hello World');
    });
    // map all routes here
    this.app.use('/api', router);
  }


  private initRoutes = (router: any) => {
    // const router = Router()
    this.app.use('/api', router)
    this.app.use('/storage', express.static('storage'));
  }
}

export { ExpressApp };