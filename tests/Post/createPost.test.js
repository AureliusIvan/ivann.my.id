// create post test
import {describe} from 'vitest';
import {initTestServer} from '../test-utils/init-test-server';

// init server
describe('Post', () => {
  app = initTestServer();
  // before all tests

  it('should create a post', async () => {
    // create a post
    const post = await createPost({
      title: 'Hello world',
      content: 'This is a test post',
    });

    // check if post is created
    expect(post.title).toBe('Hello world');
    expect(post.content).toBe('This is a test post');
  });
})