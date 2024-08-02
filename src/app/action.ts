"use server"

import {promises as fs} from 'fs';
import path from 'path';
import matter from "gray-matter";
import {LRUCache} from 'lru-cache';
import {PostTypes} from "@/interface/post.interface";

const cache = new LRUCache<string, PostTypes>({
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
        const filePath = path.join(postsDirectory, filename)
        const _slug = filename
            .replace(/\.md$/, '')
            .replace(/\.mdx$/, '')

        if (cache.has(_slug) && process.env.PROJECT_ENV !== 'development') {
          return cache.get(_slug)
        }

        const fileContent = await fs.readFile(filePath, 'utf8')
        const {data, content} = matter(fileContent)
        const _title = _getFileAttributes(fileContent, '_title')
        const _description = _getFileAttributes(fileContent, '_description')
        const _content = _sanitize(content)
        const returnData: PostTypes = {
          title: _title,
          slug: _slug,
          description: _description,
          content: _content
        }
        cache.set(filename, returnData)
        return returnData
      }
  ))
}


const getPostDataBySlug = async (slug: string): Promise<PostTypes | null> => {
  try {
    if (cache.has(slug) && process.env.PROJECT_ENV !== 'development') {
      return cache.get(slug) as PostTypes
    }

    const filePath = path.join(process.cwd(), 'src/posts', `${slug}.md`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const {data, content} = matter(fileContent)

    const _content = content.replace(content.split('\n')[0], '')
    return {
      title: _clearFileName(slug),
      slug: slug,
      description: _getFileAttributes(fileContent, 'description'),
      content: _sanitize(_content)
    } as PostTypes
  } catch (e) {
    return null
  }
}


const getAllSlugs = async () => {
  const postsDirectory = process.cwd() + '/src/posts';
  const filenames = await fs.readdir(postsDirectory);
  return filenames.map(filename => {
    return filename.replace(/\.md$/, '');
  });
}

const _clearFileName = (filename: string) => {
  const cleanedFilename = filename
      .replace(/\.md$/, '')
      .replace(/\.mdx$/, '')
      .replace(/-/g, ' ');

  return cleanedFilename.charAt(0).toUpperCase() + cleanedFilename.slice(1);
}

const _getFileAttributes = (content: string, attr: string) => {
  // search for _attr: value in the content and return the value
  const regex = new RegExp(`^${attr}: (.*)`, 'gm');
  const match = regex.exec(content);
  if (match) {
    return match[1];
  }
  return "";
}

const _sanitize = (content: string) => {
  return content.replace(/^.*: .*\n/gm, '');
}

export {
  getGithubData,
  getPostData,
  getPostDataBySlug,
  getAllSlugs
}