import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { getAuthSession } from '@/lib/auth';
import { getTotalPostsCount, getTwitchPosts } from '@/apis/twitch/post';

interface TwMainProps {
  page: string;
  popular: boolean;
}

export const dynamic = 'force-dynamic';
export const TwMain = async ({ page, popular }: TwMainProps) => {
  const session = await getAuthSession();
  const userId = session?.user.id;

  const postsCount = getTotalPostsCount();
  const postsData = getTwitchPosts(page, popular);

  const [totalPostsCount, posts] = await Promise.all([postsCount, postsData]);

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='grid h-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-0'>
        {posts?.map((post) => (
          <TwMainCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorId={post.userId}
            userId={userId}
            createdAt={post.createdAt}
            likes={post.likes}
            tags={post.tags}
            username={post.author.username}
            approved={post.approved}
            role={session?.user.role}
          />
        ))}
      </div>
      <div className='py-8'>
        <TwMainPagenation postsCount={totalPostsCount} url={'/twitch'} />
      </div>
    </div>
  );
};
