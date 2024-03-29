// post controller

import { Request, Response } from 'express';

import PostModel from '../../data/models/post.model';
import { PostTypes } from '../../types/post';
import { ResponseFormat } from '../../helpers/helpers';
import { log_error } from '../../utils/log_error';
import { cacheHelper } from '../../helpers/cache.helper';
import { ResponseTypes } from '../../types/response';

// create class for post controller
class PostController {
  // create a post
  async createPost(request: Request, response: Response) {
    // console.log(request);
    const blog = new PostModel(request.body);
    try {
      if (!request.file) {
        response.json(
          { message: "Please upload a file" }
        );
        return;
      }

      blog.slug = blog.title.toLowerCase().split(' ').join('-');
      blog.thumbnail = process.env.PROJECT_URL + "/" + request.file.path;
      await blog.save();
      response.json(blog);
    } catch (error: any) {
      response.json(
        { message: error.message }
      );
    }
  }

  async getPosts(request: Request, response: Response) {
    try {
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
      // await cacheHelper.set('posts', posts, { ttl: 60 });

      const res: ResponseTypes = {
        status: 200,
        message: "Success getting posts from database",
        data: posts,
      }
      response.json(res);
    } catch (error: any) {
      response.json(
        { message: error.message }
      );
    }
  }

  async getPost(request: Request, response: Response) {
    try {
      const post = await PostModel.findOne({ slug: request.params.slug });
      response.json(ResponseFormat(
        200,
        "Success",
        post
      ));
    } catch (error: any) {
      log_error(error);
      response.json(
        { message: error.message }
      );
    }
  }

  // delete all posts
  async deletePosts(request: Request, response: Response) {
    try {
      await PostModel.deleteMany();
      response.json(
        { message: "All posts deleted" }
      );
    } catch (error: any) {
      response.json(
        { message: error.message }
      );
    }
  }
}

export { PostController }