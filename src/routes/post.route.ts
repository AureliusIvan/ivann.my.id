import { createPostSchema } from '../validators/post.validator';
import { PostController } from '../controllers/user/post.controller';
import { uploadFileMiddleware } from '../middleware/file.middleware';
import { validateMiddleware } from '../middleware/validate.middleware';
import { testMiddleware } from '../middleware/test.middleware';

// route /api/post
const Router = require('express');
const userPostRouter = Router()
const postController = new PostController()

// post routes
userPostRouter.post('/create',
  // validateMiddleware(createPostSchema),
  uploadFileMiddleware({ fieldname: 'thumbnail', provider: 's3' }),
  testMiddleware,
  postController.createPost);

userPostRouter.get('/get', postController.getPosts);
userPostRouter.get('/get/:slug', postController.getPost);
userPostRouter.delete('/delete', postController.deletePosts);
export default userPostRouter;