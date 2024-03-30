// This is test middleware, and the purpose of this middleware is to test the middleware function.
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;
const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (ENVIRONMENT === 'production') {
    next();
  }

  // Test Purpose
  console.log('<Test middleware>');
  console.log(req.body);
  console.log('<Test middleware>');
  next();
}



export { testMiddleware }