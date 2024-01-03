'use client';

import { Tags } from 'lucide-react';
import React from 'react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface TagItemProps {
  name: string;
  count?: number;
  size?: 'sm' | 'lg' | 'xl';
}

export const TagItem = ({ name, count, size }: TagItemProps) => {
  return (
    <Badge size={size ?? 'default'}>
      <Tags className='h-6 w-6 mr-2' />
      {name}
      {'  '}
      {count && <span className='ml-2'>{count}개</span>}
    </Badge>
  );
};
