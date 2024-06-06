// Redis config
import {Redis} from 'ioredis';
import dotenv from 'dotenv'

dotenv.config()

const REDIS_HOSTNAME = `redis-${process.env.PROJECT_NAME}` || 'localhost'
const url = process.env.REDIS_URL || `redis://${REDIS_HOSTNAME}:6379`


const redisService = new Redis(url);

export {redisService}