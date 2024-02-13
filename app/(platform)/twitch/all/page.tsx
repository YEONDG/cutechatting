import React, { Suspense } from 'react';
import { TwAllMain } from './_components/tw-all-main';
import { TwAllHeader } from './_components/tw-all-header';

const TwitchAllPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams['page'] ?? '1';
  return (
    <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
      <TwAllHeader />
      <TwAllMain page={page} />
    </div>
  );
};

export default TwitchAllPage;
