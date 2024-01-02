import { db } from '@/lib/db';

export const getTotalPostsCount = async () => {
  try {
    const postsCount = await db.twitchPost.count();
    return postsCount;
  } catch (error) {
    console.error('Error while counting posts:', (error as Error).message);
    throw new Error('Failed to fetch total posts count.');
  }
};
