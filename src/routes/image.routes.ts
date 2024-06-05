import {Router} from "express";
import {ImageController} from '../controllers/image.controller';
import {uploadFileMiddlewareLocal} from '../middleware/file.middleware';

const imageRouter: Router = Router();

imageRouter.post("/upload",
    uploadFileMiddlewareLocal,
    new ImageController().uploadImage);
imageRouter.get("/get", new ImageController().getImages);
imageRouter.get("/get/:id", new ImageController().getImage);
imageRouter.delete("/delete/:id", new ImageController().deleteImage);


export {imageRouter};
