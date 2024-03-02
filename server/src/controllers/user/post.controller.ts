// post controller

import { Request, Response } from 'express';

import PostModel from '@src/data/models/post.model';
import { PostTypes } from '@src/types/post';
import { ResponseFormat } from '@src/helpers/helpers';
import { log_error } from '@src/utils/log_error';

// create class for post controller
class PostController {
  // create a post
  async createPost(request: Request, response: Response) {
    const blog = new PostModel(request.body);
    try {
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
      const posts = await PostModel.find();
      response.json(ResponseFormat(
        200,
        "Success",
        posts
      ));
    } catch (error: any) {
      response.json(
        { message: error.message }
      );
    }
  }

  async getPost(request: Request, response: Response) {
    try {
      const post = await PostModel.findById(request.params.id);
      throw new Error("Post not found");
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