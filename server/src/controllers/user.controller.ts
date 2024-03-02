import { Request, Response } from 'express';
import UserModel from '@src/data/models/user.model';


class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const user = await UserModel.create({ username, email, password });
      res.json(user);
    }
    catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      res.json(users);
    }
    catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await UserModel.findById(req.params.id);
      res.json(user);
    }
    catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await UserModel.deleteMany();
      res.json({ message: "All users deleted" });
    }
    catch (error: any) {
      res.json({ message: error.message });
    }
  }
}