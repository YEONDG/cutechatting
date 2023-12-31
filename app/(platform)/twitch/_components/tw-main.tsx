import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { TwitchPost } from '@prisma/client';
import { db } from '@/lib/db';

interface TwMainProps {
  page: string;
}
const fetchTwitchPosts = async (page: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/twitch?page=${page}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error in getData:', (error as Error).message);
    throw error;
  }
};

const getTotalPostsCount = async () => {
  const postsCount = await db.twitchPost.count();

  return postsCount;
};

export const TwMain = async ({ page }: TwMainProps) => {
  const pageNumber = Number(page);

  const totalPostsCount = await getTotalPostsCount();

  const posts: TwitchPost[] = await fetchTwitchPosts(page);

  const startIdx = (pageNumber - 1) * 6;
  const endIdx = startIdx + 6;

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-wrap w-full h-full gap-4'>
        {posts?.map((post) => (
          <TwMainCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
      <div className='p-10'>
        <TwMainPagenation
          hasNextPage={endIdx < totalPostsCount}
          hasPrevPage={startIdx > 0}
          postsCount={totalPostsCount}
        />
      </div>
    </div>
  );
};
