import express from 'express';
import { handler } from './build/handler.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
}
);

app.use(handler);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});