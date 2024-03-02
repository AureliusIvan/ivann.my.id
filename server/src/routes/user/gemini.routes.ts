// content routes
import { Router } from "express";
import { validateMiddleware } from '@src/middleware/validate.middleware';
import { createContentSchema } from '@src/validators/content.validator';
import { GeminiController } from '@src/controllers/gemini.controller';

const geminiRouter = Router();

geminiRouter.post("/chat", new GeminiController().message);

export { geminiRouter };