// Cache Helper
import { Redis } from 'ioredis';
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
    const stringValue = JSON.stringify(value); // Stringify value for Redis
    // await this.redis.set(key, stringValue, options?.ttl ? 'EX' + options.ttl : undefined);
    await this.redis.set(key, stringValue, (err, res) => {
      // Handle error or response here
      if (err) {
        console.log('Redis error: ', err);
      }
    });
  }

  async delete(key: string): Promise<number> {
    return await this.redis.del(key);
  }
}


const cacheHelper = new CacheHelper(process.env.REDIS_URL || 'redis://localhost:6379')

export {
  cacheHelper
}