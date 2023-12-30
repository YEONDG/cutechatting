import React from 'react';
import { TwChatComponent } from './_components/tw-chat-component';
import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';
import { db } from '@/lib/db';
import { TwitchPost } from '@prisma/client';

const getData = async (page: number, per_page: number) => {
  const results = await db.twitchPost.findMany({
    skip: (page - 1) * per_page,
    take: per_page,
  });
  return results;
};

const TwitchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams, 'searchParams');
  const page = Number(searchParams['page']) ?? 1;
  const per_page = Number(searchParams['per_page']) ?? 6;

  const data: TwitchPost[] = await getData(page, per_page);

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  console.log(data);

  return (
    <div className='flex flex-col h-full gap-5'>
      <TwHeader />
      <TwMain data={data} start={start} end={end} />
    </div>
  );
};

export default TwitchPage;
