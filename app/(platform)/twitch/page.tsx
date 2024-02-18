import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';
const TwitchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams['page'] ?? '1';
  const popular = searchParams['popular'] === 'true';

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <TwHeader />
      <TwMain page={page} popular={popular} />
    </div>
  );
};

export default TwitchPage;
