// import cloudinary from 'cloudinary';
const cloudinary = require('cloudinary').v2;

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;

cloudinary.config({
  secure: true,
  cloud_name: cloud_name,
  api_key: api_key,
});

export { cloudinary };