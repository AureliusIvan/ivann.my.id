import {connectDB} from '../mongo-database.config';
import {PostSeeder} from './post.seeder';

async function seeder() {
  console.log('Connecting to database...');
  // connect to the database
  await connectDB();
  // seed database
  console.log('Seeding database...');
  await PostSeeder();

  console.log('Database seeded successfully');
  process.exit(0);
}

seeder();
