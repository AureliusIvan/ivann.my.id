import {Redis} from 'ioredis';

interface CacheOptions {
  ttl?: number; // Time-to-live in seconds (optional)
}

class CacheHelper {
  private readonly redis: Redis;

  constructor(redisUrl: string) {
    this.redis = new Redis(redisUrl);
  }

  async get(key: string): Promise<any | null> {
    const value = await this.redis.get(key);
    if (value === null) {
      return null;
    }
    try {
      return JSON.parse(value); // Parse stored value if it's JSON-encoded
    } catch (error) {
      return value; // Return raw value if parsing fails
    }
  }

  async set(key: string, value: any, options?: CacheOptions): Promise<void> {
    const stringValue = JSON.stringify(value);
    await this.redis.set(key, stringValue, (err, res) => {
      if (err) {
        console.log('Redis error: ', err);
      }
    });
  }

  async delete(key: string): Promise<number> {
    return this.redis.del(key);
  }
}


const REDIS_HOSTNAME: string = `redis-${process.env.PROJECT_NAME}` || 'localhost'
const url: string = process.env.REDIS_URL || `redis://${REDIS_HOSTNAME}:6379`
const cacheHelper = new CacheHelper(url)

export {
  cacheHelper
}