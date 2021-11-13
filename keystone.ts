import { config } from '@keystone-next/keystone';
import { lists } from './schema';

export default config({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./app.db',
  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists,
});