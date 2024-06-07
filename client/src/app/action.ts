"use server"

import {promises as fs} from 'fs';
import path from 'path';
import matter from "gray-matter";
import {LRUCache} from 'lru-cache';

const cache = new LRUCache<string, {
  name: string,
  content: string
}>({
  max: 100,
  ttl: 1000 * 60 * 24
});

const getGithubData = async () => {
  const response = await fetch('https://api.github.com/users/AureliusIvan',
      {
        mode: 'cors',
        next: {
          revalidate: 3600 * 24
        }
      }
  );
  return response.json();
}


const getPostData = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const filenames = await fs.readdir(postsDirectory)
  return await Promise.all(filenames.map(async (filename) => {

        if (cache.has(filename)) {
          return cache.get(filename)
        }


        const filePath = path.join(postsDirectory, filename)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const {data, content} = matter(fileContent)
        const returnData = {
          name: filename.replace(/\.md$/, ''),
          content: content
        }
        cache.set(filename, returnData)
        return returnData
      }
  ))
}


export {
  getGithubData,
  getPostData
}