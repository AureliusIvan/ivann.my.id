// content routes
import { Router } from "express";
import { ImageController } from '../controllers/image.controller';
import { uploadFileMiddlware } from '../middleware/mullter.middleware';
import { validateMiddleware } from '../middleware/validate.middleware';
import { createImageUploadSchema } from '../validators/image.validator';

const imageRouter = Router();

imageRouter.post("/upload",
  // validateMiddleware(createImageUploadSchema),
  uploadFileMiddlware.single("image"),
  new ImageController().uploadImage);
imageRouter.get("/get", new ImageController().getImages);
imageRouter.get("/get/:id", new ImageController().getImage);
imageRouter.delete("/delete/:id", new ImageController().deleteImage);


export { imageRouter };
