// This is the parent routes from all the routes in the application. It is the entry point for all the routes in the application
import {Router} from 'express';
import {adminRouter} from './admin/admin.routes';
import {authRouter} from './auth.routes';
import {imageRouter} from './image.routes';
import {userPostRouter} from './post.route';
import {geminiRouter} from './user/gemini.routes';

const AppRouter: Router = Router();

// AppRouter.use('/auth', authRouter);
// AppRouter.use('/admin', adminRouter);
// AppRouter.use('/post', userPostRouter);
// AppRouter.use('/image', imageRouter);
// AppRouter.use('/gemini', geminiRouter);


export {AppRouter};