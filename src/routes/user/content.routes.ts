// content routes
import { Router } from "express";
import { ContentController } from "../../controllers/content.controller";
import { validateMiddleware } from '../../middleware/validate.middleware';
import { createContentSchema } from '../../validators/content.validator';

const contentRouter = Router();

contentRouter.post("/create", validateMiddleware(createContentSchema), new ContentController().createContent);
contentRouter.get("/get", new ContentController().getContents);
contentRouter.get("/get/:title", new ContentController().getContent);
contentRouter.delete("/delete", new ContentController().deleteContent);

export { contentRouter };