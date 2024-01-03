import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';

const TwitchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams['page'] ?? '1';
  const popular = searchParams['popular'] ?? 'false';
  console.log(popular);
  return (
    <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
      <TwHeader />
      <TwMain page={page} popular={popular} />
    </div>
  );
};

export default TwitchPage;
