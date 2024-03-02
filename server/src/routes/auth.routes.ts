import { AuthController } from '@src/controllers/auth.controller';
import { validateMiddleware } from '@src/middleware/validate.middleware';
import { registerSchema } from '@src/validators/auth.validator';

const Router = require('express');
const authRouter = Router()

authRouter.post('/register', validateMiddleware(registerSchema), new AuthController().register)
authRouter.post('/login', new AuthController().login)
authRouter.post('/logout', new AuthController().logout)

export { authRouter }