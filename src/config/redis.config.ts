// Redis config
import { Redis } from 'ioredis';
import dotenv from 'dotenv'
dotenv.config()

const REDIS_URL = process.env.CACHE_REDIS_HOST || 'redis://localhost:6379'
// const URL = 'redis://localhost:6379'

const redisService = new Redis(REDIS_URL);

export { redisService }