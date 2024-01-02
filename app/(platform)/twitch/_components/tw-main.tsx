import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { getAuthSession } from '@/lib/auth';
import { getTotalPostsCount } from '@/actions/actions';
import type { TwitchPostWithLikes } from '@/types/types';

interface TwMainProps {
  page: string;
}
const getTwitchPosts = async (page: string) => {
  const response = await fetch(`http://localhost:3000/api/twitch?page=${page}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const TwMain = async ({ page }: TwMainProps) => {
  const session = await getAuthSession();
  const userId = session?.user.id;

  const pageNumber = Number(page);

  const totalPostsCount = await getTotalPostsCount();

  const posts: TwitchPostWithLikes[] = await getTwitchPosts(page);
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
            likes={post.likes}
            userId={userId}
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
