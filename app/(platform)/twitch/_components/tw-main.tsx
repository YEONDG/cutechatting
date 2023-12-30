'use client';

import { TwMainPagenation } from './tw-main-pagination';
import { TwMainCard } from './tw-main-card';
import { TwitchPost } from '@prisma/client';

interface TwMainProps {
  data: TwitchPost[];
  start: number;
  end: number;
}

export const TwMain = ({ data, start, end }: TwMainProps) => {
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
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
        />
      </div>
    </div>
  );
};
