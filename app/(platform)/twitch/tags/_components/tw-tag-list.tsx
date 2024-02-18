import { getTwitchTagList } from '@/apis/twitch/post';
import { TagItem } from '@/components/tag-item';
import { TwitchTagWithPostsWithPostCount } from '@/types/types';

export const TwTagList = async () => {
  const tags: TwitchTagWithPostsWithPostCount[] = await getTwitchTagList();
  return (
    <div className='mt-10'>
      <div className='mx-2 flex flex-wrap gap-2 sm:gap-4'>
        {tags.map((tag) => (
          <TagItem
            key={tag.id}
            id={tag.id}
            name={tag.name}
            count={tag.postCount}
            size='lg'
          />
        ))}
      </div>
    </div>
  );
};
