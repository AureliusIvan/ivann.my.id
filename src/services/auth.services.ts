import jwt, { Secret } from 'jsonwebtoken';
import { redisService } from '../config/redis.config';
import { parseToken } from '../helpers/parse.helper';
require('dotenv').config();

const secret: Secret = process.env.SALT as Secret;

const generateToken = () => {
  const token = jwt.sign({}, secret, { expiresIn: '1h' });
  return token;
}


const saveToken = (
  user_id: string,
  token: string,
  expires: Date
) => {
  // save token to redis
  redisService.set(token, user_id, 'EX', expires.getTime());
}

const verifyToken = async (token: string) => {
  try {
    const is_exist = await redisService.get(token);
    if (is_exist !== null) {
      return true
    }
    return false
  } catch (error) {
    return false;
  }
}


// not working yet
const getTokenData = async (token: string) => {
  try {
    const parsed_token = parseToken(token);
    console.log('redis data: ', parsed_token);
    const data = await redisService.get(token);
    return data;
  } catch (error) {
    return null
  }
}

export { generateToken, saveToken, verifyToken, getTokenData };