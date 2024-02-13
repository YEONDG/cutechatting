import {
  getLikePosts,
  getTotalLikePostsCount,
} from '@/apis/dashboard/dashboard';
import { TwMainCard } from '@/app/(platform)/twitch/_components/tw-main-card';
import { Skeleton } from '@/components/ui/skeleton';
import { TwitchPostWithLikesWithTags } from '@/types/types';

interface DashboardMainProps {
  userId: string;
  page: string;
}

export const DashboardMain = async ({ userId, page }: DashboardMainProps) => {
  const posts: TwitchPostWithLikesWithTags[] = await getLikePosts(userId);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4 md:gap-20'>
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
    </div>
  );
};

DashboardMain.Skeleton = function DashboardMainSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4 md:gap-20'>
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
      <Skeleton className='aspect-video h-[506px] w-[350px]' />
    </div>
  );
};
