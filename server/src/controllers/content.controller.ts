// content controller

import { Request, Response } from "express";
import ContentModel from "@src/data/models/content.model";

class ContentController {
  async createContent(req: Request, res: Response) {
    try {
      const { title, content } = req.body;
      const newContent = await ContentModel.create({ title, content });
      res.json(newContent);
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getContents(req: Request, res: Response) {
    try {
      const content = await ContentModel.find().lean();
      res.json(content);
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async getContent(req: Request, res: Response) {
    try {
      const { title } = req.params;
      const content = await ContentModel
        .findOne({ title })
        .lean();
      if (!content) {
        res.status(404);
        res.json({ message: "Content not found" });
      }
      res.json(content);
    }
    catch (error: any) {
      res.json({ message: error.message });
    }
  }


  async deleteContent(req: Request, res: Response) {
    try {
      await ContentModel.deleteMany();
      res.json({ message: "All content deleted" });
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
}

export { ContentController };