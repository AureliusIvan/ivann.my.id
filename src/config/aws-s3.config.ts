import dotenv from 'dotenv'
const { S3Client } = require("@aws-sdk/client-s3");
dotenv.config()

const S3Config = new S3Client({
  region: "apac", // this is the region that you select in AWS account
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY, // store it in .env file to keep it safe
    secretAccessKey: process.env.R2_SECRET_KEY
  }
})

export { S3Config }