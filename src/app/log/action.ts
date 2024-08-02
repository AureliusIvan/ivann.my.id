"use server"

import {promises as fs} from 'fs';
import {LRUCache} from 'lru-cache';

const cache = new LRUCache<string, { name: string, content: string }>({
  max: 100,
  ttl: 1000 * 60 * 24
});

const handleGetChangelog = async () => {
  const cacheKey = 'v1_0_0';

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const file = await fs.readFile(process.cwd() + '/../README.md', 'utf8');
  const date = await fs.stat(process.cwd() + '/../README.md');
  const result = {
    name: 'v1_0_0',
    content: file,
    date: date.mtime
  }

  cache.set(cacheKey, result);
  return result;
}

export {
  handleGetChangelog
}