import jwt, { Secret } from 'jsonwebtoken';
require('dotenv').config();

const secret: Secret = process.env.SALT as Secret;

const generateToken = () => {
  const token = jwt.sign({}, secret, { expiresIn: '1h' });
  return token;
}

export { generateToken };