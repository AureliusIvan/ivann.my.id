class ImageController {
    async uploadImage(req: any, res: any) {
        try {
            const {image} = req.body;
            // save image to database
            console.log(image);
            res.json({message: "Image uploaded"});
        } catch (error: any) {
            res.json({message: error.message});
        }
    }

    async getImages(req: any, res: any) {
        try {
            res.json({message: "Get all images"});
        } catch (error: any) {
            res.json({message: error.message});
        }
    }

    async getImage(req: any, res: any) {
        try {
            const {id} = req.params;
            res.json({message: `Get image with id ${id}`});
        } catch (error: any) {
            res.json({message: error.message});
        }
    }

    async deleteImage(req: any, res: any) {
        try {
            const {id} = req.params;
            res.json({message: `Delete image with id ${id}`});
        } catch (error: any) {
            res.json({message: error.message});
        }
    }
}

export {ImageController};