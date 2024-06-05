import {Request, Response} from 'express';

import PostModel from '../data/models/post.model';
import {ResponseFormat} from '../helpers/helpers';
import {log_error} from '../utils/log_error';
import {cacheHelper} from '../helpers/cache.helper';
import {ResponseTypes} from '../types/response';

class PostController {
    async createPost(request: Request, response: Response) {
        const blog = new PostModel(request.body);
        try {
            await cacheHelper.set('testing-key',
                'ini value redis')
            blog.slug = blog.title.toLowerCase().split(' ').join('-');
            await blog.save();
            response.json(blog);
        } catch (error: any) {
            response.json(
                {message: error.message}
            );
        }
    }

    async getPosts(request: Request, response: Response) {
        try {
            // const redisVal = await redisService.get('testing-key')
            // if (await cacheHelper.get('posts') !== null || await cacheHelper.get('posts') !== undefined) {
            //   const posts = await cacheHelper.get('posts');
            //   const res: ResponseTypes = {
            //     status: 200,
            //     message: "Success getting posts from cache",
            //     data: posts,
            //   }
            //   response.json(res);
            //   return;
            // }
            const posts = await PostModel.find();
            await cacheHelper.set('posts', posts, {ttl: 60});

            const res: ResponseTypes = {
                status: 200,
                message: "Success getting posts from database",
                // data: posts,
                data: posts
            }
            response.json(res);
        } catch (error: any) {
            response.json(
                {message: error.message}
            );
        }
    }

    async getPost(request: Request, response: Response) {
        try {
            const post = await PostModel.findOne({slug: request.params.slug});
            response.json(ResponseFormat(
                200,
                "Success",
                post
            ));
        } catch (error: any) {
            await log_error(error);
            response.json(
                {message: error.message}
            );
        }
    }

    // delete all posts
    async deletePosts(request: Request, response: Response) {
        try {
            await PostModel.deleteMany();
            response.json(
                {message: "All posts deleted"}
            );
        } catch (error: any) {
            response.json(
                {message: error.message}
            );
        }
    }

    async deleteAllPosts(request: Request, response: Response) {
        try {
            await PostModel.deleteMany();
            response.json(
                {message: "All posts deleted"}
            );
        } catch (error: any) {
            response.json(
                {message: error.message}
            );
        }
    }
}

export {PostController}