import {log_error} from '../utils/log_error';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const PROJECT_NAME = process.env.PROJECT_NAME || 'express';
const MONGO_DB_HOST_URL = process.env.MONGO_DB_HOST_URL || `mongodb://mongo-${PROJECT_NAME}:27017`;

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGO_DB_HOST_URL, {
      maxPoolSize: 10,
    });
  } catch (error) {
    await log_error(error)
  }
}

export {connectDB};