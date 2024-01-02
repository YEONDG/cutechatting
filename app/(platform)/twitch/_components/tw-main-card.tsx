'use client';

import { useEffect, useState } from 'react';
import { ClipboardCopy } from 'lucide-react';
import { Heart } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';

import type { Like } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TwMainCardProps {
  id: number;
  title: string;
  content: string | null;
  likes?: Like[];
  userId?: string;
}

export const TwMainCard = ({
  id,
  title,
  content,
  likes = [],
  userId,
}: TwMainCardProps) => {
  const [copy, setCopy] = useState(false);
  const [isLiked, setIsLiked] = useState(
    likes.some((item) => item.userId === userId)
  );
  const [likeCount, setLikeCount] = useState(likes.length ?? 0);

  useEffect(() => {
    setIsLiked(likes.some((item) => item.userId === userId));
  }, [likes, userId]);

  const onCopySuccess = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const handleLikeClick = async (postId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/twitch/like/${postId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setIsLiked(data['isLiked']);
      setLikeCount(data['likeCount'].length);
      toast.success('좋아요 성공');
    } catch (error) {
      console.error('Error while processing like:', (error as Error).message);
      toast.error('좋아요 실패');
    }
  };

  return (
    <div className='flex flex-col justify-between border-2 text-xs max-w-80'>
      <div className='flex justify-between items-center pl-4'>
        <p className='text-xl'>{id}</p>
        <div className='text-xl'>{title}</div>
        <Button
          onClick={() => handleLikeClick(id)}
          variant='ghost'
          className={cn('flex items-center hover:bg-red-500', {
            'bg-red-500': isLiked,
          })}
        >
          {likeCount}
          <Heart className='w-6 h-6' />
          좋아요
        </Button>
      </div>
      <div className='flex gap-4'>
        <div>asdf1234</div>
        <div>23-12-28 11:09</div>
      </div>
      <p className='text-xs text-center'>{content}</p>
      <div className='py-1 text-md'>태그</div>
      <div className='flex items-center'>
        <CopyToClipboard text={content ?? ''} onCopy={onCopySuccess}>
          <Button variant='default' className='w-24 h-8'>
            <ClipboardCopy />
            Copy
          </Button>
        </CopyToClipboard>
        {copy && <div className='text-lg'>복사 완료</div>}
      </div>
    </div>
  );
};
