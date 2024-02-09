import { TwHeader } from '@/app/(platform)/twitch/_components/tw-header';
import { TwMainCard } from '../../_components/tw-main-card';
import { getAuthSession } from '@/lib/auth';
import { getTagWithId } from '@/apis/twitch/post';

const TagIdPage = async ({ params }: { params: { id: string } }) => {
  const session = await getAuthSession();
  const userId = session?.user.id;
  const tag = await getTagWithId(params.id);

  return (
    <div className='flex flex-col justify-center items-center gap-5 mx-auto'>
      <TwHeader />
      <div className='flex flex-col justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-20 lg:px-0 h-full gap-4'>
          {tag?.map((post) => (
            <TwMainCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorId={post.userId}
              createdAt={post.createdAt}
              userId={userId}
              likes={post.likes}
              tags={post.tags}
              username={post.author.username}
              approved={post.approved}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagIdPage;
