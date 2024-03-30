// line.ts
import { Router } from 'express';
import { lineController } from '../controllers/line.controller';

// const router = Router();
const lineRouter = Router();
const lineCtrl = new lineController();


export { lineRouter }
