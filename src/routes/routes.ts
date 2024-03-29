// This is the parent routes from all the routes in the application. It is the entry point for all the routes in the application

import { Router } from 'express';
import { adminRouter } from './admin/admin.routes';
import { authRouter } from './auth.routes';
import { imageRouter } from './image.routes';
import userPostRouter from './post.routes';
import { geminiRouter } from './user/gemini.routes';

const AppRouter = Router();

AppRouter.get('/test', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

AppRouter.use('/', authRouter);
AppRouter.use('/admin', adminRouter);
// AppRouter.use('/user', userRouter);
AppRouter.use('/post', userPostRouter);
AppRouter.use('/image', imageRouter);
AppRouter.use('/gemini', geminiRouter);


export { AppRouter };