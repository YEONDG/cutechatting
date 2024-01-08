import { TagItem } from '@/components/tag-item';
import { TwitchTagWithPostsWithPostCount } from '@/types/types';
import React from 'react';

const fetchTwitchTags = async () => {
  const response = await fetch('http://localhost:3000/api/twitch/tags');
  const data = await response.json();
  return data;
};

export const TwTagList = async () => {
  const tags: TwitchTagWithPostsWithPostCount[] = await fetchTwitchTags();
  return (
    <div className='mt-10'>
      <div className='flex gap-4'>
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
