'use client';
import { Tag } from '@prisma/client';
import { TagItem } from './tag-item';

interface TagDisplayProps {
  tags?: Tag[];
}

export const TagDisplay = ({ tags = [] }: TagDisplayProps) => {
  return (
    <div className='m-2 flex'>
      {tags.map((tag) => (
        <TagItem key={tag.id} id={tag.id} name={tag.name} />
      ))}
    </div>
  );
};
