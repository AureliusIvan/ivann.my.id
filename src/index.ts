import dotenv from 'dotenv';
import path from 'path';
import compression from 'compression';
import express from 'express';
import { AppRouter } from './routes/routes';
import { connectDB } from './data/mongo-database.config';
import { ExpressApp } from './config/express.config';

// Load environment variables from .env file
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const APP_PORT: string | number = process.env.PORT || 4000;

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log('Database connected successfully');

    // Create the express application
    const app: express.Application = new ExpressApp(
        [
          express.json(),
          compression()
        ],
        AppRouter
    ).getApp();
    // Start the server
    app.listen(APP_PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1); // Exit with failure
  }
};

// noinspection JSIgnoredPromiseFromCall
startServer();
