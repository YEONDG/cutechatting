import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';
const TwitchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams['page'] ?? '1';
  const popular = searchParams['popular'] === 'true';
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <TwHeader />
      <TwMain page={page} popular={popular} />
    </div>
  );
};

export default TwitchPage;
