// Response Helper
import { Response } from 'express';
import type { } from '../types/global';

const handleSuccess = (res: Response, message: string, data?: any) => {
  const response: ResponseType.StdResponseTypes = {
    status: 200,
    message: message || 'Success',
    data: data
  }
  res.json(response);
}


const handleError = (res: Response, message: string, error?: any) => {
  const response: ResponseType.StdResponseErrorTypes = {
    status: 400,
    message: message || 'Error',
    error: error
  }
  res.statusCode = 400;
  res.json(response);
}

const handleNotFoundError = (res: Response, message: string) => {
  const response: ResponseType.StdResponseErrorTypes = {
    status: 404,
    message: message || 'Not Found'
  }
  res.statusCode = 404;
  res.json(response);
}


const handleInvalidCredentialsError = (res: Response, message: string) => {
  const response: ResponseType.StdResponseErrorTypes = {
    status: 401,
    message: message || 'Invalid Credentials'
  }
  res.statusCode = 401;
  res.json(response);
}

export { handleSuccess, handleNotFoundError, handleInvalidCredentialsError, handleError }