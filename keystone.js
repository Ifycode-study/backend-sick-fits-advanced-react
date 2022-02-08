import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/sick-fits-keystone';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should user stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
  }),
  ui: {
    // TODO: change this later once we add roles
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
