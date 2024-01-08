import { TwHeader } from '@/app/(platform)/twitch/_components/tw-header';
import { TwMainCard } from '../../_components/tw-main-card';
import { getAuthSession } from '@/lib/auth';

const fetchTagWithId = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/twitch/tags/${id}`);
  const data = await res.json();
  return data;
};

const TagIdPage = async ({ params }: { params: { id: string } }) => {
  const session = await getAuthSession();
  const userId = session?.user.id;
  const tag = await fetchTagWithId(params.id);
  console.log(tag);
  return (
    <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
      <TwHeader />
      <div className='bg-red-500'>{tag?.name}</div>
      <div className='flex flex-col justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-20 lg:px-0 h-full gap-4'>
          {tag?.map((post) => (
            <TwMainCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={userId}
              createdAt={post.createdAt}
              likes={post.likes}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagIdPage;
