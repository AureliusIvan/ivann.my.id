import jwt from 'jsonwebtoken';
import UserModel from 'models/content.model';


const authenticateMiddleware = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const SECREY_KEY: string | any = process.env.SECRET_KEY;
    const decodedToken: any = jwt.verify(token, SECREY_KEY);
    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export { authenticateMiddleware }