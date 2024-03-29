import { config } from '../config/config';
import { log_error } from '../utils/log_error';
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

const db_host = 'mongodb://localhost:27017/express';

const client = new MongoClient(db_host, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectDB() {
  try {
    await mongoose.connect(db_host, {
      maxPoolSize: 10,
    });
    await client.connect();
    await client.db('admin').command({ ping: 1 }).then(() => {
      console.log('Connected to the database');
    }
    ).catch((error) => {
      console.error(error);
      log_error(error)
    });
  } catch (error) {
    console.error(error);
    log_error(error)
  }
}

export { connectDB };