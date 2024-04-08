// Post Seeder
import mongoose from 'mongoose';
import PostModel from '../models/post.model';
import { faker } from '@faker-js/faker';

async function PostSeeder() {
  try {
    // Drop the collection
    await PostModel.collection.drop();

    // Create 10 posts
    for (let i = 0; i < 10; i++) {
      await PostModel.create({
        title: faker.lorem.words(),
        slug: faker.lorem.slug(),
        content: faker.lorem.paragraphs(),
        author: faker.lorem.word(),
        tags: [faker.lorem.word(), faker.lorem.word()],
        thumbnail: 'https://placehold.co/600x400',
        date: faker.date.recent(),
        _id: new mongoose.Types.ObjectId(),
      });

      console.log(`Post ${i + 1} created`);
    }

    console.log('Posts seeded successfully');

  } catch (err) {
    console.error(err);
  }
}

// Generate random author name
export { PostSeeder }