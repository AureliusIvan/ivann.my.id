import UserModel from '../data/models/user.model';
import { RegistrationTypes } from '../types/user';
import { log_error } from '../utils/log_error';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken, getTokenData, saveToken, verifyToken } from '../services/auth.services';
import { handleError, handleInvalidCredentialsError, handleNotFoundError, handleSuccess } from '../helpers/response.helper';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body as RegistrationTypes;
      // validation
      const is_email_exists = await UserModel.findOne({
        email: email
      });
      if (is_email_exists) {
        return handleInvalidCredentialsError(res, 'Email already exists');
      }

      const is_username_exists = await UserModel.findOne({
        username: username
      });

      if (is_username_exists) {
        return handleInvalidCredentialsError(res, 'Username already exists');
      }

      const user = await UserModel.create({ username, email, password });
      return handleSuccess(res, 'User created successfully', user)
    }
    catch (error) {
      return handleError(res, 'Registration Error', error);
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        return handleNotFoundError(res, 'User not found');
      }

      const is_password_valid = bcrypt.compare(password, user.password);
      if (!is_password_valid) {
        return handleInvalidCredentialsError(res, 'Invalid credentials');
      }

      const token = generateToken();
      saveToken(user.id, token, new Date(Date.now() + 3600000));
      user.token = token;
      await user.save();

      const data = {
        token: token
      }
      return handleSuccess(res, 'Login successful', data)
    }
    catch (error) {
      log_error(error);
    }
  }

  async logout(req: Request, res: Response) {
    // delete token from db (later)
    return handleSuccess(res, 'Logout successful');
  }

  async me(req: Request, res: Response) {
    const token = req.headers.authorization;
    if (!token) {
      return handleInvalidCredentialsError(res, 'Invalid credentials');
    }
    const user_data = await getTokenData(token);
    if (!user_data) {
      return handleInvalidCredentialsError(res, 'Invalid credentials');
    }
    return handleSuccess(res, 'User found', user_data);
  }
}

export { AuthController }