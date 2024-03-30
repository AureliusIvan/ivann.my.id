// line.ts
import { Request, Response } from 'express';

class line {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}


export { line }
