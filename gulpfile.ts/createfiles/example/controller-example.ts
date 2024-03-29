// controller-example.ts
import { Request, Response } from 'express';

class ControllerExample {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}


export { ControllerExample }