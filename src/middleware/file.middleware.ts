import path from 'path';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv'
import {Request, Response, NextFunction} from 'express';
import fs from 'fs'
import {addSlashDirName, generateUniqueFilename} from '../helpers/naming.helper';
import {S3Config} from '../config/aws-s3.config';

dotenv.config()

const pathToStorage: string = path.join(__dirname, '/../storage/');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(pathToStorage));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploadToLocal = multer({
    storage: diskStorage
})

const uploadFileMiddlewareLocal = (fieldname: string) =>
    (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        uploadToLocal.array(fieldname, 5)(req, res, (err) => {
                if (err) {
                    return res.status(400).json({error: err.message});
                }
                next()
            }
        )
    }


const s3Storage = multerS3({
    s3: S3Config,
    acl: 'public-read',
    bucket: 'ivan-bucket',
    key: function (req, file, cb) {
        console.log(file);
        cb(null, addSlashDirName(generateUniqueFilename(file.originalname), "files")); //use Date.now() for unique file keys
    }
})


const upload = multer({
    storage: s3Storage
});


const uploadFileMiddlwareS3 = (fieldname: string) => (req: Request, res: Response, next: NextFunction) => {
    // anything with type file
    upload.array(fieldname, 5)(req, res, (err) => {
        if (err) {
            return res.status(400).json({error: err.message});
        }

        // Retrieve uploaded files
        const files: any = req.files;
        const errors: any[] = [];


        if (!files) {
            return res.status(400).json({
                message: 'Please upload a file',
            });
        }

        // Validate file types and sizes
        files.forEach((file: any) => {
            // log file
            const allowedTypes = ['image/jpeg', 'image/png', 'image/svg', 'image/webp'];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (!allowedTypes.includes(file.mimetype)) {
                errors.push(`Invalid file type: ${file.originalname}`);
            }

            if (file.size > maxSize) {
                errors.push(`File too large: ${file.originalname}`);
            }
        });

        // Handle validation errors
        if (errors.length > 0) {
            // Remove uploaded files
            files.forEach((file: any) => {
                fs.unlinkSync(file.path);
            });

            return res.status(400).json({errors});
        }

        // Attach files to the request object
        req.files = files;
        let locations;

        // IF file only one, don't put it on array
        if (files.length > 1) {
            locations = []
            for (const file of files) {
                locations.push(file.location); // Assuming 'location' is a property on the file object
            }
        } else {
            locations = files[0]?.location ?? ''
        }

        // req.body.files = locations
        // with fieldname
        req.body[fieldname] = locations;
        // Proceed to the next middleware or route handler
        next();
    });
}

interface OptionType {
    fieldname?: string,
    provider?: 's3' | 'local'
}

const uploadFileMiddleware = (option: OptionType) => (req: Request, res: Response, next: NextFunction) => {
    const {provider, fieldname} = option;
    if (provider === 's3') {
        return uploadFileMiddlwareS3(fieldname || 'files')(req, res, next)
    }

    // return uploadFileMiddlwareLocal(req, res, next)
    return uploadFileMiddlewareLocal(fieldname || 'files')(req, res, next)
}

export {
    uploadFileMiddlewareLocal,
    uploadFileMiddlwareS3,
    uploadFileMiddleware
};