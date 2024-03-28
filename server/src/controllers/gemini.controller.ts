import { runChat } from '../services/gemini.services';
import dotenv from 'dotenv';

dotenv.config();

const END_POINT = process.env.GEMINI_JOKE_END_POINT;

class GeminiController {
  async message(req: any, res: any) {
    const { message } = req.body;
    try {
      const result = await runChat(message);
      res.json({ message: result });
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async joke(req: any, res: any) {
    try {
      if (!END_POINT) {
        throw new Error('Gemini joke end point not found');
      }
      const result = await fetch(END_POINT);
      const data = await result.json();
      res.json({ message: data.joke });
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
}

export { GeminiController };