import React from 'react';
import { TwMainCard } from '../../_components/tw-main-card';
import { getAuthSession } from '@/lib/auth';
import { getTotalPostsCount, getTwitchPosts } from '../../_components/tw-main';
import { TwMainPagenation } from '../../_components/tw-main-pagination';

interface TwAllMainProps {
  page: string;
}

export const TwAllMain = async ({ page }: TwAllMainProps) => {
  const session = await getAuthSession();
  const userId = session?.user.id;

  const postsCount = getTotalPostsCount();
  const postsData = getTwitchPosts(page, false, false);

  const [totalPostsCount, posts] = await Promise.all([postsCount, postsData]);
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
            username={post.author.username}
            approved={post.approved}
          />
        ))}
      </div>
      <div className='p-10'>
        <TwMainPagenation postsCount={totalPostsCount} url={'/twitch/all'} />
      </div>
    </div>
  );
};
