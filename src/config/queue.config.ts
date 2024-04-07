import { RedisQueueService } from '../services/redis-queue.service'

interface Queue {
  name: string
}

const QueueConfig: Queue[] = [
  {
    name: 'EmailQueue',
  },
]

// map each queue to a new instance of RedisQueueService
const queues = QueueConfig.map((queue: Queue) => {
  return new RedisQueueService(queue.name)
})

export { queues }