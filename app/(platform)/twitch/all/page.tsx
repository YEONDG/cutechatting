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
    <div className='mx-auto flex flex-col items-center justify-center gap-5'>
      <TwAllHeader />
      <TwAllMain page={page} />
    </div>
  );
};

export default TwitchAllPage;
