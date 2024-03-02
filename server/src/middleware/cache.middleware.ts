import * as redis from 'redis';
import express from 'express';
import { promisify } from 'util';

// Interface for redis client options
interface RedisClientOptions {
  host?: string;
  port?: number;
}

// Function to create redis client (configure connection details as needed)
// Function to create redis client (configure connection details as needed)
const createRedisClient = async (options: redis.RedisClientOptions = {}): Promise<any> => {
  const client = redis.createClient(options);
  await client.connect();
  return client;
};
// Interface for middleware options
interface RedisMiddlewareOptions {
  cacheTime?: number; // Cache expiry time in seconds (optional)
}

// Middleware function
const redisMiddleware = async (
  options: RedisMiddlewareOptions = {},
): Promise<any> => {
  const client = await createRedisClient();

  // Function to generate cache key based on request (customize based on your needs)
  const generateCacheKey = (req: express.Request): string => {
    return `cache:${req.method}:${req.originalUrl}`;
  };

  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const cacheKey = generateCacheKey(req);
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      // Send data from cache if found
      res.send(JSON.parse(cachedData));
    } else {
      // Call next middleware and cache response on completion
      next();
      if (res.statusCode === 200) {
        const dataToCache = JSON.stringify(res.locals.data); // Assuming data is stored in res.locals.data
        await client.set(cacheKey, dataToCache, 'EX', options.cacheTime || 60 * 60); // Cache for 1 hour (default)
      }
    }

    await client.quit();
  };
};

// export  {redisMiddleware};

// Customize connection options as needed
const redisOptions: any = {
  host: 'your-redis-host',
  port: 6379,
};

const cache = redisMiddleware(redisOptions); // Pass the options

export { cache };