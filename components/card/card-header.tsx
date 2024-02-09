'use client';
import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';

interface CardHeaderProps {
  id: number;
  title: string;
  username: string;
  createdDate: string;
  approved: boolean;
}

export const CardHeader = ({
  id,
  title,
  username,
  createdDate,
  approved,
}: CardHeaderProps) => {
  return (
    <header className='h-20'>
      <div className='flex items-center mx-4 mt-2 gap-2'>
        <BadgeCheck
          className={cn(`hidden`, { 'block text-green-500': approved })}
        />
        <h2 className='text-2xl font-bold'>{title}</h2>
      </div>
      <div className='flex justify-between mx-4 my-1 text-sm '>
        <div className='text-slate-500'>
          {createdDate} / {username}
        </div>
        <p className='text-sm'>{id}번</p>
      </div>
    </header>
  );
};
