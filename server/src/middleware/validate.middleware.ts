import { Request, Response, NextFunction } from "express";
import { object, string } from "yup";
import { ResponseErrorType } from "../types/response";
import { Schema } from 'yup';

const validateMiddleware = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err: any) {
    // only get the the error message
    const response: ResponseErrorType = {
      status: 400,
      message: "Validation Error",
      error: err.errors[0],
    };
    return res.status(400).json(response);
  }
};


export { validateMiddleware };