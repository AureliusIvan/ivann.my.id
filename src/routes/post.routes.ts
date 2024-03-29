import { PostController } from '../controllers/user/post.controller';
import { uploadFileMiddlware } from '../middleware/mullter.middleware';

// route /api/post
const Router = require('express');
const userPostRouter = Router()

// post routes
userPostRouter.post('/create',
  uploadFileMiddlware.single("thumbnail"),
  new PostController().createPost);
userPostRouter.get('/get', new PostController().getPosts);
userPostRouter.get('/get/:slug', new PostController().getPost);
userPostRouter.delete('/delete', new PostController().deletePosts);
export default userPostRouter;