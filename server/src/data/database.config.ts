import { config } from '@src/config/config';
import { log_error } from '@src/utils/log_error';
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

// const db_host = config.mongo.default.uri as string || 'mongodb+srv://ivan:Ham11Bur11@cluster0.ygfroaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const db_host = 'mongodb+srv://ivan:Ham11Bur11@cluster0.ygfroaq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(db_host, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectDB() {
  try {
    // await mongoose.connect(db_host, {
    //   maxPoolSize: 10,
    // });
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