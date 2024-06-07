// user.routes.js
import express from 'express';

const adminRouter = express.Router();

// Define your user routes here
adminRouter.get('/test', (req: any, res: any) => {
  // Handle profile route logic
  res.json({message: 'Hello, Bro!'});
});

export {adminRouter};