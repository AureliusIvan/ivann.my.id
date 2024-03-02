import { PostController } from '@src/controllers/user/post.controller';

// route /api/post
const Router = require('express');
const userPostRouter = Router()

// post routes
userPostRouter.post('/create', new PostController().createPost);
userPostRouter.get('/get', new PostController().getPosts);
userPostRouter.get('/get/:id', new PostController().getPost);
userPostRouter.delete('/delete', new PostController().deletePosts);
export default userPostRouter;