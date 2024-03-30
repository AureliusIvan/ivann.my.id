// line.ts
import { Request, Response } from 'express';

class lineController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}

export { lineController }
