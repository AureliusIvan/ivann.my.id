import { AuthController } from '../controllers/auth.controller';
import { validateMiddleware } from '../middleware/validate.middleware';
import { registerSchema } from '../validators/auth.validator';

const Router = require('express');
const authRouter = Router()

authRouter.post('/register', validateMiddleware(registerSchema), new AuthController().register)
authRouter.post('/login', new AuthController().login)
authRouter.post('/logout', new AuthController().logout)

export { authRouter }