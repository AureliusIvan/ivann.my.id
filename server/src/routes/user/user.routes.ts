// route /
import PostModel from '@src/data/models/post.model';
import express from 'express';
import { PostController } from '@src/controllers/user/post.controller';
import userPostRouter from '../post.routes';
import { contentRouter } from './content.routes';
import { geminiRouter } from './gemini.routes';

const userRouter = express.Router();

userRouter.use('/post', userPostRouter);
userRouter.use('/content', contentRouter);
userRouter.use('/gemini', geminiRouter);

export { userRouter };