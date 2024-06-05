import {createPostSchema} from '../validators/post.validator';
import {PostController} from '../controllers/post.controller';
import {uploadFileMiddleware} from '../middleware/file.middleware';
import {validateMiddleware} from '../middleware/validate.middleware';

import Router from "express";

const userPostRouter = Router()
const postController: PostController = new PostController()

// post routes
userPostRouter.post('/create',
    uploadFileMiddleware({
        fieldname: 'thumbnail',
        provider: 'local'
    }),
    validateMiddleware(createPostSchema),
    postController.createPost);

userPostRouter.get('/get',
    postController.getPosts);

userPostRouter.get('/get/:slug', postController.getPost);

userPostRouter.delete('/delete', postController.deletePosts);

userPostRouter.delete('/delete/all', postController.deleteAllPosts);

export {userPostRouter};