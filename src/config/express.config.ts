import express, {Application} from 'express';
import morgan from "morgan";

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