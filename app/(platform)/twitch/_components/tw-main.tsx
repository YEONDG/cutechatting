import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { getAuthSession } from '@/lib/auth';
import type { TwitchPostWithLikesWithTags } from '@/types/types';

interface TwMainProps {
  page: string;
  popular: string;
}
const getTwitchPosts = async (page: string, popular: string) => {
  const response = await fetch(
    `http://localhost:3000/api/twitch?page=${page}&popular=${popular}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const getTotalPostsCount = async () => {
  const response = await fetch(`http://localhost:3000/api/twitch/postcount`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const TwMain = async ({ page, popular = 'false' }: TwMainProps) => {
  const session = await getAuthSession();
  const userId = session?.user.id;

  const totalPostsCount = await getTotalPostsCount();

  const posts: TwitchPostWithLikesWithTags[] = await getTwitchPosts(
    page,
    popular
  );

  return (
    <div className='flex flex-col justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-5 lg:px-0 h-full gap-4'>
        {posts?.map((post) => (
          <TwMainCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            userId={userId}
            createdAt={post.createdAt}
            likes={post.likes}
            tags={post.tags}
          />
        ))}
      </div>
      <div className='p-10'>
        <TwMainPagenation page={page} postsCount={totalPostsCount} />
      </div>
    </div>
  );
};
