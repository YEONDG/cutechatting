import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { TwitchPost } from '@prisma/client';
import { db } from '@/lib/db';

interface TwMainProps {
  page: string;
}
const getData = async (page: string) => {
  const data = await fetch(`http://localhost:3000/api/twitch?page=${page}`);
  const json = await data.json();
  return json;
};

const getTotalPosts = async () => {
  const postsCount = await db.twitchPost.count();

  return postsCount;
};

export const TwMain = async ({ page }: TwMainProps) => {
  const numPage = Number(page);

  const postsCount = await getTotalPosts();

  const data: TwitchPost[] = await getData(page);

  const start = (numPage - 1) * 6;
  const end = start + 6;
  console.log(end, 'end');

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-wrap w-full h-full gap-4'>
        {data?.map((entry) => (
          <TwMainCard
            key={entry.id}
            id={entry.id}
            title={entry.title}
            content={entry.content}
          />
        ))}
      </div>
      <div className='p-10'>
        <TwMainPagenation
          hasNextPage={end < postsCount}
          hasPrevPage={start > 0}
          postsCount={postsCount}
        />
      </div>
    </div>
  );
};
