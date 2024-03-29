// content routes
import { Router } from "express";
import { validateMiddleware } from '../../middleware/validate.middleware';
import { createContentSchema } from '../../validators/content.validator';
import { GeminiController } from '../../controllers/gemini.controller';

const geminiRouter = Router();
const geminiController = new GeminiController();

geminiRouter.post("/chat", geminiController.message);
geminiRouter.get("/joke", geminiController.joke);
export { geminiRouter };