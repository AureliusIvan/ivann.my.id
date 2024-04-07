import jwt from 'jsonwebtoken';
import UserModel from '../data/models/content.model';
import { verifyToken } from '../services/auth.services';

require('dotenv').config();

const authenticateMiddleware = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }

  try {
    // const SECREY_KEY: string | any = process.env.SECRET_KEY;
    // const decodedToken: any = jwt.verify(token, SECREY_KEY);
    // const user = await UserModel.findById(decodedToken.userId);
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }
    // req.user = user;

    const is_token_exist = await verifyToken(token)
    if (!is_token_exist) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }
    next();
    return
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { authenticateMiddleware }