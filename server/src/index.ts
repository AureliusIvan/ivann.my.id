import dotenv from 'dotenv';
import 'module-alias/register';
import { log_error } from './utils/log_error';
import { connectDB } from './data/database.config';
import { initScheduledJobs } from './crons/cron';
import compression from 'compression';
import { AppRouter } from './routes/routes';
import { ExpressApp } from './config/express.config';
import { rabbitMQConnection } from './config/rabbitmq.config';
import { SocketIO } from './config/socket-io.config';
// import handler
// allow cross-origin requests from *

const bodyParser = require('body-parser')

const APP_NAME = process.env.PROJECT_NAME || 'Express';
const APP_PORT: string | number = process.env.PORT || 4000;


// const io = new Server(4001, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
// service
// dotenv.config(); // load .env file
// connectDB(); // connect to database
// initScheduledJobs(); // initialize scheduled jobs

// middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(compression());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'))
// app.use('/storage', express.static('storage')); // serve static files

dotenv.config();

// start service
initScheduledJobs();
connectDB();
// rabbitMQConnection.connect();
new SocketIO();

const Middleware = [
  compression(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];


const app = new ExpressApp(
  Middleware,
  AppRouter
).getApp();

app.listen(APP_PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${APP_PORT}`);
});

// listen to handle for sveltekit