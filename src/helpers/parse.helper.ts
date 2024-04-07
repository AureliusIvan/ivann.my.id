// parse token
import jwt from 'jsonwebtoken';

const parseToken = (token: string) => {
  return jwt.decode(token);
}

export { parseToken };