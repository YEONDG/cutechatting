import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';

const TwitchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams['page'] ?? '1';
  return (
    <div className='flex flex-col h-full gap-5'>
      <TwHeader />
      <TwMain page={page} />
    </div>
  );
};

export default TwitchPage;
