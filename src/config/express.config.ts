// express init
import express, { Application } from 'express';

class ExpressApp {
  private middleware: any[];
  private router: any;
  private app: Application;
  constructor(middleware: any[] = [], router: any = null) {
    this.app = express();
    this.middleware = middleware;
    this.initMiddleware();
    if (router) {
      this.setRouter(router);
    }
  }
  public getApp(): Application {
    return this.app;
  }

  // map all middleware here
  public initMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    for (const m of this.middleware) {
      this.app.use(m);
    }
  }

  public setRouter(router: any): void {
    // default route

    this.app.get('/', (req: any, res: any) => {
      res.send('Hello World');
    });
    // map all routes here
    this.app.use('/api', router);
  }

}

export { ExpressApp };