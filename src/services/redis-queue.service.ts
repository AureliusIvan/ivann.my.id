// Redis Queue Service
import { redisService } from '../config/redis.config';
// import bull
const Queue = require('bull');
// import { Queue } from 'bull';


class RedisQueueService {
  private queue: typeof Queue;

  constructor(queueName: string) {
    this.queue = new Queue(queueName, {
      createClient: () => redisService,
    });
  }

  async addJob(jobData: any) {
    await this.queue.add(jobData);
  }

  async processJob(processor: (job: any) => void) {
    this.queue.process(processor);
  }
}

export { RedisQueueService };