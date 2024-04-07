import { log_error } from '../utils/log_error';
import mongoose from 'mongoose';

const MONGO_DB_HOST_URL = 'mongodb://localhost:27017/express' || process.env.MONGO_DB_HOST_URL;
async function connectDB() {
  try {
    await mongoose.connect(MONGO_DB_HOST_URL, {
      maxPoolSize: 10,
    });
    console.log('[database] Connected to the database (MongoDB) on port 27017');
  } catch (error) {
    log_error(error)
  }
}

export { connectDB };