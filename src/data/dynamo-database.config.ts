import AWS from "aws-sdk";
import {config} from 'dotenv';

config();

async function connectDynamoDB() {
  // DynamoDB connection code
  const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION
  });
}