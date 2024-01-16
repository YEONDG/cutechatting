import { TwMainCard } from '@/app/(platform)/twitch/_components/tw-main-card';
import { TwMainPagenation } from '@/app/(platform)/twitch/_components/tw-main-pagination';
import { TwitchPostWithLikesWithTags } from '@/types/types';

const getLikePosts = async (userId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/dashboard/posts/${userId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const getTotalLikePostsCount = async (userId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/dashboard/postcount/${userId}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

interface DashboardMainProps {
  userId: string;
  page: string;
}

const DashboardMain = async ({ userId, page }: DashboardMainProps) => {
  const posts: TwitchPostWithLikesWithTags[] = await getLikePosts(userId);

  const totalLikePostsCount = await getTotalLikePostsCount(userId);

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
        <TwMainPagenation page={page} postsCount={totalLikePostsCount} />
      </div>
      {totalLikePostsCount}
    </div>
  );
};

export default DashboardMain;
