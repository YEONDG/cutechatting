import {
  getLikePosts,
  getTotalLikePostsCount,
} from '@/apis/dashboard/dashboard';
import { TwMainCard } from '@/app/(platform)/twitch/_components/tw-main-card';
import { TwMainPagenation } from '@/app/(platform)/twitch/_components/tw-main-pagination';
import { TwitchPostWithLikesWithTags } from '@/types/types';

interface DashboardMainProps {
  userId: string;
  page: string;
}

export const DashboardMain = async ({ userId, page }: DashboardMainProps) => {
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
            authorId={post.userId}
            createdAt={post.createdAt}
            userId={userId}
            likes={post.likes}
            tags={post.tags}
            approved={post.approved}
          />
        ))}
      </div>
      <div className='p-10'>
        <TwMainPagenation postsCount={totalLikePostsCount} />
      </div>
      {totalLikePostsCount}
    </div>
  );
};
