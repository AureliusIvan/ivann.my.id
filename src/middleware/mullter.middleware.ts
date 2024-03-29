import path from 'path';
// import multer
import multer from 'multer';

// const pathToStorage = path.join(__dirname, '@src/storage');
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('src/../storage'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadFileMiddlware = multer({ storage: diskStorage });

export { uploadFileMiddlware };