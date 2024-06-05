import {authenticateMiddleware} from '../middleware/auth.middleware';
import {AuthController} from '../controllers/auth.controller';
import {validateMiddleware} from '../middleware/validate.middleware';
import {loginSchema, registerSchema} from '../validators/auth.validator';
import Router from "express";

const authRouter = Router()

const authController = new AuthController()

authRouter.post('/register',
    validateMiddleware(registerSchema),
    authController.register)

authRouter.post('/login',
    validateMiddleware(loginSchema),
    authController.login
)

authRouter.get('/logout',
    authenticateMiddleware,
    authController.logout)


authRouter.get('/me',
    authenticateMiddleware,
    authController.me)

export {authRouter}