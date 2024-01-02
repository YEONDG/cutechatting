import { Tags } from 'lucide-react';
import React from 'react';

interface TagItemProps {
  name: string;
}

export const TagItem = ({ name }: TagItemProps) => {
  return (
    <div className='flex items-center border text-xl bg-slate-400 rounded-lg p-1 px-2'>
      <Tags className='h-6 w-6 mr-2' />
      {name}
    </div>
  );
};
