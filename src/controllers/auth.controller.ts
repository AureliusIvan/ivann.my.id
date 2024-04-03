import UserModel from '../data/models/user.model';
import { ResponseFormat } from '../helpers/helpers';
import { ResponseErrorType, ResponseTypes } from '../types/response';
import { RegistrationTypes } from '../types/user';
import { log_error } from '../utils/log_error';
import { Request, Response, response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../services/auth.services';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body as RegistrationTypes;
      // validation
      const is_email_exists = await UserModel.findOne({
        email: email
      });
      if (is_email_exists) {
        const response: ResponseErrorType = {
          status: 400,
          message: "Email already exists"
        }
        res.statusCode = 400;
        res.json(response);
        return;
      }

      const is_username_exists = await UserModel.findOne({
        username: username
      });

      if (is_username_exists) {
        const response: ResponseErrorType = {
          status: 400,
          message: "Username already exists"
        }
        res.statusCode = 400;
        res.json(response);
        return;
      }

      const user = await UserModel.create({ username, email, password });
      const response: ResponseTypes = {
        status: 200,
        message: "User created successfully",
        data: user
      }
      res.json(response);
    }
    catch (error) {
      const response: ResponseErrorType = {
        status: 200,
        message: "Registration Error",
        error: error
      }
      res.statusCode = 400;
      res.json(response);
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({
        email: req.body.email
      });

      if (!user) {
        res.json(ResponseFormat(
          400,
          'User not found'
        ))
        return;
      }
      // compare password

      const is_password_valid = bcrypt.compare(req.body.password, user.password);
      if (!is_password_valid) {
        res.json(
          ResponseFormat(
            400,
            'Invalid password'
          )
        )
        return;
      }
      // generate jwt token
      const token = generateToken();
      user.token = token;
      await user.save();

      const response: ResponseTypes = {
        status: 200,
        message: 'Login successful',
        data: {
          token,
        }
      }
      res.json(response);
    }
    catch (error) {
      log_error(error);
    }
  }

  async logout(req: Request, res: Response) {
    res.json(ResponseFormat(
      200,
      'Logout successful'
    ))
  }
}

export { AuthController }