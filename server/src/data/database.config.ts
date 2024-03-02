import { config } from '@src/config/config';
import { log_error } from '@src/utils/log_error';
import mongoose from 'mongoose';

const db_host = config.mongo.default.uri as string || 'mongodb://localhost:27017/express';
async function connectDB() {
  try {
    await mongoose.connect(db_host, {
      maxPoolSize: 10,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error(error);
    log_error(error)
  }
}

export { connectDB };