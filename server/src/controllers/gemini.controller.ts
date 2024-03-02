import { runChat } from '@src/services/gemini.services';

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
}

export { GeminiController };