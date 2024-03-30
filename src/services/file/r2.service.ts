// R2 Service is responsible for reading and writing files

// import { R2_ACCESS_KEY, R2_ACCOUNT_ID, R2_SECRET_KEY } from "$env/static/private";
import { S3Client, S3ClientConfig, PutObjectCommand } from "@aws-sdk/client-s3";
require('dotenv').config();

const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;

const R2: S3ClientConfig[] = [{
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY || '',
    secretAccessKey: R2_SECRET_KEY || '',
  },
}];

const R2Client = () => {
  // check if dotenv is loaded
  if (!R2_ACCESS_KEY || !R2_ACCOUNT_ID || !R2_SECRET_KEY) {
    throw new Error("R2 credentials not found");
  }
  console.log(R2);
}




// Upload a file to r2
const uploadFileR2 = async (file: any) => {
  // return file to str
  return 'test'
  const s3 = new S3Client(R2);
  const params = {
    Bucket: R2_BUCKET_NAME,
    Key: 'file.txt',
    Body: file,
  };
  try {
    const data = await s3.send(new PutObjectCommand(params));
    console.log('Success', data);
    return data;
  } catch (err) {
    console.log('Error', err);
    return err;
  }
};





export { R2 };